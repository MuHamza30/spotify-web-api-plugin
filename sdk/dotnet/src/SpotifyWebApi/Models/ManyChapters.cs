using System.Collections.Generic;
using System.Text.Json.Serialization;
using SpotifyWebApi.Core.Models;

namespace SpotifyWebApi.Models;

public record ManyChapters
{
    [JsonPropertyName("chapters")]
    public required IReadOnlyList<ChapterObject> Chapters { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
