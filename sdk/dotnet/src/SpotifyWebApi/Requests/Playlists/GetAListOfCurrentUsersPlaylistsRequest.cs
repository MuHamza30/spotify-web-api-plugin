using SpotifyWebApi.Core.Validation.Attributes;

namespace SpotifyWebApi.Requests.Playlists;

/// <summary>
/// The inputs of the GetAListOfCurrentUsersPlaylists operation.
/// </summary>
public sealed record GetAListOfCurrentUsersPlaylistsRequest
{
    [Minimum(1)]
    [Maximum(50)]
    public int Limit { get; init; } = 20;

    public int Offset { get; init; } = 0;
}
