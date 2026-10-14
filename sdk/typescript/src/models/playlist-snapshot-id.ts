import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlaylistSnapshotId = {
  snapshotId?: string;
};

export const playlistSnapshotIdSchema: Schema<PlaylistSnapshotId> = s.object<PlaylistSnapshotId>({
  snapshotId: s.optional(s.string()),
  _keysMap: {
    snapshotId: "snapshot_id",
  },
});
