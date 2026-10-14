import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Markets = {
  markets?: string[];
};

export const marketsSchema: Schema<Markets> = s.object<Markets>({
  markets: s.optional(s.array(s.string())),
});
