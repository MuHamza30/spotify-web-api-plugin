import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { trackObjectSchema, type TrackObject } from "./track-object.js";

export type ManyTracks = {
  tracks: TrackObject[];
};

export const manyTracksSchema: Schema<ManyTracks> = s.object<ManyTracks>({
  tracks: s.array(s.lazy(() => trackObjectSchema)),
});
