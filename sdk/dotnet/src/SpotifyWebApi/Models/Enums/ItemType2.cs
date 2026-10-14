using System;
using System.Text.Json.Serialization;
using SpotifyWebApi.Core.Enum;

namespace SpotifyWebApi.Models.Enums;

/// <summary>
/// The ID type.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ItemType2>))]
public sealed record ItemType2 : OpenStringEnum<ItemType2>
{
    private ItemType2(string value) : base(value)
    {
    }

    public static readonly ItemType2 Artist = new("artist");

    public static readonly ItemType2 User = new("user");

    public TResult Match<TResult>(Func<TResult> onArtist, Func<TResult> onUser, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Artist => onArtist(),
            _ when this == User => onUser(),
            _ => otherwise(Value)
        };

    public void Match(Action onArtist, Action onUser, Action<string> otherwise)
    {
        if (this == Artist) onArtist();
        else if (this == User) onUser();
        else otherwise(Value);
    }
}
