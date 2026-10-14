using System;
using System.Text.Json.Serialization;
using SpotifyWebApi.Core.Enum;

namespace SpotifyWebApi.Models.Enums;

/// <summary>
/// Indicates the modality (major or minor) of a section, the type of scale from which its melodic content is derived. This field will contain a 0 for "minor", a 1 for "major", or a -1 for no result. Note that the major key (e.g. C major) could more likely be confused with the minor key at 3 semitones lower (e.g. A minor) as both keys carry the same pitches.
/// </summary>
[JsonConverter(typeof(IntEnumConverter<Mode>))]
public sealed record Mode : OpenIntEnum<Mode>
{
    private Mode(long value) : base(value)
    {
    }

    public static readonly Mode Negative1 = new(-1L);

    public static readonly Mode Value0 = new(0L);

    public static readonly Mode Value1 = new(1L);

    public TResult Match<TResult>(Func<TResult> onNegative1,
        Func<TResult> onValue0,
        Func<TResult> onValue1,
        Func<long, TResult> otherwise) =>
        this switch
        {
            _ when this == Negative1 => onNegative1(),
            _ when this == Value0 => onValue0(),
            _ when this == Value1 => onValue1(),
            _ => otherwise(Value)
        };

    public void Match(Action onNegative1, Action onValue0, Action onValue1, Action<long> otherwise)
    {
        if (this == Negative1) onNegative1();
        else if (this == Value0) onValue0();
        else if (this == Value1) onValue1();
        else otherwise(Value);
    }
}
