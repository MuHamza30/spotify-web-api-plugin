using SpotifyWebApi.Core.Validation.Attributes;

namespace SpotifyWebApi.Requests.CategoriesApi;

/// <summary>
/// The inputs of the GetCategories operation.
/// </summary>
public sealed record GetCategoriesRequest
{
    public string? Locale { get; init; }

    [Minimum(1)]
    [Maximum(50)]
    public int Limit { get; init; } = 20;

    public int Offset { get; init; } = 0;
}
