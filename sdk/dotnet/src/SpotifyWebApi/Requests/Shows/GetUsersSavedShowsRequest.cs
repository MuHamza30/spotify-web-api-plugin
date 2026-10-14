using SpotifyWebApi.Core.Validation.Attributes;

namespace SpotifyWebApi.Requests.Shows;

/// <summary>
/// The inputs of the GetUsersSavedShows operation.
/// </summary>
public sealed record GetUsersSavedShowsRequest
{
    [Minimum(1)]
    [Maximum(50)]
    public int Limit { get; init; } = 20;

    public int Offset { get; init; } = 0;
}
