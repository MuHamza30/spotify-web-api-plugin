import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { contextObjectSchema, type ContextObject } from "./context-object.js";
import { trackObjectSchema, type TrackObject } from "./track-object.js";

export type PlayHistoryObject = {
  /** The track the user listened to. */
  track?: TrackObject;
  /** The date and time the track was played. */
  playedAt?: Date;
  /** The context the track was played from. */
  context?: ContextObject;
};

export const playHistoryObjectSchema: Schema<PlayHistoryObject> = s.object<PlayHistoryObject>({
  track: s.optional(s.lazy(() => trackObjectSchema)),
  playedAt: s.optional(s.dateTime()),
  context: s.optional(s.lazy(() => contextObjectSchema)),
  _keysMap: {
    playedAt: "played_at",
  },
});
