using System.Collections.Generic;
using System.Text.Json.Serialization;
using SpotifyWebApi.Core.Models;

namespace SpotifyWebApi.Models;

public record RemoveShowsRequest
{
    /// <summary>
    /// A JSON array of the <see href="https://developer.spotify.comhttps://developer.spotify.com/documentation/web-api/#spotify-uris-and-ids">Spotify IDs</see>.
    /// A maximum of 50 items can be specified in one request. *Note: if the <c>ids</c> parameter is present in the query string, any IDs listed here in the body will be ignored.*
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ids")]
    public IReadOnlyList<string>? Ids { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
