using System;
using System.Text.Json.Serialization;
using SpotifyWebApi.Core.Models;
using SpotifyWebApi.Models.OneOf;

namespace SpotifyWebApi.Models;

public record PlaylistTrackObject
{
    /// <summary>
    /// The date and time the track or episode was added. _<b>Note</b>: some very old playlists may return <c>null</c> in this field._
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("added_at")]
    public DateTimeOffset? AddedAt { get; init; }

    /// <summary>
    /// The Spotify user who added the track or episode. _<b>Note</b>: some very old playlists may return <c>null</c> in this field._
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("added_by")]
    public PlaylistUserObject? AddedBy { get; init; }

    /// <summary>
    /// Whether this track or episode is a <see href="https://developer.spotify.com/documentation/web-api/concepts/playlists/#local-files">local file</see> or not.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("is_local")]
    public bool? IsLocal { get; init; }

    /// <summary>
    /// Information about the track or episode.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("track")]
    public Track2? Track { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
