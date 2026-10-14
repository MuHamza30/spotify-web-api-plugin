using System;
using System.Text.Json.Serialization;
using SpotifyWebApi.Core.Enum;

namespace SpotifyWebApi.Models.Enums;

/// <summary>
/// The object type.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type6>))]
public sealed record Type6 : OpenStringEnum<Type6>
{
    private Type6(string value) : base(value)
    {
    }

    public static readonly Type6 Show = new("show");

    public TResult Match<TResult>(Func<TResult> onShow, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Show => onShow(),
            _ => otherwise(Value)
        };

    public void Match(Action onShow, Action<string> otherwise)
    {
        if (this == Show) onShow();
        else otherwise(Value);
    }
}
