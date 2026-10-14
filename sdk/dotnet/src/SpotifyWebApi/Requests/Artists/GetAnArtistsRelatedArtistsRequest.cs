namespace SpotifyWebApi.Requests.Artists;

/// <summary>
/// The inputs of the GetAnArtistsRelatedArtists operation.
/// </summary>
public sealed record GetAnArtistsRelatedArtistsRequest
{
    public required string Id { get; init; }
}
