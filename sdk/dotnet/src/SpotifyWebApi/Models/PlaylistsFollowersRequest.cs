using System.Text.Json.Serialization;
using SpotifyWebApi.Core.Models;

namespace SpotifyWebApi.Models;

public record PlaylistsFollowersRequest
{
    /// <summary>
    /// Defaults to <c>true</c>. If <c>true</c> the playlist will be included in user's public playlists, if <c>false</c> it will remain private.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("public")]
    public bool? Public { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
