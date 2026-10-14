namespace SpotifyWebApi.Requests.Player;

/// <summary>
/// The inputs of the SkipUsersPlaybackToNextTrack operation.
/// </summary>
public sealed record SkipUsersPlaybackToNextTrackRequest
{
    public string? DeviceId { get; init; }
}
