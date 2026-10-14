import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  episodeRestrictionObjectSchema,
  type EpisodeRestrictionObject,
} from "./episode-restriction-object.js";
import { externalUrlObjectSchema, type ExternalUrlObject } from "./external-url-object.js";
import { imageObjectSchema, type ImageObject } from "./image-object.js";
import { releaseDatePrecisionSchema, type ReleaseDatePrecision } from "./release-date-precision.js";
import { resumePointObjectSchema, type ResumePointObject } from "./resume-point-object.js";
import { type5Schema, type Type5 } from "./type5.js";

export type EpisodeBase = {
  /** A URL to a 30 second preview (MP3 format) of the episode. `null` if not available. */
  audioPreviewUrl: string | null;
  /**
   * A description of the episode. HTML tags are stripped away from this field, use
   * `html_description` field in case HTML tags are needed.
   */
  description: string;
  /** A description of the episode. This field may contain HTML tags. */
  htmlDescription: string;
  /** The episode length in milliseconds. */
  durationMs: number;
  /**
   * Whether or not the episode has explicit content (true = yes it does; false = no it does not OR
   * unknown).
   */
  explicit: boolean;
  /** External URLs for this episode. */
  externalUrls: ExternalUrlObject;
  /** A link to the Web API endpoint providing full details of the episode. */
  href: string;
  /**
   * The [Spotify ID](https://developer.spotify.com/documentation/web-api/concepts/spotify-uris-ids)
   * for the episode.
   */
  id: string;
  /** The cover art for the episode in various sizes, widest first. */
  images: ImageObject[];
  /** True if the episode is hosted outside of Spotify's CDN. */
  isExternallyHosted: boolean;
  /** True if the episode is playable in the given market. Otherwise false. */
  isPlayable: boolean;
  /**
   * The language used in the episode, identified by a [ISO
   * 639](https://en.wikipedia.org/wiki/ISO_639) code. This field is deprecated and might be removed
   * in the future. Please use the `languages` field instead.
   *
   * @deprecated
   */
  language?: string;
  /**
   * A list of the languages used in the episode, identified by their [ISO
   * 639-1](https://en.wikipedia.org/wiki/ISO_639) code.
   */
  languages: string[];
  /** The name of the episode. */
  name: string;
  /**
   * The date the episode was first released, for example `"1981-12-15"`. Depending on the
   * precision, it might be shown as `"1981"` or `"1981-12"`.
   */
  releaseDate: string;
  /** The precision with which `release_date` value is known. */
  releaseDatePrecision: ReleaseDatePrecision;
  /**
   * The user's most recent position in the episode. Set if the supplied access token is a user
   * token and has the scope 'user-read-playback-position'.
   */
  resumePoint?: ResumePointObject;
  /** The object type. */
  type: Type5;
  /**
   * The [Spotify
   * URI](https://developer.spotify.com/documentation/web-api/concepts/spotify-uris-ids) for the
   * episode.
   */
  uri: string;
  /** Included in the response when a content restriction is applied. */
  restrictions?: EpisodeRestrictionObject;
};

export const episodeBaseSchema: Schema<EpisodeBase> = s.object<EpisodeBase>({
  audioPreviewUrl: s.nullable(s.string()),
  description: s.string(),
  htmlDescription: s.string(),
  durationMs: s.int(),
  explicit: s.boolean(),
  externalUrls: externalUrlObjectSchema,
  href: s.string(),
  id: s.string(),
  images: s.array(s.lazy(() => imageObjectSchema)),
  isExternallyHosted: s.boolean(),
  isPlayable: s.boolean(),
  language: s.optional(s.string()),
  languages: s.array(s.string()),
  name: s.string(),
  releaseDate: s.string(),
  releaseDatePrecision: releaseDatePrecisionSchema,
  resumePoint: s.optional(s.lazy(() => resumePointObjectSchema)),
  type: type5Schema,
  uri: s.string(),
  restrictions: s.optional(s.lazy(() => episodeRestrictionObjectSchema)),
  _keysMap: {
    audioPreviewUrl: "audio_preview_url",
    htmlDescription: "html_description",
    durationMs: "duration_ms",
    externalUrls: "external_urls",
    isExternallyHosted: "is_externally_hosted",
    isPlayable: "is_playable",
    releaseDate: "release_date",
    releaseDatePrecision: "release_date_precision",
    resumePoint: "resume_point",
  },
});
