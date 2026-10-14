using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using SpotifyWebApi.Core;
using SpotifyWebApi.Core.Exceptions;
using SpotifyWebApi.Core.Models;
using SpotifyWebApi.Core.Request;
using SpotifyWebApi.Core.Response;
using SpotifyWebApi.Errors;
using SpotifyWebApi.Models;
using SpotifyWebApi.Requests.CategoriesApi;
using SpotifyWebApi.Requests.Playlists;

namespace SpotifyWebApi.Api;

public sealed class CategoriesApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal CategoriesApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get Category's Playlists
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PagingFeaturedPlaylistObject"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetACategoriesPlaylistsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a list of Spotify playlists tagged with a particular category.
    /// </remarks>
    public Task<PagingFeaturedPlaylistObject> GetACategoriesPlaylists(GetACategoriesPlaylistsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/browse/categories/{category_id}/playlists"),
            [new TemplateParam("category_id", request.CategoryId)],
            [new Param("limit", request.Limit), new Param("offset", request.Offset)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PagingFeaturedPlaylistObject>(),
            GetACategoriesPlaylistsError.Response,
            [_auth.Oauth20],
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Single Browse Category
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CategoryObject"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetACategoryError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a single category used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab).
    /// </remarks>
    public Task<CategoryObject> GetACategory(GetACategoryRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/browse/categories/{category_id}"),
            [new TemplateParam("category_id", request.CategoryId)],
            [new Param("locale", request.Locale)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CategoryObject>(),
            GetACategoryError.Response,
            [_auth.Oauth20],
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Several Browse Categories
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PagedCategories"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCategoriesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a list of categories used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab).
    /// </remarks>
    public Task<PagedCategories> GetCategories(GetCategoriesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/browse/categories"),
            [],
            [
                new Param("locale", request.Locale),
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PagedCategories>(),
            GetCategoriesError.Response,
            [_auth.Oauth20],
            requestOptions,
            cancellationToken);
}
