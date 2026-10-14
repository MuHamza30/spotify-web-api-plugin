import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { externalUrlObjectSchema, type ExternalUrlObject } from "./external-url-object.js";
import { followersObjectSchema, type FollowersObject } from "./followers-object.js";
import { imageObjectSchema, type ImageObject } from "./image-object.js";
import {
  pagingPlaylistTrackObjectSchema,
  type PagingPlaylistTrackObject,
} from "./paging-playlist-track-object.js";
import { playlistOwnerObjectSchema, type PlaylistOwnerObject } from "./playlist-owner-object.js";

export type PlaylistObject = {
  /** `true` if the owner allows other users to modify the playlist. */
  collaborative?: boolean;
  /**
   * The playlist description. _Only returned for modified, verified playlists, otherwise_ `null`.
   */
  description?: string | null;
  /** Known external URLs for this playlist. */
  externalUrls?: ExternalUrlObject;
  /** Information about the followers of the playlist. */
  followers?: FollowersObject;
  /** A link to the Web API endpoint providing full details of the playlist. */
  href?: string;
  /**
   * The [Spotify ID](https://developer.spotify.com/documentation/web-api/concepts/spotify-uris-ids)
   * for the playlist.
   */
  id?: string;
  /**
   * Images for the playlist. The array may be empty or contain up to three images. The images are
   * returned by size in descending order. See [Working with
   * Playlists](https://developer.spotify.com/documentation/web-api/concepts/playlists). _**Note**:
   * If returned, the source URL for the image (`url`) is temporary and will expire in less than a
   * day._
   */
  images?: ImageObject[];
  /** The name of the playlist. */
  name?: string;
  /** The user who owns the playlist */
  owner?: PlaylistOwnerObject;
  /**
   * The playlist's public/private status: `true` the playlist is public, `false` the playlist is
   * private, `null` the playlist status is not relevant. For more about public/private status, see
   * [Working with
   * Playlists](https://developer.spotify.com/documentation/web-api/concepts/playlists)
   */
  public?: boolean;
  /**
   * The version identifier for the current playlist. Can be supplied in other requests to target a
   * specific playlist version
   */
  snapshotId?: string;
  /** The tracks of the playlist. */
  tracks?: PagingPlaylistTrackObject;
  /** The object type: "playlist" */
  type?: string;
  /**
   * The [Spotify
   * URI](https://developer.spotify.com/documentation/web-api/concepts/spotify-uris-ids) for the
   * playlist.
   */
  uri?: string;
};

export const playlistObjectSchema: Schema<PlaylistObject> = s.object<PlaylistObject>({
  collaborative: s.optional(s.boolean()),
  description: s.optionalNullable(s.string()),
  externalUrls: s.optional(s.lazy(() => externalUrlObjectSchema)),
  followers: s.optional(s.lazy(() => followersObjectSchema)),
  href: s.optional(s.string()),
  id: s.optional(s.string()),
  images: s.optional(s.array(s.lazy(() => imageObjectSchema))),
  name: s.optional(s.string()),
  owner: s.optional(s.lazy(() => playlistOwnerObjectSchema)),
  public: s.optional(s.boolean()),
  snapshotId: s.optional(s.string()),
  tracks: s.optional(s.lazy(() => pagingPlaylistTrackObjectSchema)),
  type: s.optional(s.string()),
  uri: s.optional(s.string()),
  _keysMap: {
    externalUrls: "external_urls",
    snapshotId: "snapshot_id",
  },
});
