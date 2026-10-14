import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { reasonSchema, type Reason } from "./reason.js";

export type AlbumRestrictionObject = {
  /**
   * The reason for the restriction. Albums may be restricted if the content is not available in a
   * given market, to the user's subscription type, or when the user's account is set to not play
   * explicit content. Additional reasons may be added in the future.
   */
  reason?: Reason;
};

export const albumRestrictionObjectSchema: Schema<AlbumRestrictionObject> = s.object<AlbumRestrictionObject>({
  reason: s.optional(s.lazy(() => reasonSchema)),
});
