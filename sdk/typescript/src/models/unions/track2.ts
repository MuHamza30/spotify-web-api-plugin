import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { episodeObjectSchema, type EpisodeObject } from "../episode-object.js";
import { trackObjectSchema, type TrackObject } from "../track-object.js";

/** Information about the track or episode. */
export type Track2 = TrackObject | EpisodeObject;

export const track2Schema: Schema<Track2> = s.of<Track2>(
  s.union([s.lazy(() => trackObjectSchema), s.lazy(() => episodeObjectSchema)]),
);
