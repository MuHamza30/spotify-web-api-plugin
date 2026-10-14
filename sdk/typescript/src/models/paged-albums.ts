import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  pagingSimplifiedAlbumObjectSchema,
  type PagingSimplifiedAlbumObject,
} from "./paging-simplified-album-object.js";

export type PagedAlbums = {
  albums: PagingSimplifiedAlbumObject;
};

export const pagedAlbumsSchema: Schema<PagedAlbums> = s.object<PagedAlbums>({
  albums: pagingSimplifiedAlbumObjectSchema,
});
