using System;
using System.Text.Json.Serialization;
using SpotifyWebApi.Core.Enum;

namespace SpotifyWebApi.Models.Enums;

/// <summary>
/// If <c>include_external=audio</c> is specified it signals that the client can play externally hosted audio content, and marks
/// the content as playable in the response. By default externally hosted audio content is marked as unplayable in the response.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<IncludeExternal>))]
public sealed record IncludeExternal : OpenStringEnum<IncludeExternal>
{
    private IncludeExternal(string value) : base(value)
    {
    }

    public static readonly IncludeExternal Audio = new("audio");

    public TResult Match<TResult>(Func<TResult> onAudio, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Audio => onAudio(),
            _ => otherwise(Value)
        };

    public void Match(Action onAudio, Action<string> otherwise)
    {
        if (this == Audio) onAudio();
        else otherwise(Value);
    }
}
