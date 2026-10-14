<!-- Generated file — do not edit; regenerated with the SDK. -->

# Genres — operations

Accessor: `client.Genres` · Source: `src/SpotifyWebApi/Api/Genres.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetRecommendationGenres

- **Auth**: `options.Oauth20`
- **Signature**: `GetRecommendationGenres(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ManyGenres`
- **Error**: `ApiException<GetRecommendationGenresError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `ManyGenres` | `src/SpotifyWebApi/Models/ManyGenres.cs` |
| `GetRecommendationGenresError` | `src/SpotifyWebApi/Errors/GetRecommendationGenresError.cs` |
| `Unauthorized1` | `src/SpotifyWebApi/Models/Unauthorized1.cs` |
| `Forbidden1` | `src/SpotifyWebApi/Models/Forbidden1.cs` |
| `TooManyRequests1` | `src/SpotifyWebApi/Models/TooManyRequests1.cs` |

