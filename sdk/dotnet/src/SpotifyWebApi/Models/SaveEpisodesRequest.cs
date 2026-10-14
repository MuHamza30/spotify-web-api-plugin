using System.Collections.Generic;
using System.Text.Json.Serialization;
using SpotifyWebApi.Core.Models;

namespace SpotifyWebApi.Models;

public record SaveEpisodesRequest
{
    /// <summary>
    /// A JSON array of the <see href="https://developer.spotify.com/documentation/web-api/concepts/spotify-uris-ids">Spotify IDs</see>. &lt;br/&gt;A maximum of 50 items can be specified in one request. _<b>Note</b>: if the <c>ids</c> parameter is present in the query string, any IDs listed here in the body will be ignored._
    /// </summary>
    [JsonPropertyName("ids")]
    public required IReadOnlyList<string> Ids { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
