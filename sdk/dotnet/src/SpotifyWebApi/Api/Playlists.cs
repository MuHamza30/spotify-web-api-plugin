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
using SpotifyWebApi.Requests.Playlists;
using SpotifyWebApi.Requests.Users;

namespace SpotifyWebApi.Api;

public sealed class Playlists
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Playlists(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Add Items to Playlist
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PlaylistSnapshotId"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AddTracksToPlaylistError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Add one or more items to a user's playlist.
    /// </remarks>
    public Task<PlaylistSnapshotId> AddTracksToPlaylist(AddTracksToPlaylistRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/playlists/{playlist_id}/tracks"),
            [new TemplateParam("playlist_id", request.PlaylistId)],
            [new Param("position", request.Position), new Param("uris", request.Uris)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PlaylistSnapshotId>(),
            AddTracksToPlaylistError.Response,
            [_auth.Oauth20],
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Change Playlist Details
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ChangePlaylistDetailsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Change a playlist's name and public/private state. (The user must, of
    /// course, own the playlist.)
    /// </remarks>
    public Task ChangePlaylistDetails(ChangePlaylistDetailsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/playlists/{playlist_id}"),
            [new TemplateParam("playlist_id", request.PlaylistId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            ChangePlaylistDetailsError.Response,
            [_auth.Oauth20],
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Check if Users Follow Playlist
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="bool"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CheckIfUserFollowsPlaylistError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Check to see if one or more Spotify users are following a specified playlist.
    /// </remarks>
    public Task<IReadOnlyList<bool>> CheckIfUserFollowsPlaylist(CheckIfUserFollowsPlaylistRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/playlists/{playlist_id}/followers/contains"),
            [new TemplateParam("playlist_id", request.PlaylistId)],
            [new Param("ids", request.Ids)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<bool>>(),
            CheckIfUserFollowsPlaylistError.Response,
            [_auth.Oauth20],
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create Playlist
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PlaylistObject"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreatePlaylistError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a playlist for a Spotify user. (The playlist will be empty until
    /// you <see href="https://developer.spotify.com/documentation/web-api/reference/add-tracks-to-playlist">add tracks</see>.)
    /// Each user is generally limited to a maximum of 11000 playlists.
    /// </remarks>
    public Task<PlaylistObject> CreatePlaylist(CreatePlaylistRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/users/{user_id}/playlists"),
            [new TemplateParam("user_id", request.UserId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PlaylistObject>(),
            CreatePlaylistError.Response,
            [_auth.Oauth20],
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Follow Playlist
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FollowPlaylistError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Add the current user as a follower of a playlist.
    /// </remarks>
    public Task FollowPlaylist(FollowPlaylistRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/playlists/{playlist_id}/followers"),
            [new TemplateParam("playlist_id", request.PlaylistId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            FollowPlaylistError.Response,
            [_auth.Oauth20],
            requestOptions,
            cancellationToken);

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
    /// Get Current User's Playlists
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PagingPlaylistObject"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAListOfCurrentUsersPlaylistsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a list of the playlists owned or followed by the current Spotify
    /// user.
    /// </remarks>
    public Task<PagingPlaylistObject> GetAListOfCurrentUsersPlaylists(GetAListOfCurrentUsersPlaylistsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/me/playlists"),
            [],
            [new Param("limit", request.Limit), new Param("offset", request.Offset)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PagingPlaylistObject>(),
            GetAListOfCurrentUsersPlaylistsError.Response,
            [_auth.Oauth20],
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Featured Playlists
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PagingFeaturedPlaylistObject"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetFeaturedPlaylistsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a list of Spotify featured playlists (shown, for example, on a Spotify player's 'Browse' tab).
    /// </remarks>
    public Task<PagingFeaturedPlaylistObject> GetFeaturedPlaylists(GetFeaturedPlaylistsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/browse/featured-playlists"),
            [],
            [
                new Param("locale", request.Locale),
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PagingFeaturedPlaylistObject>(),
            GetFeaturedPlaylistsError.Response,
            [_auth.Oauth20],
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get User's Playlists
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PagingPlaylistObject"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetListUsersPlaylistsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a list of the playlists owned or followed by a Spotify user.
    /// </remarks>
    public Task<PagingPlaylistObject> GetListUsersPlaylists(GetListUsersPlaylistsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/users/{user_id}/playlists"),
            [new TemplateParam("user_id", request.UserId)],
            [new Param("limit", request.Limit), new Param("offset", request.Offset)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PagingPlaylistObject>(),
            GetListUsersPlaylistsError.Response,
            [_auth.Oauth20],
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Playlist
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PlaylistObject"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetPlaylistError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a playlist owned by a Spotify user.
    /// </remarks>
    public Task<PlaylistObject> GetPlaylist(GetPlaylistRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/playlists/{playlist_id}"),
            [new TemplateParam("playlist_id", request.PlaylistId)],
            [
                new Param("market", request.Market),
                new Param("fields", request.Fields),
                new Param("additional_types", request.AdditionalTypes),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PlaylistObject>(),
            GetPlaylistError.Response,
            [_auth.Oauth20],
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Playlist Cover Image
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="ImageObject"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetPlaylistCoverError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get the current image associated with a specific playlist.
    /// </remarks>
    public Task<IReadOnlyList<ImageObject>> GetPlaylistCover(GetPlaylistCoverRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/playlists/{playlist_id}/images"),
            [new TemplateParam("playlist_id", request.PlaylistId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<ImageObject>>(),
            GetPlaylistCoverError.Response,
            [_auth.Oauth20],
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Playlist Items
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PagingPlaylistTrackObject"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetPlaylistsTracksError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get full details of the items of a playlist owned by a Spotify user.
    /// </remarks>
    public Task<PagingPlaylistTrackObject> GetPlaylistsTracks(GetPlaylistsTracksRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/playlists/{playlist_id}/tracks"),
            [new TemplateParam("playlist_id", request.PlaylistId)],
            [
                new Param("market", request.Market),
                new Param("fields", request.Fields),
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
                new Param("additional_types", request.AdditionalTypes),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PagingPlaylistTrackObject>(),
            GetPlaylistsTracksError.Response,
            [_auth.Oauth20],
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Remove Playlist Items
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PlaylistSnapshotId"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RemoveTracksPlaylistError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Remove one or more items from a user's playlist.
    /// </remarks>
    public Task<PlaylistSnapshotId> RemoveTracksPlaylist(RemoveTracksPlaylistRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/playlists/{playlist_id}/tracks"),
            [new TemplateParam("playlist_id", request.PlaylistId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PlaylistSnapshotId>(),
            RemoveTracksPlaylistError.Response,
            [_auth.Oauth20],
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Playlist Items
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PlaylistSnapshotId"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ReorderOrReplacePlaylistsTracksError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Either reorder or replace items in a playlist depending on the request's parameters.
    /// To reorder items, include <c>range_start</c>, <c>insert_before</c>, <c>range_length</c> and <c>snapshot_id</c> in the request's body.
    /// To replace items, include <c>uris</c> as either a query parameter or in the request's body.
    /// Replacing items in a playlist will overwrite its existing items. This operation can be used for replacing or clearing items in a playlist.
    /// &lt;br/&gt;
    /// <b>Note</b>: Replace and reorder are mutually exclusive operations which share the same endpoint, but have different parameters.
    /// These operations can't be applied together in a single request.
    /// </remarks>
    public Task<PlaylistSnapshotId> ReorderOrReplacePlaylistsTracks(ReorderOrReplacePlaylistsTracksRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/playlists/{playlist_id}/tracks"),
            [new TemplateParam("playlist_id", request.PlaylistId)],
            [new Param("uris", request.Uris)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PlaylistSnapshotId>(),
            ReorderOrReplacePlaylistsTracksError.Response,
            [_auth.Oauth20],
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Unfollow Playlist
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UnfollowPlaylistError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Remove the current user as a follower of a playlist.
    /// </remarks>
    public Task UnfollowPlaylist(UnfollowPlaylistRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/playlists/{playlist_id}/followers"),
            [new TemplateParam("playlist_id", request.PlaylistId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            UnfollowPlaylistError.Response,
            [_auth.Oauth20],
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Add Custom Playlist Cover Image
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UploadCustomPlaylistCoverError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Replace the image used to represent a specific playlist.
    /// </remarks>
    public Task UploadCustomPlaylistCover(UploadCustomPlaylistCoverRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/playlists/{playlist_id}/images"),
            [new TemplateParam("playlist_id", request.PlaylistId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            UploadCustomPlaylistCoverError.Response,
            [_auth.Oauth20],
            requestOptions,
            cancellationToken);
}
