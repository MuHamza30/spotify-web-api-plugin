namespace SpotifyWebApi.Requests.Playlists;

/// <summary>
/// The inputs of the GetPlaylist operation.
/// </summary>
public sealed record GetPlaylistRequest
{
    public required string PlaylistId { get; init; }

    public string? Market { get; init; }

    public string? Fields { get; init; }

    public string? AdditionalTypes { get; init; }
}
