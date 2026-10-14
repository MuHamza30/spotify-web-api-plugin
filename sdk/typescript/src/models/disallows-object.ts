import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DisallowsObject = {
  /** Interrupting playback. Optional field. */
  interruptingPlayback?: boolean;
  /** Pausing. Optional field. */
  pausing?: boolean;
  /** Resuming. Optional field. */
  resuming?: boolean;
  /** Seeking playback location. Optional field. */
  seeking?: boolean;
  /** Skipping to the next context. Optional field. */
  skippingNext?: boolean;
  /** Skipping to the previous context. Optional field. */
  skippingPrev?: boolean;
  /** Toggling repeat context flag. Optional field. */
  togglingRepeatContext?: boolean;
  /** Toggling shuffle flag. Optional field. */
  togglingShuffle?: boolean;
  /** Toggling repeat track flag. Optional field. */
  togglingRepeatTrack?: boolean;
  /** Transfering playback between devices. Optional field. */
  transferringPlayback?: boolean;
};

export const disallowsObjectSchema: Schema<DisallowsObject> = s.object<DisallowsObject>({
  interruptingPlayback: s.optional(s.boolean()),
  pausing: s.optional(s.boolean()),
  resuming: s.optional(s.boolean()),
  seeking: s.optional(s.boolean()),
  skippingNext: s.optional(s.boolean()),
  skippingPrev: s.optional(s.boolean()),
  togglingRepeatContext: s.optional(s.boolean()),
  togglingShuffle: s.optional(s.boolean()),
  togglingRepeatTrack: s.optional(s.boolean()),
  transferringPlayback: s.optional(s.boolean()),
  _keysMap: {
    interruptingPlayback: "interrupting_playback",
    skippingNext: "skipping_next",
    skippingPrev: "skipping_prev",
    togglingRepeatContext: "toggling_repeat_context",
    togglingShuffle: "toggling_shuffle",
    togglingRepeatTrack: "toggling_repeat_track",
    transferringPlayback: "transferring_playback",
  },
});
