using System.Text.Json.Serialization;
using SpotifyWebApi.Core.Models;

namespace SpotifyWebApi.Models;

public record CursorPagedArtists
{
    [JsonPropertyName("artists")]
    public required CursorPagingSimplifiedArtistObject Artists { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
