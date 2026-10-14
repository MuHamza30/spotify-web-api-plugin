import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { audioFeaturesObjectSchema, type AudioFeaturesObject } from "./audio-features-object.js";

export type ManyAudioFeatures = {
  audioFeatures: AudioFeaturesObject[];
};

export const manyAudioFeaturesSchema: Schema<ManyAudioFeatures> = s.object<ManyAudioFeatures>({
  audioFeatures: s.array(s.lazy(() => audioFeaturesObjectSchema)),
  _keysMap: {
    audioFeatures: "audio_features",
  },
});
