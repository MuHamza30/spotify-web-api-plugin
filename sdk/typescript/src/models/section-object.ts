import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { modeSchema, type Mode } from "./mode.js";

export type SectionObject = {
  /** The starting point (in seconds) of the section. */
  start?: number;
  /** The duration (in seconds) of the section. */
  duration?: number;
  /** The confidence, from 0.0 to 1.0, of the reliability of the section's "designation". */
  confidence?: number;
  /**
   * The overall loudness of the section in decibels (dB). Loudness values are useful for comparing
   * relative loudness of sections within tracks.
   */
  loudness?: number;
  /**
   * The overall estimated tempo of the section in beats per minute (BPM). In musical terminology,
   * tempo is the speed or pace of a given piece and derives directly from the average beat
   * duration.
   */
  tempo?: number;
  /**
   * The confidence, from 0.0 to 1.0, of the reliability of the tempo. Some tracks contain tempo
   * changes or sounds which don't contain tempo (like pure speech) which would correspond to a low
   * value in this field.
   */
  tempoConfidence?: number;
  /**
   * The estimated overall key of the section. The values in this field ranging from 0 to 11 mapping
   * to pitches using standard Pitch Class notation (E.g. 0 = C, 1 = C♯/D♭, 2 = D, and so on). If no
   * key was detected, the value is -1.
   */
  key?: number;
  /**
   * The confidence, from 0.0 to 1.0, of the reliability of the key. Songs with many key changes may
   * correspond to low values in this field.
   */
  keyConfidence?: number;
  /**
   * Indicates the modality (major or minor) of a section, the type of scale from which its melodic
   * content is derived. This field will contain a 0 for "minor", a 1 for "major", or a -1 for no
   * result. Note that the major key (e.g. C major) could more likely be confused with the minor key
   * at 3 semitones lower (e.g. A minor) as both keys carry the same pitches.
   */
  mode?: Mode;
  /** The confidence, from 0.0 to 1.0, of the reliability of the `mode`. */
  modeConfidence?: number;
  /**
   * An estimated time signature. The time signature (meter) is a notational convention to specify
   * how many beats are in each bar (or measure). The time signature ranges from 3 to 7 indicating
   * time signatures of "3/4", to "7/4".
   */
  timeSignature?: number;
  /**
   * The confidence, from 0.0 to 1.0, of the reliability of the `time_signature`. Sections with time
   * signature changes may correspond to low values in this field.
   */
  timeSignatureConfidence?: number;
};

export const sectionObjectSchema: Schema<SectionObject> = s.object<SectionObject>({
  start: s.optional(s.float64()),
  duration: s.optional(s.float64()),
  confidence: s.optional(s.float64()),
  loudness: s.optional(s.float64()),
  tempo: s.optional(s.float64()),
  tempoConfidence: s.optional(s.float64()),
  key: s.optional(s.int()),
  keyConfidence: s.optional(s.float64()),
  mode: s.optional(s.lazy(() => modeSchema)),
  modeConfidence: s.optional(s.float64()),
  timeSignature: s.optional(s.int()),
  timeSignatureConfidence: s.optional(s.float64()),
  _keysMap: {
    tempoConfidence: "tempo_confidence",
    keyConfidence: "key_confidence",
    modeConfidence: "mode_confidence",
    timeSignature: "time_signature",
    timeSignatureConfidence: "time_signature_confidence",
  },
});
