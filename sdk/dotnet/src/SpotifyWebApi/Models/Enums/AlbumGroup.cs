using System;
using System.Text.Json.Serialization;
using SpotifyWebApi.Core.Enum;

namespace SpotifyWebApi.Models.Enums;

/// <summary>
/// This field describes the relationship between the artist and the album.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<AlbumGroup>))]
public sealed record AlbumGroup : OpenStringEnum<AlbumGroup>
{
    private AlbumGroup(string value) : base(value)
    {
    }

    public static readonly AlbumGroup Album = new("album");

    public static readonly AlbumGroup Single = new("single");

    public static readonly AlbumGroup Compilation = new("compilation");

    public static readonly AlbumGroup AppearsOn = new("appears_on");

    public TResult Match<TResult>(Func<TResult> onAlbum,
        Func<TResult> onSingle,
        Func<TResult> onCompilation,
        Func<TResult> onAppearsOn,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Album => onAlbum(),
            _ when this == Single => onSingle(),
            _ when this == Compilation => onCompilation(),
            _ when this == AppearsOn => onAppearsOn(),
            _ => otherwise(Value)
        };

    public void Match(Action onAlbum,
        Action onSingle,
        Action onCompilation,
        Action onAppearsOn,
        Action<string> otherwise)
    {
        if (this == Album) onAlbum();
        else if (this == Single) onSingle();
        else if (this == Compilation) onCompilation();
        else if (this == AppearsOn) onAppearsOn();
        else otherwise(Value);
    }
}
