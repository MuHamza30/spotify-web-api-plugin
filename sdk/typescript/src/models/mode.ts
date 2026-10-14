import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates the modality (major or minor) of a section, the type of scale from which its melodic
 * content is derived. This field will contain a 0 for "minor", a 1 for "major", or a -1 for no
 * result. Note that the major key (e.g. C major) could more likely be confused with the minor key
 * at 3 semitones lower (e.g. A minor) as both keys carry the same pitches.
 */
export const Mode = {
  _Minus1: -1,
  _0: 0,
  _1: 1,
} as const;
export type Mode = (typeof Mode)[keyof typeof Mode] | (number & {});

export const modeSchema: EnumSchema<Mode> = s.enumOf<Mode>(Mode);
