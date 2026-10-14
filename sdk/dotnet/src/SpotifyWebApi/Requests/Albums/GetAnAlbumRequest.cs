namespace SpotifyWebApi.Requests.Albums;

/// <summary>
/// The inputs of the GetAnAlbum operation.
/// </summary>
public sealed record GetAnAlbumRequest
{
    public required string Id { get; init; }

    public string? Market { get; init; }
}
