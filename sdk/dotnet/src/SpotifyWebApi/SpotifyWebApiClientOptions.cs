using System;
using System.Collections.Generic;
using SpotifyWebApi.Core.Authentication.OAuth2;
using SpotifyWebApi.Core.Authentication.OAuth2.AuthorizationCode;
using SpotifyWebApi.Core.Configuration;
using SpotifyWebApi.Core.Hooks;
using SpotifyWebApi.Servers;

namespace SpotifyWebApi;

public class SpotifyWebApiClientOptions
{
    public ServerEnvironment Environment { get; set; } = ServerEnvironment.Default();
    public RetryOptions Retry { get; set; } = RetryOptions.Default();
    public LoggingOptions Logging { get; set; } = new();
    public TimeProvider TimeProvider { get; set; } = TimeProvider.System;
    public ServerOptions Server { get; set; } = new();
    /// <summary>
    /// Maximum time to wait for the next frame of a streaming (SSE) response before the stream is
    /// torn down with a timeout. Bounds only the wait for the server between frames, never the
    /// caller's own processing time. Set to null to wait indefinitely.
    /// </summary>
    public TimeSpan? StreamReadTimeout { get; set; } = TimeSpan.FromSeconds(60);
    public IReadOnlyList<SdkHook> Hooks { get; set; } = [];
    /// <summary>
    /// Spotify supports OAuth 2.0 for authenticating all API requests.
    /// </summary>
    public OAuth2AuthorizationCodeCredentials? Oauth20 { get; set; }
    public IOAuth2RefreshableTokenStrategy<OAuth2AuthorizationCodeCredentials>? Oauth20TokenStrategy { get; set; }
}
