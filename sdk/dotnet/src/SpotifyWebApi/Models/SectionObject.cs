using System.Text.Json.Serialization;
using SpotifyWebApi.Core.Models;
using SpotifyWebApi.Core.Validation.Attributes;
using SpotifyWebApi.Models.Enums;

namespace SpotifyWebApi.Models;

public record SectionObject
{
    /// <summary>
    /// The starting point (in seconds) of the section.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("start")]
    public double? Start { get; init; }

    /// <summary>
    /// The duration (in seconds) of the section.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("duration")]
    public double? Duration { get; init; }

    /// <summary>
    /// The confidence, from 0.0 to 1.0, of the reliability of the section's "designation".
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("confidence")]
    [Minimum(0.0)]
    [Maximum(1.0)]
    public double? Confidence { get; init; }

    /// <summary>
    /// The overall loudness of the section in decibels (dB). Loudness values are useful for comparing relative loudness of sections within tracks.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("loudness")]
    public double? Loudness { get; init; }

    /// <summary>
    /// The overall estimated tempo of the section in beats per minute (BPM). In musical terminology, tempo is the speed or pace of a given piece and derives directly from the average beat duration.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tempo")]
    public double? Tempo { get; init; }

    /// <summary>
    /// The confidence, from 0.0 to 1.0, of the reliability of the tempo. Some tracks contain tempo changes or sounds which don't contain tempo (like pure speech) which would correspond to a low value in this field.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tempo_confidence")]
    [Minimum(0.0)]
    [Maximum(1.0)]
    public double? TempoConfidence { get; init; }

    /// <summary>
    /// The estimated overall key of the section. The values in this field ranging from 0 to 11 mapping to pitches using standard Pitch Class notation (E.g. 0 = C, 1 = C♯/D♭, 2 = D, and so on). If no key was detected, the value is -1.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("key")]
    public int? Key { get; init; }

    /// <summary>
    /// The confidence, from 0.0 to 1.0, of the reliability of the key. Songs with many key changes may correspond to low values in this field.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("key_confidence")]
    [Minimum(0.0)]
    [Maximum(1.0)]
    public double? KeyConfidence { get; init; }

    /// <summary>
    /// Indicates the modality (major or minor) of a section, the type of scale from which its melodic content is derived. This field will contain a 0 for "minor", a 1 for "major", or a -1 for no result. Note that the major key (e.g. C major) could more likely be confused with the minor key at 3 semitones lower (e.g. A minor) as both keys carry the same pitches.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mode")]
    public Mode? Mode { get; init; }

    /// <summary>
    /// The confidence, from 0.0 to 1.0, of the reliability of the <c>mode</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mode_confidence")]
    [Minimum(0.0)]
    [Maximum(1.0)]
    public double? ModeConfidence { get; init; }

    /// <summary>
    /// An estimated time signature. The time signature (meter) is a notational convention to specify how many beats are in each bar (or measure). The time signature ranges from 3 to 7 indicating time signatures of "3/4", to "7/4".
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("time_signature")]
    [Minimum(3)]
    [Maximum(7)]
    public int? TimeSignature { get; init; }

    /// <summary>
    /// The confidence, from 0.0 to 1.0, of the reliability of the <c>time_signature</c>. Sections with time signature changes may correspond to low values in this field.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("time_signature_confidence")]
    [Minimum(0.0)]
    [Maximum(1.0)]
    public double? TimeSignatureConfidence { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
