namespace SpotifyWebApi.Requests.Shows;

/// <summary>
/// The inputs of the GetMultipleShows operation.
/// </summary>
public sealed record GetMultipleShowsRequest
{
    public required string Ids { get; init; }

    public string? Market { get; init; }
}
