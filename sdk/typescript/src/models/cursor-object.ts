import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CursorObject = {
  /** The cursor to use as key to find the next page of items. */
  after?: string;
  /** The cursor to use as key to find the previous page of items. */
  before?: string;
};

export const cursorObjectSchema: Schema<CursorObject> = s.object<CursorObject>({
  after: s.optional(s.string()),
  before: s.optional(s.string()),
});
