using SpotifyWebApi.Core.Validation.Attributes;

namespace SpotifyWebApi.Requests.Albums;

/// <summary>
/// The inputs of the GetUsersSavedAlbums operation.
/// </summary>
public sealed record GetUsersSavedAlbumsRequest
{
    [Minimum(1)]
    [Maximum(50)]
    public int Limit { get; init; } = 20;

    public int Offset { get; init; } = 0;

    public string? Market { get; init; }
}
