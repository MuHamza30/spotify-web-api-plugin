import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The reason for the restriction. Albums may be restricted if the content is not available in a
 * given market, to the user's subscription type, or when the user's account is set to not play
 * explicit content. Additional reasons may be added in the future.
 */
export const Reason = {
  Market: "market",
  Product: "product",
  Explicit: "explicit",
} as const;
export type Reason = (typeof Reason)[keyof typeof Reason] | (string & {});

export const reasonSchema: EnumSchema<Reason> = s.enumOf<Reason>(Reason);
