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

public sealed class Genres
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Genres(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get Available Genre Seeds
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ManyGenres"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRecommendationGenresError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a list of available genres seed parameter values for <see href="https://developer.spotify.com/documentation/web-api/reference/get-recommendations">recommendations</see>.
    /// </remarks>
    public Task<ManyGenres> GetRecommendationGenres(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/recommendations/available-genre-seeds"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ManyGenres>(),
            GetRecommendationGenresError.Response,
            [_auth.Oauth20],
            requestOptions,
            cancellationToken);
}
