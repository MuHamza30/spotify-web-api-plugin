using SpotifyWebApi.Models;

namespace SpotifyWebApi.Requests.Player;

/// <summary>
/// The inputs of the TransferAUsersPlayback operation.
/// </summary>
public sealed record TransferAUsersPlaybackRequest
{
    public MePlayerRequest? Body { get; init; }
}
