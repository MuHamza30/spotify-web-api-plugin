namespace SpotifyWebApi.Requests.Tracks;

/// <summary>
/// The inputs of the GetSeveralAudioFeatures operation.
/// </summary>
public sealed record GetSeveralAudioFeaturesRequest
{
    public required string Ids { get; init; }
}
