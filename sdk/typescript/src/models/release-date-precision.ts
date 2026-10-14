import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The precision with which `release_date` value is known. */
export const ReleaseDatePrecision = {
  Year: "year",
  Month: "month",
  Day: "day",
} as const;
export type ReleaseDatePrecision =
  | (typeof ReleaseDatePrecision)[keyof typeof ReleaseDatePrecision]
  | (string & {});

export const releaseDatePrecisionSchema: EnumSchema<ReleaseDatePrecision> =
  s.enumOf<ReleaseDatePrecision>(ReleaseDatePrecision);
