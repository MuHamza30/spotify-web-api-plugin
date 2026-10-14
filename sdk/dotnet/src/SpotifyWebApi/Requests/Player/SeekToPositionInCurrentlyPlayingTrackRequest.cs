namespace SpotifyWebApi.Requests.Player;

/// <summary>
/// The inputs of the SeekToPositionInCurrentlyPlayingTrack operation.
/// </summary>
public sealed record SeekToPositionInCurrentlyPlayingTrackRequest
{
    public required int PositionMs { get; init; }

    public string? DeviceId { get; init; }
}
