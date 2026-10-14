using System;
using System.Text.Json.Serialization;
using SpotifyWebApi.Core.Enum;

namespace SpotifyWebApi.Models.Enums;

/// <summary>
/// The precision with which <c>release_date</c> value is known.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ReleaseDatePrecision>))]
public sealed record ReleaseDatePrecision : OpenStringEnum<ReleaseDatePrecision>
{
    private ReleaseDatePrecision(string value) : base(value)
    {
    }

    public static readonly ReleaseDatePrecision Year = new("year");

    public static readonly ReleaseDatePrecision Month = new("month");

    public static readonly ReleaseDatePrecision Day = new("day");

    public TResult Match<TResult>(Func<TResult> onYear,
        Func<TResult> onMonth,
        Func<TResult> onDay,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Year => onYear(),
            _ when this == Month => onMonth(),
            _ when this == Day => onDay(),
            _ => otherwise(Value)
        };

    public void Match(Action onYear, Action onMonth, Action onDay, Action<string> otherwise)
    {
        if (this == Year) onYear();
        else if (this == Month) onMonth();
        else if (this == Day) onDay();
        else otherwise(Value);
    }
}
