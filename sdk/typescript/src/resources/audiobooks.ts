import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { audiobookObjectSchema, type AudiobookObject } from "../models/audiobook-object.js";
import { badRequest1Schema, type BadRequest1 } from "../models/bad-request1.js";
import { forbidden1Schema, type Forbidden1 } from "../models/forbidden1.js";
import { manyAudiobooksSchema, type ManyAudiobooks } from "../models/many-audiobooks.js";
import { notFound1Schema, type NotFound1 } from "../models/not-found1.js";
import {
  pagingSavedAudiobookObjectSchema,
  type PagingSavedAudiobookObject,
} from "../models/paging-saved-audiobook-object.js";
import {
  pagingSimplifiedChapterObjectSchema,
  type PagingSimplifiedChapterObject,
} from "../models/paging-simplified-chapter-object.js";
import { tooManyRequests1Schema, type TooManyRequests1 } from "../models/too-many-requests1.js";
import { unauthorized1Schema, type Unauthorized1 } from "../models/unauthorized1.js";
import type { Servers } from "../servers.js";

export class Audiobooks {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Check User's Saved Audiobooks
   *
   * @remarks
   * Check if one or more audiobooks are already saved in the current Spotify user's library.
   *
   * @returns Array of booleans
   *
   * @throws {@link Audiobooks.CheckUsersSavedAudiobooksError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  checkUsersSavedAudiobooks(
    request: Audiobooks.CheckUsersSavedAudiobooksRequest,
    options?: RequestOptions,
  ): ApiPromise<boolean[], Audiobooks.CheckUsersSavedAudiobooksError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/me/audiobooks/contains"),
        auth: this.#auth.oauth20,
        pathParams: [],
        query: [{ name: "ids", value: request.ids, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.boolean()) },
        errorFactory: Audiobooks.CheckUsersSavedAudiobooksError,
      },
      options,
    );
  }

  /**
   * Get an Audiobook
   *
   * @remarks
   * Get Spotify catalog information for a single audiobook. Audiobooks are only available within
   * the US, UK, Canada, Ireland, New Zealand and Australia markets.
   *
   * @returns An Audiobook
   *
   * @throws {@link Audiobooks.GetAnAudiobookError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAnAudiobook(
    request: Audiobooks.GetAnAudiobookRequest,
    options?: RequestOptions,
  ): ApiPromise<AudiobookObject, Audiobooks.GetAnAudiobookError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/audiobooks/{id}"),
        auth: this.#auth.oauth20,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [{ name: "market", value: request.market, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: audiobookObjectSchema },
        errorFactory: Audiobooks.GetAnAudiobookError,
      },
      options,
    );
  }

  /**
   * Get Audiobook Chapters
   *
   * @remarks
   * Get Spotify catalog information about an audiobook's chapters. Audiobooks are only available
   * within the US, UK, Canada, Ireland, New Zealand and Australia markets.
   *
   * @returns Pages of chapters
   *
   * @throws {@link Audiobooks.GetAudiobookChaptersError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAudiobookChapters(
    request: Audiobooks.GetAudiobookChaptersRequest,
    options?: RequestOptions,
  ): ApiPromise<PagingSimplifiedChapterObject, Audiobooks.GetAudiobookChaptersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/audiobooks/{id}/chapters"),
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
        success: { kind: "json", schema: pagingSimplifiedChapterObjectSchema },
        errorFactory: Audiobooks.GetAudiobookChaptersError,
      },
      options,
    );
  }

  /**
   * Get Several Audiobooks
   *
   * @remarks
   * Get Spotify catalog information for several audiobooks identified by their Spotify IDs.
   * Audiobooks are only available within the US, UK, Canada, Ireland, New Zealand and Australia
   * markets.
   *
   * @returns A set of audiobooks. If one of the requested audiobooks is unavailable then you'll
   * find a `null` item in the `audiobooks` array where the audiobook object would otherwise be.
   *
   * @throws {@link Audiobooks.GetMultipleAudiobooksError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMultipleAudiobooks(
    request: Audiobooks.GetMultipleAudiobooksRequest,
    options?: RequestOptions,
  ): ApiPromise<ManyAudiobooks, Audiobooks.GetMultipleAudiobooksError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/audiobooks"),
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
        success: { kind: "json", schema: manyAudiobooksSchema },
        errorFactory: Audiobooks.GetMultipleAudiobooksError,
      },
      options,
    );
  }

  /**
   * Get User's Saved Audiobooks
   *
   * @remarks
   * Get a list of the audiobooks saved in the current Spotify user's 'Your Music' library.
   *
   * @returns Pages of saved audiobooks
   *
   * @throws {@link Audiobooks.GetUsersSavedAudiobooksError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getUsersSavedAudiobooks(
    request: Audiobooks.GetUsersSavedAudiobooksRequest,
    options?: RequestOptions,
  ): ApiPromise<PagingSavedAudiobookObject, Audiobooks.GetUsersSavedAudiobooksError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/me/audiobooks"),
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
        success: { kind: "json", schema: pagingSavedAudiobookObjectSchema },
        errorFactory: Audiobooks.GetUsersSavedAudiobooksError,
      },
      options,
    );
  }

  /**
   * Remove User's Saved Audiobooks
   *
   * @remarks
   * Remove one or more audiobooks from the Spotify user's library.
   *
   * @returns Audiobook(s) have been removed from the library
   *
   * @throws {@link Audiobooks.RemoveAudiobooksUserError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  removeAudiobooksUser(
    request: Audiobooks.RemoveAudiobooksUserRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Audiobooks.RemoveAudiobooksUserError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/me/audiobooks"),
        auth: this.#auth.oauth20,
        pathParams: [],
        query: [{ name: "ids", value: request.ids, schema: s.string() }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Audiobooks.RemoveAudiobooksUserError,
      },
      options,
    );
  }

  /**
   * Save Audiobooks for Current User
   *
   * @remarks
   * Save one or more audiobooks to the current Spotify user's library.
   *
   * @returns Audiobook(s) are saved to the library
   *
   * @throws {@link Audiobooks.SaveAudiobooksUserError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  saveAudiobooksUser(
    request: Audiobooks.SaveAudiobooksUserRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Audiobooks.SaveAudiobooksUserError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/me/audiobooks"),
        auth: this.#auth.oauth20,
        pathParams: [],
        query: [{ name: "ids", value: request.ids, schema: s.string() }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Audiobooks.SaveAudiobooksUserError,
      },
      options,
    );
  }
}

export namespace Audiobooks {
  export type CheckUsersSavedAudiobooksRequest = {
    ids: string;
  };

  export class CheckUsersSavedAudiobooksError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<CheckUsersSavedAudiobooksError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type GetAnAudiobookRequest = {
    id: string;
    market?: string;
  };

  export class GetAnAudiobookError extends ApiError {
    declare readonly payload:
      | Declared<"badRequest1", BadRequest1>
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"notFound1", NotFound1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAnAudiobookError> = [
      { on: 400, kind: "badRequest1", decode: { kind: "json", schema: badRequest1Schema } },
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 404, kind: "notFound1", decode: { kind: "json", schema: notFound1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type GetAudiobookChaptersRequest = {
    id: string;
    market?: string;
    /** @default 20 */
    limit?: number;
    /** @default 0 */
    offset?: number;
  };

  export class GetAudiobookChaptersError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAudiobookChaptersError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type GetMultipleAudiobooksRequest = {
    ids: string;
    market?: string;
  };

  export class GetMultipleAudiobooksError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetMultipleAudiobooksError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type GetUsersSavedAudiobooksRequest = {
    /** @default 20 */
    limit?: number;
    /** @default 0 */
    offset?: number;
  };

  export class GetUsersSavedAudiobooksError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetUsersSavedAudiobooksError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type RemoveAudiobooksUserRequest = {
    ids: string;
  };

  export class RemoveAudiobooksUserError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<RemoveAudiobooksUserError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type SaveAudiobooksUserRequest = {
    ids: string;
  };

  export class SaveAudiobooksUserError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<SaveAudiobooksUserError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }
}
