using System.Collections.Generic;
using System.Text.Json.Serialization;
using SpotifyWebApi.Core.Models;

namespace SpotifyWebApi.Models;

public record MePlayerRequest
{
    /// <summary>
    /// A JSON array containing the ID of the device on which playback should be started/transferred.&lt;br/&gt;For example:<c>{device_ids:["74ASZWbe4lXaubB36ztrGX"]}</c>&lt;br/&gt;_<b>Note</b>: Although an array is accepted, only a single device_id is currently supported. Supplying more than one will return <c>400 Bad Request</c>_
    /// </summary>
    [JsonPropertyName("device_ids")]
    public required IReadOnlyList<string> DeviceIds { get; init; }

    /// <summary>
    /// <b>true</b>: ensure playback happens on new device.&lt;br/&gt;<b>false</b> or not provided: keep the current playback state.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("play")]
    public bool? Play { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
