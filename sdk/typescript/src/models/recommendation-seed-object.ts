import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RecommendationSeedObject = {
  /** The number of tracks available after min\_\* and max\_\* filters have been applied. */
  afterFilteringSize?: number;
  /** The number of tracks available after relinking for regional availability. */
  afterRelinkingSize?: number;
  /**
   * A link to the full track or artist data for this seed. For tracks this will be a link to a
   * Track Object. For artists a link to an Artist Object. For genre seeds, this value will be
   * `null`.
   */
  href?: string;
  /**
   * The id used to select this seed. This will be the same as the string used in the
   * `seed_artists`, `seed_tracks` or `seed_genres` parameter.
   */
  id?: string;
  /** The number of recommended tracks available for this seed. */
  initialPoolSize?: number;
  /** The entity type of this seed. One of `artist`, `track` or `genre`. */
  type?: string;
};

export const recommendationSeedObjectSchema: Schema<RecommendationSeedObject> =
  s.object<RecommendationSeedObject>({
    afterFilteringSize: s.optional(s.int()),
    afterRelinkingSize: s.optional(s.int()),
    href: s.optional(s.string()),
    id: s.optional(s.string()),
    initialPoolSize: s.optional(s.int()),
    type: s.optional(s.string()),
  });
