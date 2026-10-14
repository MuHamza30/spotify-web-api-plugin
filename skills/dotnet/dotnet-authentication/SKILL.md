---
name: "dotnet-authentication"
description: "Load before wiring credentials into the Spotify Web API .NET SDK client in C#, or when a call comes back 401/403. Covers the OAuth 2.0 authorization-code grant: the credential each scheme takes, the SpotifyWebApiClientOptions property it goes on, and a startup check that fails fast on a missing secret."
---

# Authenticating the Spotify Web API .NET SDK client

This API authenticates with the OAuth 2.0 authorization-code grant. Each scheme is a **nullable credentials property** on `SpotifyWebApiClientOptions`; set the ones below, then construct the client (see `dotnet-client-initialization`).

| Scheme | Property on `SpotifyWebApiClientOptions` | Credential |
| --- | --- | --- |
| OAuth 2.0 authorization code | `Oauth20` | `OAuth2AuthorizationCodeCredentials` |

**That table is the entire authentication surface of this SDK.** `SpotifyWebApi.Core.Authentication` also holds scheme classes this API does not use, so read what is configurable off the properties above rather than off that folder.

## OAuth 2.0 — authorization code (3-legged, with PKCE)

**API Provider Notes:**

> Spotify supports OAuth 2.0 for authenticating all API requests.

```csharp
using SpotifyWebApi.Core.Authentication.OAuth2.AuthorizationCode;

options.Oauth20 = new OAuth2AuthorizationCodeCredentials
{
    ClientId = "...",
    ClientSecret = "...",
    RedirectUri = "https://app.example.com/callback",
    Scope = "...",                              // optional
    State = "...",                              // optional CSRF token
    Pkce = PkceMethod.S256,                     // default; RFC 7636
    PromptForAuthorizationCode = async (authorizationUrl, ct) =>
    {
        // Open/redirect the browser to authorizationUrl, then return the
        // authorization code your redirect endpoint received.
        return await GetCodeFromUserAsync(authorizationUrl, ct);
    }
};
```

The SDK sends the user to `https://accounts.spotify.com/authorize`, exchanges the returned code for a token at `https://accounts.spotify.com/api/token`, and refreshes it when it expires; if the refresh fails, it invokes `PromptForAuthorizationCode` again to re-authorize.

`PromptForAuthorizationCode` runs inside the call that needs a new token, so it must not make an SDK call that uses this scheme. It counts against the per-attempt `options.Retry.Timeout`, 100 s by default, and a timed-out attempt on a retryable call is retried and prompts again. A prompt that throws anything but `OperationCanceledException` fails the call with `AuthSchemeException`. `State` is sent as you set it and never checked, so your redirect handler must verify it.

⚠ **`ClientSecret` is required here — PKCE does not make it optional.** The code exchange sends the client id and secret as HTTP Basic credentials. Omit it and the call fails with an `AuthSchemeException` wrapping an `InvalidOperationException`:

- **PKCE disabled** (`Pkce = null`) — *before* `PromptForAuthorizationCode` runs.
- **PKCE enabled** (the default `S256`) — *after* the user has completed the browser round-trip.

## Token caching & refresh

- Tokens are cached in-memory, **per client instance**, and reused until **30s** before expiry.
- **This grant refreshes**: an expired access token is exchanged for a new one using the refresh token.
- On `401`, the cached token is invalidated and re-acquired on the next call — the failing request is **not** retried. For the authorization-code grant, invalidation drops the refresh token along with the access token, so "re-acquired" means the *full* grant runs again and `PromptForAuthorizationCode` fires: a `401` there is an interactive re-authorization, not a silent refresh. **Plan for that in a non-interactive host** — a background worker will block on a prompt nobody can answer.
- After a `401` clears the cache, a token fetch already in flight can still re-populate it, so the next call is not guaranteed a newly fetched token.

