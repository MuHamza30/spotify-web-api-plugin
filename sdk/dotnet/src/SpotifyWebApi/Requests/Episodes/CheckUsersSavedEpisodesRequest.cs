namespace SpotifyWebApi.Requests.Episodes;

/// <summary>
/// The inputs of the CheckUsersSavedEpisodes operation.
/// </summary>
public sealed record CheckUsersSavedEpisodesRequest
{
    public required string Ids { get; init; }
}
