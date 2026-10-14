import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { albumObjectSchema, type AlbumObject } from "../models/album-object.js";
import { forbidden1Schema, type Forbidden1 } from "../models/forbidden1.js";
import { manyAlbumsSchema, type ManyAlbums } from "../models/many-albums.js";
import { pagedAlbumsSchema, type PagedAlbums } from "../models/paged-albums.js";
import {
  pagingArtistDiscographyAlbumObjectSchema,
  type PagingArtistDiscographyAlbumObject,
} from "../models/paging-artist-discography-album-object.js";
import {
  pagingSavedAlbumObjectSchema,
  type PagingSavedAlbumObject,
} from "../models/paging-saved-album-object.js";
import {
  pagingSimplifiedTrackObjectSchema,
  type PagingSimplifiedTrackObject,
} from "../models/paging-simplified-track-object.js";
import { removeAlbumsRequestSchema, type RemoveAlbumsRequest } from "../models/remove-albums-request.js";
import { saveAlbumsRequestSchema, type SaveAlbumsRequest } from "../models/save-albums-request.js";
import { tooManyRequests1Schema, type TooManyRequests1 } from "../models/too-many-requests1.js";
import { unauthorized1Schema, type Unauthorized1 } from "../models/unauthorized1.js";
import type { Servers } from "../servers.js";

