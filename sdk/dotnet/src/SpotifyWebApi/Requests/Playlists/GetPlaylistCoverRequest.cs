namespace SpotifyWebApi.Requests.Playlists;

/// <summary>
/// The inputs of the GetPlaylistCover operation.
/// </summary>
public sealed record GetPlaylistCoverRequest
{
    public required string PlaylistId { get; init; }
}
