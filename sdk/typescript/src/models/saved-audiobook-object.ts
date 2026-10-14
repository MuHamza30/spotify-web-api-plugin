import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { audiobookObjectSchema, type AudiobookObject } from "./audiobook-object.js";

export type SavedAudiobookObject = {
  /**
   * The date and time the audiobook was saved Timestamps are returned in ISO 8601 format as
   * Coordinated Universal Time (UTC) with a zero offset: YYYY-MM-DDTHH:MM:SSZ. If the time is
   * imprecise (for example, the date/time of an album release), an additional field indicates the
   * precision; see for example, release_date in an album object.
   */
  addedAt?: Date;
  /** Information about the audiobook. */
  audiobook?: AudiobookObject;
};

export const savedAudiobookObjectSchema: Schema<SavedAudiobookObject> = s.object<SavedAudiobookObject>({
  addedAt: s.optional(s.dateTime()),
  audiobook: s.optional(s.lazy(() => audiobookObjectSchema)),
  _keysMap: {
    addedAt: "added_at",
  },
});
