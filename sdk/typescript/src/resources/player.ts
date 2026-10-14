import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  currentlyPlayingContextObjectSchema,
  type CurrentlyPlayingContextObject,
} from "../models/currently-playing-context-object.js";
import {
  currentlyPlayingObjectSchema,
  type CurrentlyPlayingObject,
} from "../models/currently-playing-object.js";
import {
  cursorPagingPlayHistoryObjectSchema,
  type CursorPagingPlayHistoryObject,
} from "../models/cursor-paging-play-history-object.js";
import { forbidden1Schema, type Forbidden1 } from "../models/forbidden1.js";
import { manyDevicesSchema, type ManyDevices } from "../models/many-devices.js";
import { mePlayerRequestSchema, type MePlayerRequest } from "../models/me-player-request.js";
import { queueObjectSchema, type QueueObject } from "../models/queue-object.js";
import {
  startOrResumePlaybackRequestSchema,
  type StartOrResumePlaybackRequest,
} from "../models/start-or-resume-playback-request.js";
import { tooManyRequests1Schema, type TooManyRequests1 } from "../models/too-many-requests1.js";
import { unauthorized1Schema, type Unauthorized1 } from "../models/unauthorized1.js";
import type { Servers } from "../servers.js";

export class Player {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Add Item to Playback Queue
   *
   * @remarks
   * Add an item to the end of the user's current playback queue. This API only works for users who
   * have Spotify Premium. The order of execution is not guaranteed when you use this API with other
   * Player API endpoints.
   *
   * @returns Command received
   *
   * @throws {@link Player.AddToQueueError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addToQueue(
    request: Player.AddToQueueRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Player.AddToQueueError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/me/player/queue"),
        auth: this.#auth.oauth20,
        pathParams: [],
        query: [
          { name: "uri", value: request.uri, schema: s.string() },
          { name: "device_id", value: request.deviceId, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Player.AddToQueueError,
      },
      options,
    );
  }

  /**
   * Get Available Devices
   *
   * @remarks
   * Get information about a user’s available Spotify Connect devices. Some device models are not
   * supported and will not be listed in the API response.
   *
   * @returns A set of devices
   *
   * @throws {@link Player.GetAUsersAvailableDevicesError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAUsersAvailableDevices(
    options?: RequestOptions,
  ): ApiPromise<ManyDevices, Player.GetAUsersAvailableDevicesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/me/player/devices"),
        auth: this.#auth.oauth20,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: manyDevicesSchema },
        errorFactory: Player.GetAUsersAvailableDevicesError,
      },
      options,
    );
  }

  /**
   * Get Playback State
   *
   * @remarks
   * Get information about the user’s current playback state, including track or episode, progress,
   * and active device.
   *
   * @returns Information about playback
   *
   * @throws {@link Player.GetInformationAboutTheUsersCurrentPlaybackError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getInformationAboutTheUsersCurrentPlayback(
    request: Player.GetInformationAboutTheUsersCurrentPlaybackRequest,
    options?: RequestOptions,
  ): ApiPromise<CurrentlyPlayingContextObject, Player.GetInformationAboutTheUsersCurrentPlaybackError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/me/player"),
        auth: this.#auth.oauth20,
        pathParams: [],
        query: [
          { name: "market", value: request.market, schema: s.optional(s.string()) },
          { name: "additional_types", value: request.additionalTypes, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: currentlyPlayingContextObjectSchema },
        errorFactory: Player.GetInformationAboutTheUsersCurrentPlaybackError,
      },
      options,
    );
  }

  /**
   * Get the User's Queue
   *
   * @remarks
   * Get the list of objects that make up the user's queue.
   *
   * @returns Information about the queue
   *
   * @throws {@link Player.GetQueueError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getQueue(options?: RequestOptions): ApiPromise<QueueObject, Player.GetQueueError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/me/player/queue"),
        auth: this.#auth.oauth20,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: queueObjectSchema },
        errorFactory: Player.GetQueueError,
      },
      options,
    );
  }

  /**
   * Get Recently Played Tracks
   *
   * @remarks
   * Get tracks from the current user's recently played tracks. _**Note**: Currently doesn't support
   * podcast episodes._
   *
   * @returns A paged set of tracks
   *
   * @throws {@link Player.GetRecentlyPlayedError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getRecentlyPlayed(
    request: Player.GetRecentlyPlayedRequest,
    options?: RequestOptions,
  ): ApiPromise<CursorPagingPlayHistoryObject, Player.GetRecentlyPlayedError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/me/player/recently-played"),
        auth: this.#auth.oauth20,
        pathParams: [],
        query: [
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 20) },
          { name: "after", value: request.after, schema: s.optional(s.int()) },
          { name: "before", value: request.before, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: cursorPagingPlayHistoryObjectSchema },
        errorFactory: Player.GetRecentlyPlayedError,
      },
      options,
    );
  }

  /**
   * Get Currently Playing Track
   *
   * @remarks
   * Get the object currently being played on the user's Spotify account.
   *
   * @returns Information about the currently playing track
   *
   * @throws {@link Player.GetTheUsersCurrentlyPlayingTrackError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTheUsersCurrentlyPlayingTrack(
    request: Player.GetTheUsersCurrentlyPlayingTrackRequest,
    options?: RequestOptions,
  ): ApiPromise<CurrentlyPlayingObject, Player.GetTheUsersCurrentlyPlayingTrackError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/me/player/currently-playing"),
        auth: this.#auth.oauth20,
        pathParams: [],
        query: [
          { name: "market", value: request.market, schema: s.optional(s.string()) },
          { name: "additional_types", value: request.additionalTypes, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: currentlyPlayingObjectSchema },
        errorFactory: Player.GetTheUsersCurrentlyPlayingTrackError,
      },
      options,
    );
  }

  /**
   * Pause Playback
   *
   * @remarks
   * Pause playback on the user's account. This API only works for users who have Spotify Premium.
   * The order of execution is not guaranteed when you use this API with other Player API endpoints.
   *
   * @returns Playback paused
   *
   * @throws {@link Player.PauseAUsersPlaybackError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  pauseAUsersPlayback(
    request: Player.PauseAUsersPlaybackRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Player.PauseAUsersPlaybackError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/me/player/pause"),
        auth: this.#auth.oauth20,
        pathParams: [],
        query: [{ name: "device_id", value: request.deviceId, schema: s.optional(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Player.PauseAUsersPlaybackError,
      },
      options,
    );
  }

  /**
   * Seek To Position
   *
   * @remarks
   * Seeks to the given position in the user’s currently playing track. This API only works for
   * users who have Spotify Premium. The order of execution is not guaranteed when you use this API
   * with other Player API endpoints.
   *
   * @returns Command sent
   *
   * @throws {@link Player.SeekToPositionInCurrentlyPlayingTrackError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  seekToPositionInCurrentlyPlayingTrack(
    request: Player.SeekToPositionInCurrentlyPlayingTrackRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Player.SeekToPositionInCurrentlyPlayingTrackError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/me/player/seek"),
        auth: this.#auth.oauth20,
        pathParams: [],
        query: [
          { name: "position_ms", value: request.positionMs, schema: s.int() },
          { name: "device_id", value: request.deviceId, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Player.SeekToPositionInCurrentlyPlayingTrackError,
      },
      options,
    );
  }

  /**
   * Set Repeat Mode
   *
   * @remarks
   * Set the repeat mode for the user's playback. This API only works for users who have Spotify
   * Premium. The order of execution is not guaranteed when you use this API with other Player API
   * endpoints.
   *
   * @returns Command sent
   *
   * @throws {@link Player.SetRepeatModeOnUsersPlaybackError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  setRepeatModeOnUsersPlayback(
    request: Player.SetRepeatModeOnUsersPlaybackRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Player.SetRepeatModeOnUsersPlaybackError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/me/player/repeat"),
        auth: this.#auth.oauth20,
        pathParams: [],
        query: [
          { name: "state", value: request.state, schema: s.string() },
          { name: "device_id", value: request.deviceId, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Player.SetRepeatModeOnUsersPlaybackError,
      },
      options,
    );
  }

  /**
   * Set Playback Volume
   *
   * @remarks
   * Set the volume for the user’s current playback device. This API only works for users who have
   * Spotify Premium. The order of execution is not guaranteed when you use this API with other
   * Player API endpoints.
   *
   * @returns Command sent
   *
   * @throws {@link Player.SetVolumeForUsersPlaybackError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  setVolumeForUsersPlayback(
    request: Player.SetVolumeForUsersPlaybackRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Player.SetVolumeForUsersPlaybackError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/me/player/volume"),
        auth: this.#auth.oauth20,
        pathParams: [],
        query: [
          { name: "volume_percent", value: request.volumePercent, schema: s.int() },
          { name: "device_id", value: request.deviceId, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Player.SetVolumeForUsersPlaybackError,
      },
      options,
    );
  }

  /**
   * Skip To Next
   *
   * @remarks
   * Skips to next track in the user’s queue. This API only works for users who have Spotify
   * Premium. The order of execution is not guaranteed when you use this API with other Player API
   * endpoints.
   *
   * @returns Command sent
   *
   * @throws {@link Player.SkipUsersPlaybackToNextTrackError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  skipUsersPlaybackToNextTrack(
    request: Player.SkipUsersPlaybackToNextTrackRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Player.SkipUsersPlaybackToNextTrackError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/me/player/next"),
        auth: this.#auth.oauth20,
        pathParams: [],
        query: [{ name: "device_id", value: request.deviceId, schema: s.optional(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Player.SkipUsersPlaybackToNextTrackError,
      },
      options,
    );
  }

  /**
   * Skip To Previous
   *
   * @remarks
   * Skips to previous track in the user’s queue. This API only works for users who have Spotify
   * Premium. The order of execution is not guaranteed when you use this API with other Player API
   * endpoints.
   *
   * @returns Command sent
   *
   * @throws {@link Player.SkipUsersPlaybackToPreviousTrackError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  skipUsersPlaybackToPreviousTrack(
    request: Player.SkipUsersPlaybackToPreviousTrackRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Player.SkipUsersPlaybackToPreviousTrackError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/me/player/previous"),
        auth: this.#auth.oauth20,
        pathParams: [],
        query: [{ name: "device_id", value: request.deviceId, schema: s.optional(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Player.SkipUsersPlaybackToPreviousTrackError,
      },
      options,
    );
  }

  /**
   * Start/Resume Playback
   *
   * @remarks
   * Start a new context or resume current playback on the user's active device. This API only works
   * for users who have Spotify Premium. The order of execution is not guaranteed when you use this
   * API with other Player API endpoints.
   *
   * @returns Playback started
   *
   * @throws {@link Player.StartAUsersPlaybackError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  startAUsersPlayback(
    request: Player.StartAUsersPlaybackRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Player.StartAUsersPlaybackError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/me/player/play"),
        auth: this.#auth.oauth20,
        pathParams: [],
        query: [{ name: "device_id", value: request.deviceId, schema: s.optional(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => startOrResumePlaybackRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: Player.StartAUsersPlaybackError,
      },
      options,
    );
  }

  /**
   * Toggle Playback Shuffle
   *
   * @remarks
   * Toggle shuffle on or off for user’s playback. This API only works for users who have Spotify
   * Premium. The order of execution is not guaranteed when you use this API with other Player API
   * endpoints.
   *
   * @returns Command sent
   *
   * @throws {@link Player.ToggleShuffleForUsersPlaybackError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  toggleShuffleForUsersPlayback(
    request: Player.ToggleShuffleForUsersPlaybackRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Player.ToggleShuffleForUsersPlaybackError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/me/player/shuffle"),
        auth: this.#auth.oauth20,
        pathParams: [],
        query: [
          { name: "state", value: request.state, schema: s.boolean() },
          { name: "device_id", value: request.deviceId, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Player.ToggleShuffleForUsersPlaybackError,
      },
      options,
    );
  }

  /**
   * Transfer Playback
   *
   * @remarks
   * Transfer playback to a new device and optionally begin playback. This API only works for users
   * who have Spotify Premium. The order of execution is not guaranteed when you use this API with
   * other Player API endpoints.
   *
   * @returns Playback transferred
   *
   * @throws {@link Player.TransferAUsersPlaybackError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  transferAUsersPlayback(
    request: Player.TransferAUsersPlaybackRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Player.TransferAUsersPlaybackError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/me/player"),
        auth: this.#auth.oauth20,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => mePlayerRequestSchema)) },
      },
      {
        success: { kind: "empty" },
        errorFactory: Player.TransferAUsersPlaybackError,
      },
      options,
    );
  }
}

export namespace Player {
  export type AddToQueueRequest = {
    uri: string;
    deviceId?: string;
  };

  export class AddToQueueError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<AddToQueueError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export class GetAUsersAvailableDevicesError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAUsersAvailableDevicesError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type GetInformationAboutTheUsersCurrentPlaybackRequest = {
    market?: string;
    additionalTypes?: string;
  };

  export class GetInformationAboutTheUsersCurrentPlaybackError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetInformationAboutTheUsersCurrentPlaybackError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export class GetQueueError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetQueueError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type GetRecentlyPlayedRequest = {
    /** @default 20 */
    limit?: number;
    after?: number;
    before?: number;
  };

