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

public sealed class Users
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Users(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Check If User Follows Artists or Users
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="bool"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CheckCurrentUserFollowsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Check to see if the current user is following one or more artists or other Spotify users.
    /// </remarks>
    public Task<IReadOnlyList<bool>> CheckCurrentUserFollows(CheckCurrentUserFollowsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/me/following/contains"),
            [],
            [new Param("type", request.Type), new Param("ids", request.Ids)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<bool>>(),
            CheckCurrentUserFollowsError.Response,
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
    /// Follow Artists or Users
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FollowArtistsUsersError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Add the current user as a follower of one or more artists or other Spotify users.
    /// </remarks>
    public Task FollowArtistsUsers(FollowArtistsUsersRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/me/following"),
            [],
            [new Param("type", request.Type), new Param("ids", request.Ids)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            FollowArtistsUsersError.Response,
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
    /// Get Current User's Profile
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PrivateUserObject"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCurrentUsersProfileError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get detailed profile information about the current user (including the
    /// current user's username).
    /// </remarks>
    public Task<PrivateUserObject> GetCurrentUsersProfile(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/me"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PrivateUserObject>(),
            GetCurrentUsersProfileError.Response,
            [_auth.Oauth20],
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Followed Artists
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CursorPagedArtists"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetFollowedError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get the current user's followed artists.
    /// </remarks>
    public Task<CursorPagedArtists> GetFollowed(GetFollowedRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/me/following"),
            [],
            [new Param("type", request.Type), new Param("after", request.After), new Param("limit", request.Limit)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CursorPagedArtists>(),
            GetFollowedError.Response,
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
    /// Get User's Profile
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PublicUserObject"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetUsersProfileError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get public profile information about a Spotify user.
    /// </remarks>
    public Task<PublicUserObject> GetUsersProfile(GetUsersProfileRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/users/{user_id}"),
            [new TemplateParam("user_id", request.UserId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PublicUserObject>(),
            GetUsersProfileError.Response,
            [_auth.Oauth20],
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get User's Top Artists
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PagingArtistObject"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetUsersTopArtistsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get the current user's top artists based on calculated affinity.
    /// </remarks>
    public Task<PagingArtistObject> GetUsersTopArtists(GetUsersTopArtistsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/me/top/artists"),
            [],
            [
                new Param("time_range", request.TimeRange),
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PagingArtistObject>(),
            GetUsersTopArtistsError.Response,
            [_auth.Oauth20],
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get User's Top Tracks
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PagingTrackObject"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetUsersTopTracksError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get the current user's top tracks based on calculated affinity.
    /// </remarks>
    public Task<PagingTrackObject> GetUsersTopTracks(GetUsersTopTracksRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/me/top/tracks"),
            [],
            [
                new Param("time_range", request.TimeRange),
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PagingTrackObject>(),
            GetUsersTopTracksError.Response,
            [_auth.Oauth20],
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Unfollow Artists or Users
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UnfollowArtistsUsersError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Remove the current user as a follower of one or more artists or other Spotify users.
    /// </remarks>
    public Task UnfollowArtistsUsers(UnfollowArtistsUsersRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/me/following"),
            [],
            [new Param("type", request.Type), new Param("ids", request.Ids)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            UnfollowArtistsUsersError.Response,
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
}
