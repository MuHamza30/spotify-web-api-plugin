using System.Text.Json.Serialization;
using SpotifyWebApi.Core.Models;

namespace SpotifyWebApi.Models;

public record PagedAlbums
{
    [JsonPropertyName("albums")]
    public required PagingSimplifiedAlbumObject Albums { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
