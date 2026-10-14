import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorObjectSchema, type ErrorObject } from "./error-object.js";

export type TooManyRequests = {
  error: ErrorObject;
};

export const tooManyRequestsSchema: Schema<TooManyRequests> = s.object<TooManyRequests>({
  error: errorObjectSchema,
});
