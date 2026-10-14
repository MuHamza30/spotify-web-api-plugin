using System.Collections.Generic;
using System.Text.Json.Serialization;
using SpotifyWebApi.Core.Models;

namespace SpotifyWebApi.Models;

public record AudioAnalysisObject
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("meta")]
    public Meta? Meta { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("track")]
    public Track? Track { get; init; }

    /// <summary>
    /// The time intervals of the bars throughout the track. A bar (or measure) is a segment of time defined as a given number of beats.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bars")]
    public IReadOnlyList<TimeIntervalObject>? Bars { get; init; }

    /// <summary>
    /// The time intervals of beats throughout the track. A beat is the basic time unit of a piece of music; for example, each tick of a metronome. Beats are typically multiples of tatums.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("beats")]
    public IReadOnlyList<TimeIntervalObject>? Beats { get; init; }

    /// <summary>
    /// Sections are defined by large variations in rhythm or timbre, e.g. chorus, verse, bridge, guitar solo, etc. Each section contains its own descriptions of tempo, key, mode, time_signature, and loudness.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sections")]
    public IReadOnlyList<SectionObject>? Sections { get; init; }

    /// <summary>
    /// Each segment contains a roughly conisistent sound throughout its duration.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("segments")]
    public IReadOnlyList<SegmentObject>? Segments { get; init; }

    /// <summary>
    /// A tatum represents the lowest regular pulse train that a listener intuitively infers from the timing of perceived musical events (segments).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tatums")]
    public IReadOnlyList<TimeIntervalObject>? Tatums { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
