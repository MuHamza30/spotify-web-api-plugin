using SpotifyWebApi.Models;

namespace SpotifyWebApi.Requests.Episodes;

/// <summary>
/// The inputs of the RemoveEpisodesUser operation.
/// </summary>
public sealed record RemoveEpisodesUserRequest
{
    public required string Ids { get; init; }

    public RemoveEpisodesRequest? Body { get; init; }
}
