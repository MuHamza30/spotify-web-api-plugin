using System.Text.Json.Serialization;
using SpotifyWebApi.Core.Models;

namespace SpotifyWebApi.Models;

public record ImageObject
{
    /// <summary>
    /// The source URL of the image.
    /// </summary>
    [JsonPropertyName("url")]
    public required string Url { get; init; }

    /// <summary>
    /// The image height in pixels.
    /// </summary>
    [JsonPropertyName("height")]
    public required int? Height { get; init; }

    /// <summary>
    /// The image width in pixels.
    /// </summary>
    [JsonPropertyName("width")]
    public required int? Width { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
