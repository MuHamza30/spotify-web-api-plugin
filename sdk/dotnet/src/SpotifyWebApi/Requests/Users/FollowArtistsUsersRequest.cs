using SpotifyWebApi.Models;
using SpotifyWebApi.Models.Enums;

namespace SpotifyWebApi.Requests.Users;

/// <summary>
/// The inputs of the FollowArtistsUsers operation.
/// </summary>
public sealed record FollowArtistsUsersRequest
{
    public required ItemType2 Type { get; init; }

    public required string Ids { get; init; }

    public FollowArtistsOrUsersRequest? Body { get; init; }
}
