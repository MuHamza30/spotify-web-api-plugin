import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ErrorObject = {
  /**
   * The HTTP status code (also returned in the response header; see [Response Status
   * Codes](https://developer.spotify.com/documentation/web-api/concepts/api-calls#response-status-codes)
   * for more information).
   */
  status: number;
  /** A short description of the cause of the error. */
  message: string;
};

export const errorObjectSchema: Schema<ErrorObject> = s.object<ErrorObject>({
  status: s.int(),
  message: s.string(),
});
