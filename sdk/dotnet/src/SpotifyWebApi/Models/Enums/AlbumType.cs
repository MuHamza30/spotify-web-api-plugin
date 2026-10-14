using System;
using System.Text.Json.Serialization;
using SpotifyWebApi.Core.Enum;

namespace SpotifyWebApi.Models.Enums;

/// <summary>
/// The type of the album.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<AlbumType>))]
public sealed record AlbumType : OpenStringEnum<AlbumType>
{
    private AlbumType(string value) : base(value)
    {
    }

    public static readonly AlbumType Album = new("album");

    public static readonly AlbumType Single = new("single");

    public static readonly AlbumType Compilation = new("compilation");

    public TResult Match<TResult>(Func<TResult> onAlbum,
        Func<TResult> onSingle,
        Func<TResult> onCompilation,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Album => onAlbum(),
            _ when this == Single => onSingle(),
            _ when this == Compilation => onCompilation(),
            _ => otherwise(Value)
        };

    public void Match(Action onAlbum, Action onSingle, Action onCompilation, Action<string> otherwise)
    {
        if (this == Album) onAlbum();
        else if (this == Single) onSingle();
        else if (this == Compilation) onCompilation();
        else otherwise(Value);
    }
}
