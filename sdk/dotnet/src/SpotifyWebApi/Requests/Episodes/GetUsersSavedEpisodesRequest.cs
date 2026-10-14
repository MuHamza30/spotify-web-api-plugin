using SpotifyWebApi.Core.Validation.Attributes;

namespace SpotifyWebApi.Requests.Episodes;

/// <summary>
/// The inputs of the GetUsersSavedEpisodes operation.
/// </summary>
public sealed record GetUsersSavedEpisodesRequest
{
    public string? Market { get; init; }

    [Minimum(1)]
    [Maximum(50)]
    public int Limit { get; init; } = 20;

    public int Offset { get; init; } = 0;
}
