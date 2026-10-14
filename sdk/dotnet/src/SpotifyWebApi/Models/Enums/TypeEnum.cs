using System;
using System.Text.Json.Serialization;
using SpotifyWebApi.Core.Enum;

namespace SpotifyWebApi.Models.Enums;

/// <summary>
/// The object type.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeEnum>))]
public sealed record TypeEnum : OpenStringEnum<TypeEnum>
{
    private TypeEnum(string value) : base(value)
    {
    }

    public static readonly TypeEnum Artist = new("artist");

    public TResult Match<TResult>(Func<TResult> onArtist, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Artist => onArtist(),
            _ => otherwise(Value)
        };

    public void Match(Action onArtist, Action<string> otherwise)
    {
        if (this == Artist) onArtist();
        else otherwise(Value);
    }
}
