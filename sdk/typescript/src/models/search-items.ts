import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { pagingArtistObjectSchema, type PagingArtistObject } from "./paging-artist-object.js";
import { pagingPlaylistObjectSchema, type PagingPlaylistObject } from "./paging-playlist-object.js";
import {
  pagingSimplifiedAlbumObjectSchema,
  type PagingSimplifiedAlbumObject,
} from "./paging-simplified-album-object.js";
import {
  pagingSimplifiedAudiobookObjectSchema,
  type PagingSimplifiedAudiobookObject,
} from "./paging-simplified-audiobook-object.js";
import {
  pagingSimplifiedEpisodeObjectSchema,
  type PagingSimplifiedEpisodeObject,
} from "./paging-simplified-episode-object.js";
import {
  pagingSimplifiedShowObjectSchema,
  type PagingSimplifiedShowObject,
} from "./paging-simplified-show-object.js";
import { pagingTrackObjectSchema, type PagingTrackObject } from "./paging-track-object.js";

export type SearchItems = {
  tracks?: PagingTrackObject;
  artists?: PagingArtistObject;
  albums?: PagingSimplifiedAlbumObject;
  playlists?: PagingPlaylistObject;
  shows?: PagingSimplifiedShowObject;
  episodes?: PagingSimplifiedEpisodeObject;
  audiobooks?: PagingSimplifiedAudiobookObject;
};

export const searchItemsSchema: Schema<SearchItems> = s.object<SearchItems>({
  tracks: s.optional(s.lazy(() => pagingTrackObjectSchema)),
  artists: s.optional(s.lazy(() => pagingArtistObjectSchema)),
  albums: s.optional(s.lazy(() => pagingSimplifiedAlbumObjectSchema)),
  playlists: s.optional(s.lazy(() => pagingPlaylistObjectSchema)),
  shows: s.optional(s.lazy(() => pagingSimplifiedShowObjectSchema)),
  episodes: s.optional(s.lazy(() => pagingSimplifiedEpisodeObjectSchema)),
  audiobooks: s.optional(s.lazy(() => pagingSimplifiedAudiobookObjectSchema)),
});
