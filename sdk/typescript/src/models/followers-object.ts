import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FollowersObject = {
  /** This will always be set to null, as the Web API does not support it at the moment. */
  href?: string | null;
  /** The total number of followers. */
  total?: number;
};

export const followersObjectSchema: Schema<FollowersObject> = s.object<FollowersObject>({
  href: s.optionalNullable(s.string()),
  total: s.optional(s.int()),
});
