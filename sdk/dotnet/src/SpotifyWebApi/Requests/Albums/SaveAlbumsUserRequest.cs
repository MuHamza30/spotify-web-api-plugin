using SpotifyWebApi.Models;

namespace SpotifyWebApi.Requests.Albums;

/// <summary>
/// The inputs of the SaveAlbumsUser operation.
/// </summary>
public sealed record SaveAlbumsUserRequest
{
    public required string Ids { get; init; }

    public SaveAlbumsRequest? Body { get; init; }
}
