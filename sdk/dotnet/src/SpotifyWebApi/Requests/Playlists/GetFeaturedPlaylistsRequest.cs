using SpotifyWebApi.Core.Validation.Attributes;

namespace SpotifyWebApi.Requests.Playlists;

/// <summary>
/// The inputs of the GetFeaturedPlaylists operation.
/// </summary>
public sealed record GetFeaturedPlaylistsRequest
{
    public string? Locale { get; init; }

    [Minimum(1)]
    [Maximum(50)]
    public int Limit { get; init; } = 20;

    public int Offset { get; init; } = 0;
}
