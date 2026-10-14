using System;
using System.Text.Json.Serialization;
using SpotifyWebApi.Core.Enum;

namespace SpotifyWebApi.Models.Enums;

/// <summary>
/// The object type.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type2>))]
public sealed record Type2 : OpenStringEnum<Type2>
{
    private Type2(string value) : base(value)
    {
    }

    public static readonly Type2 Album = new("album");

    public TResult Match<TResult>(Func<TResult> onAlbum, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Album => onAlbum(),
            _ => otherwise(Value)
        };

    public void Match(Action onAlbum, Action<string> otherwise)
    {
        if (this == Album) onAlbum();
        else otherwise(Value);
    }
}
