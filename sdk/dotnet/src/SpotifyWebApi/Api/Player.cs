using System;
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
using SpotifyWebApi.Requests.Player;

namespace SpotifyWebApi.Api;

public sealed class Player
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Player(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Add Item to Playback Queue
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AddToQueueError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Add an item to the end of the user's current playback queue. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.
    /// </remarks>
    public Task AddToQueue(AddToQueueRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/me/player/queue"),
            [],
            [new Param("uri", request.Uri), new Param("device_id", request.DeviceId)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            AddToQueueError.Response,
            [_auth.Oauth20],
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Available Devices
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ManyDevices"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAUsersAvailableDevicesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get information about a user’s available Spotify Connect devices. Some device models are not supported and will not be listed in the API response.
    /// </remarks>
    public Task<ManyDevices> GetAUsersAvailableDevices(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/me/player/devices"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ManyDevices>(),
            GetAUsersAvailableDevicesError.Response,
            [_auth.Oauth20],
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Playback State
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CurrentlyPlayingContextObject"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetInformationAboutTheUsersCurrentPlaybackError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get information about the user’s current playback state, including track or episode, progress, and active device.
    /// </remarks>
    public Task<CurrentlyPlayingContextObject> GetInformationAboutTheUsersCurrentPlayback(GetInformationAboutTheUsersCurrentPlaybackRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/me/player"),
            [],
            [new Param("market", request.Market), new Param("additional_types", request.AdditionalTypes)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CurrentlyPlayingContextObject>(),
            GetInformationAboutTheUsersCurrentPlaybackError.Response,
            [_auth.Oauth20],
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get the User's Queue
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="QueueObject"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetQueueError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get the list of objects that make up the user's queue.
    /// </remarks>
    public Task<QueueObject> GetQueue(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/me/player/queue"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<QueueObject>(),
            GetQueueError.Response,
            [_auth.Oauth20],
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Recently Played Tracks
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CursorPagingPlayHistoryObject"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRecentlyPlayedError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get tracks from the current user's recently played tracks.
    /// _<b>Note</b>: Currently doesn't support podcast episodes._
    /// </remarks>
    public Task<CursorPagingPlayHistoryObject> GetRecentlyPlayed(GetRecentlyPlayedRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/me/player/recently-played"),
            [],
            [new Param("limit", request.Limit), new Param("after", request.After), new Param("before", request.Before)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CursorPagingPlayHistoryObject>(),
            GetRecentlyPlayedError.Response,
            [_auth.Oauth20],
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Currently Playing Track
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CurrentlyPlayingObject"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetTheUsersCurrentlyPlayingTrackError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get the object currently being played on the user's Spotify account.
    /// </remarks>
    public Task<CurrentlyPlayingObject> GetTheUsersCurrentlyPlayingTrack(GetTheUsersCurrentlyPlayingTrackRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/me/player/currently-playing"),
            [],
            [new Param("market", request.Market), new Param("additional_types", request.AdditionalTypes)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CurrentlyPlayingObject>(),
            GetTheUsersCurrentlyPlayingTrackError.Response,
            [_auth.Oauth20],
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Pause Playback
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PauseAUsersPlaybackError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Pause playback on the user's account. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.
    /// </remarks>
    public Task PauseAUsersPlayback(PauseAUsersPlaybackRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/me/player/pause"),
            [],
            [new Param("device_id", request.DeviceId)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            EmptyBody.Instance,
            VoidResponse.Instance,
            PauseAUsersPlaybackError.Response,
            [_auth.Oauth20],
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Seek To Position
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SeekToPositionInCurrentlyPlayingTrackError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Seeks to the given position in the user’s currently playing track. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.
    /// </remarks>
    public Task SeekToPositionInCurrentlyPlayingTrack(SeekToPositionInCurrentlyPlayingTrackRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/me/player/seek"),
            [],
            [new Param("position_ms", request.PositionMs), new Param("device_id", request.DeviceId)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            EmptyBody.Instance,
            VoidResponse.Instance,
            SeekToPositionInCurrentlyPlayingTrackError.Response,
            [_auth.Oauth20],
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Set Repeat Mode
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SetRepeatModeOnUsersPlaybackError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Set the repeat mode for the user's playback. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.
    /// </remarks>
    public Task SetRepeatModeOnUsersPlayback(SetRepeatModeOnUsersPlaybackRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/me/player/repeat"),
            [],
            [new Param("state", request.State), new Param("device_id", request.DeviceId)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            EmptyBody.Instance,
            VoidResponse.Instance,
            SetRepeatModeOnUsersPlaybackError.Response,
            [_auth.Oauth20],
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Set Playback Volume
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SetVolumeForUsersPlaybackError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Set the volume for the user’s current playback device. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.
    /// </remarks>
    public Task SetVolumeForUsersPlayback(SetVolumeForUsersPlaybackRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/me/player/volume"),
            [],
            [new Param("volume_percent", request.VolumePercent), new Param("device_id", request.DeviceId)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            EmptyBody.Instance,
            VoidResponse.Instance,
            SetVolumeForUsersPlaybackError.Response,
            [_auth.Oauth20],
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Skip To Next
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SkipUsersPlaybackToNextTrackError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Skips to next track in the user’s queue. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.
    /// </remarks>
    public Task SkipUsersPlaybackToNextTrack(SkipUsersPlaybackToNextTrackRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/me/player/next"),
            [],
            [new Param("device_id", request.DeviceId)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            SkipUsersPlaybackToNextTrackError.Response,
            [_auth.Oauth20],
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Skip To Previous
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SkipUsersPlaybackToPreviousTrackError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Skips to previous track in the user’s queue. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.
    /// </remarks>
    public Task SkipUsersPlaybackToPreviousTrack(SkipUsersPlaybackToPreviousTrackRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/me/player/previous"),
            [],
            [new Param("device_id", request.DeviceId)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            SkipUsersPlaybackToPreviousTrackError.Response,
            [_auth.Oauth20],
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Start/Resume Playback
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="StartAUsersPlaybackError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Start a new context or resume current playback on the user's active device. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.
    /// </remarks>
    public Task StartAUsersPlayback(StartAUsersPlaybackRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/me/player/play"),
            [],
            [new Param("device_id", request.DeviceId)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            StartAUsersPlaybackError.Response,
            [_auth.Oauth20],
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Toggle Playback Shuffle
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ToggleShuffleForUsersPlaybackError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Toggle shuffle on or off for user’s playback. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.
    /// </remarks>
    public Task ToggleShuffleForUsersPlayback(ToggleShuffleForUsersPlaybackRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/me/player/shuffle"),
            [],
            [new Param("state", request.State), new Param("device_id", request.DeviceId)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            EmptyBody.Instance,
            VoidResponse.Instance,
            ToggleShuffleForUsersPlaybackError.Response,
            [_auth.Oauth20],
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Transfer Playback
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TransferAUsersPlaybackError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Transfer playback to a new device and optionally begin playback. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.
    /// </remarks>
    public Task TransferAUsersPlayback(TransferAUsersPlaybackRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/me/player"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            TransferAUsersPlaybackError.Response,
            [_auth.Oauth20],
            requestOptions,
            cancellationToken);
}
