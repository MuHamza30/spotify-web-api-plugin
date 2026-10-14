import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorObjectSchema, type ErrorObject } from "./error-object.js";

export type NotFound = {
  error: ErrorObject;
};

export const notFoundSchema: Schema<NotFound> = s.object<NotFound>({
  error: errorObjectSchema,
});
