import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  cursorPagingSimplifiedArtistObjectSchema,
  type CursorPagingSimplifiedArtistObject,
} from "./cursor-paging-simplified-artist-object.js";

export type CursorPagedArtists = {
  artists: CursorPagingSimplifiedArtistObject;
};

export const cursorPagedArtistsSchema: Schema<CursorPagedArtists> = s.object<CursorPagedArtists>({
  artists: cursorPagingSimplifiedArtistObjectSchema,
});
