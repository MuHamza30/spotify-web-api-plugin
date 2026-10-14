using System.Text.Json.Serialization;
using SpotifyWebApi.Core.Models;

namespace SpotifyWebApi.Models;

public record ExplicitContentSettingsObject
{
    /// <summary>
    /// When <c>true</c>, indicates that explicit content should not be played.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("filter_enabled")]
    public bool? FilterEnabled { get; init; }

    /// <summary>
    /// When <c>true</c>, indicates that the explicit content setting is locked and can't be changed by the user.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("filter_locked")]
    public bool? FilterLocked { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
