<!-- Generated file — do not edit; regenerated with the SDK. -->

# Shows — operations

Accessor: `client.Shows` · Source: `src/SpotifyWebApi/Api/Shows.cs` · 7 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CheckUsersSavedShows

- **Auth**: `options.Oauth20`
- **Signature**: `CheckUsersSavedShows(CheckUsersSavedShowsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ids`
- **Query params (wire ← C#)**: `ids` ← `Ids`
- **Returns**: `IReadOnlyList<bool>`
- **Error**: `ApiException<CheckUsersSavedShowsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `CheckUsersSavedShowsRequest` | `src/SpotifyWebApi/Requests/Shows/CheckUsersSavedShowsRequest.cs` |
| `CheckUsersSavedShowsError` | `src/SpotifyWebApi/Errors/CheckUsersSavedShowsError.cs` |
| `Unauthorized1` | `src/SpotifyWebApi/Models/Unauthorized1.cs` |
| `Forbidden1` | `src/SpotifyWebApi/Models/Forbidden1.cs` |
| `TooManyRequests1` | `src/SpotifyWebApi/Models/TooManyRequests1.cs` |

### GetAShow

- **Auth**: `options.Oauth20`
- **Signature**: `GetAShow(GetAShowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Query params (wire ← C#)**: `market` ← `Market`
- **Returns**: `ShowObject`
- **Error**: `ApiException<GetAShowError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `GetAShowRequest` | `src/SpotifyWebApi/Requests/Shows/GetAShowRequest.cs` |
| `ShowObject` | `src/SpotifyWebApi/Models/ShowObject.cs` |
| `GetAShowError` | `src/SpotifyWebApi/Errors/GetAShowError.cs` |
| `Unauthorized1` | `src/SpotifyWebApi/Models/Unauthorized1.cs` |
| `Forbidden1` | `src/SpotifyWebApi/Models/Forbidden1.cs` |
| `TooManyRequests1` | `src/SpotifyWebApi/Models/TooManyRequests1.cs` |

### GetAShowsEpisodes

- **Auth**: `options.Oauth20`
- **Signature**: `GetAShowsEpisodes(GetAShowsEpisodesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Query params (wire ← C#)**: `market` ← `Market`, `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `PagingSimplifiedEpisodeObject`
- **Error**: `ApiException<GetAShowsEpisodesError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `GetAShowsEpisodesRequest` | `src/SpotifyWebApi/Requests/Shows/GetAShowsEpisodesRequest.cs` |
| `PagingSimplifiedEpisodeObject` | `src/SpotifyWebApi/Models/PagingSimplifiedEpisodeObject.cs` |
| `GetAShowsEpisodesError` | `src/SpotifyWebApi/Errors/GetAShowsEpisodesError.cs` |
| `Unauthorized1` | `src/SpotifyWebApi/Models/Unauthorized1.cs` |
| `Forbidden1` | `src/SpotifyWebApi/Models/Forbidden1.cs` |
| `TooManyRequests1` | `src/SpotifyWebApi/Models/TooManyRequests1.cs` |

### GetMultipleShows

- **Auth**: `options.Oauth20`
- **Signature**: `GetMultipleShows(GetMultipleShowsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ids`
- **Query params (wire ← C#)**: `ids` ← `Ids`, `market` ← `Market`
- **Returns**: `ManySimplifiedShows`
- **Error**: `ApiException<GetMultipleShowsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `GetMultipleShowsRequest` | `src/SpotifyWebApi/Requests/Shows/GetMultipleShowsRequest.cs` |
| `ManySimplifiedShows` | `src/SpotifyWebApi/Models/ManySimplifiedShows.cs` |
| `GetMultipleShowsError` | `src/SpotifyWebApi/Errors/GetMultipleShowsError.cs` |
| `Unauthorized1` | `src/SpotifyWebApi/Models/Unauthorized1.cs` |
| `Forbidden1` | `src/SpotifyWebApi/Models/Forbidden1.cs` |
| `TooManyRequests1` | `src/SpotifyWebApi/Models/TooManyRequests1.cs` |

### GetUsersSavedShows

- **Auth**: `options.Oauth20`
- **Signature**: `GetUsersSavedShows(GetUsersSavedShowsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `PagingSavedShowObject`
- **Error**: `ApiException<GetUsersSavedShowsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `GetUsersSavedShowsRequest` | `src/SpotifyWebApi/Requests/Shows/GetUsersSavedShowsRequest.cs` |
| `PagingSavedShowObject` | `src/SpotifyWebApi/Models/PagingSavedShowObject.cs` |
| `GetUsersSavedShowsError` | `src/SpotifyWebApi/Errors/GetUsersSavedShowsError.cs` |
| `Unauthorized1` | `src/SpotifyWebApi/Models/Unauthorized1.cs` |
| `Forbidden1` | `src/SpotifyWebApi/Models/Forbidden1.cs` |
| `TooManyRequests1` | `src/SpotifyWebApi/Models/TooManyRequests1.cs` |

### RemoveShowsUser

- **Auth**: `options.Oauth20`
- **Signature**: `RemoveShowsUser(RemoveShowsUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ids`
- **Query params (wire ← C#)**: `ids` ← `Ids`, `market` ← `Market`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RemoveShowsUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `RemoveShowsUserRequest` | `src/SpotifyWebApi/Requests/Shows/RemoveShowsUserRequest.cs` |
| `RemoveShowsRequest` | `src/SpotifyWebApi/Models/RemoveShowsRequest.cs` |
| `RemoveShowsUserError` | `src/SpotifyWebApi/Errors/RemoveShowsUserError.cs` |
| `Unauthorized1` | `src/SpotifyWebApi/Models/Unauthorized1.cs` |
| `Forbidden1` | `src/SpotifyWebApi/Models/Forbidden1.cs` |
| `TooManyRequests1` | `src/SpotifyWebApi/Models/TooManyRequests1.cs` |

### SaveShowsUser

- **Auth**: `options.Oauth20`
- **Signature**: `SaveShowsUser(SaveShowsUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ids`
- **Query params (wire ← C#)**: `ids` ← `Ids`
- **Returns**: `void` (Task)
- **Error**: `ApiException<SaveShowsUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `SaveShowsUserRequest` | `src/SpotifyWebApi/Requests/Shows/SaveShowsUserRequest.cs` |
| `SaveShowsRequest` | `src/SpotifyWebApi/Models/SaveShowsRequest.cs` |
| `SaveShowsUserError` | `src/SpotifyWebApi/Errors/SaveShowsUserError.cs` |
| `Unauthorized1` | `src/SpotifyWebApi/Models/Unauthorized1.cs` |
| `Forbidden1` | `src/SpotifyWebApi/Models/Forbidden1.cs` |
| `TooManyRequests1` | `src/SpotifyWebApi/Models/TooManyRequests1.cs` |

