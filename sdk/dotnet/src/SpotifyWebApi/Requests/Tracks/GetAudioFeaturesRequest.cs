namespace SpotifyWebApi.Requests.Tracks;

/// <summary>
/// The inputs of the GetAudioFeatures operation.
/// </summary>
public sealed record GetAudioFeaturesRequest
{
    public required string Id { get; init; }
}
