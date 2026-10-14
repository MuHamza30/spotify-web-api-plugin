using System.Collections.Generic;
using System.Text.Json.Serialization;
using SpotifyWebApi.Core.Models;

namespace SpotifyWebApi.Models;

public record PlaylistsTracksRequest2
{
    /// <summary>
    /// An array of objects containing <see href="https://developer.spotify.com/documentation/web-api/concepts/spotify-uris-ids">Spotify URIs</see> of the tracks or episodes to remove.
    /// For example: <c>{ "tracks": [{ "uri": "spotify:track:4iV5W9uYEdYUVa79Axb7Rh" },{ "uri": "spotify:track:1301WleyT98MSxVHPZCA6M" }] }</c>. A maximum of 100 objects can be sent at once.
    /// </summary>
    [JsonPropertyName("tracks")]
    public required IReadOnlyList<Track1> Tracks { get; init; }

    /// <summary>
    /// The playlist's snapshot ID against which you want to make the changes.
    /// The API will validate that the specified items exist and in the specified positions and make the changes,
    /// even if more recent changes have been made to the playlist.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("snapshot_id")]
    public string? SnapshotId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
