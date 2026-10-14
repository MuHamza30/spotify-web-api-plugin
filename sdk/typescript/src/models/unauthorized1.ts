import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorObjectSchema, type ErrorObject } from "./error-object.js";

export type Unauthorized1 = {
  error: ErrorObject;
};

export const unauthorized1Schema: Schema<Unauthorized1> = s.object<Unauthorized1>({
  error: errorObjectSchema,
});
