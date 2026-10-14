using System;
using System.Text.Json.Serialization;
using SpotifyWebApi.Core.Enum;

namespace SpotifyWebApi.Models.Enums;

/// <summary>
/// The object type.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type9>))]
public sealed record Type9 : OpenStringEnum<Type9>
{
    private Type9(string value) : base(value)
    {
    }

    public static readonly Type9 Audiobook = new("audiobook");

    public TResult Match<TResult>(Func<TResult> onAudiobook, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Audiobook => onAudiobook(),
            _ => otherwise(Value)
        };

    public void Match(Action onAudiobook, Action<string> otherwise)
    {
        if (this == Audiobook) onAudiobook();
        else otherwise(Value);
    }
}
