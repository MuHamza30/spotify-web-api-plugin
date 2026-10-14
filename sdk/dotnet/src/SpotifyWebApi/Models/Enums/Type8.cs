using System;
using System.Text.Json.Serialization;
using SpotifyWebApi.Core.Enum;

namespace SpotifyWebApi.Models.Enums;

/// <summary>
/// The object type.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type8>))]
public sealed record Type8 : OpenStringEnum<Type8>
{
    private Type8(string value) : base(value)
    {
    }

    public static readonly Type8 AudioFeatures = new("audio_features");

    public TResult Match<TResult>(Func<TResult> onAudioFeatures, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AudioFeatures => onAudioFeatures(),
            _ => otherwise(Value)
        };

    public void Match(Action onAudioFeatures, Action<string> otherwise)
    {
        if (this == AudioFeatures) onAudioFeatures();
        else otherwise(Value);
    }
}
