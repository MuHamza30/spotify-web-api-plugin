namespace SpotifyWebApi.Requests.Player;

/// <summary>
/// The inputs of the PauseAUsersPlayback operation.
/// </summary>
public sealed record PauseAUsersPlaybackRequest
{
    public string? DeviceId { get; init; }
}
