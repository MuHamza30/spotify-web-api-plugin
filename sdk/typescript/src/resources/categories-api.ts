import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { categoryObjectSchema, type CategoryObject } from "../models/category-object.js";
import { forbidden1Schema, type Forbidden1 } from "../models/forbidden1.js";
import { pagedCategoriesSchema, type PagedCategories } from "../models/paged-categories.js";
import {
  pagingFeaturedPlaylistObjectSchema,
  type PagingFeaturedPlaylistObject,
} from "../models/paging-featured-playlist-object.js";
import { tooManyRequests1Schema, type TooManyRequests1 } from "../models/too-many-requests1.js";
import { unauthorized1Schema, type Unauthorized1 } from "../models/unauthorized1.js";
import type { Servers } from "../servers.js";

export class CategoriesApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get Category's Playlists
   *
   * @remarks
   * Get a list of Spotify playlists tagged with a particular category.
   *
   * @returns A paged set of playlists
   *
   * @throws {@link CategoriesApi.GetACategoriesPlaylistsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getACategoriesPlaylists(
    request: CategoriesApi.GetACategoriesPlaylistsRequest,
    options?: RequestOptions,
  ): ApiPromise<PagingFeaturedPlaylistObject, CategoriesApi.GetACategoriesPlaylistsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/browse/categories/{category_id}/playlists"),
        auth: this.#auth.oauth20,
        pathParams: [{ name: "category_id", value: request.categoryId, schema: s.string() }],
        query: [
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 20) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.int(), 0) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pagingFeaturedPlaylistObjectSchema },
        errorFactory: CategoriesApi.GetACategoriesPlaylistsError,
      },
      options,
    );
  }

  /**
   * Get Single Browse Category
   *
   * @remarks
   * Get a single category used to tag items in Spotify (on, for example, the Spotify player’s
   * “Browse” tab).
   *
   * @returns A category
   *
   * @throws {@link CategoriesApi.GetACategoryError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getACategory(
    request: CategoriesApi.GetACategoryRequest,
    options?: RequestOptions,
  ): ApiPromise<CategoryObject, CategoriesApi.GetACategoryError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/browse/categories/{category_id}"),
        auth: this.#auth.oauth20,
        pathParams: [{ name: "category_id", value: request.categoryId, schema: s.string() }],
        query: [{ name: "locale", value: request.locale, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: categoryObjectSchema },
        errorFactory: CategoriesApi.GetACategoryError,
      },
      options,
    );
  }

  /**
   * Get Several Browse Categories
   *
   * @remarks
   * Get a list of categories used to tag items in Spotify (on, for example, the Spotify player’s
   * “Browse” tab).
   *
   * @returns A paged set of categories
   *
   * @throws {@link CategoriesApi.GetCategoriesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCategories(
    request: CategoriesApi.GetCategoriesRequest,
    options?: RequestOptions,
  ): ApiPromise<PagedCategories, CategoriesApi.GetCategoriesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/browse/categories"),
        auth: this.#auth.oauth20,
        pathParams: [],
        query: [
          { name: "locale", value: request.locale, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 20) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.int(), 0) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pagedCategoriesSchema },
        errorFactory: CategoriesApi.GetCategoriesError,
      },
      options,
    );
  }
}

export namespace CategoriesApi {
  export type GetACategoriesPlaylistsRequest = {
    categoryId: string;
    /** @default 20 */
    limit?: number;
    /** @default 0 */
    offset?: number;
  };

  export class GetACategoriesPlaylistsError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetACategoriesPlaylistsError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type GetACategoryRequest = {
    categoryId: string;
    locale?: string;
  };

  export class GetACategoryError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetACategoryError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type GetCategoriesRequest = {
    locale?: string;
    /** @default 20 */
    limit?: number;
    /** @default 0 */
    offset?: number;
  };

  export class GetCategoriesError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCategoriesError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }
}
