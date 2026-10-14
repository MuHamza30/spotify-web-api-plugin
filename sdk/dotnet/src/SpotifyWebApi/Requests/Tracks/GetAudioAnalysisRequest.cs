namespace SpotifyWebApi.Requests.Tracks;

/// <summary>
/// The inputs of the GetAudioAnalysis operation.
/// </summary>
public sealed record GetAudioAnalysisRequest
{
    public required string Id { get; init; }
}
