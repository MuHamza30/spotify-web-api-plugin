import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RemoveTracksRequest = {
  /**
   * A JSON array of the [Spotify
   * IDs](https://developer.spotify.com/documentation/web-api/concepts/spotify-uris-ids). For
   * example: `["4iV5W9uYEdYUVa79Axb7Rh", "1301WleyT98MSxVHPZCA6M"]`<br/>A maximum of 50 items can
   * be specified in one request. _**Note**: if the `ids` parameter is present in the query string,
   * any IDs listed here in the body will be ignored._
   */
  ids?: string[];
};

export const removeTracksRequestSchema: Schema<RemoveTracksRequest> = s.object<RemoveTracksRequest>({
  ids: s.optional(s.array(s.string())),
});
