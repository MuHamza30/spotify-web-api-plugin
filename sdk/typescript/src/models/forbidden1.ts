import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorObjectSchema, type ErrorObject } from "./error-object.js";

export type Forbidden1 = {
  error: ErrorObject;
};

export const forbidden1Schema: Schema<Forbidden1> = s.object<Forbidden1>({
  error: errorObjectSchema,
});
