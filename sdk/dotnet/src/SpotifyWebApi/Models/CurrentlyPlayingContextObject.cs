using System.Text.Json.Serialization;
using SpotifyWebApi.Core.Models;
using SpotifyWebApi.Models.OneOf;

namespace SpotifyWebApi.Models;

public record CurrentlyPlayingContextObject
{
    /// <summary>
    /// The device that is currently active.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("device")]
    public DeviceObject? Device { get; init; }

    /// <summary>
    /// off, track, context
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("repeat_state")]
    public string? RepeatState { get; init; }

    /// <summary>
    /// If shuffle is on or off.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("shuffle_state")]
    public bool? ShuffleState { get; init; }

    /// <summary>
    /// A Context Object. Can be <c>null</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("context")]
    public ContextObject? Context { get; init; }

    /// <summary>
    /// Unix Millisecond Timestamp when data was fetched.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("timestamp")]
    public long? Timestamp { get; init; }

    /// <summary>
    /// Progress into the currently playing track or episode. Can be <c>null</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("progress_ms")]
    public int? ProgressMs { get; init; }

    /// <summary>
    /// If something is currently playing, return <c>true</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("is_playing")]
    public bool? IsPlaying { get; init; }

    /// <summary>
    /// The currently playing track or episode. Can be <c>null</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("item")]
    public Item? Item { get; init; }

    /// <summary>
    /// The object type of the currently playing item. Can be one of <c>track</c>, <c>episode</c>, <c>ad</c> or <c>unknown</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("currently_playing_type")]
    public string? CurrentlyPlayingType { get; init; }

    /// <summary>
    /// Allows to update the user interface based on which playback actions are available within the current context.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("actions")]
    public DisallowsObject? Actions { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
