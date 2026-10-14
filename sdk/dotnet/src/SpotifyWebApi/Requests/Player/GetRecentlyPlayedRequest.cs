using SpotifyWebApi.Core.Validation.Attributes;

namespace SpotifyWebApi.Requests.Player;

/// <summary>
/// The inputs of the GetRecentlyPlayed operation.
/// </summary>
public sealed record GetRecentlyPlayedRequest
{
    [Minimum(1)]
    [Maximum(50)]
    public int Limit { get; init; } = 20;

    public long? After { get; init; }

    public int? Before { get; init; }
}
