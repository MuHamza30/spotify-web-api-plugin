namespace SpotifyWebApi.Requests.Player;

/// <summary>
/// The inputs of the SetRepeatModeOnUsersPlayback operation.
/// </summary>
public sealed record SetRepeatModeOnUsersPlaybackRequest
{
    public required string State { get; init; }

    public string? DeviceId { get; init; }
}
