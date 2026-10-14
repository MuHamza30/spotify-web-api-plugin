using System.Text.Json.Serialization;
using SpotifyWebApi.Core.Models;
using SpotifyWebApi.Core.Validation.Attributes;

namespace SpotifyWebApi.Models;

public record DeviceObject
{
    /// <summary>
    /// The device ID. This ID is unique and persistent to some extent. However, this is not guaranteed and any cached <c>device_id</c> should periodically be cleared out and refetched as necessary.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    /// <summary>
    /// If this device is the currently active device.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("is_active")]
    public bool? IsActive { get; init; }

    /// <summary>
    /// If this device is currently in a private session.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("is_private_session")]
    public bool? IsPrivateSession { get; init; }

    /// <summary>
    /// Whether controlling this device is restricted. At present if this is "true" then no Web API commands will be accepted by this device.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("is_restricted")]
    public bool? IsRestricted { get; init; }

    /// <summary>
    /// A human-readable name for the device. Some devices have a name that the user can configure (e.g. \"Loudest speaker\") and some devices have a generic name associated with the manufacturer or device model.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Device type, such as "computer", "smartphone" or "speaker".
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public string? Type { get; init; }

    /// <summary>
    /// The current volume in percent.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("volume_percent")]
    [Minimum(0)]
    [Maximum(100)]
    public int? VolumePercent { get; init; }

    /// <summary>
    /// If this device can be used to set the volume.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("supports_volume")]
    public bool? SupportsVolume { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
