import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { pagingPlaylistObjectSchema, type PagingPlaylistObject } from "./paging-playlist-object.js";

export type PagingFeaturedPlaylistObject = {
  /** The localized message of a playlist. */
  message?: string;
  playlists?: PagingPlaylistObject;
};

export const pagingFeaturedPlaylistObjectSchema: Schema<PagingFeaturedPlaylistObject> =
  s.object<PagingFeaturedPlaylistObject>({
    message: s.optional(s.string()),
    playlists: s.optional(s.lazy(() => pagingPlaylistObjectSchema)),
  });
