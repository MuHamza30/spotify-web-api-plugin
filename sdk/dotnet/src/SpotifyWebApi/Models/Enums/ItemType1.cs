using System;
using System.Text.Json.Serialization;
using SpotifyWebApi.Core.Enum;

namespace SpotifyWebApi.Models.Enums;

/// <summary>
/// The ID type: currently only <c>artist</c> is supported.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ItemType1>))]
public sealed record ItemType1 : OpenStringEnum<ItemType1>
{
    private ItemType1(string value) : base(value)
    {
    }

    public static readonly ItemType1 Artist = new("artist");

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
