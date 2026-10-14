import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Track1 = {
  /** Spotify URI */
  uri?: string;
};

export const track1Schema: Schema<Track1> = s.object<Track1>({
  uri: s.optional(s.string()),
});
