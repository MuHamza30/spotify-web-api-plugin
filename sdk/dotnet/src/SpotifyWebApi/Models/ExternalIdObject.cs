using System.Text.Json.Serialization;
using SpotifyWebApi.Core.Models;

namespace SpotifyWebApi.Models;

public record ExternalIdObject
{
    /// <summary>
    /// <see href="http://en.wikipedia.org/wiki/International_Standard_Recording_Code">International Standard Recording Code</see>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("isrc")]
    public string? Isrc { get; init; }

    /// <summary>
    /// <see href="http://en.wikipedia.org/wiki/International_Article_Number_%28EAN%29">International Article Number</see>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ean")]
    public string? Ean { get; init; }

    /// <summary>
    /// <see href="http://en.wikipedia.org/wiki/Universal_Product_Code">Universal Product Code</see>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("upc")]
    public string? Upc { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
