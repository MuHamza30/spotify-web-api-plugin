import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DeviceObject = {
  /**
   * The device ID. This ID is unique and persistent to some extent. However, this is not guaranteed
   * and any cached `device_id` should periodically be cleared out and refetched as necessary.
   */
  id?: string | null;
  /** If this device is the currently active device. */
  isActive?: boolean;
  /** If this device is currently in a private session. */
  isPrivateSession?: boolean;
  /**
   * Whether controlling this device is restricted. At present if this is "true" then no Web API
   * commands will be accepted by this device.
   */
  isRestricted?: boolean;
  /**
   * A human-readable name for the device. Some devices have a name that the user can configure
   * (e.g. \"Loudest speaker\") and some devices have a generic name associated with the
   * manufacturer or device model.
   */
  name?: string;
  /** Device type, such as "computer", "smartphone" or "speaker". */
  type?: string;
  /** The current volume in percent. */
  volumePercent?: number | null;
  /** If this device can be used to set the volume. */
  supportsVolume?: boolean;
};

export const deviceObjectSchema: Schema<DeviceObject> = s.object<DeviceObject>({
  id: s.optionalNullable(s.string()),
  isActive: s.optional(s.boolean()),
  isPrivateSession: s.optional(s.boolean()),
  isRestricted: s.optional(s.boolean()),
  name: s.optional(s.string()),
  type: s.optional(s.string()),
  volumePercent: s.optionalNullable(s.int()),
  supportsVolume: s.optional(s.boolean()),
  _keysMap: {
    isActive: "is_active",
    isPrivateSession: "is_private_session",
    isRestricted: "is_restricted",
    volumePercent: "volume_percent",
    supportsVolume: "supports_volume",
  },
});
