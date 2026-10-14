using SpotifyWebApi.Models;

namespace SpotifyWebApi.Requests.Playlists;

/// <summary>
/// The inputs of the ReorderOrReplacePlaylistsTracks operation.
/// </summary>
public sealed record ReorderOrReplacePlaylistsTracksRequest
{
    public required string PlaylistId { get; init; }

    public string? Uris { get; init; }

    public PlaylistsTracksRequest1? Body { get; init; }
}
