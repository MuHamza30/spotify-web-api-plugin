using System.Collections.Generic;
using System.Text.Json.Serialization;
using SpotifyWebApi.Core.Models;

namespace SpotifyWebApi.Models;

public record ManyAudioFeatures
{
    [JsonPropertyName("audio_features")]
    public required IReadOnlyList<AudioFeaturesObject> AudioFeatures { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
