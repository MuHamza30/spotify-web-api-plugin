import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { episodeObjectSchema, type EpisodeObject } from "../episode-object.js";
import { trackObjectSchema, type TrackObject } from "../track-object.js";

/** The currently playing track or episode. Can be `null`. */
export type CurrentlyPlaying = TrackObject | EpisodeObject;

export const currentlyPlayingSchema: Schema<CurrentlyPlaying> = s.of<CurrentlyPlaying>(
  s.union([s.lazy(() => trackObjectSchema), s.lazy(() => episodeObjectSchema)]),
);
