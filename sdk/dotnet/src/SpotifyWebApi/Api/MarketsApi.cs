using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using SpotifyWebApi.Core;
using SpotifyWebApi.Core.Exceptions;
using SpotifyWebApi.Core.Request;
using SpotifyWebApi.Core.Response;
using SpotifyWebApi.Errors;
using SpotifyWebApi.Models;

namespace SpotifyWebApi.Api;

public sealed class MarketsApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal MarketsApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get Available Markets
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Markets"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAvailableMarketsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get the list of markets where Spotify is available.
    /// </remarks>
    public Task<Markets> GetAvailableMarkets(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/markets"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Markets>(),
            GetAvailableMarketsError.Response,
            [_auth.Oauth20],
            requestOptions,
            cancellationToken);
}
