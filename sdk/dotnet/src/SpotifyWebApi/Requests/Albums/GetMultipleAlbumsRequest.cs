namespace SpotifyWebApi.Requests.Albums;

/// <summary>
/// The inputs of the GetMultipleAlbums operation.
/// </summary>
public sealed record GetMultipleAlbumsRequest
{
    public required string Ids { get; init; }

    public string? Market { get; init; }
}
