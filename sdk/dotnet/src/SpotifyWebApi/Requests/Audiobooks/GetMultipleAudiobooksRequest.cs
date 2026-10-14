namespace SpotifyWebApi.Requests.Audiobooks;

/// <summary>
/// The inputs of the GetMultipleAudiobooks operation.
/// </summary>
public sealed record GetMultipleAudiobooksRequest
{
    public required string Ids { get; init; }

    public string? Market { get; init; }
}
