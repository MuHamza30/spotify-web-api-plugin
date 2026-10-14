import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  explicitContentSettingsObjectSchema,
  type ExplicitContentSettingsObject,
} from "./explicit-content-settings-object.js";
import { externalUrlObjectSchema, type ExternalUrlObject } from "./external-url-object.js";
import { followersObjectSchema, type FollowersObject } from "./followers-object.js";
import { imageObjectSchema, type ImageObject } from "./image-object.js";

export type PrivateUserObject = {
  /**
   * The country of the user, as set in the user's account profile. An [ISO 3166-1 alpha-2 country
   * code](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). _This field is only available when the
   * current user has granted access to the
   * [user-read-private](https://developer.spotify.com/documentation/web-api/concepts/scopes/#list-of-scopes)
   * scope._
   */
  country?: string;
  /** The name displayed on the user's profile. `null` if not available. */
  displayName?: string;
  /**
   * The user's email address, as entered by the user when creating their account. _**Important!**
   * This email address is unverified; there is no proof that it actually belongs to the user._
   * _This field is only available when the current user has granted access to the
   * [user-read-email](https://developer.spotify.com/documentation/web-api/concepts/scopes/#list-of-scopes)
   * scope._
   */
  email?: string;
  /**
   * The user's explicit content settings. _This field is only available when the current user has
   * granted access to the
   * [user-read-private](https://developer.spotify.com/documentation/web-api/concepts/scopes/#list-of-scopes)
   * scope._
   */
  explicitContent?: ExplicitContentSettingsObject;
  /** Known external URLs for this user. */
  externalUrls?: ExternalUrlObject;
  /** Information about the followers of the user. */
  followers?: FollowersObject;
  /** A link to the Web API endpoint for this user. */
  href?: string;
  /**
   * The [Spotify user
   * ID](https://developer.spotify.com/documentation/web-api/concepts/spotify-uris-ids) for the
   * user.
   */
  id?: string;
  /** The user's profile image. */
  images?: ImageObject[];
  /**
   * The user's Spotify subscription level: "premium", "free", etc. (The subscription level "open"
   * can be considered the same as "free".) _This field is only available when the current user has
   * granted access to the
   * [user-read-private](https://developer.spotify.com/documentation/web-api/concepts/scopes/#list-of-scopes)
   * scope._
   */
  product?: string;
  /** The object type: "user" */
  type?: string;
  /**
   * The [Spotify
   * URI](https://developer.spotify.com/documentation/web-api/concepts/spotify-uris-ids) for the
   * user.
   */
  uri?: string;
};

export const privateUserObjectSchema: Schema<PrivateUserObject> = s.object<PrivateUserObject>({
  country: s.optional(s.string()),
  displayName: s.optional(s.string()),
  email: s.optional(s.string()),
  explicitContent: s.optional(s.lazy(() => explicitContentSettingsObjectSchema)),
  externalUrls: s.optional(s.lazy(() => externalUrlObjectSchema)),
  followers: s.optional(s.lazy(() => followersObjectSchema)),
  href: s.optional(s.string()),
  id: s.optional(s.string()),
  images: s.optional(s.array(s.lazy(() => imageObjectSchema))),
  product: s.optional(s.string()),
  type: s.optional(s.string()),
  uri: s.optional(s.string()),
  _keysMap: {
    displayName: "display_name",
    explicitContent: "explicit_content",
    externalUrls: "external_urls",
  },
});
