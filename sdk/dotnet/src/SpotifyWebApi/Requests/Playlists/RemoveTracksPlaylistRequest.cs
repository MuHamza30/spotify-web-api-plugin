using SpotifyWebApi.Models;

namespace SpotifyWebApi.Requests.Playlists;

/// <summary>
/// The inputs of the RemoveTracksPlaylist operation.
/// </summary>
public sealed record RemoveTracksPlaylistRequest
{
    public required string PlaylistId { get; init; }

    public PlaylistsTracksRequest2? Body { get; init; }
}
