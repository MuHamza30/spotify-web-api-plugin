import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of the album. */
export const AlbumType = {
  Album: "album",
  Single: "single",
  Compilation: "compilation",
} as const;
export type AlbumType = (typeof AlbumType)[keyof typeof AlbumType] | (string & {});

export const albumTypeSchema: EnumSchema<AlbumType> = s.enumOf<AlbumType>(AlbumType);
