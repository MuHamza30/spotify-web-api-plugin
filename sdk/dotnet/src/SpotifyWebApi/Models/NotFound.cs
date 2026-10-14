using System.Text.Json.Serialization;
using SpotifyWebApi.Core.Models;

namespace SpotifyWebApi.Models;

public record NotFound
{
    [JsonPropertyName("error")]
    public required ErrorObject Error { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
