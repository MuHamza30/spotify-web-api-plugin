using SpotifyWebApi.Models;
using SpotifyWebApi.Models.Enums;

namespace SpotifyWebApi.Requests.Users;

/// <summary>
/// The inputs of the UnfollowArtistsUsers operation.
/// </summary>
public sealed record UnfollowArtistsUsersRequest
{
    public required ItemType3 Type { get; init; }

    public required string Ids { get; init; }

    public UnfollowArtistsOrUsersRequest? Body { get; init; }
}
