using SpotifyWebApi.Models;

namespace SpotifyWebApi.Requests.Playlists;

/// <summary>
/// The inputs of the CreatePlaylist operation.
/// </summary>
public sealed record CreatePlaylistRequest
{
    public required string UserId { get; init; }

    public UsersPlaylistsRequest? Body { get; init; }
}
