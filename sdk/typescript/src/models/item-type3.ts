import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The ID type: either `artist` or `user`. */
export const ItemType3 = {
  Artist: "artist",
  User: "user",
} as const;
export type ItemType3 = (typeof ItemType3)[keyof typeof ItemType3] | (string & {});

export const itemType3Schema: EnumSchema<ItemType3> = s.enumOf<ItemType3>(ItemType3);
