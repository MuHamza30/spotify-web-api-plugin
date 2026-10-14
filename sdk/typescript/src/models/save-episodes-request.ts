import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SaveEpisodesRequest = {
  /**
   * A JSON array of the [Spotify
   * IDs](https://developer.spotify.com/documentation/web-api/concepts/spotify-uris-ids). <br/>A
   * maximum of 50 items can be specified in one request. _**Note**: if the `ids` parameter is
   * present in the query string, any IDs listed here in the body will be ignored._
   */
  ids: string[];
};

export const saveEpisodesRequestSchema: Schema<SaveEpisodesRequest> = s.object<SaveEpisodesRequest>({
  ids: s.array(s.string()),
});
