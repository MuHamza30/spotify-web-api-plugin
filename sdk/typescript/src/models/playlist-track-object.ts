import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { playlistUserObjectSchema, type PlaylistUserObject } from "./playlist-user-object.js";
import { track2Schema, type Track2 } from "./unions/track2.js";

export type PlaylistTrackObject = {
  /**
   * The date and time the track or episode was added. _**Note**: some very old playlists may return
   * `null` in this field._
   */
  addedAt?: Date;
  /**
   * The Spotify user who added the track or episode. _**Note**: some very old playlists may return
   * `null` in this field._
   */
  addedBy?: PlaylistUserObject;
  /**
   * Whether this track or episode is a [local
   * file](https://developer.spotify.com/documentation/web-api/concepts/playlists/#local-files) or
   * not.
   */
  isLocal?: boolean;
  /** Information about the track or episode. */
  track?: Track2;
};

export const playlistTrackObjectSchema: Schema<PlaylistTrackObject> = s.object<PlaylistTrackObject>({
  addedAt: s.optional(s.dateTime()),
  addedBy: s.optional(s.lazy(() => playlistUserObjectSchema)),
  isLocal: s.optional(s.boolean()),
  track: s.optional(s.lazy(() => track2Schema)),
  _keysMap: {
    addedAt: "added_at",
    addedBy: "added_by",
    isLocal: "is_local",
  },
});
