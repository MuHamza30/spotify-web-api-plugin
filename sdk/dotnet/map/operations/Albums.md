<!-- Generated file — do not edit; regenerated with the SDK. -->

# Albums — operations

Accessor: `client.Albums` · Source: `src/SpotifyWebApi/Api/Albums.cs` · 9 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CheckUsersSavedAlbums

- **Auth**: `options.Oauth20`
- **Signature**: `CheckUsersSavedAlbums(CheckUsersSavedAlbumsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ids`
- **Query params (wire ← C#)**: `ids` ← `Ids`
- **Returns**: `IReadOnlyList<bool>`
- **Error**: `ApiException<CheckUsersSavedAlbumsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `CheckUsersSavedAlbumsRequest` | `src/SpotifyWebApi/Requests/Albums/CheckUsersSavedAlbumsRequest.cs` |
| `CheckUsersSavedAlbumsError` | `src/SpotifyWebApi/Errors/CheckUsersSavedAlbumsError.cs` |
| `Unauthorized1` | `src/SpotifyWebApi/Models/Unauthorized1.cs` |
| `Forbidden1` | `src/SpotifyWebApi/Models/Forbidden1.cs` |
| `TooManyRequests1` | `src/SpotifyWebApi/Models/TooManyRequests1.cs` |

### GetAnAlbum

- **Auth**: `options.Oauth20`
- **Signature**: `GetAnAlbum(GetAnAlbumRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Query params (wire ← C#)**: `market` ← `Market`
- **Returns**: `AlbumObject`
- **Error**: `ApiException<GetAnAlbumError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `GetAnAlbumRequest` | `src/SpotifyWebApi/Requests/Albums/GetAnAlbumRequest.cs` |
| `AlbumObject` | `src/SpotifyWebApi/Models/AlbumObject.cs` |
| `GetAnAlbumError` | `src/SpotifyWebApi/Errors/GetAnAlbumError.cs` |
| `Unauthorized1` | `src/SpotifyWebApi/Models/Unauthorized1.cs` |
| `Forbidden1` | `src/SpotifyWebApi/Models/Forbidden1.cs` |
| `TooManyRequests1` | `src/SpotifyWebApi/Models/TooManyRequests1.cs` |

### GetAnAlbumsTracks

- **Auth**: `options.Oauth20`
- **Signature**: `GetAnAlbumsTracks(GetAnAlbumsTracksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Query params (wire ← C#)**: `market` ← `Market`, `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `PagingSimplifiedTrackObject`
- **Error**: `ApiException<GetAnAlbumsTracksError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `GetAnAlbumsTracksRequest` | `src/SpotifyWebApi/Requests/Albums/GetAnAlbumsTracksRequest.cs` |
| `PagingSimplifiedTrackObject` | `src/SpotifyWebApi/Models/PagingSimplifiedTrackObject.cs` |
| `GetAnAlbumsTracksError` | `src/SpotifyWebApi/Errors/GetAnAlbumsTracksError.cs` |
| `Unauthorized1` | `src/SpotifyWebApi/Models/Unauthorized1.cs` |
| `Forbidden1` | `src/SpotifyWebApi/Models/Forbidden1.cs` |
| `TooManyRequests1` | `src/SpotifyWebApi/Models/TooManyRequests1.cs` |

### GetAnArtistsAlbums

- **Auth**: `options.Oauth20`
- **Signature**: `GetAnArtistsAlbums(GetAnArtistsAlbumsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Query params (wire ← C#)**: `include_groups` ← `IncludeGroups`, `market` ← `Market`, `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `PagingArtistDiscographyAlbumObject`
- **Error**: `ApiException<GetAnArtistsAlbumsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `GetAnArtistsAlbumsRequest` | `src/SpotifyWebApi/Requests/Artists/GetAnArtistsAlbumsRequest.cs` |
| `PagingArtistDiscographyAlbumObject` | `src/SpotifyWebApi/Models/PagingArtistDiscographyAlbumObject.cs` |
| `GetAnArtistsAlbumsError` | `src/SpotifyWebApi/Errors/GetAnArtistsAlbumsError.cs` |
| `Unauthorized1` | `src/SpotifyWebApi/Models/Unauthorized1.cs` |
| `Forbidden1` | `src/SpotifyWebApi/Models/Forbidden1.cs` |
| `TooManyRequests1` | `src/SpotifyWebApi/Models/TooManyRequests1.cs` |

### GetMultipleAlbums

- **Auth**: `options.Oauth20`
- **Signature**: `GetMultipleAlbums(GetMultipleAlbumsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ids`
- **Query params (wire ← C#)**: `ids` ← `Ids`, `market` ← `Market`
- **Returns**: `ManyAlbums`
- **Error**: `ApiException<GetMultipleAlbumsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `GetMultipleAlbumsRequest` | `src/SpotifyWebApi/Requests/Albums/GetMultipleAlbumsRequest.cs` |
| `ManyAlbums` | `src/SpotifyWebApi/Models/ManyAlbums.cs` |
| `GetMultipleAlbumsError` | `src/SpotifyWebApi/Errors/GetMultipleAlbumsError.cs` |
| `Unauthorized1` | `src/SpotifyWebApi/Models/Unauthorized1.cs` |
| `Forbidden1` | `src/SpotifyWebApi/Models/Forbidden1.cs` |
| `TooManyRequests1` | `src/SpotifyWebApi/Models/TooManyRequests1.cs` |

### GetNewReleases

- **Auth**: `options.Oauth20`
- **Signature**: `GetNewReleases(GetNewReleasesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `PagedAlbums`
- **Error**: `ApiException<GetNewReleasesError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `GetNewReleasesRequest` | `src/SpotifyWebApi/Requests/Albums/GetNewReleasesRequest.cs` |
| `PagedAlbums` | `src/SpotifyWebApi/Models/PagedAlbums.cs` |
| `GetNewReleasesError` | `src/SpotifyWebApi/Errors/GetNewReleasesError.cs` |
| `Unauthorized1` | `src/SpotifyWebApi/Models/Unauthorized1.cs` |
| `Forbidden1` | `src/SpotifyWebApi/Models/Forbidden1.cs` |
| `TooManyRequests1` | `src/SpotifyWebApi/Models/TooManyRequests1.cs` |

### GetUsersSavedAlbums

- **Auth**: `options.Oauth20`
- **Signature**: `GetUsersSavedAlbums(GetUsersSavedAlbumsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `offset` ← `Offset`, `market` ← `Market`
- **Returns**: `PagingSavedAlbumObject`
- **Error**: `ApiException<GetUsersSavedAlbumsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `GetUsersSavedAlbumsRequest` | `src/SpotifyWebApi/Requests/Albums/GetUsersSavedAlbumsRequest.cs` |
| `PagingSavedAlbumObject` | `src/SpotifyWebApi/Models/PagingSavedAlbumObject.cs` |
| `GetUsersSavedAlbumsError` | `src/SpotifyWebApi/Errors/GetUsersSavedAlbumsError.cs` |
| `Unauthorized1` | `src/SpotifyWebApi/Models/Unauthorized1.cs` |
| `Forbidden1` | `src/SpotifyWebApi/Models/Forbidden1.cs` |
| `TooManyRequests1` | `src/SpotifyWebApi/Models/TooManyRequests1.cs` |

### RemoveAlbumsUser

- **Auth**: `options.Oauth20`
- **Signature**: `RemoveAlbumsUser(RemoveAlbumsUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ids`
- **Query params (wire ← C#)**: `ids` ← `Ids`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RemoveAlbumsUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `RemoveAlbumsUserRequest` | `src/SpotifyWebApi/Requests/Albums/RemoveAlbumsUserRequest.cs` |
| `RemoveAlbumsRequest` | `src/SpotifyWebApi/Models/RemoveAlbumsRequest.cs` |
| `RemoveAlbumsUserError` | `src/SpotifyWebApi/Errors/RemoveAlbumsUserError.cs` |
| `Unauthorized1` | `src/SpotifyWebApi/Models/Unauthorized1.cs` |
| `Forbidden1` | `src/SpotifyWebApi/Models/Forbidden1.cs` |
| `TooManyRequests1` | `src/SpotifyWebApi/Models/TooManyRequests1.cs` |

### SaveAlbumsUser

- **Auth**: `options.Oauth20`
- **Signature**: `SaveAlbumsUser(SaveAlbumsUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ids`
- **Query params (wire ← C#)**: `ids` ← `Ids`
- **Returns**: `void` (Task)
- **Error**: `ApiException<SaveAlbumsUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `SaveAlbumsUserRequest` | `src/SpotifyWebApi/Requests/Albums/SaveAlbumsUserRequest.cs` |
| `SaveAlbumsRequest` | `src/SpotifyWebApi/Models/SaveAlbumsRequest.cs` |
| `SaveAlbumsUserError` | `src/SpotifyWebApi/Errors/SaveAlbumsUserError.cs` |
| `Unauthorized1` | `src/SpotifyWebApi/Models/Unauthorized1.cs` |
| `Forbidden1` | `src/SpotifyWebApi/Models/Forbidden1.cs` |
| `TooManyRequests1` | `src/SpotifyWebApi/Models/TooManyRequests1.cs` |

