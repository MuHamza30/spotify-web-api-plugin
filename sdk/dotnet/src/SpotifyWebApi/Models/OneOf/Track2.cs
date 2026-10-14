using System;
using System.Text.Json;
using System.Text.Json.Serialization;
using SpotifyWebApi.Core.Models;

namespace SpotifyWebApi.Models.OneOf;

/// <summary>
/// Information about the track or episode.
/// </summary>
[JsonConverter(typeof(Track2Converter))]
public record Track2
{
    private Track2()
    {
    }
}

file sealed class Track2Converter : JsonConverter<Track2>
{
    public override Track2 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (!root.TryGetProperty("type", out var typeProperty))
        {
            throw new JsonException("Missing required 'type' discriminator field");
        }
        var discriminator = typeProperty.GetString();
        return discriminator switch
        {
            _ => throw new JsonException($"JSON does not match  schemas: {root.ToString()}")
        };
    }

    public override void Write(Utf8JsonWriter writer, Track2 value, JsonSerializerOptions options)
    {
        throw new JsonException($"{nameof(Track2)} contains no valid value to serialize.");
    }
}
