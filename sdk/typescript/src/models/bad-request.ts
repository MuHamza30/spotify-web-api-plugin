import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorObjectSchema, type ErrorObject } from "./error-object.js";

export type BadRequest = {
  error: ErrorObject;
};

export const badRequestSchema: Schema<BadRequest> = s.object<BadRequest>({
  error: errorObjectSchema,
});
