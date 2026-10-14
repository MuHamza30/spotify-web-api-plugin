import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ExternalUrlObject = {
  /**
   * The [Spotify
   * URL](https://developer.spotify.com/documentation/web-api/concepts/spotify-uris-ids) for the
   * object.
   */
  spotify?: string;
};

export const externalUrlObjectSchema: Schema<ExternalUrlObject> = s.object<ExternalUrlObject>({
  spotify: s.optional(s.string()),
});
