using SpotifyWebApi.Models;

namespace SpotifyWebApi.Requests.Episodes;

/// <summary>
/// The inputs of the SaveEpisodesUser operation.
/// </summary>
public sealed record SaveEpisodesUserRequest
{
    public required string Ids { get; init; }

    public SaveEpisodesRequest? Body { get; init; }
}
