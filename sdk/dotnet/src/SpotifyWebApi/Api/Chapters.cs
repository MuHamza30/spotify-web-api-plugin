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
using SpotifyWebApi.Requests.Chapters;

namespace SpotifyWebApi.Api;

public sealed class Chapters
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Chapters(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get a Chapter
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ChapterObject"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAChapterError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get Spotify catalog information for a single audiobook chapter. Chapters are only available within the US, UK, Canada, Ireland, New Zealand and Australia markets.
    /// </remarks>
    public Task<ChapterObject> GetAChapter(GetAChapterRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/chapters/{id}"),
            [new TemplateParam("id", request.Id)],
            [new Param("market", request.Market)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ChapterObject>(),
            GetAChapterError.Response,
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
    /// Get Several Chapters
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ManyChapters"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetSeveralChaptersError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get Spotify catalog information for several audiobook chapters identified by their Spotify IDs. Chapters are only available within the US, UK, Canada, Ireland, New Zealand and Australia markets.
    /// </remarks>
    public Task<ManyChapters> GetSeveralChapters(GetSeveralChaptersRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/chapters"),
            [],
            [new Param("ids", request.Ids), new Param("market", request.Market)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ManyChapters>(),
            GetSeveralChaptersError.Response,
            [_auth.Oauth20],
            requestOptions,
            cancellationToken);
}
