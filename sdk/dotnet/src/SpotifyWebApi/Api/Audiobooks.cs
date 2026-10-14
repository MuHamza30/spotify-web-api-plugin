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
using SpotifyWebApi.Requests.Audiobooks;

namespace SpotifyWebApi.Api;

public sealed class Audiobooks
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Audiobooks(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

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
    /// Get an Audiobook
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AudiobookObject"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAnAudiobookError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get Spotify catalog information for a single audiobook. Audiobooks are only available within the US, UK, Canada, Ireland, New Zealand and Australia markets.
    /// </remarks>
    public Task<AudiobookObject> GetAnAudiobook(GetAnAudiobookRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/audiobooks/{id}"),
            [new TemplateParam("id", request.Id)],
            [new Param("market", request.Market)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AudiobookObject>(),
            GetAnAudiobookError.Response,
            [_auth.Oauth20],
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Audiobook Chapters
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PagingSimplifiedChapterObject"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAudiobookChaptersError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get Spotify catalog information about an audiobook's chapters. Audiobooks are only available within the US, UK, Canada, Ireland, New Zealand and Australia markets.
    /// </remarks>
    public Task<PagingSimplifiedChapterObject> GetAudiobookChapters(GetAudiobookChaptersRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/audiobooks/{id}/chapters"),
            [new TemplateParam("id", request.Id)],
            [
                new Param("market", request.Market),
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PagingSimplifiedChapterObject>(),
            GetAudiobookChaptersError.Response,
            [_auth.Oauth20],
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Several Audiobooks
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ManyAudiobooks"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetMultipleAudiobooksError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get Spotify catalog information for several audiobooks identified by their Spotify IDs. Audiobooks are only available within the US, UK, Canada, Ireland, New Zealand and Australia markets.
    /// </remarks>
    public Task<ManyAudiobooks> GetMultipleAudiobooks(GetMultipleAudiobooksRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/audiobooks"),
            [],
            [new Param("ids", request.Ids), new Param("market", request.Market)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ManyAudiobooks>(),
            GetMultipleAudiobooksError.Response,
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
}
