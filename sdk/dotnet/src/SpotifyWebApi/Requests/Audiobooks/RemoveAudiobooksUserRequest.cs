namespace SpotifyWebApi.Requests.Audiobooks;

/// <summary>
/// The inputs of the RemoveAudiobooksUser operation.
/// </summary>
public sealed record RemoveAudiobooksUserRequest
{
    public required string Ids { get; init; }
}
