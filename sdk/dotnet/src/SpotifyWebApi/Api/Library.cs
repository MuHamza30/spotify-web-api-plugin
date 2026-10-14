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
using SpotifyWebApi.Requests.Audiobooks;
using SpotifyWebApi.Requests.Episodes;
using SpotifyWebApi.Requests.Playlists;
using SpotifyWebApi.Requests.Shows;
using SpotifyWebApi.Requests.Tracks;
using SpotifyWebApi.Requests.Users;

namespace SpotifyWebApi.Api;

public sealed class Library
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Library(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

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
    /// Check User's Saved Audiobooks
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="bool"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CheckUsersSavedAudiobooksError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Check if one or more audiobooks are already saved in the current Spotify user's library.
    /// </remarks>
    public Task<IReadOnlyList<bool>> CheckUsersSavedAudiobooks(CheckUsersSavedAudiobooksRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/me/audiobooks/contains"),
            [],
            [new Param("ids", request.Ids)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<bool>>(),
            CheckUsersSavedAudiobooksError.Response,
            [_auth.Oauth20],
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Check User's Saved Episodes
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="bool"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CheckUsersSavedEpisodesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Check if one or more episodes is already saved in the current Spotify user's 'Your Episodes' library.&lt;br/&gt;
    /// This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our <see href="https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer">developer community forum</see>..
    /// </remarks>
    public Task<IReadOnlyList<bool>> CheckUsersSavedEpisodes(CheckUsersSavedEpisodesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/me/episodes/contains"),
            [],
            [new Param("ids", request.Ids)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<bool>>(),
            CheckUsersSavedEpisodesError.Response,
            [_auth.Oauth20],
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Check User's Saved Shows
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="bool"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CheckUsersSavedShowsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Check if one or more shows is already saved in the current Spotify user's library.
    /// </remarks>
    public Task<IReadOnlyList<bool>> CheckUsersSavedShows(CheckUsersSavedShowsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/me/shows/contains"),
            [],
            [new Param("ids", request.Ids)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<bool>>(),
            CheckUsersSavedShowsError.Response,
            [_auth.Oauth20],
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Check User's Saved Tracks
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="bool"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CheckUsersSavedTracksError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Check if one or more tracks is already saved in the current Spotify user's 'Your Music' library.
    /// </remarks>
    public Task<IReadOnlyList<bool>> CheckUsersSavedTracks(CheckUsersSavedTracksRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/me/tracks/contains"),
            [],
            [new Param("ids", request.Ids)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<bool>>(),
            CheckUsersSavedTracksError.Response,
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
    /// Get User's Saved Audiobooks
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PagingSavedAudiobookObject"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetUsersSavedAudiobooksError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a list of the audiobooks saved in the current Spotify user's 'Your Music' library.
    /// </remarks>
    public Task<PagingSavedAudiobookObject> GetUsersSavedAudiobooks(GetUsersSavedAudiobooksRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/me/audiobooks"),
            [],
            [new Param("limit", request.Limit), new Param("offset", request.Offset)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PagingSavedAudiobookObject>(),
            GetUsersSavedAudiobooksError.Response,
            [_auth.Oauth20],
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get User's Saved Episodes
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PagingSavedEpisodeObject"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetUsersSavedEpisodesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a list of the episodes saved in the current Spotify user's library.&lt;br/&gt;
    /// This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our <see href="https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer">developer community forum</see>.
    /// </remarks>
    public Task<PagingSavedEpisodeObject> GetUsersSavedEpisodes(GetUsersSavedEpisodesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/me/episodes"),
            [],
            [
                new Param("market", request.Market),
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PagingSavedEpisodeObject>(),
            GetUsersSavedEpisodesError.Response,
            [_auth.Oauth20],
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get User's Saved Shows
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PagingSavedShowObject"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetUsersSavedShowsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a list of shows saved in the current Spotify user's library. Optional parameters can be used to limit the number of shows returned.
    /// </remarks>
    public Task<PagingSavedShowObject> GetUsersSavedShows(GetUsersSavedShowsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/me/shows"),
            [],
            [new Param("limit", request.Limit), new Param("offset", request.Offset)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PagingSavedShowObject>(),
            GetUsersSavedShowsError.Response,
            [_auth.Oauth20],
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get User's Saved Tracks
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PagingSavedTrackObject"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetUsersSavedTracksError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a list of the songs saved in the current Spotify user's 'Your Music' library.
    /// </remarks>
    public Task<PagingSavedTrackObject> GetUsersSavedTracks(GetUsersSavedTracksRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/me/tracks"),
            [],
            [
                new Param("market", request.Market),
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PagingSavedTrackObject>(),
            GetUsersSavedTracksError.Response,
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
    /// Remove User's Saved Audiobooks
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RemoveAudiobooksUserError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Remove one or more audiobooks from the Spotify user's library.
    /// </remarks>
    public Task RemoveAudiobooksUser(RemoveAudiobooksUserRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/me/audiobooks"),
            [],
            [new Param("ids", request.Ids)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            RemoveAudiobooksUserError.Response,
            [_auth.Oauth20],
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Remove User's Saved Episodes
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RemoveEpisodesUserError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Remove one or more episodes from the current user's library.&lt;br/&gt;
    /// This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our <see href="https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer">developer community forum</see>.
    /// </remarks>
    public Task RemoveEpisodesUser(RemoveEpisodesUserRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/me/episodes"),
            [],
            [new Param("ids", request.Ids)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            RemoveEpisodesUserError.Response,
            [_auth.Oauth20],
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Remove User's Saved Shows
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RemoveShowsUserError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete one or more shows from current Spotify user's library.
    /// </remarks>
    public Task RemoveShowsUser(RemoveShowsUserRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/me/shows"),
            [],
            [new Param("ids", request.Ids), new Param("market", request.Market)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            RemoveShowsUserError.Response,
            [_auth.Oauth20],
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Remove User's Saved Tracks
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RemoveTracksUserError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Remove one or more tracks from the current user's 'Your Music' library.
    /// </remarks>
    public Task RemoveTracksUser(RemoveTracksUserRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/me/tracks"),
            [],
            [new Param("ids", request.Ids)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            RemoveTracksUserError.Response,
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

    /// <summary>
    /// Save Audiobooks for Current User
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SaveAudiobooksUserError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Save one or more audiobooks to the current Spotify user's library.
    /// </remarks>
    public Task SaveAudiobooksUser(SaveAudiobooksUserRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/me/audiobooks"),
            [],
            [new Param("ids", request.Ids)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            EmptyBody.Instance,
            VoidResponse.Instance,
            SaveAudiobooksUserError.Response,
            [_auth.Oauth20],
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Save Episodes for Current User
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SaveEpisodesUserError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Save one or more episodes to the current user's library.&lt;br/&gt;
    /// This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our <see href="https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer">developer community forum</see>.
    /// </remarks>
    public Task SaveEpisodesUser(SaveEpisodesUserRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/me/episodes"),
            [],
            [new Param("ids", request.Ids)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            SaveEpisodesUserError.Response,
            [_auth.Oauth20],
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Save Shows for Current User
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SaveShowsUserError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Save one or more shows to current Spotify user's library.
    /// </remarks>
    public Task SaveShowsUser(SaveShowsUserRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/me/shows"),
            [],
            [new Param("ids", request.Ids)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            SaveShowsUserError.Response,
            [_auth.Oauth20],
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Save Tracks for Current User
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SaveTracksUserError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Save one or more tracks to the current user's 'Your Music' library.
    /// </remarks>
    public Task SaveTracksUser(SaveTracksUserRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/me/tracks"),
            [],
            [new Param("ids", request.Ids)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            SaveTracksUserError.Response,
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
}
