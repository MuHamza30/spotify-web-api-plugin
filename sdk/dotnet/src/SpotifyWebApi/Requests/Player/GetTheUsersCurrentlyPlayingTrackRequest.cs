namespace SpotifyWebApi.Requests.Player;

/// <summary>
/// The inputs of the GetTheUsersCurrentlyPlayingTrack operation.
/// </summary>
public sealed record GetTheUsersCurrentlyPlayingTrackRequest
{
    public string? Market { get; init; }

    public string? AdditionalTypes { get; init; }
}
