import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { externalUrlObjectSchema, type ExternalUrlObject } from "./external-url-object.js";
import { linkedTrackObjectSchema, type LinkedTrackObject } from "./linked-track-object.js";
import { simplifiedArtistObjectSchema, type SimplifiedArtistObject } from "./simplified-artist-object.js";
import { trackRestrictionObjectSchema, type TrackRestrictionObject } from "./track-restriction-object.js";

export type SimplifiedTrackObject = {
  /**
   * The artists who performed the track. Each artist object includes a link in `href` to more
   * detailed information about the artist.
   */
  artists?: SimplifiedArtistObject[];
  /**
   * A list of the countries in which the track can be played, identified by their [ISO 3166-1
   * alpha-2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code.
   */
  availableMarkets?: string[];
  /** The disc number (usually `1` unless the album consists of more than one disc). */
  discNumber?: number;
  /** The track length in milliseconds. */
  durationMs?: number;
  /**
   * Whether or not the track has explicit lyrics ( `true` = yes it does; `false` = no it does not
   * OR unknown).
   */
  explicit?: boolean;
  /** External URLs for this track. */
  externalUrls?: ExternalUrlObject;
  /** A link to the Web API endpoint providing full details of the track. */
  href?: string;
  /**
   * The [Spotify ID](https://developer.spotify.com/documentation/web-api/concepts/spotify-uris-ids)
   * for the track.
   */
  id?: string;
  /**
   * Part of the response when [Track
   * Relinking](https://developer.spotify.com/documentation/web-api/concepts/track-relinking/) is
   * applied. If `true`, the track is playable in the given market. Otherwise `false`.
   */
  isPlayable?: boolean;
  /**
   * Part of the response when [Track
   * Relinking](https://developer.spotify.com/documentation/web-api/concepts/track-relinking/) is
   * applied and is only part of the response if the track linking, in fact, exists. The requested
   * track has been replaced with a different track. The track in the `linked_from` object contains
   * information about the originally requested track.
   */
  linkedFrom?: LinkedTrackObject;
  /** Included in the response when a content restriction is applied. */
  restrictions?: TrackRestrictionObject;
  /** The name of the track. */
  name?: string;
  /** A URL to a 30 second preview (MP3 format) of the track. */
  previewUrl?: string | null;
  /**
   * The number of the track. If an album has several discs, the track number is the number on the
   * specified disc.
   */
  trackNumber?: number;
  /** The object type: "track". */
  type?: string;
  /**
   * The [Spotify
   * URI](https://developer.spotify.com/documentation/web-api/concepts/spotify-uris-ids) for the
   * track.
   */
  uri?: string;
  /** Whether or not the track is from a local file. */
  isLocal?: boolean;
};

export const simplifiedTrackObjectSchema: Schema<SimplifiedTrackObject> = s.object<SimplifiedTrackObject>({
  artists: s.optional(s.array(s.lazy(() => simplifiedArtistObjectSchema))),
  availableMarkets: s.optional(s.array(s.string())),
  discNumber: s.optional(s.int()),
  durationMs: s.optional(s.int()),
  explicit: s.optional(s.boolean()),
  externalUrls: s.optional(s.lazy(() => externalUrlObjectSchema)),
  href: s.optional(s.string()),
  id: s.optional(s.string()),
  isPlayable: s.optional(s.boolean()),
  linkedFrom: s.optional(s.lazy(() => linkedTrackObjectSchema)),
  restrictions: s.optional(s.lazy(() => trackRestrictionObjectSchema)),
  name: s.optional(s.string()),
  previewUrl: s.optionalNullable(s.string()),
  trackNumber: s.optional(s.int()),
  type: s.optional(s.string()),
  uri: s.optional(s.string()),
  isLocal: s.optional(s.boolean()),
  _keysMap: {
    availableMarkets: "available_markets",
    discNumber: "disc_number",
    durationMs: "duration_ms",
    externalUrls: "external_urls",
    isPlayable: "is_playable",
    linkedFrom: "linked_from",
    previewUrl: "preview_url",
    trackNumber: "track_number",
    isLocal: "is_local",
  },
});
