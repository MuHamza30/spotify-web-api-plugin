using SpotifyWebApi.Models;

namespace SpotifyWebApi.Requests.Tracks;

/// <summary>
/// The inputs of the RemoveTracksUser operation.
/// </summary>
public sealed record RemoveTracksUserRequest
{
    public required string Ids { get; init; }

    public RemoveTracksRequest? Body { get; init; }
}
