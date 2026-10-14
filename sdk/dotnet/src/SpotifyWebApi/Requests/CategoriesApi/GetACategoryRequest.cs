namespace SpotifyWebApi.Requests.CategoriesApi;

/// <summary>
/// The inputs of the GetACategory operation.
/// </summary>
public sealed record GetACategoryRequest
{
    public required string CategoryId { get; init; }

    public string? Locale { get; init; }
}
