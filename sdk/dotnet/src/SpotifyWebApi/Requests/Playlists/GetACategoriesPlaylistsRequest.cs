using SpotifyWebApi.Core.Validation.Attributes;

namespace SpotifyWebApi.Requests.Playlists;

/// <summary>
/// The inputs of the GetACategoriesPlaylists operation.
/// </summary>
public sealed record GetACategoriesPlaylistsRequest
{
    public required string CategoryId { get; init; }

    [Minimum(1)]
    [Maximum(50)]
    public int Limit { get; init; } = 20;

    public int Offset { get; init; } = 0;
}
