import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { artistObjectSchema, type ArtistObject } from "./artist-object.js";
import { externalIdObjectSchema, type ExternalIdObject } from "./external-id-object.js";
import { externalUrlObjectSchema, type ExternalUrlObject } from "./external-url-object.js";
import { linkedTrackObjectSchema, type LinkedTrackObject } from "./linked-track-object.js";
import { simplifiedAlbumObjectSchema, type SimplifiedAlbumObject } from "./simplified-album-object.js";
import { trackRestrictionObjectSchema, type TrackRestrictionObject } from "./track-restriction-object.js";
import { type3Schema, type Type3 } from "./type3.js";

export type TrackObject = {
  /**
   * The album on which the track appears. The album object includes a link in `href` to full
   * information about the album.
   */
  album?: SimplifiedAlbumObject;
  /**
   * The artists who performed the track. Each artist object includes a link in `href` to more
   * detailed information about the artist.
   */
  artists?: ArtistObject[];
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
  /** Known external IDs for the track. */
  externalIds?: ExternalIdObject;
  /** Known external URLs for this track. */
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
   * Relinking](https://developer.spotify.com/documentation/web-api/concepts/track-relinking) is
   * applied. If `true`, the track is playable in the given market. Otherwise `false`.
   */
  isPlayable?: boolean;
  /**
   * Part of the response when [Track
   * Relinking](https://developer.spotify.com/documentation/web-api/concepts/track-relinking) is
   * applied, and the requested track has been replaced with different track. The track in the
   * `linked_from` object contains information about the originally requested track.
   */
  linkedFrom?: LinkedTrackObject;
  /** Included in the response when a content restriction is applied. */
  restrictions?: TrackRestrictionObject;
  /** The name of the track. */
  name?: string;
  /**
   * The popularity of the track. The value will be between 0 and 100, with 100 being the most
   * popular.<br/>The popularity of a track is a value between 0 and 100, with 100 being the most
   * popular. The popularity is calculated by algorithm and is based, in the most part, on the total
   * number of plays the track has had and how recent those plays are.<br/>Generally speaking, songs
   * that are being played a lot now will have a higher popularity than songs that were played a lot
   * in the past. Duplicate tracks (e.g. the same track from a single and an album) are rated
   * independently. Artist and album popularity is derived mathematically from track popularity.
   * _**Note**: the popularity value may lag actual popularity by a few days: the value is not
   * updated in real time._
   */
  popularity?: number;
  /** A link to a 30 second preview (MP3 format) of the track. Can be `null` */
  previewUrl?: string | null;
  /**
   * The number of the track. If an album has several discs, the track number is the number on the
   * specified disc.
   */
  trackNumber?: number;
  /** The object type: "track". */
  type?: Type3;
  /**
   * The [Spotify
   * URI](https://developer.spotify.com/documentation/web-api/concepts/spotify-uris-ids) for the
   * track.
   */
  uri?: string;
  /** Whether or not the track is from a local file. */
  isLocal?: boolean;
};

export const trackObjectSchema: Schema<TrackObject> = s.object<TrackObject>({
  album: s.optional(s.lazy(() => simplifiedAlbumObjectSchema)),
  artists: s.optional(s.array(s.lazy(() => artistObjectSchema))),
  availableMarkets: s.optional(s.array(s.string())),
  discNumber: s.optional(s.int()),
  durationMs: s.optional(s.int()),
  explicit: s.optional(s.boolean()),
  externalIds: s.optional(s.lazy(() => externalIdObjectSchema)),
  externalUrls: s.optional(s.lazy(() => externalUrlObjectSchema)),
  href: s.optional(s.string()),
  id: s.optional(s.string()),
  isPlayable: s.optional(s.boolean()),
  linkedFrom: s.optional(s.lazy(() => linkedTrackObjectSchema)),
  restrictions: s.optional(s.lazy(() => trackRestrictionObjectSchema)),
  name: s.optional(s.string()),
  popularity: s.optional(s.int()),
  previewUrl: s.optionalNullable(s.string()),
  trackNumber: s.optional(s.int()),
  type: s.optional(s.lazy(() => type3Schema)),
  uri: s.optional(s.string()),
  isLocal: s.optional(s.boolean()),
  _keysMap: {
    availableMarkets: "available_markets",
    discNumber: "disc_number",
    durationMs: "duration_ms",
    externalIds: "external_ids",
    externalUrls: "external_urls",
    isPlayable: "is_playable",
    linkedFrom: "linked_from",
    previewUrl: "preview_url",
    trackNumber: "track_number",
    isLocal: "is_local",
  },
});
