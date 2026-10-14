namespace SpotifyWebApi.Requests.Player;

/// <summary>
/// The inputs of the GetInformationAboutTheUsersCurrentPlayback operation.
/// </summary>
public sealed record GetInformationAboutTheUsersCurrentPlaybackRequest
{
    public string? Market { get; init; }

    public string? AdditionalTypes { get; init; }
}
