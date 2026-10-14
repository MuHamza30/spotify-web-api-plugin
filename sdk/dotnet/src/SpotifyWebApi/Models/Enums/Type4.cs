using System;
using System.Text.Json.Serialization;
using SpotifyWebApi.Core.Enum;

namespace SpotifyWebApi.Models.Enums;

/// <summary>
/// The object type.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type4>))]
public sealed record Type4 : OpenStringEnum<Type4>
{
    private Type4(string value) : base(value)
    {
    }

    public static readonly Type4 User = new("user");

    public TResult Match<TResult>(Func<TResult> onUser, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == User => onUser(),
            _ => otherwise(Value)
        };

    public void Match(Action onUser, Action<string> otherwise)
    {
        if (this == User) onUser();
        else otherwise(Value);
    }
}
