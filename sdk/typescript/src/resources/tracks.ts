import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { audioAnalysisObjectSchema, type AudioAnalysisObject } from "../models/audio-analysis-object.js";
import { audioFeaturesObjectSchema, type AudioFeaturesObject } from "../models/audio-features-object.js";
import { forbidden1Schema, type Forbidden1 } from "../models/forbidden1.js";
import { manyAudioFeaturesSchema, type ManyAudioFeatures } from "../models/many-audio-features.js";
import { manyTracksSchema, type ManyTracks } from "../models/many-tracks.js";
import {
  pagingPlaylistTrackObjectSchema,
  type PagingPlaylistTrackObject,
} from "../models/paging-playlist-track-object.js";
import {
  pagingSavedTrackObjectSchema,
  type PagingSavedTrackObject,
} from "../models/paging-saved-track-object.js";
import {
  pagingSimplifiedTrackObjectSchema,
  type PagingSimplifiedTrackObject,
} from "../models/paging-simplified-track-object.js";
import { pagingTrackObjectSchema, type PagingTrackObject } from "../models/paging-track-object.js";
import { playlistSnapshotIdSchema, type PlaylistSnapshotId } from "../models/playlist-snapshot-id.js";
import {
  playlistsTracksRequestSchema,
  type PlaylistsTracksRequest,
} from "../models/playlists-tracks-request.js";
import {
  playlistsTracksRequest1Schema,
  type PlaylistsTracksRequest1,
} from "../models/playlists-tracks-request1.js";
import {
  playlistsTracksRequest2Schema,
  type PlaylistsTracksRequest2,
} from "../models/playlists-tracks-request2.js";
import { recommendationsObjectSchema, type RecommendationsObject } from "../models/recommendations-object.js";
import { removeTracksRequestSchema, type RemoveTracksRequest } from "../models/remove-tracks-request.js";
import { saveTracksRequestSchema, type SaveTracksRequest } from "../models/save-tracks-request.js";
import { tooManyRequests1Schema, type TooManyRequests1 } from "../models/too-many-requests1.js";
import { trackObjectSchema, type TrackObject } from "../models/track-object.js";
import { unauthorized1Schema, type Unauthorized1 } from "../models/unauthorized1.js";
import type { Servers } from "../servers.js";

