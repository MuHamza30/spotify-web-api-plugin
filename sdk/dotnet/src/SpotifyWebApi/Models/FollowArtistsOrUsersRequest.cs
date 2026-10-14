using System.Collections.Generic;
using System.Text.Json.Serialization;
using SpotifyWebApi.Core.Models;

namespace SpotifyWebApi.Models;

public record FollowArtistsOrUsersRequest
{
    /// <summary>
    /// A JSON array of the artist or user <see href="https://developer.spotify.com/documentation/web-api/concepts/spotify-uris-ids">Spotify IDs</see>.
    /// For example: <c>{ids:["74ASZWbe4lXaubB36ztrGX", "08td7MxkoHQkXnWAYD8d6Q"]}</c>. A maximum of 50 IDs can be sent in one request. _<b>Note</b>: if the <c>ids</c> parameter is present in the query string, any IDs listed here in the body will be ignored._
    /// </summary>
    [JsonPropertyName("ids")]
    public required IReadOnlyList<string> Ids { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
