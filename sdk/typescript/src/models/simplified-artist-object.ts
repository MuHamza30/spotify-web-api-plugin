import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { externalUrlObjectSchema, type ExternalUrlObject } from "./external-url-object.js";
import { typeSchema, type Type } from "./type.js";

export type SimplifiedArtistObject = {
  /** Known external URLs for this artist. */
  externalUrls?: ExternalUrlObject;
  /** A link to the Web API endpoint providing full details of the artist. */
  href?: string;
  /**
   * The [Spotify ID](https://developer.spotify.com/documentation/web-api/concepts/spotify-uris-ids)
   * for the artist.
   */
  id?: string;
  /** The name of the artist. */
  name?: string;
  /** The object type. */
  type?: Type;
  /**
   * The [Spotify
   * URI](https://developer.spotify.com/documentation/web-api/concepts/spotify-uris-ids) for the
   * artist.
   */
  uri?: string;
};

export const simplifiedArtistObjectSchema: Schema<SimplifiedArtistObject> = s.object<SimplifiedArtistObject>({
  externalUrls: s.optional(s.lazy(() => externalUrlObjectSchema)),
  href: s.optional(s.string()),
  id: s.optional(s.string()),
  name: s.optional(s.string()),
  type: s.optional(s.lazy(() => typeSchema)),
  uri: s.optional(s.string()),
  _keysMap: {
    externalUrls: "external_urls",
  },
});
