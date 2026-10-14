using System;
using System.Collections.Generic;
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
using SpotifyWebApi.Requests.Albums;
using SpotifyWebApi.Requests.Artists;

namespace SpotifyWebApi.Api;

public sealed class Albums
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Albums(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Check User's Saved Albums
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="bool"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CheckUsersSavedAlbumsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Check if one or more albums is already saved in the current Spotify user's 'Your Music' library.
    /// </remarks>
    public Task<IReadOnlyList<bool>> CheckUsersSavedAlbums(CheckUsersSavedAlbumsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/me/albums/contains"),
            [],
            [new Param("ids", request.Ids)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<bool>>(),
            CheckUsersSavedAlbumsError.Response,
            [_auth.Oauth20],
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Album
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AlbumObject"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAnAlbumError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get Spotify catalog information for a single album.
    /// </remarks>
    public Task<AlbumObject> GetAnAlbum(GetAnAlbumRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/albums/{id}"),
            [new TemplateParam("id", request.Id)],
            [new Param("market", request.Market)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AlbumObject>(),
            GetAnAlbumError.Response,
            [_auth.Oauth20],
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Album Tracks
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PagingSimplifiedTrackObject"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAnAlbumsTracksError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get Spotify catalog information about an album’s tracks.
    /// Optional parameters can be used to limit the number of tracks returned.
    /// </remarks>
    public Task<PagingSimplifiedTrackObject> GetAnAlbumsTracks(GetAnAlbumsTracksRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/albums/{id}/tracks"),
            [new TemplateParam("id", request.Id)],
            [
                new Param("market", request.Market),
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PagingSimplifiedTrackObject>(),
            GetAnAlbumsTracksError.Response,
            [_auth.Oauth20],
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Artist's Albums
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PagingArtistDiscographyAlbumObject"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAnArtistsAlbumsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get Spotify catalog information about an artist's albums.
    /// </remarks>
    public Task<PagingArtistDiscographyAlbumObject> GetAnArtistsAlbums(GetAnArtistsAlbumsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/artists/{id}/albums"),
            [new TemplateParam("id", request.Id)],
            [
                new Param("include_groups", request.IncludeGroups),
                new Param("market", request.Market),
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PagingArtistDiscographyAlbumObject>(),
            GetAnArtistsAlbumsError.Response,
            [_auth.Oauth20],
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Several Albums
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ManyAlbums"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetMultipleAlbumsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get Spotify catalog information for multiple albums identified by their Spotify IDs.
    /// </remarks>
    public Task<ManyAlbums> GetMultipleAlbums(GetMultipleAlbumsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/albums"),
            [],
            [new Param("ids", request.Ids), new Param("market", request.Market)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ManyAlbums>(),
            GetMultipleAlbumsError.Response,
            [_auth.Oauth20],
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get New Releases
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PagedAlbums"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetNewReleasesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a list of new album releases featured in Spotify (shown, for example, on a Spotify player’s “Browse” tab).
    /// </remarks>
    public Task<PagedAlbums> GetNewReleases(GetNewReleasesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/browse/new-releases"),
            [],
            [new Param("limit", request.Limit), new Param("offset", request.Offset)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PagedAlbums>(),
            GetNewReleasesError.Response,
            [_auth.Oauth20],
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get User's Saved Albums
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PagingSavedAlbumObject"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetUsersSavedAlbumsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a list of the albums saved in the current Spotify user's 'Your Music' library.
    /// </remarks>
    public Task<PagingSavedAlbumObject> GetUsersSavedAlbums(GetUsersSavedAlbumsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/me/albums"),
            [],
            [
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
                new Param("market", request.Market),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PagingSavedAlbumObject>(),
            GetUsersSavedAlbumsError.Response,
            [_auth.Oauth20],
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Remove Users' Saved Albums
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RemoveAlbumsUserError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Remove one or more albums from the current user's 'Your Music' library.
    /// </remarks>
    public Task RemoveAlbumsUser(RemoveAlbumsUserRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/me/albums"),
            [],
            [new Param("ids", request.Ids)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            RemoveAlbumsUserError.Response,
            [_auth.Oauth20],
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Save Albums for Current User
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SaveAlbumsUserError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Save one or more albums to the current user's 'Your Music' library.
    /// </remarks>
    public Task SaveAlbumsUser(SaveAlbumsUserRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/me/albums"),
            [],
            [new Param("ids", request.Ids)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            SaveAlbumsUserError.Response,
            [_auth.Oauth20],
            requestOptions,
            cancellationToken);
}
