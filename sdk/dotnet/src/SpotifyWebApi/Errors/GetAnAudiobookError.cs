using System.Threading.Tasks;
using SpotifyWebApi.Core.ErrorResponse;
using SpotifyWebApi.Core.Models;
using SpotifyWebApi.Models;

namespace SpotifyWebApi.Errors;

public sealed class GetAnAudiobookError : ApiError
{
    private readonly Optional<BadRequest1> _badRequest1Value;

    private readonly Optional<Unauthorized1> _unauthorized1Value;

    private readonly Optional<Forbidden1> _forbidden1Value;

    private readonly Optional<NotFound1> _notFound1Value;

    private readonly Optional<TooManyRequests1> _tooManyRequests1Value;

    private GetAnAudiobookError(Optional<BadRequest1> badRequest1Value,
        Optional<Unauthorized1> unauthorized1Value,
        Optional<Forbidden1> forbidden1Value,
        Optional<NotFound1> notFound1Value,
        Optional<TooManyRequests1> tooManyRequests1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _badRequest1Value = badRequest1Value;
        _unauthorized1Value = unauthorized1Value;
        _forbidden1Value = forbidden1Value;
        _notFound1Value = notFound1Value;
        _tooManyRequests1Value = tooManyRequests1Value;
    }

    private static GetAnAudiobookError AsBadRequest1(BadRequest1 value) =>
        new(Optional<BadRequest1>.Some(value), default, default, default, default, default);

    private static GetAnAudiobookError AsUnauthorized1(Unauthorized1 value) =>
        new(default, Optional<Unauthorized1>.Some(value), default, default, default, default);

    private static GetAnAudiobookError AsForbidden1(Forbidden1 value) =>
        new(default, default, Optional<Forbidden1>.Some(value), default, default, default);

    private static GetAnAudiobookError AsNotFound1(NotFound1 value) =>
        new(default, default, default, Optional<NotFound1>.Some(value), default, default);

    private static GetAnAudiobookError AsTooManyRequests1(TooManyRequests1 value) =>
        new(default, default, default, default, Optional<TooManyRequests1>.Some(value), default);

    private static GetAnAudiobookError AsFallback(RawError value) =>
        new(default, default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetBadRequest1(out BadRequest1 value) => _badRequest1Value.TryGetValue(out value);

    public bool TryGetUnauthorized1(out Unauthorized1 value) => _unauthorized1Value.TryGetValue(out value);

    public bool TryGetForbidden1(out Forbidden1 value) => _forbidden1Value.TryGetValue(out value);

    public bool TryGetNotFound1(out NotFound1 value) => _notFound1Value.TryGetValue(out value);

    public bool TryGetTooManyRequests1(out TooManyRequests1 value) => _tooManyRequests1Value.TryGetValue(out value);

    private static Task<GetAnAudiobookError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<BadRequest1>().As(AsBadRequest1),
            401 => response.Json<Unauthorized1>().As(AsUnauthorized1),
            403 => response.Json<Forbidden1>().As(AsForbidden1),
            404 => response.Json<NotFound1>().As(AsNotFound1),
            429 => response.Json<TooManyRequests1>().As(AsTooManyRequests1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetAnAudiobookError> Response { get; } = new(Create);
}
