import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ImageObject = {
  /** The source URL of the image. */
  url: string;
  /** The image height in pixels. */
  height: number | null;
  /** The image width in pixels. */
  width: number | null;
};

export const imageObjectSchema: Schema<ImageObject> = s.object<ImageObject>({
  url: s.string(),
  height: s.nullable(s.int()),
  width: s.nullable(s.int()),
});
