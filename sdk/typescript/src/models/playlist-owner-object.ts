import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { externalUrlObjectSchema, type ExternalUrlObject } from "./external-url-object.js";
import { followersObjectSchema, type FollowersObject } from "./followers-object.js";
import { type4Schema, type Type4 } from "./type4.js";

export type PlaylistOwnerObject = {
  /** Known public external URLs for this user. */
  externalUrls?: ExternalUrlObject;
  /** Information about the followers of this user. */
  followers?: FollowersObject;
  /** A link to the Web API endpoint for this user. */
  href?: string;
  /**
   * The [Spotify user
   * ID](https://developer.spotify.com/documentation/web-api/concepts/spotify-uris-ids) for this
   * user.
   */
  id?: string;
  /** The object type. */
  type?: Type4;
  /**
   * The [Spotify
   * URI](https://developer.spotify.com/documentation/web-api/concepts/spotify-uris-ids) for this
   * user.
   */
  uri?: string;
  /** The name displayed on the user's profile. `null` if not available. */
  displayName?: string | null;
};

export const playlistOwnerObjectSchema: Schema<PlaylistOwnerObject> = s.object<PlaylistOwnerObject>({
  externalUrls: s.optional(s.lazy(() => externalUrlObjectSchema)),
  followers: s.optional(s.lazy(() => followersObjectSchema)),
  href: s.optional(s.string()),
  id: s.optional(s.string()),
  type: s.optional(s.lazy(() => type4Schema)),
  uri: s.optional(s.string()),
  displayName: s.optionalNullable(s.string()),
  _keysMap: {
    externalUrls: "external_urls",
    displayName: "display_name",
  },
});
