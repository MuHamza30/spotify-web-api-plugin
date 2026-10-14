import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ExternalIdObject = {
  /**
   * [International Standard Recording
   * Code](http://en.wikipedia.org/wiki/International_Standard_Recording_Code)
   */
  isrc?: string;
  /**
   * [International Article
   * Number](http://en.wikipedia.org/wiki/International_Article_Number_%28EAN%29)
   */
  ean?: string;
  /** [Universal Product Code](http://en.wikipedia.org/wiki/Universal_Product_Code) */
  upc?: string;
};

export const externalIdObjectSchema: Schema<ExternalIdObject> = s.object<ExternalIdObject>({
  isrc: s.optional(s.string()),
  ean: s.optional(s.string()),
  upc: s.optional(s.string()),
});
