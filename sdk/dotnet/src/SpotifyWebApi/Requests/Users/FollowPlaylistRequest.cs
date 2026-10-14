using SpotifyWebApi.Models;

namespace SpotifyWebApi.Requests.Users;

/// <summary>
/// The inputs of the FollowPlaylist operation.
/// </summary>
public sealed record FollowPlaylistRequest
{
    public required string PlaylistId { get; init; }

    public PlaylistsFollowersRequest? Body { get; init; }
}
