namespace SpotifyWebApi.Requests.Episodes;

/// <summary>
/// The inputs of the GetMultipleEpisodes operation.
/// </summary>
public sealed record GetMultipleEpisodesRequest
{
    public required string Ids { get; init; }

    public string? Market { get; init; }
}
