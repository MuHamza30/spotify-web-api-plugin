namespace SpotifyWebApi.Requests.Shows;

/// <summary>
/// The inputs of the GetAShow operation.
/// </summary>
public sealed record GetAShowRequest
{
    public required string Id { get; init; }

    public string? Market { get; init; }
}
