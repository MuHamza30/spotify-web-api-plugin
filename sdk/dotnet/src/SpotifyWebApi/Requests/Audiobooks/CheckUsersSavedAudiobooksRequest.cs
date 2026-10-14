namespace SpotifyWebApi.Requests.Audiobooks;

/// <summary>
/// The inputs of the CheckUsersSavedAudiobooks operation.
/// </summary>
public sealed record CheckUsersSavedAudiobooksRequest
{
    public required string Ids { get; init; }
}
