using SpotifyWebApi.Models;

namespace SpotifyWebApi.Requests.Shows;

/// <summary>
/// The inputs of the RemoveShowsUser operation.
/// </summary>
public sealed record RemoveShowsUserRequest
{
    public required string Ids { get; init; }

    public string? Market { get; init; }

    public RemoveShowsRequest? Body { get; init; }
}
