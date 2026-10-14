using System.Collections.Generic;
using System.Text.Json.Serialization;
using SpotifyWebApi.Core.Models;
using SpotifyWebApi.Models.Enums;

namespace SpotifyWebApi.Models;

public record ChapterBase
{
    /// <summary>
    /// A URL to a 30 second preview (MP3 format) of the chapter. <c>null</c> if not available.
    /// </summary>
    [JsonPropertyName("audio_preview_url")]
    public required string? AudioPreviewUrl { get; init; }

    /// <summary>
    /// A list of the countries in which the chapter can be played, identified by their <see href="http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2">ISO 3166-1 alpha-2</see> code.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("available_markets")]
    public IReadOnlyList<string>? AvailableMarkets { get; init; }

    /// <summary>
    /// The number of the chapter
    /// </summary>
    [JsonPropertyName("chapter_number")]
    public required int ChapterNumber { get; init; }

    /// <summary>
    /// A description of the chapter. HTML tags are stripped away from this field, use <c>html_description</c> field in case HTML tags are needed.
    /// </summary>
    [JsonPropertyName("description")]
    public required string Description { get; init; }

    /// <summary>
    /// A description of the chapter. This field may contain HTML tags.
    /// </summary>
    [JsonPropertyName("html_description")]
    public required string HtmlDescription { get; init; }

    /// <summary>
    /// The chapter length in milliseconds.
    /// </summary>
    [JsonPropertyName("duration_ms")]
    public required int DurationMs { get; init; }

    /// <summary>
    /// Whether or not the chapter has explicit content (true = yes it does; false = no it does not OR unknown).
    /// </summary>
    [JsonPropertyName("explicit")]
    public required bool Explicit { get; init; }

    /// <summary>
    /// External URLs for this chapter.
    /// </summary>
    [JsonPropertyName("external_urls")]
    public required ExternalUrlObject ExternalUrls { get; init; }

    /// <summary>
    /// A link to the Web API endpoint providing full details of the chapter.
    /// </summary>
    [JsonPropertyName("href")]
    public required string Href { get; init; }

    /// <summary>
    /// The <see href="https://developer.spotify.com/documentation/web-api/concepts/spotify-uris-ids">Spotify ID</see> for the chapter.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// The cover art for the chapter in various sizes, widest first.
    /// </summary>
    [JsonPropertyName("images")]
    public required IReadOnlyList<ImageObject> Images { get; init; }

    /// <summary>
    /// True if the chapter is playable in the given market. Otherwise false.
    /// </summary>
    [JsonPropertyName("is_playable")]
    public required bool IsPlayable { get; init; }

    /// <summary>
    /// A list of the languages used in the chapter, identified by their <see href="https://en.wikipedia.org/wiki/ISO_639">ISO 639-1</see> code.
    /// </summary>
    [JsonPropertyName("languages")]
    public required IReadOnlyList<string> Languages { get; init; }

    /// <summary>
    /// The name of the chapter.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// The date the chapter was first released, for example <c>"1981-12-15"</c>. Depending on the precision, it might be shown as <c>"1981"</c> or <c>"1981-12"</c>.
    /// </summary>
    [JsonPropertyName("release_date")]
    public required string ReleaseDate { get; init; }

    /// <summary>
    /// The precision with which <c>release_date</c> value is known.
    /// </summary>
    [JsonPropertyName("release_date_precision")]
    public required ReleaseDatePrecision ReleaseDatePrecision { get; init; }

    /// <summary>
    /// The user's most recent position in the chapter. Set if the supplied access token is a user token and has the scope 'user-read-playback-position'.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resume_point")]
    public ResumePointObject? ResumePoint { get; init; }

    /// <summary>
    /// The object type.
    /// </summary>
    [JsonPropertyName("type")]
    public required Type5 Type { get; init; }

    /// <summary>
    /// The <see href="https://developer.spotify.com/documentation/web-api/concepts/spotify-uris-ids">Spotify URI</see> for the chapter.
    /// </summary>
    [JsonPropertyName("uri")]
    public required string Uri { get; init; }

    /// <summary>
    /// Included in the response when a content restriction is applied.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("restrictions")]
    public ChapterRestrictionObject? Restrictions { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
