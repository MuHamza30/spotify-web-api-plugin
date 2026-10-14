using System;
using System.Text.Json;
using System.Text.Json.Serialization;
using SpotifyWebApi.Core.Models;

namespace SpotifyWebApi.Models.OneOf;

/// <summary>
/// The currently playing track or episode. Can be <c>null</c>.
/// </summary>
[JsonConverter(typeof(CurrentlyPlayingConverter))]
public record CurrentlyPlaying
{
    private CurrentlyPlaying()
    {
    }
}

file sealed class CurrentlyPlayingConverter : JsonConverter<CurrentlyPlaying>
{
    public override CurrentlyPlaying Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
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

    public override void Write(Utf8JsonWriter writer, CurrentlyPlaying value, JsonSerializerOptions options)
    {
        throw new JsonException($"{nameof(CurrentlyPlaying)} contains no valid value to serialize.");
    }
}
