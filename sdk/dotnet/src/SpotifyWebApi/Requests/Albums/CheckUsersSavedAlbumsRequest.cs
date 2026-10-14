namespace SpotifyWebApi.Requests.Albums;

/// <summary>
/// The inputs of the CheckUsersSavedAlbums operation.
/// </summary>
public sealed record CheckUsersSavedAlbumsRequest
{
    public required string Ids { get; init; }
}
