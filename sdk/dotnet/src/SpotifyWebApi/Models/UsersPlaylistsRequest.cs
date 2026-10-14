using System.Text.Json.Serialization;
using SpotifyWebApi.Core.Models;

namespace SpotifyWebApi.Models;

public record UsersPlaylistsRequest
{
    /// <summary>
    /// The name for the new playlist, for example <c>"Your Coolest Playlist"</c>. This name does not need to be unique; a user may have several playlists with the same name.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// Defaults to <c>true</c>. If <c>true</c> the playlist will be public, if <c>false</c> it will be private. To be able to create private playlists, the user must have granted the <c>playlist-modify-private</c> <see href="https://developer.spotify.com/documentation/web-api/concepts/scopes/#list-of-scopes">scope</see>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("public")]
    public bool? Public { get; init; }

    /// <summary>
    /// Defaults to <c>false</c>. If <c>true</c> the playlist will be collaborative. _<b>Note</b>: to create a collaborative playlist you must also set <c>public</c> to <c>false</c>. To create collaborative playlists you must have granted <c>playlist-modify-private</c> and <c>playlist-modify-public</c> <see href="https://developer.spotify.com/documentation/web-api/concepts/scopes/#list-of-scopes">scopes</see>._
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("collaborative")]
    public bool? Collaborative { get; init; }

    /// <summary>
    /// value for playlist description as displayed in Spotify Clients and in the Web API.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
