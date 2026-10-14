namespace SpotifyWebApi.Requests.Artists;

/// <summary>
/// The inputs of the GetMultipleArtists operation.
/// </summary>
public sealed record GetMultipleArtistsRequest
{
    public required string Ids { get; init; }
}
