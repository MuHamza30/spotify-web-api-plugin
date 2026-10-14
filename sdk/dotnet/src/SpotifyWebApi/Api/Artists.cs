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
using SpotifyWebApi.Requests.Artists;
using SpotifyWebApi.Requests.Users;

namespace SpotifyWebApi.Api;

public sealed class Artists
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Artists(RawClient rawClient, Server server, AuthSchemes auth)
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
    /// Get Artist
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ArtistObject"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAnArtistError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get Spotify catalog information for a single artist identified by their unique Spotify ID.
    /// </remarks>
    public Task<ArtistObject> GetAnArtist(GetAnArtistRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/artists/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ArtistObject>(),
            GetAnArtistError.Response,
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
    /// Get Artist's Related Artists
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ManyArtists"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAnArtistsRelatedArtistsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get Spotify catalog information about artists similar to a given artist. Similarity is based on analysis of the Spotify community's listening history.
    /// </remarks>
    public Task<ManyArtists> GetAnArtistsRelatedArtists(GetAnArtistsRelatedArtistsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/artists/{id}/related-artists"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ManyArtists>(),
            GetAnArtistsRelatedArtistsError.Response,
            [_auth.Oauth20],
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Artist's Top Tracks
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ManyTracks"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAnArtistsTopTracksError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get Spotify catalog information about an artist's top tracks by country.
    /// </remarks>
    public Task<ManyTracks> GetAnArtistsTopTracks(GetAnArtistsTopTracksRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/artists/{id}/top-tracks"),
            [new TemplateParam("id", request.Id)],
            [new Param("market", request.Market)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ManyTracks>(),
            GetAnArtistsTopTracksError.Response,
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
    /// Get Several Artists
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ManyArtists"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetMultipleArtistsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get Spotify catalog information for several artists based on their Spotify IDs.
    /// </remarks>
    public Task<ManyArtists> GetMultipleArtists(GetMultipleArtistsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/artists"),
            [],
            [new Param("ids", request.Ids)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ManyArtists>(),
            GetMultipleArtistsError.Response,
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
