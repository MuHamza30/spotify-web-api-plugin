import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorObjectSchema, type ErrorObject } from "./error-object.js";

export type Forbidden = {
  error: ErrorObject;
};

export const forbiddenSchema: Schema<Forbidden> = s.object<Forbidden>({
  error: errorObjectSchema,
});
