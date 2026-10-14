namespace SpotifyWebApi.Requests.Chapters;

/// <summary>
/// The inputs of the GetSeveralChapters operation.
/// </summary>
public sealed record GetSeveralChaptersRequest
{
    public required string Ids { get; init; }

    public string? Market { get; init; }
}
