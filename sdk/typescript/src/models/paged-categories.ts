import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { categoriesSchema, type Categories } from "./categories.js";

export type PagedCategories = {
  categories: Categories;
};

export const pagedCategoriesSchema: Schema<PagedCategories> = s.object<PagedCategories>({
  categories: categoriesSchema,
});
