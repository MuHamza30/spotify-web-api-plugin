import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Track = {
  /**
   * The exact number of audio samples analyzed from this track. See also `analysis_sample_rate`.
   */
  numSamples?: number;
  /** Length of the track in seconds. */
  duration?: number;
  /** This field will always contain the empty string. */
  sampleMd5?: string;
  /**
   * An offset to the start of the region of the track that was analyzed. (As the entire track is
   * analyzed, this should always be 0.)
   */
  offsetSeconds?: number;
  /**
   * The length of the region of the track was analyzed, if a subset of the track was analyzed. (As
   * the entire track is analyzed, this should always be 0.)
   */
  windowSeconds?: number;
  /**
   * The sample rate used to decode and analyze this track. May differ from the actual sample rate
   * of this track available on Spotify.
   */
  analysisSampleRate?: number;
  /**
   * The number of channels used for analysis. If 1, all channels are summed together to mono before
   * analysis.
   */
  analysisChannels?: number;
  /**
   * The time, in seconds, at which the track's fade-in period ends. If the track has no fade-in,
   * this will be 0.0.
   */
  endOfFadeIn?: number;
  /**
   * The time, in seconds, at which the track's fade-out period starts. If the track has no
   * fade-out, this should match the track's length.
   */
  startOfFadeOut?: number;
  /**
   * The overall loudness of a track in decibels (dB). Loudness values are averaged across the
   * entire track and are useful for comparing relative loudness of tracks. Loudness is the quality
   * of a sound that is the primary psychological correlate of physical strength (amplitude). Values
   * typically range between -60 and 0 db.
   */
  loudness?: number;
  /**
   * The overall estimated tempo of a track in beats per minute (BPM). In musical terminology, tempo
   * is the speed or pace of a given piece and derives directly from the average beat duration.
   */
  tempo?: number;
  /** The confidence, from 0.0 to 1.0, of the reliability of the `tempo`. */
  tempoConfidence?: number;
  /**
   * An estimated time signature. The time signature (meter) is a notational convention to specify
   * how many beats are in each bar (or measure). The time signature ranges from 3 to 7 indicating
   * time signatures of "3/4", to "7/4".
   */
  timeSignature?: number;
  /** The confidence, from 0.0 to 1.0, of the reliability of the `time_signature`. */
  timeSignatureConfidence?: number;
  /**
   * The key the track is in. Integers map to pitches using standard [Pitch Class
   * notation](https://en.wikipedia.org/wiki/Pitch_class). E.g. 0 = C, 1 = C♯/D♭, 2 = D, and so on.
   * If no key was detected, the value is -1.
   */
  key?: number;
  /** The confidence, from 0.0 to 1.0, of the reliability of the `key`. */
  keyConfidence?: number;
  /**
   * Mode indicates the modality (major or minor) of a track, the type of scale from which its
   * melodic content is derived. Major is represented by 1 and minor is 0.
   */
  mode?: number;
  /** The confidence, from 0.0 to 1.0, of the reliability of the `mode`. */
  modeConfidence?: number;
  /**
   * An [Echo Nest Musical Fingerprint
   * (ENMFP)](https://academiccommons.columbia.edu/doi/10.7916/D8Q248M4) codestring for this track.
   */
  codestring?: string;
  /** A version number for the Echo Nest Musical Fingerprint format used in the codestring field. */
  codeVersion?: number;
  /** An [EchoPrint](https://github.com/spotify/echoprint-codegen) codestring for this track. */
  echoprintstring?: string;
  /** A version number for the EchoPrint format used in the echoprintstring field. */
  echoprintVersion?: number;
  /** A [Synchstring](https://github.com/echonest/synchdata) for this track. */
  synchstring?: string;
  /** A version number for the Synchstring used in the synchstring field. */
  synchVersion?: number;
  /** A Rhythmstring for this track. The format of this string is similar to the Synchstring. */
  rhythmstring?: string;
  /** A version number for the Rhythmstring used in the rhythmstring field. */
  rhythmVersion?: number;
};

export const trackSchema: Schema<Track> = s.object<Track>({
  numSamples: s.optional(s.int()),
  duration: s.optional(s.float64()),
  sampleMd5: s.optional(s.string()),
  offsetSeconds: s.optional(s.int()),
  windowSeconds: s.optional(s.int()),
  analysisSampleRate: s.optional(s.int()),
  analysisChannels: s.optional(s.int()),
  endOfFadeIn: s.optional(s.float64()),
  startOfFadeOut: s.optional(s.float64()),
  loudness: s.optional(s.float64()),
  tempo: s.optional(s.float64()),
  tempoConfidence: s.optional(s.float64()),
  timeSignature: s.optional(s.int()),
  timeSignatureConfidence: s.optional(s.float64()),
  key: s.optional(s.int()),
  keyConfidence: s.optional(s.float64()),
  mode: s.optional(s.int()),
  modeConfidence: s.optional(s.float64()),
  codestring: s.optional(s.string()),
  codeVersion: s.optional(s.float64()),
  echoprintstring: s.optional(s.string()),
  echoprintVersion: s.optional(s.float64()),
  synchstring: s.optional(s.string()),
  synchVersion: s.optional(s.float64()),
  rhythmstring: s.optional(s.string()),
  rhythmVersion: s.optional(s.float64()),
  _keysMap: {
    numSamples: "num_samples",
    sampleMd5: "sample_md5",
    offsetSeconds: "offset_seconds",
    windowSeconds: "window_seconds",
    analysisSampleRate: "analysis_sample_rate",
    analysisChannels: "analysis_channels",
    endOfFadeIn: "end_of_fade_in",
    startOfFadeOut: "start_of_fade_out",
    tempoConfidence: "tempo_confidence",
    timeSignature: "time_signature",
    timeSignatureConfidence: "time_signature_confidence",
    keyConfidence: "key_confidence",
    modeConfidence: "mode_confidence",
    codeVersion: "code_version",
    echoprintVersion: "echoprint_version",
    synchVersion: "synch_version",
    rhythmVersion: "rhythm_version",
  },
});
