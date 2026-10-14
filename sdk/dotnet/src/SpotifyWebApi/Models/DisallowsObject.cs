using System.Text.Json.Serialization;
using SpotifyWebApi.Core.Models;

namespace SpotifyWebApi.Models;

public record DisallowsObject
{
    /// <summary>
    /// Interrupting playback. Optional field.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("interrupting_playback")]
    public bool? InterruptingPlayback { get; init; }

    /// <summary>
    /// Pausing. Optional field.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pausing")]
    public bool? Pausing { get; init; }

    /// <summary>
    /// Resuming. Optional field.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resuming")]
    public bool? Resuming { get; init; }

    /// <summary>
    /// Seeking playback location. Optional field.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("seeking")]
    public bool? Seeking { get; init; }

    /// <summary>
    /// Skipping to the next context. Optional field.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("skipping_next")]
    public bool? SkippingNext { get; init; }

    /// <summary>
    /// Skipping to the previous context. Optional field.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("skipping_prev")]
    public bool? SkippingPrev { get; init; }

    /// <summary>
    /// Toggling repeat context flag. Optional field.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("toggling_repeat_context")]
    public bool? TogglingRepeatContext { get; init; }

    /// <summary>
    /// Toggling shuffle flag. Optional field.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("toggling_shuffle")]
    public bool? TogglingShuffle { get; init; }

    /// <summary>
    /// Toggling repeat track flag. Optional field.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("toggling_repeat_track")]
    public bool? TogglingRepeatTrack { get; init; }

    /// <summary>
    /// Transfering playback between devices. Optional field.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("transferring_playback")]
    public bool? TransferringPlayback { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
