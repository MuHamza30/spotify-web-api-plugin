using System.Collections.Generic;
using System.Text.Json.Serialization;
using SpotifyWebApi.Core.Models;

namespace SpotifyWebApi.Models;

public record CategoryObject
{
    /// <summary>
    /// A link to the Web API endpoint returning full details of the category.
    /// </summary>
    [JsonPropertyName("href")]
    public required string Href { get; init; }

    /// <summary>
    /// The category icon, in various sizes.
    /// </summary>
    [JsonPropertyName("icons")]
    public required IReadOnlyList<ImageObject> Icons { get; init; }

    /// <summary>
    /// The <see href="https://developer.spotify.com/documentation/web-api/concepts/spotify-uris-ids">Spotify category ID</see> of the category.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// The name of the category.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
