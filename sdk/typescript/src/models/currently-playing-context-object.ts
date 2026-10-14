import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { contextObjectSchema, type ContextObject } from "./context-object.js";
import { deviceObjectSchema, type DeviceObject } from "./device-object.js";
import { disallowsObjectSchema, type DisallowsObject } from "./disallows-object.js";
import { itemSchema, type Item } from "./unions/item.js";

export type CurrentlyPlayingContextObject = {
  /** The device that is currently active. */
  device?: DeviceObject;
  /** off, track, context */
  repeatState?: string;
  /** If shuffle is on or off. */
  shuffleState?: boolean;
  /** A Context Object. Can be `null`. */
  context?: ContextObject;
  /** Unix Millisecond Timestamp when data was fetched. */
  timestamp?: number;
  /** Progress into the currently playing track or episode. Can be `null`. */
  progressMs?: number;
  /** If something is currently playing, return `true`. */
  isPlaying?: boolean;
  /** The currently playing track or episode. Can be `null`. */
  item?: Item;
  /**
   * The object type of the currently playing item. Can be one of `track`, `episode`, `ad` or
   * `unknown`.
   */
  currentlyPlayingType?: string;
  /**
   * Allows to update the user interface based on which playback actions are available within the
   * current context.
   */
  actions?: DisallowsObject;
};

export const currentlyPlayingContextObjectSchema: Schema<CurrentlyPlayingContextObject> =
  s.object<CurrentlyPlayingContextObject>({
    device: s.optional(s.lazy(() => deviceObjectSchema)),
    repeatState: s.optional(s.string()),
    shuffleState: s.optional(s.boolean()),
    context: s.optional(s.lazy(() => contextObjectSchema)),
    timestamp: s.optional(s.int()),
    progressMs: s.optional(s.int()),
    isPlaying: s.optional(s.boolean()),
    item: s.optional(s.lazy(() => itemSchema)),
    currentlyPlayingType: s.optional(s.string()),
    actions: s.optional(s.lazy(() => disallowsObjectSchema)),
    _keysMap: {
      repeatState: "repeat_state",
      shuffleState: "shuffle_state",
      progressMs: "progress_ms",
      isPlaying: "is_playing",
      currentlyPlayingType: "currently_playing_type",
    },
  });
