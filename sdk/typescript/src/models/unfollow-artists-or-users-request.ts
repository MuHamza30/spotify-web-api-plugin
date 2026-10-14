import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UnfollowArtistsOrUsersRequest = {
  /**
   * A JSON array of the artist or user [Spotify
   * IDs](https://developer.spotify.com/documentation/web-api/concepts/spotify-uris-ids). For
   * example: `{ids:["74ASZWbe4lXaubB36ztrGX", "08td7MxkoHQkXnWAYD8d6Q"]}`. A maximum of 50 IDs can
   * be sent in one request. _**Note**: if the `ids` parameter is present in the query string, any
   * IDs listed here in the body will be ignored._
   */
  ids?: string[];
};

export const unfollowArtistsOrUsersRequestSchema: Schema<UnfollowArtistsOrUsersRequest> =
  s.object<UnfollowArtistsOrUsersRequest>({
    ids: s.optional(s.array(s.string())),
  });
