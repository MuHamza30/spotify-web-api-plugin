namespace SpotifyWebApi.Requests.Tracks;

/// <summary>
/// The inputs of the GetSeveralTracks operation.
/// </summary>
public sealed record GetSeveralTracksRequest
{
    public required string Ids { get; init; }

    public string? Market { get; init; }
}
