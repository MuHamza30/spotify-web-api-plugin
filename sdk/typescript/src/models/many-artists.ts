import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { artistObjectSchema, type ArtistObject } from "./artist-object.js";

export type ManyArtists = {
  artists: ArtistObject[];
};

export const manyArtistsSchema: Schema<ManyArtists> = s.object<ManyArtists>({
  artists: s.array(s.lazy(() => artistObjectSchema)),
});
