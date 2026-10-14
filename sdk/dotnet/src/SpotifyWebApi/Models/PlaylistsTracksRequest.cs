using System.Collections.Generic;
using System.Text.Json.Serialization;
using SpotifyWebApi.Core.Models;

namespace SpotifyWebApi.Models;

public record PlaylistsTracksRequest
{
    /// <summary>
    /// A JSON array of the <see href="https://developer.spotify.com/documentation/web-api/concepts/spotify-uris-ids">Spotify URIs</see> to add. For example: <c>{"uris": ["spotify:track:4iV5W9uYEdYUVa79Axb7Rh","spotify:track:1301WleyT98MSxVHPZCA6M", "spotify:episode:512ojhOuo1ktJprKbVcKyQ"]}</c>&lt;br/&gt;A maximum of 100 items can be added in one request. _<b>Note</b>: if the <c>uris</c> parameter is present in the query string, any URIs listed here in the body will be ignored._
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("uris")]
    public IReadOnlyList<string>? Uris { get; init; }

    /// <summary>
    /// The position to insert the items, a zero-based index. For example, to insert the items in the first position: <c>position=0</c> ; to insert the items in the third position: <c>position=2</c>. If omitted, the items will be appended to the playlist. Items are added in the order they appear in the uris array. For example: <c>{"uris": ["spotify:track:4iV5W9uYEdYUVa79Axb7Rh","spotify:track:1301WleyT98MSxVHPZCA6M"], "position": 3}</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("position")]
    public int? Position { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
