using SpotifyWebApi.Core.Validation.Attributes;

namespace SpotifyWebApi.Requests.Audiobooks;

/// <summary>
/// The inputs of the GetUsersSavedAudiobooks operation.
/// </summary>
public sealed record GetUsersSavedAudiobooksRequest
{
    [Minimum(1)]
    [Maximum(50)]
    public int Limit { get; init; } = 20;

    public int Offset { get; init; } = 0;
}
