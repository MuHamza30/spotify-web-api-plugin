import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { copyrightObjectSchema, type CopyrightObject } from "./copyright-object.js";
import { externalUrlObjectSchema, type ExternalUrlObject } from "./external-url-object.js";
import { imageObjectSchema, type ImageObject } from "./image-object.js";
import { type6Schema, type Type6 } from "./type6.js";

export type ShowBase = {
  /**
   * A list of the countries in which the show can be played, identified by their [ISO 3166-1
   * alpha-2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code.
   */
  availableMarkets: string[];
  /** The copyright statements of the show. */
  copyrights: CopyrightObject[];
  /**
   * A description of the show. HTML tags are stripped away from this field, use `html_description`
   * field in case HTML tags are needed.
   */
  description: string;
  /** A description of the show. This field may contain HTML tags. */
  htmlDescription: string;
  /**
   * Whether or not the show has explicit content (true = yes it does; false = no it does not OR
   * unknown).
   */
  explicit: boolean;
  /** External URLs for this show. */
  externalUrls: ExternalUrlObject;
  /** A link to the Web API endpoint providing full details of the show. */
  href: string;
  /**
   * The [Spotify ID](https://developer.spotify.com/documentation/web-api/concepts/spotify-uris-ids)
   * for the show.
   */
  id: string;
  /** The cover art for the show in various sizes, widest first. */
  images: ImageObject[];
  /**
   * True if all of the shows episodes are hosted outside of Spotify's CDN. This field might be
   * `null` in some cases.
   */
  isExternallyHosted: boolean;
  /**
   * A list of the languages used in the show, identified by their [ISO
   * 639](https://en.wikipedia.org/wiki/ISO_639) code.
   */
  languages: string[];
  /** The media type of the show. */
  mediaType: string;
  /** The name of the episode. */
  name: string;
  /** The publisher of the show. */
  publisher: string;
  /** The object type. */
  type: Type6;
  /**
   * The [Spotify
   * URI](https://developer.spotify.com/documentation/web-api/concepts/spotify-uris-ids) for the
   * show.
   */
  uri: string;
  /** The total number of episodes in the show. */
  totalEpisodes: number;
};

export const showBaseSchema: Schema<ShowBase> = s.object<ShowBase>({
  availableMarkets: s.array(s.string()),
  copyrights: s.array(s.lazy(() => copyrightObjectSchema)),
  description: s.string(),
  htmlDescription: s.string(),
  explicit: s.boolean(),
  externalUrls: externalUrlObjectSchema,
  href: s.string(),
  id: s.string(),
  images: s.array(s.lazy(() => imageObjectSchema)),
  isExternallyHosted: s.boolean(),
  languages: s.array(s.string()),
  mediaType: s.string(),
  name: s.string(),
  publisher: s.string(),
  type: type6Schema,
  uri: s.string(),
  totalEpisodes: s.int(),
  _keysMap: {
    availableMarkets: "available_markets",
    htmlDescription: "html_description",
    externalUrls: "external_urls",
    isExternallyHosted: "is_externally_hosted",
    mediaType: "media_type",
    totalEpisodes: "total_episodes",
  },
});
