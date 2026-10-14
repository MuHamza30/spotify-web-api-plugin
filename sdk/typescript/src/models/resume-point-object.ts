import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ResumePointObject = {
  /** Whether or not the episode has been fully played by the user. */
  fullyPlayed?: boolean;
  /** The user's most recent position in the episode in milliseconds. */
  resumePositionMs?: number;
};

export const resumePointObjectSchema: Schema<ResumePointObject> = s.object<ResumePointObject>({
  fullyPlayed: s.optional(s.boolean()),
  resumePositionMs: s.optional(s.int()),
  _keysMap: {
    fullyPlayed: "fully_played",
    resumePositionMs: "resume_position_ms",
  },
});
