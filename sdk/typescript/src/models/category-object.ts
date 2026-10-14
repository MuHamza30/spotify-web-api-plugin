import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { imageObjectSchema, type ImageObject } from "./image-object.js";

export type CategoryObject = {
  /** A link to the Web API endpoint returning full details of the category. */
  href: string;
  /** The category icon, in various sizes. */
  icons: ImageObject[];
  /**
   * The [Spotify category
   * ID](https://developer.spotify.com/documentation/web-api/concepts/spotify-uris-ids) of the
   * category.
   */
  id: string;
  /** The name of the category. */
  name: string;
};

export const categoryObjectSchema: Schema<CategoryObject> = s.object<CategoryObject>({
  href: s.string(),
  icons: s.array(s.lazy(() => imageObjectSchema)),
  id: s.string(),
  name: s.string(),
});