⚠ **If the token response omits `expires_in`, the SDK treats the token as never expiring**: it is cached for the client's lifetime and replaced only after a `401`, so a token revoked server-side keeps being sent until a request fails with it. For proactive rotation, supply your own token strategy (below) rather than trying to bound the cache.

### Supplying your own token source

The token strategy is a public extension point: `SpotifyWebApiClientOptions` has a strategy property beside each OAuth credentials property, and the built-in strategy applies only while you leave it null. The strategy is used only when the credentials property beside it is also set, and `GetToken` receives that object.

| Grant | Strategy property on `SpotifyWebApiClientOptions` | Type |
| --- | --- | --- |
| Authorization code | `Oauth20TokenStrategy` | `IOAuth2RefreshableTokenStrategy<OAuth2AuthorizationCodeCredentials>` |

```csharp
options.Oauth20 = new OAuth2AuthorizationCodeCredentials { /* its required members */ };
options.Oauth20TokenStrategy = new MyTokenStrategy();   // Task<OAuthTokenRefreshable> GetToken(creds, ct)
                                                        // Task<OAuthTokenRefreshable?> TryRefreshToken(creds, refreshToken, ct)
```

Reach for it when the token must come from somewhere other than the SDK's own call to the token endpoint — a shared cache across processes, a secrets broker, a sidecar that already holds a valid token, or a test double. The per-client in-memory cache above still wraps whatever you return.

## ⚠ Missing credentials must stop the app from starting

⚠ **Configure nothing and the request goes out unauthenticated — no exception.** An unset credentials property on `SpotifyWebApiClientOptions` sends the call with no credential, and it comes back `401`; the SDK never reports the missing credential. A required credential that is not configured is a deployment fault, not a request fault.

**Validate at startup and refuse to boot.** Bind the credentials into your own options type and make the host check it before the app serves anything:

```csharp
builder.Services
    .AddOptions<SpotifyWebApiClientSettings>()
    .Bind(builder.Configuration.GetSection("SpotifyWebApiClient"))
    .ValidateDataAnnotations()      // [Required] on each credential property
    .ValidateOnStart();             // throws during startup, not on first request
```

`ValidateOnStart()` is the load-bearing call — without it, `IOptions<T>` validation is lazy and fires on first resolution, which is a request, which is exactly the late failure you are trying to avoid. For a console app, an explicit guard is equally acceptable as long as it runs **before** the app is ready:

```csharp
if (string.IsNullOrWhiteSpace(settings.ClientId))
    throw new InvalidOperationException(
        "SpotifyWebApiClient:ClientId is not configured. Set it via environment variable, " +
        "user-secrets, or your secret store before starting the app.");
```

Three rules for the message it fails with:

- **Name the missing config key**, so the operator knows what to set — `"SpotifyWebApiClient:ClientId is not configured"`, not `"authentication failed"`.
- **Never echo the value**, present or absent — no length, no prefix, no masked form. A "configured: AC1234…" line is a secret in a log.
- **Do not fall back to a default, a placeholder, or an unauthenticated client.** Booting degraded hides the fault and pushes it to the first caller.

Check every value the schemes actually need. For this SDK that is:

| Value to validate | Feeds `SpotifyWebApiClientOptions` property |
| --- | --- |
| `ClientId` | `Oauth20` |
| `ClientSecret` | `Oauth20` |
| `RedirectUri` | `Oauth20` |

## Notes

- Set credentials **before** constructing the client, or inside the `AddSpotifyWebApiClient(options => ...)` callback when registering via DI. `SpotifyWebApiClientOptions` is read at construction; mutating it afterwards does not re-wire an existing client.
- Keep secrets out of source — load them from configuration (environment variables, a secret store, or any other `IConfiguration` source) instead of hardcoding, either inside the `AddSpotifyWebApiClient(options => ...)` callback for a host or via a `ConfigurationBuilder()...Build()` chain for a console app.

