using System.Collections.Generic;
using System.Text.Json.Serialization;
using SpotifyWebApi.Core.Models;

namespace SpotifyWebApi.Models;

public record RecommendationsObject
{
    /// <summary>
    /// An array of recommendation seed objects.
    /// </summary>
    [JsonPropertyName("seeds")]
    public required IReadOnlyList<RecommendationSeedObject> Seeds { get; init; }

    /// <summary>
    /// An array of track objects ordered according to the parameters supplied.
    /// </summary>
    [JsonPropertyName("tracks")]
    public required IReadOnlyList<TrackObject> Tracks { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
