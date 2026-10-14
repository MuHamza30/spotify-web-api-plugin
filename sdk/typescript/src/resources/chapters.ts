import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { chapterObjectSchema, type ChapterObject } from "../models/chapter-object.js";
import { forbidden1Schema, type Forbidden1 } from "../models/forbidden1.js";
import { manyChaptersSchema, type ManyChapters } from "../models/many-chapters.js";
import {
  pagingSimplifiedChapterObjectSchema,
  type PagingSimplifiedChapterObject,
} from "../models/paging-simplified-chapter-object.js";
import { tooManyRequests1Schema, type TooManyRequests1 } from "../models/too-many-requests1.js";
import { unauthorized1Schema, type Unauthorized1 } from "../models/unauthorized1.js";
import type { Servers } from "../servers.js";

export class Chapters {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get a Chapter
   *
   * @remarks
   * Get Spotify catalog information for a single audiobook chapter. Chapters are only available
   * within the US, UK, Canada, Ireland, New Zealand and Australia markets.
   *
   * @returns A Chapter
   *
   * @throws {@link Chapters.GetAChapterError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAChapter(
    request: Chapters.GetAChapterRequest,
    options?: RequestOptions,
  ): ApiPromise<ChapterObject, Chapters.GetAChapterError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/chapters/{id}"),
        auth: this.#auth.oauth20,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [{ name: "market", value: request.market, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: chapterObjectSchema },
        errorFactory: Chapters.GetAChapterError,
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
   * @throws {@link Chapters.GetAudiobookChaptersError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAudiobookChapters(
    request: Chapters.GetAudiobookChaptersRequest,
    options?: RequestOptions,
  ): ApiPromise<PagingSimplifiedChapterObject, Chapters.GetAudiobookChaptersError> {
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
        errorFactory: Chapters.GetAudiobookChaptersError,
      },
      options,
    );
  }

  /**
   * Get Several Chapters
   *
   * @remarks
   * Get Spotify catalog information for several audiobook chapters identified by their Spotify IDs.
   * Chapters are only available within the US, UK, Canada, Ireland, New Zealand and Australia
   * markets.
   *
   * @returns A set of chapters
   *
   * @throws {@link Chapters.GetSeveralChaptersError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSeveralChapters(
    request: Chapters.GetSeveralChaptersRequest,
    options?: RequestOptions,
  ): ApiPromise<ManyChapters, Chapters.GetSeveralChaptersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/chapters"),
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
        success: { kind: "json", schema: manyChaptersSchema },
        errorFactory: Chapters.GetSeveralChaptersError,
      },
      options,
    );
  }
}

export namespace Chapters {
  export type GetAChapterRequest = {
    id: string;
    market?: string;
  };

  export class GetAChapterError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAChapterError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
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

  export type GetSeveralChaptersRequest = {
    ids: string;
    market?: string;
  };

  export class GetSeveralChaptersError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetSeveralChaptersError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }
}
