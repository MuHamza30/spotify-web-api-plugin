<!-- Generated file — do not edit; regenerated with the SDK. -->

# CategoriesApi — operations

Accessor: `client.CategoriesApi` · Source: `src/SpotifyWebApi/Api/CategoriesApi.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetACategoriesPlaylists

- **Auth**: `options.Oauth20`
- **Signature**: `GetACategoriesPlaylists(GetACategoriesPlaylistsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CategoryId`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `PagingFeaturedPlaylistObject`
- **Error**: `ApiException<GetACategoriesPlaylistsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `GetACategoriesPlaylistsRequest` | `src/SpotifyWebApi/Requests/Playlists/GetACategoriesPlaylistsRequest.cs` |
| `PagingFeaturedPlaylistObject` | `src/SpotifyWebApi/Models/PagingFeaturedPlaylistObject.cs` |
| `GetACategoriesPlaylistsError` | `src/SpotifyWebApi/Errors/GetACategoriesPlaylistsError.cs` |
| `Unauthorized1` | `src/SpotifyWebApi/Models/Unauthorized1.cs` |
| `Forbidden1` | `src/SpotifyWebApi/Models/Forbidden1.cs` |
| `TooManyRequests1` | `src/SpotifyWebApi/Models/TooManyRequests1.cs` |

### GetACategory

- **Auth**: `options.Oauth20`
- **Signature**: `GetACategory(GetACategoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CategoryId`
- **Query params (wire ← C#)**: `locale` ← `Locale`
- **Returns**: `CategoryObject`
- **Error**: `ApiException<GetACategoryError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `GetACategoryRequest` | `src/SpotifyWebApi/Requests/CategoriesApi/GetACategoryRequest.cs` |
| `CategoryObject` | `src/SpotifyWebApi/Models/CategoryObject.cs` |
| `GetACategoryError` | `src/SpotifyWebApi/Errors/GetACategoryError.cs` |
| `Unauthorized1` | `src/SpotifyWebApi/Models/Unauthorized1.cs` |
| `Forbidden1` | `src/SpotifyWebApi/Models/Forbidden1.cs` |
| `TooManyRequests1` | `src/SpotifyWebApi/Models/TooManyRequests1.cs` |

### GetCategories

- **Auth**: `options.Oauth20`
- **Signature**: `GetCategories(GetCategoriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `locale` ← `Locale`, `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `PagedCategories`
- **Error**: `ApiException<GetCategoriesError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `GetCategoriesRequest` | `src/SpotifyWebApi/Requests/CategoriesApi/GetCategoriesRequest.cs` |
| `PagedCategories` | `src/SpotifyWebApi/Models/PagedCategories.cs` |
| `GetCategoriesError` | `src/SpotifyWebApi/Errors/GetCategoriesError.cs` |
| `Unauthorized1` | `src/SpotifyWebApi/Models/Unauthorized1.cs` |
| `Forbidden1` | `src/SpotifyWebApi/Models/Forbidden1.cs` |
| `TooManyRequests1` | `src/SpotifyWebApi/Models/TooManyRequests1.cs` |

