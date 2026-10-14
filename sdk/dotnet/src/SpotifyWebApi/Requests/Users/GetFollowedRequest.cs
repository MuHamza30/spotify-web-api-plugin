using SpotifyWebApi.Core.Validation.Attributes;
using SpotifyWebApi.Models.Enums;

namespace SpotifyWebApi.Requests.Users;

/// <summary>
/// The inputs of the GetFollowed operation.
/// </summary>
public sealed record GetFollowedRequest
{
    public required ItemType1 Type { get; init; }

    public string? After { get; init; }

    [Minimum(1)]
    [Maximum(50)]
    public int Limit { get; init; } = 20;
}
