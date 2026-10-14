using System;
using System.Text.Json.Serialization;
using SpotifyWebApi.Core.Enum;

namespace SpotifyWebApi.Models.Enums;

/// <summary>
/// The object type.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type5>))]
public sealed record Type5 : OpenStringEnum<Type5>
{
    private Type5(string value) : base(value)
    {
    }

    public static readonly Type5 Episode = new("episode");

    public TResult Match<TResult>(Func<TResult> onEpisode, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Episode => onEpisode(),
            _ => otherwise(Value)
        };

    public void Match(Action onEpisode, Action<string> otherwise)
    {
        if (this == Episode) onEpisode();
        else otherwise(Value);
    }
}
