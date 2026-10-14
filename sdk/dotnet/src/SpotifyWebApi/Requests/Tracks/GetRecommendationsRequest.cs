using SpotifyWebApi.Core.Validation.Attributes;

namespace SpotifyWebApi.Requests.Tracks;

/// <summary>
/// The inputs of the GetRecommendations operation.
/// </summary>
public sealed record GetRecommendationsRequest
{
    [Minimum(1)]
    [Maximum(100)]
    public int Limit { get; init; } = 20;

    public string? Market { get; init; }

    public string? SeedArtists { get; init; }

    public string? SeedGenres { get; init; }

    public string? SeedTracks { get; init; }

    [Minimum(0.0)]
    [Maximum(1.0)]
    public double? MinAcousticness { get; init; }

    [Minimum(0.0)]
    [Maximum(1.0)]
    public double? MaxAcousticness { get; init; }

    [Minimum(0.0)]
    [Maximum(1.0)]
    public double? TargetAcousticness { get; init; }

    [Minimum(0.0)]
    [Maximum(1.0)]
    public double? MinDanceability { get; init; }

    [Minimum(0.0)]
    [Maximum(1.0)]
    public double? MaxDanceability { get; init; }

    [Minimum(0.0)]
    [Maximum(1.0)]
    public double? TargetDanceability { get; init; }

    public int? MinDurationMs { get; init; }

    public int? MaxDurationMs { get; init; }

    public int? TargetDurationMs { get; init; }

    [Minimum(0.0)]
    [Maximum(1.0)]
    public double? MinEnergy { get; init; }

    [Minimum(0.0)]
    [Maximum(1.0)]
    public double? MaxEnergy { get; init; }

    [Minimum(0.0)]
    [Maximum(1.0)]
    public double? TargetEnergy { get; init; }

    [Minimum(0.0)]
    [Maximum(1.0)]
    public double? MinInstrumentalness { get; init; }

    [Minimum(0.0)]
    [Maximum(1.0)]
    public double? MaxInstrumentalness { get; init; }

    [Minimum(0.0)]
    [Maximum(1.0)]
    public double? TargetInstrumentalness { get; init; }

    [Minimum(0)]
    [Maximum(11)]
    public int? MinKey { get; init; }

    [Minimum(0)]
    [Maximum(11)]
    public int? MaxKey { get; init; }

    [Minimum(0)]
    [Maximum(11)]
    public int? TargetKey { get; init; }

    [Minimum(0.0)]
    [Maximum(1.0)]
    public double? MinLiveness { get; init; }

    [Minimum(0.0)]
    [Maximum(1.0)]
    public double? MaxLiveness { get; init; }

    [Minimum(0.0)]
    [Maximum(1.0)]
    public double? TargetLiveness { get; init; }

    public double? MinLoudness { get; init; }

    public double? MaxLoudness { get; init; }

    public double? TargetLoudness { get; init; }

    [Minimum(0)]
    [Maximum(1)]
    public int? MinMode { get; init; }

    [Minimum(0)]
    [Maximum(1)]
    public int? MaxMode { get; init; }

    [Minimum(0)]
    [Maximum(1)]
    public int? TargetMode { get; init; }

    [Minimum(0)]
    [Maximum(100)]
    public int? MinPopularity { get; init; }

    [Minimum(0)]
    [Maximum(100)]
    public int? MaxPopularity { get; init; }

    [Minimum(0)]
    [Maximum(100)]
    public int? TargetPopularity { get; init; }

    [Minimum(0.0)]
    [Maximum(1.0)]
    public double? MinSpeechiness { get; init; }

    [Minimum(0.0)]
    [Maximum(1.0)]
    public double? MaxSpeechiness { get; init; }

    [Minimum(0.0)]
    [Maximum(1.0)]
    public double? TargetSpeechiness { get; init; }

    public double? MinTempo { get; init; }

    public double? MaxTempo { get; init; }

    public double? TargetTempo { get; init; }

    [Maximum(11)]
    public int? MinTimeSignature { get; init; }

    public int? MaxTimeSignature { get; init; }

    public int? TargetTimeSignature { get; init; }

    [Minimum(0.0)]
    [Maximum(1.0)]
    public double? MinValence { get; init; }

    [Minimum(0.0)]
    [Maximum(1.0)]
    public double? MaxValence { get; init; }

    [Minimum(0.0)]
    [Maximum(1.0)]
    public double? TargetValence { get; init; }
}
