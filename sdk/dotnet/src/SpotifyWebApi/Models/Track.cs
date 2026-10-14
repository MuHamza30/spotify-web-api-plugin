using System.Text.Json.Serialization;
using SpotifyWebApi.Core.Models;
using SpotifyWebApi.Core.Validation.Attributes;

namespace SpotifyWebApi.Models;

public record Track
{
    /// <summary>
    /// The exact number of audio samples analyzed from this track. See also <c>analysis_sample_rate</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("num_samples")]
    public int? NumSamples { get; init; }

    /// <summary>
    /// Length of the track in seconds.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("duration")]
    public double? Duration { get; init; }

    /// <summary>
    /// This field will always contain the empty string.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sample_md5")]
    public string? SampleMd5 { get; init; }

    /// <summary>
    /// An offset to the start of the region of the track that was analyzed. (As the entire track is analyzed, this should always be 0.)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("offset_seconds")]
    public int? OffsetSeconds { get; init; }

    /// <summary>
    /// The length of the region of the track was analyzed, if a subset of the track was analyzed. (As the entire track is analyzed, this should always be 0.)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("window_seconds")]
    public int? WindowSeconds { get; init; }

    /// <summary>
    /// The sample rate used to decode and analyze this track. May differ from the actual sample rate of this track available on Spotify.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("analysis_sample_rate")]
    public int? AnalysisSampleRate { get; init; }

    /// <summary>
    /// The number of channels used for analysis. If 1, all channels are summed together to mono before analysis.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("analysis_channels")]
    public int? AnalysisChannels { get; init; }

    /// <summary>
    /// The time, in seconds, at which the track's fade-in period ends. If the track has no fade-in, this will be 0.0.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("end_of_fade_in")]
    public double? EndOfFadeIn { get; init; }

    /// <summary>
    /// The time, in seconds, at which the track's fade-out period starts. If the track has no fade-out, this should match the track's length.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("start_of_fade_out")]
    public double? StartOfFadeOut { get; init; }

    /// <summary>
    /// The overall loudness of a track in decibels (dB). Loudness values are averaged across the entire track and are useful for comparing relative loudness of tracks. Loudness is the quality of a sound that is the primary psychological correlate of physical strength (amplitude). Values typically range between -60 and 0 db.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("loudness")]
    public double? Loudness { get; init; }

    /// <summary>
    /// The overall estimated tempo of a track in beats per minute (BPM). In musical terminology, tempo is the speed or pace of a given piece and derives directly from the average beat duration.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tempo")]
    public double? Tempo { get; init; }

    /// <summary>
    /// The confidence, from 0.0 to 1.0, of the reliability of the <c>tempo</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tempo_confidence")]
    [Minimum(0.0)]
    [Maximum(1.0)]
    public double? TempoConfidence { get; init; }

    /// <summary>
    /// An estimated time signature. The time signature (meter) is a notational convention to specify how many beats are in each bar (or measure). The time signature ranges from 3 to 7 indicating time signatures of "3/4", to "7/4".
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("time_signature")]
    [Minimum(3)]
    [Maximum(7)]
    public int? TimeSignature { get; init; }

    /// <summary>
    /// The confidence, from 0.0 to 1.0, of the reliability of the <c>time_signature</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("time_signature_confidence")]
    [Minimum(0.0)]
    [Maximum(1.0)]
    public double? TimeSignatureConfidence { get; init; }

    /// <summary>
    /// The key the track is in. Integers map to pitches using standard <see href="https://en.wikipedia.org/wiki/Pitch_class">Pitch Class notation</see>. E.g. 0 = C, 1 = C♯/D♭, 2 = D, and so on. If no key was detected, the value is -1.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("key")]
    [Minimum(-1)]
    [Maximum(11)]
    public int? Key { get; init; }

    /// <summary>
    /// The confidence, from 0.0 to 1.0, of the reliability of the <c>key</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("key_confidence")]
    [Minimum(0.0)]
    [Maximum(1.0)]
    public double? KeyConfidence { get; init; }

    /// <summary>
    /// Mode indicates the modality (major or minor) of a track, the type of scale from which its melodic content is derived. Major is represented by 1 and minor is 0.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mode")]
    public int? Mode { get; init; }

    /// <summary>
    /// The confidence, from 0.0 to 1.0, of the reliability of the <c>mode</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mode_confidence")]
    [Minimum(0.0)]
    [Maximum(1.0)]
    public double? ModeConfidence { get; init; }

    /// <summary>
    /// An <see href="https://academiccommons.columbia.edu/doi/10.7916/D8Q248M4">Echo Nest Musical Fingerprint (ENMFP)</see> codestring for this track.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("codestring")]
    public string? Codestring { get; init; }

    /// <summary>
    /// A version number for the Echo Nest Musical Fingerprint format used in the codestring field.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("code_version")]
    public double? CodeVersion { get; init; }

    /// <summary>
    /// An <see href="https://github.com/spotify/echoprint-codegen">EchoPrint</see> codestring for this track.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("echoprintstring")]
    public string? Echoprintstring { get; init; }

    /// <summary>
    /// A version number for the EchoPrint format used in the echoprintstring field.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("echoprint_version")]
    public double? EchoprintVersion { get; init; }

    /// <summary>
    /// A <see href="https://github.com/echonest/synchdata">Synchstring</see> for this track.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("synchstring")]
    public string? Synchstring { get; init; }

    /// <summary>
    /// A version number for the Synchstring used in the synchstring field.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("synch_version")]
    public double? SynchVersion { get; init; }

    /// <summary>
    /// A Rhythmstring for this track. The format of this string is similar to the Synchstring.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rhythmstring")]
    public string? Rhythmstring { get; init; }

    /// <summary>
    /// A version number for the Rhythmstring used in the rhythmstring field.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rhythm_version")]
    public double? RhythmVersion { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
