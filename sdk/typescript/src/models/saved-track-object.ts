import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { trackObjectSchema, type TrackObject } from "./track-object.js";

export type SavedTrackObject = {
  /**
   * The date and time the track was saved. Timestamps are returned in ISO 8601 format as
   * Coordinated Universal Time (UTC) with a zero offset: YYYY-MM-DDTHH:MM:SSZ. If the time is
   * imprecise (for example, the date/time of an album release), an additional field indicates the
   * precision; see for example, release_date in an album object.
   */
  addedAt?: Date;
  /** Information about the track. */
  track?: TrackObject;
};

export const savedTrackObjectSchema: Schema<SavedTrackObject> = s.object<SavedTrackObject>({
  addedAt: s.optional(s.dateTime()),
  track: s.optional(s.lazy(() => trackObjectSchema)),
  _keysMap: {
    addedAt: "added_at",
  },
});
