namespace SpotifyWebApi.Requests.Player;

/// <summary>
/// The inputs of the ToggleShuffleForUsersPlayback operation.
/// </summary>
public sealed record ToggleShuffleForUsersPlaybackRequest
{
    public required bool State { get; init; }

    public string? DeviceId { get; init; }
}
