using System.Collections.Generic;
using System.Text.Json.Serialization;
using SpotifyWebApi.Core.Models;

namespace SpotifyWebApi.Models;

public record StartOrResumePlaybackRequest
{
    /// <summary>
    /// Optional. Spotify URI of the context to play.
    /// Valid contexts are albums, artists &amp; playlists.
    /// <c>{context_uri:"spotify:album:1Je1IMUlBXcx1Fz0WE7oPT"}</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("context_uri")]
    public string? ContextUri { get; init; }

    /// <summary>
    /// Optional. A JSON array of the Spotify track URIs to play.
    /// For example: <c>{"uris": ["spotify:track:4iV5W9uYEdYUVa79Axb7Rh", "spotify:track:1301WleyT98MSxVHPZCA6M"]}</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("uris")]
    public IReadOnlyList<string>? Uris { get; init; }

    /// <summary>
    /// Optional. Indicates from where in the context playback should start. Only available when context_uri corresponds to an album or playlist object
    /// "position" is zero based and can’t be negative. Example: <c>"offset": {"position": 5}</c>
    /// "uri" is a string representing the uri of the item to start at. Example: <c>"offset": {"uri": "spotify:track:1301WleyT98MSxVHPZCA6M"}</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("offset")]
    public object? Offset { get; init; }

    /// <summary>
    /// Indicates from what position to start playback. Must be a positive number. Passing in a position that is greater than the length of the track will cause the player to start playing the next song.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("position_ms")]
    public int? PositionMs { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
