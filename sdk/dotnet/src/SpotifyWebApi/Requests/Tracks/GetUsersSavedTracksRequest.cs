using SpotifyWebApi.Core.Validation.Attributes;

namespace SpotifyWebApi.Requests.Tracks;

/// <summary>
/// The inputs of the GetUsersSavedTracks operation.
/// </summary>
public sealed record GetUsersSavedTracksRequest
{
    public string? Market { get; init; }

    [Minimum(1)]
    [Maximum(50)]
    public int Limit { get; init; } = 20;

    public int Offset { get; init; } = 0;
}
