using SpotifyWebApi.Core;
using SpotifyWebApi.Core.Authentication;
using SpotifyWebApi.Core.Authentication.OAuth2;
using SpotifyWebApi.Core.Authentication.OAuth2.AuthorizationCode;

namespace SpotifyWebApi;

internal sealed class AuthSchemes
{
    public IAuthScheme Oauth20 { get; }

    public AuthSchemes(SpotifyWebApiClientOptions options, Server server, RawClient rawClient, UriFactory urlFactory)
    {
        Oauth20 =
            OAuth2RefreshableScheme<OAuth2AuthorizationCodeCredentials>.Create(
                options.Oauth20,
                options.Oauth20TokenStrategy ??
                    OAuth2AuthorizationCodeStrategy.ForBasicAuthRequest(
                        server.AuthServer("/authorize"),
                        server.AuthServer("/api/token"),
                        rawClient,
                        urlFactory),
                options.TimeProvider);
    }
}
