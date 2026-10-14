import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorObjectSchema, type ErrorObject } from "./error-object.js";

export type NotFound1 = {
  error: ErrorObject;
};

export const notFound1Schema: Schema<NotFound1> = s.object<NotFound1>({
  error: errorObjectSchema,
});
