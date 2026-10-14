namespace SpotifyWebApi.Requests.Chapters;

/// <summary>
/// The inputs of the GetAChapter operation.
/// </summary>
public sealed record GetAChapterRequest
{
    public required string Id { get; init; }

    public string? Market { get; init; }
}
