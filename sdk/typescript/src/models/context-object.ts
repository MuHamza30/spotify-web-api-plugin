import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { externalUrlObjectSchema, type ExternalUrlObject } from "./external-url-object.js";

export type ContextObject = {
  /** The object type, e.g. "artist", "playlist", "album", "show". */
  type?: string;
  /** A link to the Web API endpoint providing full details of the track. */
  href?: string;
  /** External URLs for this context. */
  externalUrls?: ExternalUrlObject;
  /**
   * The [Spotify
   * URI](https://developer.spotify.com/documentation/web-api/concepts/spotify-uris-ids) for the
   * context.
   */
  uri?: string;
};

export const contextObjectSchema: Schema<ContextObject> = s.object<ContextObject>({
  type: s.optional(s.string()),
  href: s.optional(s.string()),
  externalUrls: s.optional(s.lazy(() => externalUrlObjectSchema)),
  uri: s.optional(s.string()),
  _keysMap: {
    externalUrls: "external_urls",
  },
});
