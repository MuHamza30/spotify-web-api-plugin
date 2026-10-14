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
using SpotifyWebApi.Requests.Shows;

namespace SpotifyWebApi.Api;

public sealed class Shows
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Shows(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

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
    /// Get Show
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ShowObject"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAShowError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get Spotify catalog information for a single show identified by its
    /// unique Spotify ID.
    /// </remarks>
    public Task<ShowObject> GetAShow(GetAShowRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/shows/{id}"),
            [new TemplateParam("id", request.Id)],
            [new Param("market", request.Market)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ShowObject>(),
            GetAShowError.Response,
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
    /// Get Several Shows
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ManySimplifiedShows"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetMultipleShowsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get Spotify catalog information for several shows based on their Spotify IDs.
    /// </remarks>
    public Task<ManySimplifiedShows> GetMultipleShows(GetMultipleShowsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/shows"),
            [],
            [new Param("ids", request.Ids), new Param("market", request.Market)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ManySimplifiedShows>(),
            GetMultipleShowsError.Response,
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
}
