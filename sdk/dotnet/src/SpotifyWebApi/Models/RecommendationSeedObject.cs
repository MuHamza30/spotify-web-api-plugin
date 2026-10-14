using System.Text.Json.Serialization;
using SpotifyWebApi.Core.Models;

namespace SpotifyWebApi.Models;

public record RecommendationSeedObject
{
    /// <summary>
    /// The number of tracks available after min\_\* and max\_\* filters have been applied.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("afterFilteringSize")]
    public int? AfterFilteringSize { get; init; }

    /// <summary>
    /// The number of tracks available after relinking for regional availability.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("afterRelinkingSize")]
    public int? AfterRelinkingSize { get; init; }

    /// <summary>
    /// A link to the full track or artist data for this seed. For tracks this will be a link to a Track Object. For artists a link to an Artist Object. For genre seeds, this value will be <c>null</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("href")]
    public string? Href { get; init; }

    /// <summary>
    /// The id used to select this seed. This will be the same as the string used in the <c>seed_artists</c>, <c>seed_tracks</c> or <c>seed_genres</c> parameter.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    /// <summary>
    /// The number of recommended tracks available for this seed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("initialPoolSize")]
    public int? InitialPoolSize { get; init; }

    /// <summary>
    /// The entity type of this seed. One of <c>artist</c>, <c>track</c> or <c>genre</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public string? Type { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
