import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * If `include_external=audio` is specified it signals that the client can play externally hosted
 * audio content, and marks the content as playable in the response. By default externally hosted
 * audio content is marked as unplayable in the response.
 */
export const IncludeExternal = {
  Audio: "audio",
} as const;
export type IncludeExternal = (typeof IncludeExternal)[keyof typeof IncludeExternal] | (string & {});

export const includeExternalSchema: EnumSchema<IncludeExternal> = s.enumOf<IncludeExternal>(IncludeExternal);