export class Albums {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Check User's Saved Albums
   *
   * @remarks
   * Check if one or more albums is already saved in the current Spotify user's 'Your Music'
   * library.
   *
   * @returns Array of booleans
   *
   * @throws {@link Albums.CheckUsersSavedAlbumsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  checkUsersSavedAlbums(
    request: Albums.CheckUsersSavedAlbumsRequest,
    options?: RequestOptions,
  ): ApiPromise<boolean[], Albums.CheckUsersSavedAlbumsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/me/albums/contains"),
        auth: this.#auth.oauth20,
        pathParams: [],
        query: [{ name: "ids", value: request.ids, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.boolean()) },
        errorFactory: Albums.CheckUsersSavedAlbumsError,
      },
      options,
    );
  }

  /**
   * Get Album
   *
   * @remarks
   * Get Spotify catalog information for a single album.
   *
   * @returns An album
   *
   * @throws {@link Albums.GetAnAlbumError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAnAlbum(
    request: Albums.GetAnAlbumRequest,
    options?: RequestOptions,
  ): ApiPromise<AlbumObject, Albums.GetAnAlbumError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/albums/{id}"),
        auth: this.#auth.oauth20,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [{ name: "market", value: request.market, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: albumObjectSchema },
        errorFactory: Albums.GetAnAlbumError,
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
   * @throws {@link Albums.GetAnAlbumsTracksError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAnAlbumsTracks(
    request: Albums.GetAnAlbumsTracksRequest,
    options?: RequestOptions,
  ): ApiPromise<PagingSimplifiedTrackObject, Albums.GetAnAlbumsTracksError> {
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
        errorFactory: Albums.GetAnAlbumsTracksError,
      },
      options,
    );
  }

  /**
   * Get Artist's Albums
   *
   * @remarks
   * Get Spotify catalog information about an artist's albums.
   *
   * @returns Pages of albums
   *
   * @throws {@link Albums.GetAnArtistsAlbumsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAnArtistsAlbums(
    request: Albums.GetAnArtistsAlbumsRequest,
    options?: RequestOptions,
  ): ApiPromise<PagingArtistDiscographyAlbumObject, Albums.GetAnArtistsAlbumsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/artists/{id}/albums"),
        auth: this.#auth.oauth20,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [
          { name: "include_groups", value: request.includeGroups, schema: s.optional(s.string()) },
          { name: "market", value: request.market, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 20) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.int(), 0) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pagingArtistDiscographyAlbumObjectSchema },
        errorFactory: Albums.GetAnArtistsAlbumsError,
      },
      options,
    );
  }

  /**
   * Get Several Albums
   *
   * @remarks
   * Get Spotify catalog information for multiple albums identified by their Spotify IDs.
   *
   * @returns A set of albums
   *
   * @throws {@link Albums.GetMultipleAlbumsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMultipleAlbums(
    request: Albums.GetMultipleAlbumsRequest,
    options?: RequestOptions,
  ): ApiPromise<ManyAlbums, Albums.GetMultipleAlbumsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/albums"),
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
        success: { kind: "json", schema: manyAlbumsSchema },
        errorFactory: Albums.GetMultipleAlbumsError,
      },
      options,
    );
  }

  /**
   * Get New Releases
   *
   * @remarks
   * Get a list of new album releases featured in Spotify (shown, for example, on a Spotify player’s
   * “Browse” tab).
   *
   * @returns A paged set of albums
   *
   * @throws {@link Albums.GetNewReleasesError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getNewReleases(
    request: Albums.GetNewReleasesRequest,
    options?: RequestOptions,
  ): ApiPromise<PagedAlbums, Albums.GetNewReleasesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/browse/new-releases"),
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
        success: { kind: "json", schema: pagedAlbumsSchema },
        errorFactory: Albums.GetNewReleasesError,
      },
      options,
    );
  }

  /**
   * Get User's Saved Albums
   *
   * @remarks
   * Get a list of the albums saved in the current Spotify user's 'Your Music' library.
   *
   * @returns Pages of albums
   *
   * @throws {@link Albums.GetUsersSavedAlbumsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getUsersSavedAlbums(
    request: Albums.GetUsersSavedAlbumsRequest,
    options?: RequestOptions,
  ): ApiPromise<PagingSavedAlbumObject, Albums.GetUsersSavedAlbumsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/me/albums"),
        auth: this.#auth.oauth20,
        pathParams: [],
        query: [
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 20) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.int(), 0) },
          { name: "market", value: request.market, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pagingSavedAlbumObjectSchema },
        errorFactory: Albums.GetUsersSavedAlbumsError,
      },
      options,
    );
  }

  /**
   * Remove Users' Saved Albums
   *
   * @remarks
   * Remove one or more albums from the current user's 'Your Music' library.
   *
   * @returns Album(s) have been removed from the library
   *
   * @throws {@link Albums.RemoveAlbumsUserError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  removeAlbumsUser(
    request: Albums.RemoveAlbumsUserRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Albums.RemoveAlbumsUserError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/me/albums"),
        auth: this.#auth.oauth20,
        pathParams: [],
        query: [{ name: "ids", value: request.ids, schema: s.string() }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => removeAlbumsRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: Albums.RemoveAlbumsUserError,
      },
      options,
    );
  }

  /**
   * Save Albums for Current User
   *
   * @remarks
   * Save one or more albums to the current user's 'Your Music' library.
   *
   * @returns The album is saved
   *
   * @throws {@link Albums.SaveAlbumsUserError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  saveAlbumsUser(
    request: Albums.SaveAlbumsUserRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Albums.SaveAlbumsUserError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/me/albums"),
        auth: this.#auth.oauth20,
        pathParams: [],
        query: [{ name: "ids", value: request.ids, schema: s.string() }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => saveAlbumsRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: Albums.SaveAlbumsUserError,
      },
      options,
    );
  }
}

export namespace Albums {
  export type CheckUsersSavedAlbumsRequest = {
    ids: string;
  };

  export class CheckUsersSavedAlbumsError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<CheckUsersSavedAlbumsError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type GetAnAlbumRequest = {
    id: string;
    market?: string;
  };

  export class GetAnAlbumError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAnAlbumError> = [
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

  export type GetAnArtistsAlbumsRequest = {
    id: string;
    includeGroups?: string;
    market?: string;
    /** @default 20 */
    limit?: number;
    /** @default 0 */
    offset?: number;
  };

  export class GetAnArtistsAlbumsError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAnArtistsAlbumsError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type GetMultipleAlbumsRequest = {
    ids: string;
    market?: string;
  };

  export class GetMultipleAlbumsError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetMultipleAlbumsError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type GetNewReleasesRequest = {
    /** @default 20 */
    limit?: number;
    /** @default 0 */
    offset?: number;
  };

  export class GetNewReleasesError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetNewReleasesError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type GetUsersSavedAlbumsRequest = {
    /** @default 20 */
    limit?: number;
    /** @default 0 */
    offset?: number;
    market?: string;
  };

  export class GetUsersSavedAlbumsError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetUsersSavedAlbumsError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type RemoveAlbumsUserRequest = {
    ids: string;
    body?: RemoveAlbumsRequest;
  };

  export class RemoveAlbumsUserError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<RemoveAlbumsUserError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type SaveAlbumsUserRequest = {
    ids: string;
    body?: SaveAlbumsRequest;
  };

  export class SaveAlbumsUserError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<SaveAlbumsUserError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }
}
