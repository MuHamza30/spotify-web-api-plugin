import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorObjectSchema, type ErrorObject } from "./error-object.js";

export type BadRequest1 = {
  error: ErrorObject;
};

export const badRequest1Schema: Schema<BadRequest1> = s.object<BadRequest1>({
  error: errorObjectSchema,
});
