namespace SpotifyWebApi.Requests.Tracks;

/// <summary>
/// The inputs of the GetTrack operation.
/// </summary>
public sealed record GetTrackRequest
{
    public required string Id { get; init; }

    public string? Market { get; init; }
}