export class Tracks {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Add Items to Playlist
   *
   * @remarks
   * Add one or more items to a user's playlist.
   *
   * @returns A snapshot ID for the playlist
   *
   * @throws {@link Tracks.AddTracksToPlaylistError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addTracksToPlaylist(
    request: Tracks.AddTracksToPlaylistRequest,
    options?: RequestOptions,
  ): ApiPromise<PlaylistSnapshotId, Tracks.AddTracksToPlaylistError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/playlists/{playlist_id}/tracks"),
        auth: this.#auth.oauth20,
        pathParams: [{ name: "playlist_id", value: request.playlistId, schema: s.string() }],
        query: [
          { name: "position", value: request.position, schema: s.optional(s.int()) },
          { name: "uris", value: request.uris, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => playlistsTracksRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: playlistSnapshotIdSchema },
        errorFactory: Tracks.AddTracksToPlaylistError,
      },
      options,
    );
  }

  /**
   * Check User's Saved Tracks
   *
   * @remarks
   * Check if one or more tracks is already saved in the current Spotify user's 'Your Music'
   * library.
   *
   * @returns Array of booleans
   *
   * @throws {@link Tracks.CheckUsersSavedTracksError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  checkUsersSavedTracks(
    request: Tracks.CheckUsersSavedTracksRequest,
    options?: RequestOptions,
  ): ApiPromise<boolean[], Tracks.CheckUsersSavedTracksError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/me/tracks/contains"),
        auth: this.#auth.oauth20,
        pathParams: [],
        query: [{ name: "ids", value: request.ids, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.boolean()) },
        errorFactory: Tracks.CheckUsersSavedTracksError,
      },
      options,
    );
  }

  /**
   * Get Album Tracks
   *
   * @remarks
   * Get Spotify catalog information about an album’s tracks. Optional parameters can be used to
   * limit the number of tracks returned.
   *
   * @returns Pages of tracks
   *
   * @throws {@link Tracks.GetAnAlbumsTracksError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAnAlbumsTracks(
    request: Tracks.GetAnAlbumsTracksRequest,
    options?: RequestOptions,
  ): ApiPromise<PagingSimplifiedTrackObject, Tracks.GetAnAlbumsTracksError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/albums/{id}/tracks"),
        auth: this.#auth.oauth20,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [
          { name: "market", value: request.market, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 20) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.int(), 0) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pagingSimplifiedTrackObjectSchema },
        errorFactory: Tracks.GetAnAlbumsTracksError,
      },
      options,
    );
  }

  /**
   * Get Artist's Top Tracks
   *
   * @remarks
   * Get Spotify catalog information about an artist's top tracks by country.
   *
   * @returns A set of tracks
   *
   * @throws {@link Tracks.GetAnArtistsTopTracksError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAnArtistsTopTracks(
    request: Tracks.GetAnArtistsTopTracksRequest,
    options?: RequestOptions,
  ): ApiPromise<ManyTracks, Tracks.GetAnArtistsTopTracksError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/artists/{id}/top-tracks"),
        auth: this.#auth.oauth20,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [{ name: "market", value: request.market, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: manyTracksSchema },
        errorFactory: Tracks.GetAnArtistsTopTracksError,
      },
      options,
    );
  }

  /**
   * Get Track's Audio Analysis
   *
   * @remarks
   * Get a low-level audio analysis for a track in the Spotify catalog. The audio analysis describes
   * the track’s structure and musical content, including rhythm, pitch, and timbre.
   *
   * @returns Audio analysis for one track
   *
   * @throws {@link Tracks.GetAudioAnalysisError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAudioAnalysis(
    request: Tracks.GetAudioAnalysisRequest,
    options?: RequestOptions,
  ): ApiPromise<AudioAnalysisObject, Tracks.GetAudioAnalysisError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/audio-analysis/{id}"),
        auth: this.#auth.oauth20,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: audioAnalysisObjectSchema },
        errorFactory: Tracks.GetAudioAnalysisError,
      },
      options,
    );
  }

  /**
   * Get Track's Audio Features
   *
   * @remarks
   * Get audio feature information for a single track identified by its unique Spotify ID.
   *
   * @returns Audio features for one track
   *
   * @throws {@link Tracks.GetAudioFeaturesError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAudioFeatures(
    request: Tracks.GetAudioFeaturesRequest,
    options?: RequestOptions,
  ): ApiPromise<AudioFeaturesObject, Tracks.GetAudioFeaturesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/audio-features/{id}"),
        auth: this.#auth.oauth20,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: audioFeaturesObjectSchema },
        errorFactory: Tracks.GetAudioFeaturesError,
      },
      options,
    );
  }

  /**
   * Get Playlist Items
   *
   * @remarks
   * Get full details of the items of a playlist owned by a Spotify user.
   *
   * @returns Pages of tracks
   *
   * @throws {@link Tracks.GetPlaylistsTracksError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPlaylistsTracks(
    request: Tracks.GetPlaylistsTracksRequest,
    options?: RequestOptions,
  ): ApiPromise<PagingPlaylistTrackObject, Tracks.GetPlaylistsTracksError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/playlists/{playlist_id}/tracks"),
        auth: this.#auth.oauth20,
        pathParams: [{ name: "playlist_id", value: request.playlistId, schema: s.string() }],
        query: [
          { name: "market", value: request.market, schema: s.optional(s.string()) },
          { name: "fields", value: request.fields, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 20) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.int(), 0) },
          { name: "additional_types", value: request.additionalTypes, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pagingPlaylistTrackObjectSchema },
        errorFactory: Tracks.GetPlaylistsTracksError,
      },
      options,
    );
  }

  /**
   * Get Recommendations
   *
   * @remarks
   * Recommendations are generated based on the available information for a given seed entity and
   * matched against similar artists and tracks. If there is sufficient information about the
   * provided seeds, a list of tracks will be returned together with pool size details.
   *
   * For artists and tracks that are very new or obscure there might not be enough data to generate
   * a list of tracks.
   *
   * @returns A set of recommendations
   *
   * @throws {@link Tracks.GetRecommendationsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getRecommendations(
    request: Tracks.GetRecommendationsRequest,
    options?: RequestOptions,
  ): ApiPromise<RecommendationsObject, Tracks.GetRecommendationsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/recommendations"),
        auth: this.#auth.oauth20,
        pathParams: [],
        query: [
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 20) },
          { name: "market", value: request.market, schema: s.optional(s.string()) },
          { name: "seed_artists", value: request.seedArtists, schema: s.optional(s.string()) },
          { name: "seed_genres", value: request.seedGenres, schema: s.optional(s.string()) },
          { name: "seed_tracks", value: request.seedTracks, schema: s.optional(s.string()) },
          { name: "min_acousticness", value: request.minAcousticness, schema: s.optional(s.float64()) },
          { name: "max_acousticness", value: request.maxAcousticness, schema: s.optional(s.float64()) },
          { name: "target_acousticness", value: request.targetAcousticness, schema: s.optional(s.float64()) },
          { name: "min_danceability", value: request.minDanceability, schema: s.optional(s.float64()) },
          { name: "max_danceability", value: request.maxDanceability, schema: s.optional(s.float64()) },
          { name: "target_danceability", value: request.targetDanceability, schema: s.optional(s.float64()) },
          { name: "min_duration_ms", value: request.minDurationMs, schema: s.optional(s.int()) },
          { name: "max_duration_ms", value: request.maxDurationMs, schema: s.optional(s.int()) },
          { name: "target_duration_ms", value: request.targetDurationMs, schema: s.optional(s.int()) },
          { name: "min_energy", value: request.minEnergy, schema: s.optional(s.float64()) },
          { name: "max_energy", value: request.maxEnergy, schema: s.optional(s.float64()) },
          { name: "target_energy", value: request.targetEnergy, schema: s.optional(s.float64()) },
          {
            name: "min_instrumentalness",
            value: request.minInstrumentalness,
            schema: s.optional(s.float64()),
          },
          {
            name: "max_instrumentalness",
            value: request.maxInstrumentalness,
            schema: s.optional(s.float64()),
          },
          {
            name: "target_instrumentalness",
            value: request.targetInstrumentalness,
            schema: s.optional(s.float64()),
          },
          { name: "min_key", value: request.minKey, schema: s.optional(s.int()) },
          { name: "max_key", value: request.maxKey, schema: s.optional(s.int()) },
          { name: "target_key", value: request.targetKey, schema: s.optional(s.int()) },
          { name: "min_liveness", value: request.minLiveness, schema: s.optional(s.float64()) },
          { name: "max_liveness", value: request.maxLiveness, schema: s.optional(s.float64()) },
          { name: "target_liveness", value: request.targetLiveness, schema: s.optional(s.float64()) },
          { name: "min_loudness", value: request.minLoudness, schema: s.optional(s.float64()) },
          { name: "max_loudness", value: request.maxLoudness, schema: s.optional(s.float64()) },
          { name: "target_loudness", value: request.targetLoudness, schema: s.optional(s.float64()) },
          { name: "min_mode", value: request.minMode, schema: s.optional(s.int()) },
          { name: "max_mode", value: request.maxMode, schema: s.optional(s.int()) },
          { name: "target_mode", value: request.targetMode, schema: s.optional(s.int()) },
          { name: "min_popularity", value: request.minPopularity, schema: s.optional(s.int()) },
          { name: "max_popularity", value: request.maxPopularity, schema: s.optional(s.int()) },
          { name: "target_popularity", value: request.targetPopularity, schema: s.optional(s.int()) },
          { name: "min_speechiness", value: request.minSpeechiness, schema: s.optional(s.float64()) },
          { name: "max_speechiness", value: request.maxSpeechiness, schema: s.optional(s.float64()) },
          { name: "target_speechiness", value: request.targetSpeechiness, schema: s.optional(s.float64()) },
          { name: "min_tempo", value: request.minTempo, schema: s.optional(s.float64()) },
          { name: "max_tempo", value: request.maxTempo, schema: s.optional(s.float64()) },
          { name: "target_tempo", value: request.targetTempo, schema: s.optional(s.float64()) },
          { name: "min_time_signature", value: request.minTimeSignature, schema: s.optional(s.int()) },
          { name: "max_time_signature", value: request.maxTimeSignature, schema: s.optional(s.int()) },
          { name: "target_time_signature", value: request.targetTimeSignature, schema: s.optional(s.int()) },
          { name: "min_valence", value: request.minValence, schema: s.optional(s.float64()) },
          { name: "max_valence", value: request.maxValence, schema: s.optional(s.float64()) },
          { name: "target_valence", value: request.targetValence, schema: s.optional(s.float64()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: recommendationsObjectSchema },
        errorFactory: Tracks.GetRecommendationsError,
      },
      options,
    );
  }

  /**
   * Get Several Tracks' Audio Features
   *
   * @remarks
   * Get audio features for multiple tracks based on their Spotify IDs.
   *
   * @returns A set of audio features
   *
   * @throws {@link Tracks.GetSeveralAudioFeaturesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSeveralAudioFeatures(
    request: Tracks.GetSeveralAudioFeaturesRequest,
    options?: RequestOptions,
  ): ApiPromise<ManyAudioFeatures, Tracks.GetSeveralAudioFeaturesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/audio-features"),
        auth: this.#auth.oauth20,
        pathParams: [],
        query: [{ name: "ids", value: request.ids, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: manyAudioFeaturesSchema },
        errorFactory: Tracks.GetSeveralAudioFeaturesError,
      },
      options,
    );
  }

  /**
   * Get Several Tracks
   *
   * @remarks
   * Get Spotify catalog information for multiple tracks based on their Spotify IDs.
   *
   * @returns A set of tracks
   *
   * @throws {@link Tracks.GetSeveralTracksError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSeveralTracks(
    request: Tracks.GetSeveralTracksRequest,
    options?: RequestOptions,
  ): ApiPromise<ManyTracks, Tracks.GetSeveralTracksError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/tracks"),
        auth: this.#auth.oauth20,
        pathParams: [],
        query: [
          { name: "ids", value: request.ids, schema: s.string() },
          { name: "market", value: request.market, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: manyTracksSchema },
        errorFactory: Tracks.GetSeveralTracksError,
      },
      options,
    );
  }

  /**
   * Get Track
   *
   * @remarks
   * Get Spotify catalog information for a single track identified by its unique Spotify ID.
   *
   * @returns A track
   *
   * @throws {@link Tracks.GetTrackError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTrack(
    request: Tracks.GetTrackRequest,
    options?: RequestOptions,
  ): ApiPromise<TrackObject, Tracks.GetTrackError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/tracks/{id}"),
        auth: this.#auth.oauth20,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [{ name: "market", value: request.market, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: trackObjectSchema },
        errorFactory: Tracks.GetTrackError,
      },
      options,
    );
  }

  /**
   * Get User's Saved Tracks
   *
   * @remarks
   * Get a list of the songs saved in the current Spotify user's 'Your Music' library.
   *
   * @returns Pages of tracks
   *
   * @throws {@link Tracks.GetUsersSavedTracksError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getUsersSavedTracks(
    request: Tracks.GetUsersSavedTracksRequest,
    options?: RequestOptions,
  ): ApiPromise<PagingSavedTrackObject, Tracks.GetUsersSavedTracksError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/me/tracks"),
        auth: this.#auth.oauth20,
        pathParams: [],
        query: [
          { name: "market", value: request.market, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 20) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.int(), 0) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pagingSavedTrackObjectSchema },
        errorFactory: Tracks.GetUsersSavedTracksError,
      },
      options,
    );
  }

  /**
   * Get User's Top Tracks
   *
   * @remarks
   * Get the current user's top tracks based on calculated affinity.
   *
   * @returns Pages of tracks
   *
   * @throws {@link Tracks.GetUsersTopTracksError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getUsersTopTracks(
    request: Tracks.GetUsersTopTracksRequest,
    options?: RequestOptions,
  ): ApiPromise<PagingTrackObject, Tracks.GetUsersTopTracksError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/me/top/tracks"),
        auth: this.#auth.oauth20,
        pathParams: [],
        query: [
          { name: "time_range", value: request.timeRange, schema: s.defaulted(s.string(), "medium_term") },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 20) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.int(), 0) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pagingTrackObjectSchema },
        errorFactory: Tracks.GetUsersTopTracksError,
      },
      options,
    );
  }

  /**
   * Remove Playlist Items
   *
   * @remarks
   * Remove one or more items from a user's playlist.
   *
   * @returns A snapshot ID for the playlist
   *
   * @throws {@link Tracks.RemoveTracksPlaylistError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  removeTracksPlaylist(
    request: Tracks.RemoveTracksPlaylistRequest,
    options?: RequestOptions,
  ): ApiPromise<PlaylistSnapshotId, Tracks.RemoveTracksPlaylistError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/playlists/{playlist_id}/tracks"),
        auth: this.#auth.oauth20,
        pathParams: [{ name: "playlist_id", value: request.playlistId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => playlistsTracksRequest2Schema)),
        },
      },
      {
        success: { kind: "json", schema: playlistSnapshotIdSchema },
        errorFactory: Tracks.RemoveTracksPlaylistError,
      },
      options,
    );
  }

  /**
   * Remove User's Saved Tracks
   *
   * @remarks
   * Remove one or more tracks from the current user's 'Your Music' library.
   *
   * @returns Track removed
   *
   * @throws {@link Tracks.RemoveTracksUserError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  removeTracksUser(
    request: Tracks.RemoveTracksUserRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Tracks.RemoveTracksUserError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/me/tracks"),
        auth: this.#auth.oauth20,
        pathParams: [],
        query: [{ name: "ids", value: request.ids, schema: s.string() }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => removeTracksRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: Tracks.RemoveTracksUserError,
      },
      options,
    );
  }

  /**
   * Update Playlist Items
   *
   * @remarks
   * Either reorder or replace items in a playlist depending on the request's parameters. To reorder
   * items, include `range_start`, `insert_before`, `range_length` and `snapshot_id` in the
   * request's body. To replace items, include `uris` as either a query parameter or in the
   * request's body. Replacing items in a playlist will overwrite its existing items. This operation
   * can be used for replacing or clearing items in a playlist. <br/> **Note**: Replace and reorder
   * are mutually exclusive operations which share the same endpoint, but have different parameters.
   * These operations can't be applied together in a single request.
   *
   * @returns A snapshot ID for the playlist
   *
   * @throws {@link Tracks.ReorderOrReplacePlaylistsTracksError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  reorderOrReplacePlaylistsTracks(
    request: Tracks.ReorderOrReplacePlaylistsTracksRequest,
    options?: RequestOptions,
  ): ApiPromise<PlaylistSnapshotId, Tracks.ReorderOrReplacePlaylistsTracksError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/playlists/{playlist_id}/tracks"),
        auth: this.#auth.oauth20,
        pathParams: [{ name: "playlist_id", value: request.playlistId, schema: s.string() }],
        query: [{ name: "uris", value: request.uris, schema: s.optional(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => playlistsTracksRequest1Schema)),
        },
      },
      {
        success: { kind: "json", schema: playlistSnapshotIdSchema },
        errorFactory: Tracks.ReorderOrReplacePlaylistsTracksError,
      },
      options,
    );
  }

  /**
   * Save Tracks for Current User
   *
   * @remarks
   * Save one or more tracks to the current user's 'Your Music' library.
   *
   * @returns Track saved
   *
   * @throws {@link Tracks.SaveTracksUserError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  saveTracksUser(
    request: Tracks.SaveTracksUserRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Tracks.SaveTracksUserError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/me/tracks"),
        auth: this.#auth.oauth20,
        pathParams: [],
        query: [{ name: "ids", value: request.ids, schema: s.string() }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => saveTracksRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: Tracks.SaveTracksUserError,
      },
      options,
    );
  }
}

export namespace Tracks {
  export type AddTracksToPlaylistRequest = {
    playlistId: string;
    position?: number;
    uris?: string;
    body?: PlaylistsTracksRequest;
  };

  export class AddTracksToPlaylistError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<AddTracksToPlaylistError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type CheckUsersSavedTracksRequest = {
    ids: string;
  };

  export class CheckUsersSavedTracksError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<CheckUsersSavedTracksError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type GetAnAlbumsTracksRequest = {
    id: string;
    market?: string;
    /** @default 20 */
    limit?: number;
    /** @default 0 */
    offset?: number;
  };

  export class GetAnAlbumsTracksError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAnAlbumsTracksError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type GetAnArtistsTopTracksRequest = {
    id: string;
    market?: string;
  };

  export class GetAnArtistsTopTracksError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAnArtistsTopTracksError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type GetAudioAnalysisRequest = {
    id: string;
  };

  export class GetAudioAnalysisError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAudioAnalysisError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type GetAudioFeaturesRequest = {
    id: string;
  };

  export class GetAudioFeaturesError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAudioFeaturesError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type GetPlaylistsTracksRequest = {
    playlistId: string;
    market?: string;
    fields?: string;
    /** @default 20 */
    limit?: number;
    /** @default 0 */
    offset?: number;
    additionalTypes?: string;
  };

  export class GetPlaylistsTracksError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetPlaylistsTracksError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type GetRecommendationsRequest = {
    /** @default 20 */
    limit?: number;
    market?: string;
    seedArtists?: string;
    seedGenres?: string;
    seedTracks?: string;
    minAcousticness?: number;
    maxAcousticness?: number;
    targetAcousticness?: number;
    minDanceability?: number;
    maxDanceability?: number;
    targetDanceability?: number;
    minDurationMs?: number;
    maxDurationMs?: number;
    targetDurationMs?: number;
    minEnergy?: number;
    maxEnergy?: number;
    targetEnergy?: number;
    minInstrumentalness?: number;
    maxInstrumentalness?: number;
    targetInstrumentalness?: number;
    minKey?: number;
    maxKey?: number;
    targetKey?: number;
    minLiveness?: number;
    maxLiveness?: number;
    targetLiveness?: number;
    minLoudness?: number;
    maxLoudness?: number;
    targetLoudness?: number;
    minMode?: number;
    maxMode?: number;
    targetMode?: number;
    minPopularity?: number;
    maxPopularity?: number;
    targetPopularity?: number;
    minSpeechiness?: number;
    maxSpeechiness?: number;
    targetSpeechiness?: number;
    minTempo?: number;
    maxTempo?: number;
    targetTempo?: number;
    minTimeSignature?: number;
    maxTimeSignature?: number;
    targetTimeSignature?: number;
    minValence?: number;
    maxValence?: number;
    targetValence?: number;
  };

  export class GetRecommendationsError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetRecommendationsError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type GetSeveralAudioFeaturesRequest = {
    ids: string;
  };

  export class GetSeveralAudioFeaturesError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetSeveralAudioFeaturesError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type GetSeveralTracksRequest = {
    ids: string;
    market?: string;
  };

  export class GetSeveralTracksError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetSeveralTracksError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type GetTrackRequest = {
    id: string;
    market?: string;
  };

  export class GetTrackError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetTrackError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type GetUsersSavedTracksRequest = {
    market?: string;
    /** @default 20 */
    limit?: number;
    /** @default 0 */
    offset?: number;
  };

  export class GetUsersSavedTracksError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetUsersSavedTracksError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type GetUsersTopTracksRequest = {
    /** @default "medium_term" */
    timeRange?: string;
    /** @default 20 */
    limit?: number;
    /** @default 0 */
    offset?: number;
  };

  export class GetUsersTopTracksError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetUsersTopTracksError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type RemoveTracksPlaylistRequest = {
    playlistId: string;
    body?: PlaylistsTracksRequest2;
  };

  export class RemoveTracksPlaylistError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<RemoveTracksPlaylistError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type RemoveTracksUserRequest = {
    ids: string;
    body?: RemoveTracksRequest;
  };

  export class RemoveTracksUserError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<RemoveTracksUserError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type ReorderOrReplacePlaylistsTracksRequest = {
    playlistId: string;
    uris?: string;
    body?: PlaylistsTracksRequest1;
  };

  export class ReorderOrReplacePlaylistsTracksError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<ReorderOrReplacePlaylistsTracksError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type SaveTracksUserRequest = {
    ids: string;
    body?: SaveTracksRequest;
  };

  export class SaveTracksUserError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<SaveTracksUserError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }
}
