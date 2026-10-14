using System.Collections.Generic;
using System.Text.Json.Serialization;
using SpotifyWebApi.Core.Models;
using SpotifyWebApi.Models.Enums;

namespace SpotifyWebApi.Models;

public record ShowObject
{
    /// <summary>
    /// A list of the countries in which the show can be played, identified by their <see href="http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2">ISO 3166-1 alpha-2</see> code.
    /// </summary>
    [JsonPropertyName("available_markets")]
    public required IReadOnlyList<string> AvailableMarkets { get; init; }

    /// <summary>
    /// The copyright statements of the show.
    /// </summary>
    [JsonPropertyName("copyrights")]
    public required IReadOnlyList<CopyrightObject> Copyrights { get; init; }

    /// <summary>
    /// A description of the show. HTML tags are stripped away from this field, use <c>html_description</c> field in case HTML tags are needed.
    /// </summary>
    [JsonPropertyName("description")]
    public required string Description { get; init; }

    /// <summary>
    /// A description of the show. This field may contain HTML tags.
    /// </summary>
    [JsonPropertyName("html_description")]
    public required string HtmlDescription { get; init; }

    /// <summary>
    /// Whether or not the show has explicit content (true = yes it does; false = no it does not OR unknown).
    /// </summary>
    [JsonPropertyName("explicit")]
    public required bool Explicit { get; init; }

    /// <summary>
    /// External URLs for this show.
    /// </summary>
    [JsonPropertyName("external_urls")]
    public required ExternalUrlObject ExternalUrls { get; init; }

    /// <summary>
    /// A link to the Web API endpoint providing full details of the show.
    /// </summary>
    [JsonPropertyName("href")]
    public required string Href { get; init; }

    /// <summary>
    /// The <see href="https://developer.spotify.com/documentation/web-api/concepts/spotify-uris-ids">Spotify ID</see> for the show.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// The cover art for the show in various sizes, widest first.
    /// </summary>
    [JsonPropertyName("images")]
    public required IReadOnlyList<ImageObject> Images { get; init; }

    /// <summary>
    /// True if all of the shows episodes are hosted outside of Spotify's CDN. This field might be <c>null</c> in some cases.
    /// </summary>
    [JsonPropertyName("is_externally_hosted")]
    public required bool IsExternallyHosted { get; init; }

    /// <summary>
    /// A list of the languages used in the show, identified by their <see href="https://en.wikipedia.org/wiki/ISO_639">ISO 639</see> code.
    /// </summary>
    [JsonPropertyName("languages")]
    public required IReadOnlyList<string> Languages { get; init; }

    /// <summary>
    /// The media type of the show.
    /// </summary>
    [JsonPropertyName("media_type")]
    public required string MediaType { get; init; }

    /// <summary>
    /// The name of the episode.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// The publisher of the show.
    /// </summary>
    [JsonPropertyName("publisher")]
    public required string Publisher { get; init; }

    /// <summary>
    /// The object type.
    /// </summary>
    [JsonPropertyName("type")]
    public required Type6 Type { get; init; }

    /// <summary>
    /// The <see href="https://developer.spotify.com/documentation/web-api/concepts/spotify-uris-ids">Spotify URI</see> for the show.
    /// </summary>
    [JsonPropertyName("uri")]
    public required string Uri { get; init; }

    /// <summary>
    /// The total number of episodes in the show.
    /// </summary>
    [JsonPropertyName("total_episodes")]
    public required int TotalEpisodes { get; init; }

    /// <summary>
    /// The episodes of the show.
    /// </summary>
    [JsonPropertyName("episodes")]
    public required PagingSimplifiedEpisodeObject Episodes { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
