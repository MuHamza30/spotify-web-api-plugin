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
using SpotifyWebApi.Requests.Playlists;
using SpotifyWebApi.Requests.Tracks;
using SpotifyWebApi.Requests.Users;

namespace SpotifyWebApi.Api;

public sealed class Tracks
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Tracks(RawClient rawClient, Server server, AuthSchemes auth)
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
    /// Get Track's Audio Analysis
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AudioAnalysisObject"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAudioAnalysisError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a low-level audio analysis for a track in the Spotify catalog. The audio analysis describes the track’s structure and musical content, including rhythm, pitch, and timbre.
    /// </remarks>
    public Task<AudioAnalysisObject> GetAudioAnalysis(GetAudioAnalysisRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/audio-analysis/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AudioAnalysisObject>(),
            GetAudioAnalysisError.Response,
            [_auth.Oauth20],
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Track's Audio Features
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AudioFeaturesObject"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAudioFeaturesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get audio feature information for a single track identified by its unique
    /// Spotify ID.
    /// </remarks>
    public Task<AudioFeaturesObject> GetAudioFeatures(GetAudioFeaturesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/audio-features/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AudioFeaturesObject>(),
            GetAudioFeaturesError.Response,
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
    /// Get Recommendations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RecommendationsObject"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRecommendationsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Recommendations are generated based on the available information for a given seed entity and matched against similar artists and tracks. If there is sufficient information about the provided seeds, a list of tracks will be returned together with pool size details.
    /// <para>
    /// For artists and tracks that are very new or obscure there might not be enough data to generate a list of tracks.
    /// </para>
    /// </remarks>
    public Task<RecommendationsObject> GetRecommendations(GetRecommendationsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/recommendations"),
            [],
            [
                new Param("limit", request.Limit),
                new Param("market", request.Market),
                new Param("seed_artists", request.SeedArtists),
                new Param("seed_genres", request.SeedGenres),
                new Param("seed_tracks", request.SeedTracks),
                new Param("min_acousticness", request.MinAcousticness),
                new Param("max_acousticness", request.MaxAcousticness),
                new Param("target_acousticness", request.TargetAcousticness),
                new Param("min_danceability", request.MinDanceability),
                new Param("max_danceability", request.MaxDanceability),
                new Param("target_danceability", request.TargetDanceability),
                new Param("min_duration_ms", request.MinDurationMs),
                new Param("max_duration_ms", request.MaxDurationMs),
                new Param("target_duration_ms", request.TargetDurationMs),
                new Param("min_energy", request.MinEnergy),
                new Param("max_energy", request.MaxEnergy),
                new Param("target_energy", request.TargetEnergy),
                new Param("min_instrumentalness", request.MinInstrumentalness),
                new Param("max_instrumentalness", request.MaxInstrumentalness),
                new Param("target_instrumentalness", request.TargetInstrumentalness),
                new Param("min_key", request.MinKey),
                new Param("max_key", request.MaxKey),
                new Param("target_key", request.TargetKey),
                new Param("min_liveness", request.MinLiveness),
                new Param("max_liveness", request.MaxLiveness),
                new Param("target_liveness", request.TargetLiveness),
                new Param("min_loudness", request.MinLoudness),
                new Param("max_loudness", request.MaxLoudness),
                new Param("target_loudness", request.TargetLoudness),
                new Param("min_mode", request.MinMode),
                new Param("max_mode", request.MaxMode),
                new Param("target_mode", request.TargetMode),
                new Param("min_popularity", request.MinPopularity),
                new Param("max_popularity", request.MaxPopularity),
                new Param("target_popularity", request.TargetPopularity),
                new Param("min_speechiness", request.MinSpeechiness),
                new Param("max_speechiness", request.MaxSpeechiness),
                new Param("target_speechiness", request.TargetSpeechiness),
                new Param("min_tempo", request.MinTempo),
                new Param("max_tempo", request.MaxTempo),
                new Param("target_tempo", request.TargetTempo),
                new Param("min_time_signature", request.MinTimeSignature),
                new Param("max_time_signature", request.MaxTimeSignature),
                new Param("target_time_signature", request.TargetTimeSignature),
                new Param("min_valence", request.MinValence),
                new Param("max_valence", request.MaxValence),
                new Param("target_valence", request.TargetValence),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<RecommendationsObject>(),
            GetRecommendationsError.Response,
            [_auth.Oauth20],
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Several Tracks' Audio Features
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ManyAudioFeatures"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetSeveralAudioFeaturesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get audio features for multiple tracks based on their Spotify IDs.
    /// </remarks>
    public Task<ManyAudioFeatures> GetSeveralAudioFeatures(GetSeveralAudioFeaturesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/audio-features"),
            [],
            [new Param("ids", request.Ids)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ManyAudioFeatures>(),
            GetSeveralAudioFeaturesError.Response,
            [_auth.Oauth20],
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Several Tracks
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ManyTracks"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetSeveralTracksError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get Spotify catalog information for multiple tracks based on their Spotify IDs.
    /// </remarks>
    public Task<ManyTracks> GetSeveralTracks(GetSeveralTracksRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/tracks"),
            [],
            [new Param("ids", request.Ids), new Param("market", request.Market)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ManyTracks>(),
            GetSeveralTracksError.Response,
            [_auth.Oauth20],
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Track
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TrackObject"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetTrackError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get Spotify catalog information for a single track identified by its
    /// unique Spotify ID.
    /// </remarks>
    public Task<TrackObject> GetTrack(GetTrackRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/tracks/{id}"),
            [new TemplateParam("id", request.Id)],
            [new Param("market", request.Market)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<TrackObject>(),
            GetTrackError.Response,
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
}
