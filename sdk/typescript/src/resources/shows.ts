import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { forbidden1Schema, type Forbidden1 } from "../models/forbidden1.js";
import { manySimplifiedShowsSchema, type ManySimplifiedShows } from "../models/many-simplified-shows.js";
import {
  pagingSavedShowObjectSchema,
  type PagingSavedShowObject,
} from "../models/paging-saved-show-object.js";
import {
  pagingSimplifiedEpisodeObjectSchema,
  type PagingSimplifiedEpisodeObject,
} from "../models/paging-simplified-episode-object.js";
import { removeShowsRequestSchema, type RemoveShowsRequest } from "../models/remove-shows-request.js";
import { saveShowsRequestSchema, type SaveShowsRequest } from "../models/save-shows-request.js";
import { showObjectSchema, type ShowObject } from "../models/show-object.js";
import { tooManyRequests1Schema, type TooManyRequests1 } from "../models/too-many-requests1.js";
import { unauthorized1Schema, type Unauthorized1 } from "../models/unauthorized1.js";
import type { Servers } from "../servers.js";

export class Shows {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Check User's Saved Shows
   *
   * @remarks
   * Check if one or more shows is already saved in the current Spotify user's library.
   *
   * @returns Array of booleans
   *
   * @throws {@link Shows.CheckUsersSavedShowsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  checkUsersSavedShows(
    request: Shows.CheckUsersSavedShowsRequest,
    options?: RequestOptions,
  ): ApiPromise<boolean[], Shows.CheckUsersSavedShowsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/me/shows/contains"),
        auth: this.#auth.oauth20,
        pathParams: [],
        query: [{ name: "ids", value: request.ids, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.boolean()) },
        errorFactory: Shows.CheckUsersSavedShowsError,
      },
      options,
    );
  }

  /**
   * Get Show
   *
   * @remarks
   * Get Spotify catalog information for a single show identified by its unique Spotify ID.
   *
   * @returns A show
   *
   * @throws {@link Shows.GetAShowError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAShow(
    request: Shows.GetAShowRequest,
    options?: RequestOptions,
  ): ApiPromise<ShowObject, Shows.GetAShowError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/shows/{id}"),
        auth: this.#auth.oauth20,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [{ name: "market", value: request.market, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: showObjectSchema },
        errorFactory: Shows.GetAShowError,
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
   * @throws {@link Shows.GetAShowsEpisodesError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAShowsEpisodes(
    request: Shows.GetAShowsEpisodesRequest,
    options?: RequestOptions,
  ): ApiPromise<PagingSimplifiedEpisodeObject, Shows.GetAShowsEpisodesError> {
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
        errorFactory: Shows.GetAShowsEpisodesError,
      },
      options,
    );
  }

  /**
   * Get Several Shows
   *
   * @remarks
   * Get Spotify catalog information for several shows based on their Spotify IDs.
   *
   * @returns A set of shows
   *
   * @throws {@link Shows.GetMultipleShowsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMultipleShows(
    request: Shows.GetMultipleShowsRequest,
    options?: RequestOptions,
  ): ApiPromise<ManySimplifiedShows, Shows.GetMultipleShowsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/shows"),
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
        success: { kind: "json", schema: manySimplifiedShowsSchema },
        errorFactory: Shows.GetMultipleShowsError,
      },
      options,
    );
  }

  /**
   * Get User's Saved Shows
   *
   * @remarks
   * Get a list of shows saved in the current Spotify user's library. Optional parameters can be
   * used to limit the number of shows returned.
   *
   * @returns Pages of shows
   *
   * @throws {@link Shows.GetUsersSavedShowsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getUsersSavedShows(
    request: Shows.GetUsersSavedShowsRequest,
    options?: RequestOptions,
  ): ApiPromise<PagingSavedShowObject, Shows.GetUsersSavedShowsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/me/shows"),
        auth: this.#auth.oauth20,
        pathParams: [],
        query: [
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 20) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.int(), 0) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pagingSavedShowObjectSchema },
        errorFactory: Shows.GetUsersSavedShowsError,
      },
      options,
    );
  }

  /**
   * Remove User's Saved Shows
   *
   * @remarks
   * Delete one or more shows from current Spotify user's library.
   *
   * @returns Show removed
   *
   * @throws {@link Shows.RemoveShowsUserError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  removeShowsUser(
    request: Shows.RemoveShowsUserRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Shows.RemoveShowsUserError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/me/shows"),
        auth: this.#auth.oauth20,
        pathParams: [],
        query: [
          { name: "ids", value: request.ids, schema: s.string() },
          { name: "market", value: request.market, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => removeShowsRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: Shows.RemoveShowsUserError,
      },
      options,
    );
  }

  /**
   * Save Shows for Current User
   *
   * @remarks
   * Save one or more shows to current Spotify user's library.
   *
   * @returns Show saved
   *
   * @throws {@link Shows.SaveShowsUserError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  saveShowsUser(
    request: Shows.SaveShowsUserRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Shows.SaveShowsUserError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/me/shows"),
        auth: this.#auth.oauth20,
        pathParams: [],
        query: [{ name: "ids", value: request.ids, schema: s.string() }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => saveShowsRequestSchema)) },
      },
      {
        success: { kind: "empty" },
        errorFactory: Shows.SaveShowsUserError,
      },
      options,
    );
  }
}

export namespace Shows {
  export type CheckUsersSavedShowsRequest = {
    ids: string;
  };

  export class CheckUsersSavedShowsError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<CheckUsersSavedShowsError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type GetAShowRequest = {
    id: string;
    market?: string;
  };

  export class GetAShowError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAShowError> = [
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

  export type GetMultipleShowsRequest = {
    ids: string;
    market?: string;
  };

  export class GetMultipleShowsError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetMultipleShowsError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type GetUsersSavedShowsRequest = {
    /** @default 20 */
    limit?: number;
    /** @default 0 */
    offset?: number;
  };

  export class GetUsersSavedShowsError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetUsersSavedShowsError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type RemoveShowsUserRequest = {
    ids: string;
    market?: string;
    body?: RemoveShowsRequest;
  };

  export class RemoveShowsUserError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<RemoveShowsUserError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type SaveShowsUserRequest = {
    ids: string;
    body?: SaveShowsRequest;
  };

  export class SaveShowsUserError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<SaveShowsUserError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }
}
