using System.Text.Json.Serialization;
using SpotifyWebApi.Core.Models;
using SpotifyWebApi.Core.Validation.Attributes;

namespace SpotifyWebApi.Models;

public record ErrorObject
{
    /// <summary>
    /// The HTTP status code (also returned in the response header; see <see href="https://developer.spotify.com/documentation/web-api/concepts/api-calls#response-status-codes">Response Status Codes</see> for more information).
    /// </summary>
    [JsonPropertyName("status")]
    [Minimum(400)]
    [Maximum(599)]
    public required int Status { get; init; }

    /// <summary>
    /// A short description of the cause of the error.
    /// </summary>
    [JsonPropertyName("message")]
    public required string Message { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
