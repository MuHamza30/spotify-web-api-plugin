using System.Collections.Generic;
using SpotifyWebApi.Core.Validation.Attributes;
using SpotifyWebApi.Models.Enums;

namespace SpotifyWebApi.Requests.Search;

/// <summary>
/// The inputs of the SearchInvoke operation.
/// </summary>
public sealed record SearchRequest
{
    public required string Q { get; init; }

    public required IReadOnlyList<ItemType> Type { get; init; }

    public string? Market { get; init; }

    [Minimum(1)]
    [Maximum(50)]
    public int Limit { get; init; } = 20;

    [Minimum(0)]
    [Maximum(1000)]
    public int Offset { get; init; } = 0;

    public IncludeExternal? IncludeExternal { get; init; }
}
