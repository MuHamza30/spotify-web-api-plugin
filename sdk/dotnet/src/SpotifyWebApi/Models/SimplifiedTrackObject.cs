using System.Collections.Generic;
using System.Text.Json.Serialization;
using SpotifyWebApi.Core.Models;

namespace SpotifyWebApi.Models;

public record SimplifiedTrackObject
{
    /// <summary>
    /// The artists who performed the track. Each artist object includes a link in <c>href</c> to more detailed information about the artist.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("artists")]
    public IReadOnlyList<SimplifiedArtistObject>? Artists { get; init; }

    /// <summary>
    /// A list of the countries in which the track can be played, identified by their <see href="http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2">ISO 3166-1 alpha-2</see> code.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("available_markets")]
    public IReadOnlyList<string>? AvailableMarkets { get; init; }

    /// <summary>
    /// The disc number (usually <c>1</c> unless the album consists of more than one disc).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("disc_number")]
    public int? DiscNumber { get; init; }

    /// <summary>
    /// The track length in milliseconds.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("duration_ms")]
    public int? DurationMs { get; init; }

    /// <summary>
    /// Whether or not the track has explicit lyrics ( <c>true</c> = yes it does; <c>false</c> = no it does not OR unknown).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("explicit")]
    public bool? Explicit { get; init; }

    /// <summary>
    /// External URLs for this track.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("external_urls")]
    public ExternalUrlObject? ExternalUrls { get; init; }

    /// <summary>
    /// A link to the Web API endpoint providing full details of the track.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("href")]
    public string? Href { get; init; }

    /// <summary>
    /// The <see href="https://developer.spotify.com/documentation/web-api/concepts/spotify-uris-ids">Spotify ID</see> for the track.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    /// <summary>
    /// Part of the response when <see href="https://developer.spotify.com/documentation/web-api/concepts/track-relinking/">Track Relinking</see> is applied. If <c>true</c>, the track is playable in the given market. Otherwise <c>false</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("is_playable")]
    public bool? IsPlayable { get; init; }

    /// <summary>
    /// Part of the response when <see href="https://developer.spotify.com/documentation/web-api/concepts/track-relinking/">Track Relinking</see> is applied and is only part of the response if the track linking, in fact, exists. The requested track has been replaced with a different track. The track in the <c>linked_from</c> object contains information about the originally requested track.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("linked_from")]
    public LinkedTrackObject? LinkedFrom { get; init; }

    /// <summary>
    /// Included in the response when a content restriction is applied.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("restrictions")]
    public TrackRestrictionObject? Restrictions { get; init; }

    /// <summary>
    /// The name of the track.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// A URL to a 30 second preview (MP3 format) of the track.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("preview_url")]
    public string? PreviewUrl { get; init; }

    /// <summary>
    /// The number of the track. If an album has several discs, the track number is the number on the specified disc.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("track_number")]
    public int? TrackNumber { get; init; }

    /// <summary>
    /// The object type: "track".
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public string? Type { get; init; }

    /// <summary>
    /// The <see href="https://developer.spotify.com/documentation/web-api/concepts/spotify-uris-ids">Spotify URI</see> for the track.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("uri")]
    public string? Uri { get; init; }

    /// <summary>
    /// Whether or not the track is from a local file.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("is_local")]
    public bool? IsLocal { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
