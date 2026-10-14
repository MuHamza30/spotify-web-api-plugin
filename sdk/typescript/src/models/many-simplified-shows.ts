import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { showBaseSchema, type ShowBase } from "./show-base.js";

export type ManySimplifiedShows = {
  shows: ShowBase[];
};

export const manySimplifiedShowsSchema: Schema<ManySimplifiedShows> = s.object<ManySimplifiedShows>({
  shows: s.array(s.lazy(() => showBaseSchema)),
});
