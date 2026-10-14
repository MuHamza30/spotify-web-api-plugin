import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { episodeObjectSchema, type EpisodeObject } from "./episode-object.js";

export type ManyEpisodes = {
  episodes: EpisodeObject[];
};

export const manyEpisodesSchema: Schema<ManyEpisodes> = s.object<ManyEpisodes>({
  episodes: s.array(s.lazy(() => episodeObjectSchema)),
});
