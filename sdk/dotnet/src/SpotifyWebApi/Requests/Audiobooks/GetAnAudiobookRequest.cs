namespace SpotifyWebApi.Requests.Audiobooks;

/// <summary>
/// The inputs of the GetAnAudiobook operation.
/// </summary>
public sealed record GetAnAudiobookRequest
{
    public required string Id { get; init; }

    public string? Market { get; init; }
}
