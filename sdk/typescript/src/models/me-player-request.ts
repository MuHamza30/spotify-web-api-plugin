import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MePlayerRequest = {
  /**
   * A JSON array containing the ID of the device on which playback should be
   * started/transferred.<br/>For example:`{device_ids:["74ASZWbe4lXaubB36ztrGX"]}`<br/>_**Note**:
   * Although an array is accepted, only a single device_id is currently supported. Supplying more
   * than one will return `400 Bad Request`_
   */
  deviceIds: string[];
  /**
   * **true**: ensure playback happens on new device.<br/>**false** or not provided: keep the
   * current playback state.
   */
  play?: boolean;
};

export const mePlayerRequestSchema: Schema<MePlayerRequest> = s.object<MePlayerRequest>({
  deviceIds: s.array(s.string()),
  play: s.optional(s.boolean()),
  _keysMap: {
    deviceIds: "device_ids",
  },
});
