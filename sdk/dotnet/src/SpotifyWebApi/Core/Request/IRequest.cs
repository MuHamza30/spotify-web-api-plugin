using System.Net.Http;

namespace SpotifyWebApi.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}