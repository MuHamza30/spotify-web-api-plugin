namespace SpotifyWebApi.Requests.Player;

/// <summary>
/// The inputs of the SetVolumeForUsersPlayback operation.
/// </summary>
public sealed record SetVolumeForUsersPlaybackRequest
{
    public required int VolumePercent { get; init; }

    public string? DeviceId { get; init; }
}
