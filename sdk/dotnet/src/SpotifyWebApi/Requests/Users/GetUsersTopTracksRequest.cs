using SpotifyWebApi.Core.Validation.Attributes;

namespace SpotifyWebApi.Requests.Users;

/// <summary>
/// The inputs of the GetUsersTopTracks operation.
/// </summary>
public sealed record GetUsersTopTracksRequest
{
    public string TimeRange { get; init; } = "medium_term";

    [Minimum(1)]
    [Maximum(50)]
    public int Limit { get; init; } = 20;

    public int Offset { get; init; } = 0;
}
