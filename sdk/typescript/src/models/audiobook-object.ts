import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authorObjectSchema, type AuthorObject } from "./author-object.js";
import { copyrightObjectSchema, type CopyrightObject } from "./copyright-object.js";
import { externalUrlObjectSchema, type ExternalUrlObject } from "./external-url-object.js";
import { imageObjectSchema, type ImageObject } from "./image-object.js";
import { narratorObjectSchema, type NarratorObject } from "./narrator-object.js";
import {
  pagingSimplifiedChapterObjectSchema,
  type PagingSimplifiedChapterObject,
} from "./paging-simplified-chapter-object.js";
import { type9Schema, type Type9 } from "./type9.js";

export type AudiobookObject = {
  /** The author(s) for the audiobook. */
  authors: AuthorObject[];
  /**
   * A list of the countries in which the audiobook can be played, identified by their [ISO 3166-1
   * alpha-2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code.
   */
  availableMarkets: string[];
  /** The copyright statements of the audiobook. */
  copyrights: CopyrightObject[];
  /**
   * A description of the audiobook. HTML tags are stripped away from this field, use
   * `html_description` field in case HTML tags are needed.
   */
  description: string;
  /** A description of the audiobook. This field may contain HTML tags. */
  htmlDescription: string;
  /** The edition of the audiobook. */
  edition?: string;
  /**
   * Whether or not the audiobook has explicit content (true = yes it does; false = no it does not
   * OR unknown).
   */
  explicit: boolean;
  /** External URLs for this audiobook. */
  externalUrls: ExternalUrlObject;
  /** A link to the Web API endpoint providing full details of the audiobook. */
  href: string;
  /**
   * The [Spotify ID](https://developer.spotify.com/documentation/web-api/concepts/spotify-uris-ids)
   * for the audiobook.
   */
  id: string;
  /** The cover art for the audiobook in various sizes, widest first. */
  images: ImageObject[];
  /**
   * A list of the languages used in the audiobook, identified by their [ISO
   * 639](https://en.wikipedia.org/wiki/ISO_639) code.
   */
  languages: string[];
  /** The media type of the audiobook. */
  mediaType: string;
  /** The name of the audiobook. */
  name: string;
  /** The narrator(s) for the audiobook. */
  narrators: NarratorObject[];
  /** The publisher of the audiobook. */
  publisher: string;
  /** The object type. */
  type: Type9;
  /**
   * The [Spotify
   * URI](https://developer.spotify.com/documentation/web-api/concepts/spotify-uris-ids) for the
   * audiobook.
   */
  uri: string;
  /** The number of chapters in this audiobook. */
  totalChapters: number;
  /** The chapters of the audiobook. */
  chapters: PagingSimplifiedChapterObject;
};

export const audiobookObjectSchema: Schema<AudiobookObject> = s.object<AudiobookObject>({
  authors: s.array(s.lazy(() => authorObjectSchema)),
  availableMarkets: s.array(s.string()),
  copyrights: s.array(s.lazy(() => copyrightObjectSchema)),
  description: s.string(),
  htmlDescription: s.string(),
  edition: s.optional(s.string()),
  explicit: s.boolean(),
  externalUrls: externalUrlObjectSchema,
  href: s.string(),
  id: s.string(),
  images: s.array(s.lazy(() => imageObjectSchema)),
  languages: s.array(s.string()),
  mediaType: s.string(),
  name: s.string(),
  narrators: s.array(s.lazy(() => narratorObjectSchema)),
  publisher: s.string(),
  type: type9Schema,
  uri: s.string(),
  totalChapters: s.int(),
  chapters: pagingSimplifiedChapterObjectSchema,
  _keysMap: {
    availableMarkets: "available_markets",
    htmlDescription: "html_description",
    externalUrls: "external_urls",
    mediaType: "media_type",
    totalChapters: "total_chapters",
  },
});
