namespace SpotifyWebApi.Requests.Users;

/// <summary>
/// The inputs of the CheckIfUserFollowsPlaylist operation.
/// </summary>
public sealed record CheckIfUserFollowsPlaylistRequest
{
    public required string PlaylistId { get; init; }

    public required string Ids { get; init; }
}
