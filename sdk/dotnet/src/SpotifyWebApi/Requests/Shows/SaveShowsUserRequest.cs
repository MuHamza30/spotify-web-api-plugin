using SpotifyWebApi.Models;

namespace SpotifyWebApi.Requests.Shows;

/// <summary>
/// The inputs of the SaveShowsUser operation.
/// </summary>
public sealed record SaveShowsUserRequest
{
    public required string Ids { get; init; }

    public SaveShowsRequest? Body { get; init; }
}