  export class GetRecentlyPlayedError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetRecentlyPlayedError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type GetTheUsersCurrentlyPlayingTrackRequest = {
    market?: string;
    additionalTypes?: string;
  };

  export class GetTheUsersCurrentlyPlayingTrackError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetTheUsersCurrentlyPlayingTrackError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type PauseAUsersPlaybackRequest = {
    deviceId?: string;
  };

  export class PauseAUsersPlaybackError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<PauseAUsersPlaybackError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type SeekToPositionInCurrentlyPlayingTrackRequest = {
    positionMs: number;
    deviceId?: string;
  };

  export class SeekToPositionInCurrentlyPlayingTrackError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<SeekToPositionInCurrentlyPlayingTrackError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type SetRepeatModeOnUsersPlaybackRequest = {
    state: string;
    deviceId?: string;
  };

  export class SetRepeatModeOnUsersPlaybackError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<SetRepeatModeOnUsersPlaybackError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type SetVolumeForUsersPlaybackRequest = {
    volumePercent: number;
    deviceId?: string;
  };

  export class SetVolumeForUsersPlaybackError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<SetVolumeForUsersPlaybackError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type SkipUsersPlaybackToNextTrackRequest = {
    deviceId?: string;
  };

  export class SkipUsersPlaybackToNextTrackError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<SkipUsersPlaybackToNextTrackError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type SkipUsersPlaybackToPreviousTrackRequest = {
    deviceId?: string;
  };

  export class SkipUsersPlaybackToPreviousTrackError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<SkipUsersPlaybackToPreviousTrackError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type StartAUsersPlaybackRequest = {
    deviceId?: string;
    body?: StartOrResumePlaybackRequest;
  };

  export class StartAUsersPlaybackError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<StartAUsersPlaybackError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type ToggleShuffleForUsersPlaybackRequest = {
    state: boolean;
    deviceId?: string;
  };

  export class ToggleShuffleForUsersPlaybackError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<ToggleShuffleForUsersPlaybackError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type TransferAUsersPlaybackRequest = {
    body?: MePlayerRequest;
  };

  export class TransferAUsersPlaybackError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<TransferAUsersPlaybackError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }
}
