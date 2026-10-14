import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Meta = {
  /** The version of the Analyzer used to analyze this track. */
  analyzerVersion?: string;
  /** The platform used to read the track's audio data. */
  platform?: string;
  /**
   * A detailed status code for this track. If analysis data is missing, this code may explain why.
   */
  detailedStatus?: string;
  /** The return code of the analyzer process. 0 if successful, 1 if any errors occurred. */
  statusCode?: number;
  /** The Unix timestamp (in seconds) at which this track was analyzed. */
  timestamp?: number;
  /** The amount of time taken to analyze this track. */
  analysisTime?: number;
  /** The method used to read the track's audio data. */
  inputProcess?: string;
};

export const metaSchema: Schema<Meta> = s.object<Meta>({
  analyzerVersion: s.optional(s.string()),
  platform: s.optional(s.string()),
  detailedStatus: s.optional(s.string()),
  statusCode: s.optional(s.int()),
  timestamp: s.optional(s.int()),
  analysisTime: s.optional(s.float64()),
  inputProcess: s.optional(s.string()),
  _keysMap: {
    analyzerVersion: "analyzer_version",
    detailedStatus: "detailed_status",
    statusCode: "status_code",
    analysisTime: "analysis_time",
    inputProcess: "input_process",
  },
});
