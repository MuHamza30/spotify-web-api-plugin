namespace SpotifyWebApi.Requests.Audiobooks;

/// <summary>
/// The inputs of the SaveAudiobooksUser operation.
/// </summary>
public sealed record SaveAudiobooksUserRequest
{
    public required string Ids { get; init; }
}
