using SpotifyWebApi.Core.Validation.Attributes;

namespace SpotifyWebApi.Requests.Playlists;

/// <summary>
/// The inputs of the GetPlaylistsTracks operation.
/// </summary>
public sealed record GetPlaylistsTracksRequest
{
    public required string PlaylistId { get; init; }

    public string? Market { get; init; }

    public string? Fields { get; init; }

    [Minimum(1)]
    [Maximum(100)]
    public int Limit { get; init; } = 20;

    public int Offset { get; init; } = 0;

    public string? AdditionalTypes { get; init; }
}
