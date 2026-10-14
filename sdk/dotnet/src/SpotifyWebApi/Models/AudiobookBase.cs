using System.Collections.Generic;
using System.Text.Json.Serialization;
using SpotifyWebApi.Core.Models;
using SpotifyWebApi.Models.Enums;

namespace SpotifyWebApi.Models;

public record AudiobookBase
{
    /// <summary>
    /// The author(s) for the audiobook.
    /// </summary>
    [JsonPropertyName("authors")]
    public required IReadOnlyList<AuthorObject> Authors { get; init; }

    /// <summary>
    /// A list of the countries in which the audiobook can be played, identified by their <see href="http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2">ISO 3166-1 alpha-2</see> code.
    /// </summary>
    [JsonPropertyName("available_markets")]
    public required IReadOnlyList<string> AvailableMarkets { get; init; }

    /// <summary>
    /// The copyright statements of the audiobook.
    /// </summary>
    [JsonPropertyName("copyrights")]
    public required IReadOnlyList<CopyrightObject> Copyrights { get; init; }

    /// <summary>
    /// A description of the audiobook. HTML tags are stripped away from this field, use <c>html_description</c> field in case HTML tags are needed.
    /// </summary>
    [JsonPropertyName("description")]
    public required string Description { get; init; }

    /// <summary>
    /// A description of the audiobook. This field may contain HTML tags.
    /// </summary>
    [JsonPropertyName("html_description")]
    public required string HtmlDescription { get; init; }

    /// <summary>
    /// The edition of the audiobook.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("edition")]
    public string? Edition { get; init; }

    /// <summary>
    /// Whether or not the audiobook has explicit content (true = yes it does; false = no it does not OR unknown).
    /// </summary>
    [JsonPropertyName("explicit")]
    public required bool Explicit { get; init; }

    /// <summary>
    /// External URLs for this audiobook.
    /// </summary>
    [JsonPropertyName("external_urls")]
    public required ExternalUrlObject ExternalUrls { get; init; }

    /// <summary>
    /// A link to the Web API endpoint providing full details of the audiobook.
    /// </summary>
    [JsonPropertyName("href")]
    public required string Href { get; init; }

    /// <summary>
    /// The <see href="https://developer.spotify.com/documentation/web-api/concepts/spotify-uris-ids">Spotify ID</see> for the audiobook.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// The cover art for the audiobook in various sizes, widest first.
    /// </summary>
    [JsonPropertyName("images")]
    public required IReadOnlyList<ImageObject> Images { get; init; }

    /// <summary>
    /// A list of the languages used in the audiobook, identified by their <see href="https://en.wikipedia.org/wiki/ISO_639">ISO 639</see> code.
    /// </summary>
    [JsonPropertyName("languages")]
    public required IReadOnlyList<string> Languages { get; init; }

    /// <summary>
    /// The media type of the audiobook.
    /// </summary>
    [JsonPropertyName("media_type")]
    public required string MediaType { get; init; }

    /// <summary>
    /// The name of the audiobook.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// The narrator(s) for the audiobook.
    /// </summary>
    [JsonPropertyName("narrators")]
    public required IReadOnlyList<NarratorObject> Narrators { get; init; }

    /// <summary>
    /// The publisher of the audiobook.
    /// </summary>
    [JsonPropertyName("publisher")]
    public required string Publisher { get; init; }

    /// <summary>
    /// The object type.
    /// </summary>
    [JsonPropertyName("type")]
    public required Type9 Type { get; init; }

    /// <summary>
    /// The <see href="https://developer.spotify.com/documentation/web-api/concepts/spotify-uris-ids">Spotify URI</see> for the audiobook.
    /// </summary>
    [JsonPropertyName("uri")]
    public required string Uri { get; init; }

    /// <summary>
    /// The number of chapters in this audiobook.
    /// </summary>
    [JsonPropertyName("total_chapters")]
    public required int TotalChapters { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
