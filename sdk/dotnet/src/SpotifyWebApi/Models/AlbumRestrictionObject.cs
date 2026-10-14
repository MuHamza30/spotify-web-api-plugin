using System.Text.Json.Serialization;
using SpotifyWebApi.Core.Models;
using SpotifyWebApi.Models.Enums;

namespace SpotifyWebApi.Models;

public record AlbumRestrictionObject
{
    /// <summary>
    /// The reason for the restriction. Albums may be restricted if the content is not available in a given market, to the user's subscription type, or when the user's account is set to not play explicit content.
    /// Additional reasons may be added in the future.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reason")]
    public Reason? Reason { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
