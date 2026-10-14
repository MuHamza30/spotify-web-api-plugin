import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TimeIntervalObject = {
  /** The starting point (in seconds) of the time interval. */
  start?: number;
  /** The duration (in seconds) of the time interval. */
  duration?: number;
  /** The confidence, from 0.0 to 1.0, of the reliability of the interval. */
  confidence?: number;
};

export const timeIntervalObjectSchema: Schema<TimeIntervalObject> = s.object<TimeIntervalObject>({
  start: s.optional(s.float64()),
  duration: s.optional(s.float64()),
  confidence: s.optional(s.float64()),
});
