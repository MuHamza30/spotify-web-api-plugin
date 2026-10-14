using System.Threading;
using System.Threading.Tasks;
using SpotifyWebApi.Core.Models;

namespace SpotifyWebApi.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}