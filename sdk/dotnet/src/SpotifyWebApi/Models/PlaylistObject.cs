using System.Collections.Generic;
using System.Text.Json.Serialization;
using SpotifyWebApi.Core.Models;

namespace SpotifyWebApi.Models;

public record PlaylistObject
{
    /// <summary>
    /// <c>true</c> if the owner allows other users to modify the playlist.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("collaborative")]
    public bool? Collaborative { get; init; }

    /// <summary>
    /// The playlist description. _Only returned for modified, verified playlists, otherwise_ <c>null</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Known external URLs for this playlist.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("external_urls")]
    public ExternalUrlObject? ExternalUrls { get; init; }

    /// <summary>
    /// Information about the followers of the playlist.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("followers")]
    public FollowersObject? Followers { get; init; }

    /// <summary>
    /// A link to the Web API endpoint providing full details of the playlist.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("href")]
    public string? Href { get; init; }

    /// <summary>
    /// The <see href="https://developer.spotify.com/documentation/web-api/concepts/spotify-uris-ids">Spotify ID</see> for the playlist.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    /// <summary>
    /// Images for the playlist. The array may be empty or contain up to three images. The images are returned by size in descending order. See <see href="https://developer.spotify.com/documentation/web-api/concepts/playlists">Working with Playlists</see>. _<b>Note</b>: If returned, the source URL for the image (<c>url</c>) is temporary and will expire in less than a day._
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("images")]
    public IReadOnlyList<ImageObject>? Images { get; init; }

    /// <summary>
    /// The name of the playlist.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// The user who owns the playlist
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("owner")]
    public PlaylistOwnerObject? Owner { get; init; }

    /// <summary>
    /// The playlist's public/private status: <c>true</c> the playlist is public, <c>false</c> the playlist is private, <c>null</c> the playlist status is not relevant. For more about public/private status, see <see href="https://developer.spotify.com/documentation/web-api/concepts/playlists">Working with Playlists</see>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("public")]
    public bool? Public { get; init; }

    /// <summary>
    /// The version identifier for the current playlist. Can be supplied in other requests to target a specific playlist version
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("snapshot_id")]
    public string? SnapshotId { get; init; }

    /// <summary>
    /// The tracks of the playlist.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tracks")]
    public PagingPlaylistTrackObject? Tracks { get; init; }

    /// <summary>
    /// The object type: "playlist"
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public string? Type { get; init; }

    /// <summary>
    /// The <see href="https://developer.spotify.com/documentation/web-api/concepts/spotify-uris-ids">Spotify URI</see> for the playlist.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("uri")]
    public string? Uri { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
