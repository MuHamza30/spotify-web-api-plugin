import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type StartOrResumePlaybackRequest = {
  /**
   * Optional. Spotify URI of the context to play. Valid contexts are albums, artists & playlists.
   * `{context_uri:"spotify:album:1Je1IMUlBXcx1Fz0WE7oPT"}`
   */
  contextUri?: string;
  /**
   * Optional. A JSON array of the Spotify track URIs to play. For example: `{"uris":
   * ["spotify:track:4iV5W9uYEdYUVa79Axb7Rh", "spotify:track:1301WleyT98MSxVHPZCA6M"]}`
   */
  uris?: string[];
  /**
   * Optional. Indicates from where in the context playback should start. Only available when
   * context_uri corresponds to an album or playlist object "position" is zero based and can’t be
   * negative. Example: `"offset": {"position": 5}` "uri" is a string representing the uri of the
   * item to start at. Example: `"offset": {"uri": "spotify:track:1301WleyT98MSxVHPZCA6M"}`
   */
  offset?: Record<string, unknown>;
  /**
   * Indicates from what position to start playback. Must be a positive number. Passing in a
   * position that is greater than the length of the track will cause the player to start playing
   * the next song.
   */
  positionMs?: number;
};

export const startOrResumePlaybackRequestSchema: Schema<StartOrResumePlaybackRequest> =
  s.object<StartOrResumePlaybackRequest>({
    contextUri: s.optional(s.string()),
    uris: s.optional(s.array(s.string())),
    offset: s.optional(s.record(s.string(), s.unknown())),
    positionMs: s.optional(s.int()),
    _keysMap: {
      contextUri: "context_uri",
      positionMs: "position_ms",
    },
  });
