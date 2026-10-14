namespace SpotifyWebApi.Requests.Users;

/// <summary>
/// The inputs of the UnfollowPlaylist operation.
/// </summary>
public sealed record UnfollowPlaylistRequest
{
    public required string PlaylistId { get; init; }
}
