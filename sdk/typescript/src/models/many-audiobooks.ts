import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { audiobookObjectSchema, type AudiobookObject } from "./audiobook-object.js";

export type ManyAudiobooks = {
  audiobooks: AudiobookObject[];
};

export const manyAudiobooksSchema: Schema<ManyAudiobooks> = s.object<ManyAudiobooks>({
  audiobooks: s.array(s.lazy(() => audiobookObjectSchema)),
});
