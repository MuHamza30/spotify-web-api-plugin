import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CopyrightObject = {
  /** The copyright text for this content. */
  text?: string;
  /**
   * The type of copyright: `C` = the copyright, `P` = the sound recording (performance) copyright.
   */
  type?: string;
};

export const copyrightObjectSchema: Schema<CopyrightObject> = s.object<CopyrightObject>({
  text: s.optional(s.string()),
  type: s.optional(s.string()),
});
