using System.Collections.Generic;
using System.Text.Json.Serialization;
using SpotifyWebApi.Core.Models;
using SpotifyWebApi.Models.Enums;

namespace SpotifyWebApi.Models;

public record AlbumObject
{
    /// <summary>
    /// The type of the album.
    /// </summary>
    [JsonPropertyName("album_type")]
    public required AlbumType AlbumType { get; init; }

    /// <summary>
    /// The number of tracks in the album.
    /// </summary>
    [JsonPropertyName("total_tracks")]
    public required int TotalTracks { get; init; }

    /// <summary>
    /// The markets in which the album is available: <see href="http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2">ISO 3166-1 alpha-2 country codes</see>. _<b>NOTE</b>: an album is considered available in a market when at least 1 of its tracks is available in that market._
    /// </summary>
    [JsonPropertyName("available_markets")]
    public required IReadOnlyList<string> AvailableMarkets { get; init; }

    /// <summary>
    /// Known external URLs for this album.
    /// </summary>
    [JsonPropertyName("external_urls")]
    public required ExternalUrlObject ExternalUrls { get; init; }

    /// <summary>
    /// A link to the Web API endpoint providing full details of the album.
    /// </summary>
    [JsonPropertyName("href")]
    public required string Href { get; init; }

    /// <summary>
    /// The <see href="https://developer.spotify.com/documentation/web-api/concepts/spotify-uris-ids">Spotify ID</see> for the album.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// The cover art for the album in various sizes, widest first.
    /// </summary>
    [JsonPropertyName("images")]
    public required IReadOnlyList<ImageObject> Images { get; init; }

    /// <summary>
    /// The name of the album. In case of an album takedown, the value may be an empty string.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// The date the album was first released.
    /// </summary>
    [JsonPropertyName("release_date")]
    public required string ReleaseDate { get; init; }

    /// <summary>
    /// The precision with which <c>release_date</c> value is known.
    /// </summary>
    [JsonPropertyName("release_date_precision")]
    public required ReleaseDatePrecision ReleaseDatePrecision { get; init; }

    /// <summary>
    /// Included in the response when a content restriction is applied.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("restrictions")]
    public AlbumRestrictionObject? Restrictions { get; init; }

    /// <summary>
    /// The object type.
    /// </summary>
    [JsonPropertyName("type")]
    public required Type2 Type { get; init; }

    /// <summary>
    /// The <see href="https://developer.spotify.com/documentation/web-api/concepts/spotify-uris-ids">Spotify URI</see> for the album.
    /// </summary>
    [JsonPropertyName("uri")]
    public required string Uri { get; init; }

    /// <summary>
    /// The artists of the album. Each artist object includes a link in <c>href</c> to more detailed information about the artist.
    /// </summary>
    [JsonPropertyName("artists")]
    public required IReadOnlyList<SimplifiedArtistObject> Artists { get; init; }

    /// <summary>
    /// The tracks of the album.
    /// </summary>
    [JsonPropertyName("tracks")]
    public required PagingSimplifiedTrackObject Tracks { get; init; }

    /// <summary>
    /// The copyright statements of the album.
    /// </summary>
    [JsonPropertyName("copyrights")]
    public required IReadOnlyList<CopyrightObject> Copyrights { get; init; }

    /// <summary>
    /// Known external IDs for the album.
    /// </summary>
    [JsonPropertyName("external_ids")]
    public required ExternalIdObject ExternalIds { get; init; }

    /// <summary>
    /// A list of the genres the album is associated with. If not yet classified, the array is empty.
    /// </summary>
    [JsonPropertyName("genres")]
    public required IReadOnlyList<string> Genres { get; init; }

    /// <summary>
    /// The label associated with the album.
    /// </summary>
    [JsonPropertyName("label")]
    public required string Label { get; init; }

    /// <summary>
    /// The popularity of the album. The value will be between 0 and 100, with 100 being the most popular.
    /// </summary>
    [JsonPropertyName("popularity")]
    public required int Popularity { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
