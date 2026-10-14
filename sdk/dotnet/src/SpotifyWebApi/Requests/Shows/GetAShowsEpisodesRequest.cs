using SpotifyWebApi.Core.Validation.Attributes;

namespace SpotifyWebApi.Requests.Shows;

/// <summary>
/// The inputs of the GetAShowsEpisodes operation.
/// </summary>
public sealed record GetAShowsEpisodesRequest
{
    public required string Id { get; init; }

    public string? Market { get; init; }

    [Minimum(1)]
    [Maximum(50)]
    public int Limit { get; init; } = 20;

    public int Offset { get; init; } = 0;
}
