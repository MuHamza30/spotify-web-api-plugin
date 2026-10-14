namespace SpotifyWebApi.Requests.Player;

/// <summary>
/// The inputs of the AddToQueue operation.
/// </summary>
public sealed record AddToQueueRequest
{
    public required string Uri { get; init; }

    public string? DeviceId { get; init; }
}
