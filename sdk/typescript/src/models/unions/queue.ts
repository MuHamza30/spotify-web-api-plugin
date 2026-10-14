import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { episodeObjectSchema, type EpisodeObject } from "../episode-object.js";
import { trackObjectSchema, type TrackObject } from "../track-object.js";

export type Queue = TrackObject | EpisodeObject;

export const queueSchema: Schema<Queue> = s.of<Queue>(
  s.union([s.lazy(() => trackObjectSchema), s.lazy(() => episodeObjectSchema)]),
);
