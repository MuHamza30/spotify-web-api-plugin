using System.Collections.Generic;
using System.Text.Json.Serialization;
using SpotifyWebApi.Core.Models;

namespace SpotifyWebApi.Models;

public record PagingSimplifiedAlbumObject
{
    /// <summary>
    /// A link to the Web API endpoint returning the full result of the request
    /// </summary>
    [JsonPropertyName("href")]
    public required string Href { get; init; }

    /// <summary>
    /// The maximum number of items in the response (as set in the query or by default).
    /// </summary>
    [JsonPropertyName("limit")]
    public required int Limit { get; init; }

    /// <summary>
    /// URL to the next page of items. ( <c>null</c> if none)
    /// </summary>
    [JsonPropertyName("next")]
    public required string? Next { get; init; }

    /// <summary>
    /// The offset of the items returned (as set in the query or by default)
    /// </summary>
    [JsonPropertyName("offset")]
    public required int Offset { get; init; }

    /// <summary>
    /// URL to the previous page of items. ( <c>null</c> if none)
    /// </summary>
    [JsonPropertyName("previous")]
    public required string? Previous { get; init; }

    /// <summary>
    /// The total number of items available to return.
    /// </summary>
    [JsonPropertyName("total")]
    public required int Total { get; init; }

    [JsonPropertyName("items")]
    public required IReadOnlyList<SimplifiedAlbumObject> Items { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
