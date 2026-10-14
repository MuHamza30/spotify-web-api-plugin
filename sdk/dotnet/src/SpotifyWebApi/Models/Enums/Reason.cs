using System;
using System.Text.Json.Serialization;
using SpotifyWebApi.Core.Enum;

namespace SpotifyWebApi.Models.Enums;

/// <summary>
/// The reason for the restriction. Albums may be restricted if the content is not available in a given market, to the user's subscription type, or when the user's account is set to not play explicit content.
/// Additional reasons may be added in the future.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Reason>))]
public sealed record Reason : OpenStringEnum<Reason>
{
    private Reason(string value) : base(value)
    {
    }

    public static readonly Reason Market = new("market");

    public static readonly Reason Product = new("product");

    public static readonly Reason Explicit = new("explicit");

    public TResult Match<TResult>(Func<TResult> onMarket,
        Func<TResult> onProduct,
        Func<TResult> onExplicit,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Market => onMarket(),
            _ when this == Product => onProduct(),
            _ when this == Explicit => onExplicit(),
            _ => otherwise(Value)
        };

    public void Match(Action onMarket, Action onProduct, Action onExplicit, Action<string> otherwise)
    {
        if (this == Market) onMarket();
        else if (this == Product) onProduct();
        else if (this == Explicit) onExplicit();
        else otherwise(Value);
    }
}
