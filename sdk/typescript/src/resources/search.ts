import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { forbidden1Schema, type Forbidden1 } from "../models/forbidden1.js";
import { includeExternalSchema, type IncludeExternal } from "../models/include-external.js";
import { itemTypeSchema, type ItemType } from "../models/item-type.js";
import { searchItemsSchema, type SearchItems } from "../models/search-items.js";
import { tooManyRequests1Schema, type TooManyRequests1 } from "../models/too-many-requests1.js";
import { unauthorized1Schema, type Unauthorized1 } from "../models/unauthorized1.js";
import type { Servers } from "../servers.js";

export class Search {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Search for Item
   *
   * @remarks
   * Get Spotify catalog information about albums, artists, playlists, tracks, shows, episodes or
   * audiobooks that match a keyword string. Audiobooks are only available within the US, UK,
   * Canada, Ireland, New Zealand and Australia markets.
   *
   * @returns Search response
   *
   * @throws {@link Search.SearchError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  search(
    request: Search.SearchRequest,
    options?: RequestOptions,
  ): ApiPromise<SearchItems, Search.SearchError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/search"),
        auth: this.#auth.oauth20,
        pathParams: [],
        query: [
          { name: "q", value: request.q, schema: s.string() },
          { name: "type", value: request.type, schema: s.array(s.lazy(() => itemTypeSchema)) },
          { name: "market", value: request.market, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 20) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.int(), 0) },
          {
            name: "include_external",
            value: request.includeExternal,
            schema: s.optional(s.lazy(() => includeExternalSchema)),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: searchItemsSchema },
        errorFactory: Search.SearchError,
      },
      options,
    );
  }
}

export namespace Search {
  export type SearchRequest = {
    q: string;
    type: ItemType[];
    market?: string;
    /** @default 20 */
    limit?: number;
    /** @default 0 */
    offset?: number;
    includeExternal?: IncludeExternal;
  };

  export class SearchError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<SearchError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }
}
