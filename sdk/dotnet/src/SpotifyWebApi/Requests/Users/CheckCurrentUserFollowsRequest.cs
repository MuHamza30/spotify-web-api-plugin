using SpotifyWebApi.Models.Enums;

namespace SpotifyWebApi.Requests.Users;

/// <summary>
/// The inputs of the CheckCurrentUserFollows operation.
/// </summary>
public sealed record CheckCurrentUserFollowsRequest
{
    public required ItemType3 Type { get; init; }

    public required string Ids { get; init; }
}
