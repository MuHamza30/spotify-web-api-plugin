using SpotifyWebApi.Core.Validation.Attributes;

namespace SpotifyWebApi.Requests.Audiobooks;

/// <summary>
/// The inputs of the GetAudiobookChapters operation.
/// </summary>
public sealed record GetAudiobookChaptersRequest
{
    public required string Id { get; init; }

    public string? Market { get; init; }

    [Minimum(1)]
    [Maximum(50)]
    public int Limit { get; init; } = 20;

    public int Offset { get; init; } = 0;
}
