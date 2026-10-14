namespace SpotifyWebApi.Requests.Episodes;

/// <summary>
/// The inputs of the GetAnEpisode operation.
/// </summary>
public sealed record GetAnEpisodeRequest
{
    public required string Id { get; init; }

    public string? Market { get; init; }
}
