using System.Text.Json.Serialization;
using SpotifyWebApi.Core.Models;

namespace SpotifyWebApi.Models;

public record PlaylistsRequest
{
    /// <summary>
    /// The new name for the playlist, for example <c>"My New Playlist Title"</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// If <c>true</c> the playlist will be public, if <c>false</c> it will be private.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("public")]
    public bool? Public { get; init; }

    /// <summary>
    /// If <c>true</c>, the playlist will become collaborative and other users will be able to modify the playlist in their Spotify client. &lt;br/&gt;
    /// _<b>Note</b>: You can only set <c>collaborative</c> to <c>true</c> on non-public playlists._
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("collaborative")]
    public bool? Collaborative { get; init; }

    /// <summary>
    /// Value for playlist description as displayed in Spotify Clients and in the Web API.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
