import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { savedTrackObjectSchema, type SavedTrackObject } from "./saved-track-object.js";

export type PagingSavedTrackObject = {
  /** A link to the Web API endpoint returning the full result of the request */
  href: string;
  /** The maximum number of items in the response (as set in the query or by default). */
  limit: number;
  /** URL to the next page of items. ( `null` if none) */
  next: string | null;
  /** The offset of the items returned (as set in the query or by default) */
  offset: number;
  /** URL to the previous page of items. ( `null` if none) */
  previous: string | null;
  /** The total number of items available to return. */
  total: number;
  items: SavedTrackObject[];
};

export const pagingSavedTrackObjectSchema: Schema<PagingSavedTrackObject> = s.object<PagingSavedTrackObject>({
  href: s.string(),
  limit: s.int(),
  next: s.nullable(s.string()),
  offset: s.int(),
  previous: s.nullable(s.string()),
  total: s.int(),
  items: s.array(s.lazy(() => savedTrackObjectSchema)),
});
