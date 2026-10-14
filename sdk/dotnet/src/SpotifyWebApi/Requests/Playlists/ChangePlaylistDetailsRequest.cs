using SpotifyWebApi.Models;

namespace SpotifyWebApi.Requests.Playlists;

/// <summary>
/// The inputs of the ChangePlaylistDetails operation.
/// </summary>
public sealed record ChangePlaylistDetailsRequest
{
    public required string PlaylistId { get; init; }

    public PlaylistsRequest? Body { get; init; }
}
