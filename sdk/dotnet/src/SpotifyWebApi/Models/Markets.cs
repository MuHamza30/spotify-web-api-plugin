using System.Collections.Generic;
using System.Text.Json.Serialization;
using SpotifyWebApi.Core.Models;

namespace SpotifyWebApi.Models;

public record Markets
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("markets")]
    public IReadOnlyList<string>? MarketsValue { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
