using System.Net.Http;
using SpotifyWebApi.Api;
using SpotifyWebApi.Core;
using SpotifyWebApi.Core.Logging;
using SpotifyWebApi.Core.Models;

namespace SpotifyWebApi;

/// <summary>
/// You can use Spotify's Web API to discover music and podcasts, manage your Spotify library, control audio playback, and much more. Browse our available Web API endpoints using the sidebar at left, or via the navigation bar on top of this page on smaller screens.
/// <para>
/// In order to make successful Web API requests your app will need a valid access token. One can be obtained through &lt;a href="https://developer.spotify.com/documentation/general/guides/authorization-guide/"&gt;OAuth 2.0&lt;/a&gt;.
/// </para>
/// <para>
/// The base URI for all Web API requests is <c>https://api.spotify.com/v1</c>.
/// </para>
/// <para>
/// Need help? See our &lt;a href="https://developer.spotify.com/documentation/web-api/"&gt;Web API&lt;/a&gt; for more information, or visit the &lt;a href="https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer"&gt;Spotify for Developers community forum&lt;/a&gt; to ask questions and connect with other developers.
/// </para>
/// </summary>
public sealed class SpotifyWebApiClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public SpotifyWebApiClient(HttpClient httpClient, SpotifyWebApiClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "SpotifyWebApiClient/2024.3.3 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "2024.3.3"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(options.Logging, "SpotifyWebApiClient", options.TimeProvider);
        var responseContexts = new ResponseContextFactory(options.TimeProvider, options.StreamReadTimeout);
        _rawClient =
            new RawClient(
                httpClient,
                urlFactory,
                httpStatusPolicy,
                headersFactory,
                resiliencePipelineFactory,
                httpLogger,
                options.Hooks,
                responseContexts);
        _auth = new AuthSchemes(options, _server, _rawClient, urlFactory);
    }

    public Albums Albums => field ??= new Albums(_rawClient, _server, _auth);

    public Artists Artists => field ??= new Artists(_rawClient, _server, _auth);

    public Audiobooks Audiobooks => field ??= new Audiobooks(_rawClient, _server, _auth);

    public CategoriesApi CategoriesApi => field ??= new CategoriesApi(_rawClient, _server, _auth);

    public Chapters Chapters => field ??= new Chapters(_rawClient, _server, _auth);

    public Episodes Episodes => field ??= new Episodes(_rawClient, _server, _auth);

    public Genres Genres => field ??= new Genres(_rawClient, _server, _auth);

    public Library Library => field ??= new Library(_rawClient, _server, _auth);

    public MarketsApi MarketsApi => field ??= new MarketsApi(_rawClient, _server, _auth);

    public Player Player => field ??= new Player(_rawClient, _server, _auth);

    public Playlists Playlists => field ??= new Playlists(_rawClient, _server, _auth);

    public Search Search => field ??= new Search(_rawClient, _server, _auth);

    public Shows Shows => field ??= new Shows(_rawClient, _server, _auth);

    public Tracks Tracks => field ??= new Tracks(_rawClient, _server, _auth);

    public Users Users => field ??= new Users(_rawClient, _server, _auth);
}
