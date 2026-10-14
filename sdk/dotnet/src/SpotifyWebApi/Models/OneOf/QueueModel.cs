using System;
using System.Text.Json;
using System.Text.Json.Serialization;
using SpotifyWebApi.Core.Models;

namespace SpotifyWebApi.Models.OneOf;

[JsonConverter(typeof(QueueModelConverter))]
public record QueueModel
{
    private QueueModel()
    {
    }
}

file sealed class QueueModelConverter : JsonConverter<QueueModel>
{
    public override QueueModel Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
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

    public override void Write(Utf8JsonWriter writer, QueueModel value, JsonSerializerOptions options)
    {
        throw new JsonException($"{nameof(QueueModel)} contains no valid value to serialize.");
    }
}
