using System.Text.Json.Serialization;
using SpotifyWebApi.Core.Models;

namespace SpotifyWebApi.Models;

public record ChapterRestrictionObject
{
    /// <summary>
    /// The reason for the restriction. Supported values:
    /// - <c>market</c> - The content item is not available in the given market.
    /// - <c>product</c> - The content item is not available for the user's subscription type.
    /// - <c>explicit</c> - The content item is explicit and the user's account is set to not play explicit content.
    /// - <c>payment_required</c> - Payment is required to play the content item.
    /// <para>
    /// Additional reasons may be added in the future.
    /// <b>Note</b>: If you use this field, make sure that your application safely handles unknown values.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reason")]
    public string? Reason { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
