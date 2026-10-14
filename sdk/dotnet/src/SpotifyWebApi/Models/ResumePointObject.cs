using System.Text.Json.Serialization;
using SpotifyWebApi.Core.Models;

namespace SpotifyWebApi.Models;

public record ResumePointObject
{
    /// <summary>
    /// Whether or not the episode has been fully played by the user.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fully_played")]
    public bool? FullyPlayed { get; init; }

    /// <summary>
    /// The user's most recent position in the episode in milliseconds.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resume_position_ms")]
    public int? ResumePositionMs { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
