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
using SpotifyWebApi.Requests.Episodes;
using SpotifyWebApi.Requests.Shows;

namespace SpotifyWebApi.Api;

public sealed class Episodes
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Episodes(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

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
    /// Get Show Episodes
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PagingSimplifiedEpisodeObject"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAShowsEpisodesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get Spotify catalog information about an show’s episodes. Optional parameters can be used to limit the number of episodes returned.
    /// </remarks>
    public Task<PagingSimplifiedEpisodeObject> GetAShowsEpisodes(GetAShowsEpisodesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/shows/{id}/episodes"),
            [new TemplateParam("id", request.Id)],
            [
                new Param("market", request.Market),
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PagingSimplifiedEpisodeObject>(),
            GetAShowsEpisodesError.Response,
            [_auth.Oauth20],
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Episode
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="EpisodeObject"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAnEpisodeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get Spotify catalog information for a single episode identified by its
    /// unique Spotify ID.
    /// </remarks>
    public Task<EpisodeObject> GetAnEpisode(GetAnEpisodeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/episodes/{id}"),
            [new TemplateParam("id", request.Id)],
            [new Param("market", request.Market)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<EpisodeObject>(),
            GetAnEpisodeError.Response,
            [_auth.Oauth20],
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Several Episodes
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ManyEpisodes"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetMultipleEpisodesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get Spotify catalog information for several episodes based on their Spotify IDs.
    /// </remarks>
    public Task<ManyEpisodes> GetMultipleEpisodes(GetMultipleEpisodesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/episodes"),
            [],
            [new Param("ids", request.Ids), new Param("market", request.Market)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ManyEpisodes>(),
            GetMultipleEpisodesError.Response,
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
}
