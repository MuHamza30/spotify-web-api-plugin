namespace SpotifyWebApi.Requests.Playlists;

/// <summary>
/// The inputs of the UploadCustomPlaylistCover operation.
/// </summary>
public sealed record UploadCustomPlaylistCoverRequest
{
    public required string PlaylistId { get; init; }

    public required object Body { get; init; }
}
