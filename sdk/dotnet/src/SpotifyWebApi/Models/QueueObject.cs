using System.Collections.Generic;
using System.Text.Json.Serialization;
using SpotifyWebApi.Core.Models;
using SpotifyWebApi.Models.OneOf;

namespace SpotifyWebApi.Models;

public record QueueObject
{
    /// <summary>
    /// The currently playing track or episode. Can be <c>null</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("currently_playing")]
    public CurrentlyPlaying? CurrentlyPlaying { get; init; }

    /// <summary>
    /// The tracks or episodes in the queue. Can be empty.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("queue")]
    public IReadOnlyList<QueueModel>? Queue { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
