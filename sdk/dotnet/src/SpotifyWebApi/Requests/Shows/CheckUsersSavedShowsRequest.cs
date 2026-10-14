namespace SpotifyWebApi.Requests.Shows;

/// <summary>
/// The inputs of the CheckUsersSavedShows operation.
/// </summary>
public sealed record CheckUsersSavedShowsRequest
{
    public required string Ids { get; init; }
}
