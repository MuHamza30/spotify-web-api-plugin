import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RemoveShowsRequest = {
  /**
   * A JSON array of the [Spotify
   * IDs](https://developer.spotify.comhttps://developer.spotify.com/documentation/web-api/#spotify-uris-and-ids).
   * A maximum of 50 items can be specified in one request. *Note: if the `ids` parameter is present
   * in the query string, any IDs listed here in the body will be ignored.*
   */
  ids?: string[];
};

export const removeShowsRequestSchema: Schema<RemoveShowsRequest> = s.object<RemoveShowsRequest>({
  ids: s.optional(s.array(s.string())),
});
