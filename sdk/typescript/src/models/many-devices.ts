import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deviceObjectSchema, type DeviceObject } from "./device-object.js";

export type ManyDevices = {
  devices: DeviceObject[];
};

export const manyDevicesSchema: Schema<ManyDevices> = s.object<ManyDevices>({
  devices: s.array(s.lazy(() => deviceObjectSchema)),
});
