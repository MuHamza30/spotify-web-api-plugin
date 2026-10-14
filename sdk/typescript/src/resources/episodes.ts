import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { episodeObjectSchema, type EpisodeObject } from "../models/episode-object.js";
import { forbidden1Schema, type Forbidden1 } from "../models/forbidden1.js";
import { manyEpisodesSchema, type ManyEpisodes } from "../models/many-episodes.js";
import {
  pagingSavedEpisodeObjectSchema,
  type PagingSavedEpisodeObject,
} from "../models/paging-saved-episode-object.js";
import {
  pagingSimplifiedEpisodeObjectSchema,
  type PagingSimplifiedEpisodeObject,
} from "../models/paging-simplified-episode-object.js";
import {
  removeEpisodesRequestSchema,
  type RemoveEpisodesRequest,
} from "../models/remove-episodes-request.js";
import { saveEpisodesRequestSchema, type SaveEpisodesRequest } from "../models/save-episodes-request.js";
import { tooManyRequests1Schema, type TooManyRequests1 } from "../models/too-many-requests1.js";
import { unauthorized1Schema, type Unauthorized1 } from "../models/unauthorized1.js";
import type { Servers } from "../servers.js";

export class Episodes {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Check User's Saved Episodes
   *
   * @remarks
   * Check if one or more episodes is already saved in the current Spotify user's 'Your Episodes'
   * library.<br/> This API endpoint is in __beta__ and could change without warning. Please share
   * any feedback that you have, or issues that you discover, in our [developer community
   * forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)..
   *
   * @returns Array of booleans
   *
   * @throws {@link Episodes.CheckUsersSavedEpisodesError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  checkUsersSavedEpisodes(
    request: Episodes.CheckUsersSavedEpisodesRequest,
    options?: RequestOptions,
  ): ApiPromise<boolean[], Episodes.CheckUsersSavedEpisodesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/me/episodes/contains"),
        auth: this.#auth.oauth20,
        pathParams: [],
        query: [{ name: "ids", value: request.ids, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.boolean()) },
        errorFactory: Episodes.CheckUsersSavedEpisodesError,
      },
      options,
    );
  }

  /**
   * Get Show Episodes
   *
   * @remarks
   * Get Spotify catalog information about an show’s episodes. Optional parameters can be used to
   * limit the number of episodes returned.
   *
   * @returns Pages of episodes
   *
   * @throws {@link Episodes.GetAShowsEpisodesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAShowsEpisodes(
    request: Episodes.GetAShowsEpisodesRequest,
    options?: RequestOptions,
  ): ApiPromise<PagingSimplifiedEpisodeObject, Episodes.GetAShowsEpisodesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/shows/{id}/episodes"),
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
        success: { kind: "json", schema: pagingSimplifiedEpisodeObjectSchema },
        errorFactory: Episodes.GetAShowsEpisodesError,
      },
      options,
    );
  }

  /**
   * Get Episode
   *
   * @remarks
   * Get Spotify catalog information for a single episode identified by its unique Spotify ID.
   *
   * @returns An episode
   *
   * @throws {@link Episodes.GetAnEpisodeError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAnEpisode(
    request: Episodes.GetAnEpisodeRequest,
    options?: RequestOptions,
  ): ApiPromise<EpisodeObject, Episodes.GetAnEpisodeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/episodes/{id}"),
        auth: this.#auth.oauth20,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [{ name: "market", value: request.market, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: episodeObjectSchema },
        errorFactory: Episodes.GetAnEpisodeError,
      },
      options,
    );
  }

  /**
   * Get Several Episodes
   *
   * @remarks
   * Get Spotify catalog information for several episodes based on their Spotify IDs.
   *
   * @returns A set of episodes
   *
   * @throws {@link Episodes.GetMultipleEpisodesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMultipleEpisodes(
    request: Episodes.GetMultipleEpisodesRequest,
    options?: RequestOptions,
  ): ApiPromise<ManyEpisodes, Episodes.GetMultipleEpisodesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/episodes"),
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
        success: { kind: "json", schema: manyEpisodesSchema },
        errorFactory: Episodes.GetMultipleEpisodesError,
      },
      options,
    );
  }

  /**
   * Get User's Saved Episodes
   *
   * @remarks
   * Get a list of the episodes saved in the current Spotify user's library.<br/> This API endpoint
   * is in __beta__ and could change without warning. Please share any feedback that you have, or
   * issues that you discover, in our [developer community
   * forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer).
   *
   * @returns Pages of episodes
   *
   * @throws {@link Episodes.GetUsersSavedEpisodesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getUsersSavedEpisodes(
    request: Episodes.GetUsersSavedEpisodesRequest,
    options?: RequestOptions,
  ): ApiPromise<PagingSavedEpisodeObject, Episodes.GetUsersSavedEpisodesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/me/episodes"),
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
        success: { kind: "json", schema: pagingSavedEpisodeObjectSchema },
        errorFactory: Episodes.GetUsersSavedEpisodesError,
      },
      options,
    );
  }

  /**
   * Remove User's Saved Episodes
   *
   * @remarks
   * Remove one or more episodes from the current user's library.<br/> This API endpoint is in
   * __beta__ and could change without warning. Please share any feedback that you have, or issues
   * that you discover, in our [developer community
   * forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer).
   *
   * @returns Episode removed
   *
   * @throws {@link Episodes.RemoveEpisodesUserError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  removeEpisodesUser(
    request: Episodes.RemoveEpisodesUserRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Episodes.RemoveEpisodesUserError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/me/episodes"),
        auth: this.#auth.oauth20,
        pathParams: [],
        query: [{ name: "ids", value: request.ids, schema: s.string() }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => removeEpisodesRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: Episodes.RemoveEpisodesUserError,
      },
      options,
    );
  }

  /**
   * Save Episodes for Current User
   *
   * @remarks
   * Save one or more episodes to the current user's library.<br/> This API endpoint is in __beta__
   * and could change without warning. Please share any feedback that you have, or issues that you
   * discover, in our [developer community
   * forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer).
   *
   * @returns Episode saved
   *
   * @throws {@link Episodes.SaveEpisodesUserError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  saveEpisodesUser(
    request: Episodes.SaveEpisodesUserRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Episodes.SaveEpisodesUserError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/me/episodes"),
        auth: this.#auth.oauth20,
        pathParams: [],
        query: [{ name: "ids", value: request.ids, schema: s.string() }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => saveEpisodesRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: Episodes.SaveEpisodesUserError,
      },
      options,
    );
  }
}

export namespace Episodes {
  export type CheckUsersSavedEpisodesRequest = {
    ids: string;
  };

  export class CheckUsersSavedEpisodesError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<CheckUsersSavedEpisodesError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type GetAShowsEpisodesRequest = {
    id: string;
    market?: string;
    /** @default 20 */
    limit?: number;
    /** @default 0 */
    offset?: number;
  };

  export class GetAShowsEpisodesError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAShowsEpisodesError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type GetAnEpisodeRequest = {
    id: string;
    market?: string;
  };

  export class GetAnEpisodeError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAnEpisodeError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type GetMultipleEpisodesRequest = {
    ids: string;
    market?: string;
  };

  export class GetMultipleEpisodesError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetMultipleEpisodesError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type GetUsersSavedEpisodesRequest = {
    market?: string;
    /** @default 20 */
    limit?: number;
    /** @default 0 */
    offset?: number;
  };

  export class GetUsersSavedEpisodesError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetUsersSavedEpisodesError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type RemoveEpisodesUserRequest = {
    ids: string;
    body?: RemoveEpisodesRequest;
  };

  export class RemoveEpisodesUserError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<RemoveEpisodesUserError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type SaveEpisodesUserRequest = {
    ids: string;
    body?: SaveEpisodesRequest;
  };

  export class SaveEpisodesUserError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<SaveEpisodesUserError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }
}
