using SpotifyWebApi.Models;

namespace SpotifyWebApi.Requests.Albums;

/// <summary>
/// The inputs of the RemoveAlbumsUser operation.
/// </summary>
public sealed record RemoveAlbumsUserRequest
{
    public required string Ids { get; init; }

    public RemoveAlbumsRequest? Body { get; init; }
}
