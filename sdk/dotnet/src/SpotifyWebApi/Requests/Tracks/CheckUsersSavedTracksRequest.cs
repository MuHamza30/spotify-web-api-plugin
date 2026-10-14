namespace SpotifyWebApi.Requests.Tracks;

/// <summary>
/// The inputs of the CheckUsersSavedTracks operation.
/// </summary>
public sealed record CheckUsersSavedTracksRequest
{
    public required string Ids { get; init; }
}
