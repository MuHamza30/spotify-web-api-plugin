using SpotifyWebApi.Models;

namespace SpotifyWebApi.Requests.Tracks;

/// <summary>
/// The inputs of the SaveTracksUser operation.
/// </summary>
public sealed record SaveTracksUserRequest
{
    public required string Ids { get; init; }

    public SaveTracksRequest? Body { get; init; }
}
