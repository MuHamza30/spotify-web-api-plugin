import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { chapterObjectSchema, type ChapterObject } from "./chapter-object.js";

export type ManyChapters = {
  chapters: ChapterObject[];
};

export const manyChaptersSchema: Schema<ManyChapters> = s.object<ManyChapters>({
  chapters: s.array(s.lazy(() => chapterObjectSchema)),
});
