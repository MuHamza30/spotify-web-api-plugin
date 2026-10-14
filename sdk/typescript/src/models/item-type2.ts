import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The ID type. */
export const ItemType2 = {
  Artist: "artist",
  User: "user",
} as const;
export type ItemType2 = (typeof ItemType2)[keyof typeof ItemType2] | (string & {});

export const itemType2Schema: EnumSchema<ItemType2> = s.enumOf<ItemType2>(ItemType2);
