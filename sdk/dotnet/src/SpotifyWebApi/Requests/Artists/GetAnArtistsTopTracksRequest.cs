namespace SpotifyWebApi.Requests.Artists;

/// <summary>
/// The inputs of the GetAnArtistsTopTracks operation.
/// </summary>
public sealed record GetAnArtistsTopTracksRequest
{
    public required string Id { get; init; }

    public string? Market { get; init; }
}
