import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { externalUrlObjectSchema, type ExternalUrlObject } from "./external-url-object.js";
import { imageObjectSchema, type ImageObject } from "./image-object.js";
import { playlistOwnerObjectSchema, type PlaylistOwnerObject } from "./playlist-owner-object.js";
import { playlistTracksRefObjectSchema, type PlaylistTracksRefObject } from "./playlist-tracks-ref-object.js";

export type SimplifiedPlaylistObject = {
  /** `true` if the owner allows other users to modify the playlist. */
  collaborative?: boolean;
  /**
   * The playlist description. _Only returned for modified, verified playlists, otherwise_ `null`.
   */
  description?: string;
  /** Known external URLs for this playlist. */
  externalUrls?: ExternalUrlObject;
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
  /**
   * A collection containing a link ( `href` ) to the Web API endpoint where full details of the
   * playlist's tracks can be retrieved, along with the `total` number of tracks in the playlist.
   * Note, a track object may be `null`. This can happen if a track is no longer available.
   */
  tracks?: PlaylistTracksRefObject;
  /** The object type: "playlist" */
  type?: string;
  /**
   * The [Spotify
   * URI](https://developer.spotify.com/documentation/web-api/concepts/spotify-uris-ids) for the
   * playlist.
   */
  uri?: string;
};

export const simplifiedPlaylistObjectSchema: Schema<SimplifiedPlaylistObject> =
  s.object<SimplifiedPlaylistObject>({
    collaborative: s.optional(s.boolean()),
    description: s.optional(s.string()),
    externalUrls: s.optional(s.lazy(() => externalUrlObjectSchema)),
    href: s.optional(s.string()),
    id: s.optional(s.string()),
    images: s.optional(s.array(s.lazy(() => imageObjectSchema))),
    name: s.optional(s.string()),
    owner: s.optional(s.lazy(() => playlistOwnerObjectSchema)),
    public: s.optional(s.boolean()),
    snapshotId: s.optional(s.string()),
    tracks: s.optional(s.lazy(() => playlistTracksRefObjectSchema)),
    type: s.optional(s.string()),
    uri: s.optional(s.string()),
    _keysMap: {
      externalUrls: "external_urls",
      snapshotId: "snapshot_id",
    },
  });
