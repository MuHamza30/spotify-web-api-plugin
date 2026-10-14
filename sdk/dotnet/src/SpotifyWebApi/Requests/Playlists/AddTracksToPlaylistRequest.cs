using SpotifyWebApi.Models;

namespace SpotifyWebApi.Requests.Playlists;

/// <summary>
/// The inputs of the AddTracksToPlaylist operation.
/// </summary>
public sealed record AddTracksToPlaylistRequest
{
    public required string PlaylistId { get; init; }

    public int? Position { get; init; }

    public string? Uris { get; init; }

    public PlaylistsTracksRequest? Body { get; init; }
}
