using System.Collections.Generic;
using System.Text.Json.Serialization;
using SpotifyWebApi.Core.Models;

namespace SpotifyWebApi.Models;

public record PrivateUserObject
{
    /// <summary>
    /// The country of the user, as set in the user's account profile. An <see href="http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2">ISO 3166-1 alpha-2 country code</see>. _This field is only available when the current user has granted access to the <see href="https://developer.spotify.com/documentation/web-api/concepts/scopes/#list-of-scopes">user-read-private</see> scope._
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("country")]
    public string? Country { get; init; }

    /// <summary>
    /// The name displayed on the user's profile. <c>null</c> if not available.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("display_name")]
    public string? DisplayName { get; init; }

    /// <summary>
    /// The user's email address, as entered by the user when creating their account. _<b>Important!</b> This email address is unverified; there is no proof that it actually belongs to the user._ _This field is only available when the current user has granted access to the <see href="https://developer.spotify.com/documentation/web-api/concepts/scopes/#list-of-scopes">user-read-email</see> scope._
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("email")]
    public string? Email { get; init; }

    /// <summary>
    /// The user's explicit content settings. _This field is only available when the current user has granted access to the <see href="https://developer.spotify.com/documentation/web-api/concepts/scopes/#list-of-scopes">user-read-private</see> scope._
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("explicit_content")]
    public ExplicitContentSettingsObject? ExplicitContent { get; init; }

    /// <summary>
    /// Known external URLs for this user.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("external_urls")]
    public ExternalUrlObject? ExternalUrls { get; init; }

    /// <summary>
    /// Information about the followers of the user.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("followers")]
    public FollowersObject? Followers { get; init; }

    /// <summary>
    /// A link to the Web API endpoint for this user.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("href")]
    public string? Href { get; init; }

    /// <summary>
    /// The <see href="https://developer.spotify.com/documentation/web-api/concepts/spotify-uris-ids">Spotify user ID</see> for the user.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    /// <summary>
    /// The user's profile image.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("images")]
    public IReadOnlyList<ImageObject>? Images { get; init; }

    /// <summary>
    /// The user's Spotify subscription level: "premium", "free", etc. (The subscription level "open" can be considered the same as "free".) _This field is only available when the current user has granted access to the <see href="https://developer.spotify.com/documentation/web-api/concepts/scopes/#list-of-scopes">user-read-private</see> scope._
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("product")]
    public string? Product { get; init; }

    /// <summary>
    /// The object type: "user"
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public string? Type { get; init; }

    /// <summary>
    /// The <see href="https://developer.spotify.com/documentation/web-api/concepts/spotify-uris-ids">Spotify URI</see> for the user.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("uri")]
    public string? Uri { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
