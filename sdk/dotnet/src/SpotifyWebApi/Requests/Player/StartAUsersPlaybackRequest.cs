using SpotifyWebApi.Models;

namespace SpotifyWebApi.Requests.Player;

/// <summary>
/// The inputs of the StartAUsersPlayback operation.
/// </summary>
public sealed record StartAUsersPlaybackRequest
{
    public string? DeviceId { get; init; }

    public StartOrResumePlaybackRequest? Body { get; init; }
}
