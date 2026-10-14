import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorObjectSchema, type ErrorObject } from "./error-object.js";

export type TooManyRequests1 = {
  error: ErrorObject;
};

export const tooManyRequests1Schema: Schema<TooManyRequests1> = s.object<TooManyRequests1>({
  error: errorObjectSchema,
});
