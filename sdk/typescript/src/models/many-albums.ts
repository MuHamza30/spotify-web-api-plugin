import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { albumObjectSchema, type AlbumObject } from "./album-object.js";

export type ManyAlbums = {
  albums: AlbumObject[];
};

export const manyAlbumsSchema: Schema<ManyAlbums> = s.object<ManyAlbums>({
  albums: s.array(s.lazy(() => albumObjectSchema)),
});
