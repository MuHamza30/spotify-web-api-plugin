import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorObjectSchema, type ErrorObject } from "./error-object.js";

export type Unauthorized = {
  error: ErrorObject;
};

export const unauthorizedSchema: Schema<Unauthorized> = s.object<Unauthorized>({
  error: errorObjectSchema,
});
