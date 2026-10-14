import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { externalUrlObjectSchema, type ExternalUrlObject } from "./external-url-object.js";
import { followersObjectSchema, type FollowersObject } from "./followers-object.js";
import { imageObjectSchema, type ImageObject } from "./image-object.js";
import { typeSchema, type Type } from "./type.js";

export type ArtistObject = {
  /** Known external URLs for this artist. */
  externalUrls?: ExternalUrlObject;
  /** Information about the followers of the artist. */
  followers?: FollowersObject;
  /**
   * A list of the genres the artist is associated with. If not yet classified, the array is empty.
   */
  genres?: string[];
  /** A link to the Web API endpoint providing full details of the artist. */
  href?: string;
  /**
   * The [Spotify ID](https://developer.spotify.com/documentation/web-api/concepts/spotify-uris-ids)
   * for the artist.
   */
  id?: string;
  /** Images of the artist in various sizes, widest first. */
  images?: ImageObject[];
  /** The name of the artist. */
  name?: string;
  /**
   * The popularity of the artist. The value will be between 0 and 100, with 100 being the most
   * popular. The artist's popularity is calculated from the popularity of all the artist's tracks.
   */
  popularity?: number;
  /** The object type. */
  type?: Type;
  /**
   * The [Spotify
   * URI](https://developer.spotify.com/documentation/web-api/concepts/spotify-uris-ids) for the
   * artist.
   */
  uri?: string;
};

export const artistObjectSchema: Schema<ArtistObject> = s.object<ArtistObject>({
  externalUrls: s.optional(s.lazy(() => externalUrlObjectSchema)),
  followers: s.optional(s.lazy(() => followersObjectSchema)),
  genres: s.optional(s.array(s.string())),
  href: s.optional(s.string()),
  id: s.optional(s.string()),
  images: s.optional(s.array(s.lazy(() => imageObjectSchema))),
  name: s.optional(s.string()),
  popularity: s.optional(s.int()),
  type: s.optional(s.lazy(() => typeSchema)),
  uri: s.optional(s.string()),
  _keysMap: {
    externalUrls: "external_urls",
  },
});
