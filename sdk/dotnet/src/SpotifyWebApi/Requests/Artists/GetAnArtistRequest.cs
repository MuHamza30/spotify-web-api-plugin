namespace SpotifyWebApi.Requests.Artists;

/// <summary>
/// The inputs of the GetAnArtist operation.
/// </summary>
public sealed record GetAnArtistRequest
{
    public required string Id { get; init; }
}
