<!-- Generated file — do not edit; regenerated with the SDK. -->

# MarketsApi — operations

Accessor: `client.MarketsApi` · Source: `src/SpotifyWebApi/Api/MarketsApi.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetAvailableMarkets

- **Auth**: `options.Oauth20`
- **Signature**: `GetAvailableMarkets(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `Markets`
- **Error**: `ApiException<GetAvailableMarketsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `Markets` | `src/SpotifyWebApi/Models/Markets.cs` |
| `GetAvailableMarketsError` | `src/SpotifyWebApi/Errors/GetAvailableMarketsError.cs` |
| `Unauthorized1` | `src/SpotifyWebApi/Models/Unauthorized1.cs` |
| `Forbidden1` | `src/SpotifyWebApi/Models/Forbidden1.cs` |
| `TooManyRequests1` | `src/SpotifyWebApi/Models/TooManyRequests1.cs` |

