import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ManyGenres = {
  genres: string[];
};

export const manyGenresSchema: Schema<ManyGenres> = s.object<ManyGenres>({
  genres: s.array(s.string()),
});
