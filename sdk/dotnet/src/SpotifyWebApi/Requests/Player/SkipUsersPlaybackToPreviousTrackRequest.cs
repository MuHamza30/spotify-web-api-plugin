namespace SpotifyWebApi.Requests.Player;

/// <summary>
/// The inputs of the SkipUsersPlaybackToPreviousTrack operation.
/// </summary>
public sealed record SkipUsersPlaybackToPreviousTrackRequest
{
    public string? DeviceId { get; init; }
}
