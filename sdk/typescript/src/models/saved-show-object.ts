import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { showBaseSchema, type ShowBase } from "./show-base.js";

export type SavedShowObject = {
  /**
   * The date and time the show was saved. Timestamps are returned in ISO 8601 format as Coordinated
   * Universal Time (UTC) with a zero offset: YYYY-MM-DDTHH:MM:SSZ. If the time is imprecise (for
   * example, the date/time of an album release), an additional field indicates the precision; see
   * for example, release_date in an album object.
   */
  addedAt?: Date;
  /** Information about the show. */
  show?: ShowBase;
};

export const savedShowObjectSchema: Schema<SavedShowObject> = s.object<SavedShowObject>({
  addedAt: s.optional(s.dateTime()),
  show: s.optional(s.lazy(() => showBaseSchema)),
  _keysMap: {
    addedAt: "added_at",
  },
});
