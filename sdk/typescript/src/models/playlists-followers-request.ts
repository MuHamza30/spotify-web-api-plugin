import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlaylistsFollowersRequest = {
  /**
   * Defaults to `true`. If `true` the playlist will be included in user's public playlists, if
   * `false` it will remain private.
   */
  public?: boolean;
};

export const playlistsFollowersRequestSchema: Schema<PlaylistsFollowersRequest> =
  s.object<PlaylistsFollowersRequest>({
    public: s.optional(s.boolean()),
  });
