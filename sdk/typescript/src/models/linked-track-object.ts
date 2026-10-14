import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { externalUrlObjectSchema, type ExternalUrlObject } from "./external-url-object.js";

export type LinkedTrackObject = {
  /** Known external URLs for this track. */
  externalUrls?: ExternalUrlObject;
  /** A link to the Web API endpoint providing full details of the track. */
  href?: string;
  /**
   * The [Spotify ID](https://developer.spotify.com/documentation/web-api/concepts/spotify-uris-ids)
   * for the track.
   */
  id?: string;
  /** The object type: "track". */
  type?: string;
  /**
   * The [Spotify
   * URI](https://developer.spotify.com/documentation/web-api/concepts/spotify-uris-ids) for the
   * track.
   */
  uri?: string;
};

export const linkedTrackObjectSchema: Schema<LinkedTrackObject> = s.object<LinkedTrackObject>({
  externalUrls: s.optional(s.lazy(() => externalUrlObjectSchema)),
  href: s.optional(s.string()),
  id: s.optional(s.string()),
  type: s.optional(s.string()),
  uri: s.optional(s.string()),
  _keysMap: {
    externalUrls: "external_urls",
  },
});
