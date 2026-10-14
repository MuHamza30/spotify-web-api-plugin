using System.Threading.Tasks;
using SpotifyWebApi.Core.ErrorResponse;
using SpotifyWebApi.Core.Models;
using SpotifyWebApi.Models;

namespace SpotifyWebApi.Errors;

public sealed class GetAnArtistError : ApiError
{
    private readonly Optional<Unauthorized1> _unauthorized1Value;

    private readonly Optional<Forbidden1> _forbidden1Value;

    private readonly Optional<TooManyRequests1> _tooManyRequests1Value;

    private GetAnArtistError(Optional<Unauthorized1> unauthorized1Value,
        Optional<Forbidden1> forbidden1Value,
        Optional<TooManyRequests1> tooManyRequests1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _unauthorized1Value = unauthorized1Value;
        _forbidden1Value = forbidden1Value;
        _tooManyRequests1Value = tooManyRequests1Value;
    }

    private static GetAnArtistError AsUnauthorized1(Unauthorized1 value) =>
        new(Optional<Unauthorized1>.Some(value), default, default, default);

    private static GetAnArtistError AsForbidden1(Forbidden1 value) =>
        new(default, Optional<Forbidden1>.Some(value), default, default);

    private static GetAnArtistError AsTooManyRequests1(TooManyRequests1 value) =>
        new(default, default, Optional<TooManyRequests1>.Some(value), default);

    private static GetAnArtistError AsFallback(RawError value) =>
        new(default, default, default, Optional<RawError>.Some(value));

    public bool TryGetUnauthorized1(out Unauthorized1 value) => _unauthorized1Value.TryGetValue(out value);

    public bool TryGetForbidden1(out Forbidden1 value) => _forbidden1Value.TryGetValue(out value);

    public bool TryGetTooManyRequests1(out TooManyRequests1 value) => _tooManyRequests1Value.TryGetValue(out value);

    private static Task<GetAnArtistError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 => response.Json<Unauthorized1>().As(AsUnauthorized1),
            403 => response.Json<Forbidden1>().As(AsForbidden1),
            429 => response.Json<TooManyRequests1>().As(AsTooManyRequests1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetAnArtistError> Response { get; } = new(Create);
}
