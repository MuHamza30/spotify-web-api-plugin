using System;
using System.Text.Json.Serialization;
using SpotifyWebApi.Core.Enum;

namespace SpotifyWebApi.Models.Enums;

/// <summary>
/// The object type: "track".
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type3>))]
public sealed record Type3 : OpenStringEnum<Type3>
{
    private Type3(string value) : base(value)
    {
    }

    public static readonly Type3 Track = new("track");

    public TResult Match<TResult>(Func<TResult> onTrack, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Track => onTrack(),
            _ => otherwise(Value)
        };

    public void Match(Action onTrack, Action<string> otherwise)
    {
        if (this == Track) onTrack();
        else otherwise(Value);
    }
}
