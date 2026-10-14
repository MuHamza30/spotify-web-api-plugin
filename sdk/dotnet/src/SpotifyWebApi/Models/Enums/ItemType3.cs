using System;
using System.Text.Json.Serialization;
using SpotifyWebApi.Core.Enum;

namespace SpotifyWebApi.Models.Enums;

/// <summary>
/// The ID type: either <c>artist</c> or <c>user</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ItemType3>))]
public sealed record ItemType3 : OpenStringEnum<ItemType3>
{
    private ItemType3(string value) : base(value)
    {
    }

    public static readonly ItemType3 Artist = new("artist");

    public static readonly ItemType3 User = new("user");

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
