import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  chapterRestrictionObjectSchema,
  type ChapterRestrictionObject,
} from "./chapter-restriction-object.js";
import { externalUrlObjectSchema, type ExternalUrlObject } from "./external-url-object.js";
import { imageObjectSchema, type ImageObject } from "./image-object.js";
import { releaseDatePrecisionSchema, type ReleaseDatePrecision } from "./release-date-precision.js";
import { resumePointObjectSchema, type ResumePointObject } from "./resume-point-object.js";
import { type5Schema, type Type5 } from "./type5.js";

export type ChapterBase = {
  /** A URL to a 30 second preview (MP3 format) of the chapter. `null` if not available. */
  audioPreviewUrl: string | null;
  /**
   * A list of the countries in which the chapter can be played, identified by their [ISO 3166-1
   * alpha-2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code.
   */
  availableMarkets?: string[];
  /** The number of the chapter */
  chapterNumber: number;
  /**
   * A description of the chapter. HTML tags are stripped away from this field, use
   * `html_description` field in case HTML tags are needed.
   */
  description: string;
  /** A description of the chapter. This field may contain HTML tags. */
  htmlDescription: string;
  /** The chapter length in milliseconds. */
  durationMs: number;
  /**
   * Whether or not the chapter has explicit content (true = yes it does; false = no it does not OR
   * unknown).
   */
  explicit: boolean;
  /** External URLs for this chapter. */
  externalUrls: ExternalUrlObject;
  /** A link to the Web API endpoint providing full details of the chapter. */
  href: string;
  /**
   * The [Spotify ID](https://developer.spotify.com/documentation/web-api/concepts/spotify-uris-ids)
   * for the chapter.
   */
  id: string;
  /** The cover art for the chapter in various sizes, widest first. */
  images: ImageObject[];
  /** True if the chapter is playable in the given market. Otherwise false. */
  isPlayable: boolean;
  /**
   * A list of the languages used in the chapter, identified by their [ISO
   * 639-1](https://en.wikipedia.org/wiki/ISO_639) code.
   */
  languages: string[];
  /** The name of the chapter. */
  name: string;
  /**
   * The date the chapter was first released, for example `"1981-12-15"`. Depending on the
   * precision, it might be shown as `"1981"` or `"1981-12"`.
   */
  releaseDate: string;
  /** The precision with which `release_date` value is known. */
  releaseDatePrecision: ReleaseDatePrecision;
  /**
   * The user's most recent position in the chapter. Set if the supplied access token is a user
   * token and has the scope 'user-read-playback-position'.
   */
  resumePoint?: ResumePointObject;
  /** The object type. */
  type: Type5;
  /**
   * The [Spotify
   * URI](https://developer.spotify.com/documentation/web-api/concepts/spotify-uris-ids) for the
   * chapter.
   */
  uri: string;
  /** Included in the response when a content restriction is applied. */
  restrictions?: ChapterRestrictionObject;
};

export const chapterBaseSchema: Schema<ChapterBase> = s.object<ChapterBase>({
  audioPreviewUrl: s.nullable(s.string()),
  availableMarkets: s.optional(s.array(s.string())),
  chapterNumber: s.int(),
  description: s.string(),
  htmlDescription: s.string(),
  durationMs: s.int(),
  explicit: s.boolean(),
  externalUrls: externalUrlObjectSchema,
  href: s.string(),
  id: s.string(),
  images: s.array(s.lazy(() => imageObjectSchema)),
  isPlayable: s.boolean(),
  languages: s.array(s.string()),
  name: s.string(),
  releaseDate: s.string(),
  releaseDatePrecision: releaseDatePrecisionSchema,
  resumePoint: s.optional(s.lazy(() => resumePointObjectSchema)),
  type: type5Schema,
  uri: s.string(),
  restrictions: s.optional(s.lazy(() => chapterRestrictionObjectSchema)),
  _keysMap: {
    audioPreviewUrl: "audio_preview_url",
    availableMarkets: "available_markets",
    chapterNumber: "chapter_number",
    htmlDescription: "html_description",
    durationMs: "duration_ms",
    externalUrls: "external_urls",
    isPlayable: "is_playable",
    releaseDate: "release_date",
    releaseDatePrecision: "release_date_precision",
    resumePoint: "resume_point",
  },
});
