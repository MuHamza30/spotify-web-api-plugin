using System.Collections.Generic;
using System.Text.Json.Serialization;
using SpotifyWebApi.Core.Models;

namespace SpotifyWebApi.Models;

public record ManyAudiobooks
{
    [JsonPropertyName("audiobooks")]
    public required IReadOnlyList<AudiobookObject> Audiobooks { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
