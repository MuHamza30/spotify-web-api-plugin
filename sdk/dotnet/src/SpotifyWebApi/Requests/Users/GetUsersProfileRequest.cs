namespace SpotifyWebApi.Requests.Users;

/// <summary>
/// The inputs of the GetUsersProfile operation.
/// </summary>
public sealed record GetUsersProfileRequest
{
    public required string UserId { get; init; }
}
