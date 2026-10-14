using System.Collections.Generic;
using System.Text.Json.Serialization;
using SpotifyWebApi.Core.Models;
using SpotifyWebApi.Models.Enums;

namespace SpotifyWebApi.Models;

public record EpisodeBase
{
    /// <summary>
    /// A URL to a 30 second preview (MP3 format) of the episode. <c>null</c> if not available.
    /// </summary>
    [JsonPropertyName("audio_preview_url")]
    public required string? AudioPreviewUrl { get; init; }

    /// <summary>
    /// A description of the episode. HTML tags are stripped away from this field, use <c>html_description</c> field in case HTML tags are needed.
    /// </summary>
    [JsonPropertyName("description")]
    public required string Description { get; init; }

    /// <summary>
    /// A description of the episode. This field may contain HTML tags.
    /// </summary>
    [JsonPropertyName("html_description")]
    public required string HtmlDescription { get; init; }

    /// <summary>
    /// The episode length in milliseconds.
    /// </summary>
    [JsonPropertyName("duration_ms")]
    public required int DurationMs { get; init; }

    /// <summary>
    /// Whether or not the episode has explicit content (true = yes it does; false = no it does not OR unknown).
    /// </summary>
    [JsonPropertyName("explicit")]
    public required bool Explicit { get; init; }

    /// <summary>
    /// External URLs for this episode.
    /// </summary>
    [JsonPropertyName("external_urls")]
    public required ExternalUrlObject ExternalUrls { get; init; }

    /// <summary>
    /// A link to the Web API endpoint providing full details of the episode.
    /// </summary>
    [JsonPropertyName("href")]
    public required string Href { get; init; }

    /// <summary>
    /// The <see href="https://developer.spotify.com/documentation/web-api/concepts/spotify-uris-ids">Spotify ID</see> for the episode.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// The cover art for the episode in various sizes, widest first.
    /// </summary>
    [JsonPropertyName("images")]
    public required IReadOnlyList<ImageObject> Images { get; init; }

    /// <summary>
    /// True if the episode is hosted outside of Spotify's CDN.
    /// </summary>
    [JsonPropertyName("is_externally_hosted")]
    public required bool IsExternallyHosted { get; init; }

    /// <summary>
    /// True if the episode is playable in the given market. Otherwise false.
    /// </summary>
    [JsonPropertyName("is_playable")]
    public required bool IsPlayable { get; init; }

    /// <summary>
    /// The language used in the episode, identified by a <see href="https://en.wikipedia.org/wiki/ISO_639">ISO 639</see> code. This field is deprecated and might be removed in the future. Please use the <c>languages</c> field instead.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("language")]
    public string? Language { get; init; }

    /// <summary>
    /// A list of the languages used in the episode, identified by their <see href="https://en.wikipedia.org/wiki/ISO_639">ISO 639-1</see> code.
    /// </summary>
    [JsonPropertyName("languages")]
    public required IReadOnlyList<string> Languages { get; init; }

    /// <summary>
    /// The name of the episode.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// The date the episode was first released, for example <c>"1981-12-15"</c>. Depending on the precision, it might be shown as <c>"1981"</c> or <c>"1981-12"</c>.
    /// </summary>
    [JsonPropertyName("release_date")]
    public required string ReleaseDate { get; init; }

    /// <summary>
    /// The precision with which <c>release_date</c> value is known.
    /// </summary>
    [JsonPropertyName("release_date_precision")]
    public required ReleaseDatePrecision ReleaseDatePrecision { get; init; }

    /// <summary>
    /// The user's most recent position in the episode. Set if the supplied access token is a user token and has the scope 'user-read-playback-position'.
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
    /// The <see href="https://developer.spotify.com/documentation/web-api/concepts/spotify-uris-ids">Spotify URI</see> for the episode.
    /// </summary>
    [JsonPropertyName("uri")]
    public required string Uri { get; init; }

    /// <summary>
    /// Included in the response when a content restriction is applied.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("restrictions")]
    public EpisodeRestrictionObject? Restrictions { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
