<!-- Generated file — do not edit; regenerated with the SDK. -->

# Episodes — operations

Accessor: `client.Episodes` · Source: `src/SpotifyWebApi/Api/Episodes.cs` · 7 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CheckUsersSavedEpisodes

- **Auth**: `options.Oauth20`
- **Signature**: `CheckUsersSavedEpisodes(CheckUsersSavedEpisodesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ids`
- **Query params (wire ← C#)**: `ids` ← `Ids`
- **Returns**: `IReadOnlyList<bool>`
- **Error**: `ApiException<CheckUsersSavedEpisodesError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `CheckUsersSavedEpisodesRequest` | `src/SpotifyWebApi/Requests/Episodes/CheckUsersSavedEpisodesRequest.cs` |
| `CheckUsersSavedEpisodesError` | `src/SpotifyWebApi/Errors/CheckUsersSavedEpisodesError.cs` |
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

### GetAnEpisode

- **Auth**: `options.Oauth20`
- **Signature**: `GetAnEpisode(GetAnEpisodeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Query params (wire ← C#)**: `market` ← `Market`
- **Returns**: `EpisodeObject`
- **Error**: `ApiException<GetAnEpisodeError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `GetAnEpisodeRequest` | `src/SpotifyWebApi/Requests/Episodes/GetAnEpisodeRequest.cs` |
| `EpisodeObject` | `src/SpotifyWebApi/Models/EpisodeObject.cs` |
| `GetAnEpisodeError` | `src/SpotifyWebApi/Errors/GetAnEpisodeError.cs` |
| `Unauthorized1` | `src/SpotifyWebApi/Models/Unauthorized1.cs` |
| `Forbidden1` | `src/SpotifyWebApi/Models/Forbidden1.cs` |
| `TooManyRequests1` | `src/SpotifyWebApi/Models/TooManyRequests1.cs` |

### GetMultipleEpisodes

- **Auth**: `options.Oauth20`
- **Signature**: `GetMultipleEpisodes(GetMultipleEpisodesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ids`
- **Query params (wire ← C#)**: `ids` ← `Ids`, `market` ← `Market`
- **Returns**: `ManyEpisodes`
- **Error**: `ApiException<GetMultipleEpisodesError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `GetMultipleEpisodesRequest` | `src/SpotifyWebApi/Requests/Episodes/GetMultipleEpisodesRequest.cs` |
| `ManyEpisodes` | `src/SpotifyWebApi/Models/ManyEpisodes.cs` |
| `GetMultipleEpisodesError` | `src/SpotifyWebApi/Errors/GetMultipleEpisodesError.cs` |
| `Unauthorized1` | `src/SpotifyWebApi/Models/Unauthorized1.cs` |
| `Forbidden1` | `src/SpotifyWebApi/Models/Forbidden1.cs` |
| `TooManyRequests1` | `src/SpotifyWebApi/Models/TooManyRequests1.cs` |

### GetUsersSavedEpisodes

- **Auth**: `options.Oauth20`
- **Signature**: `GetUsersSavedEpisodes(GetUsersSavedEpisodesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `market` ← `Market`, `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `PagingSavedEpisodeObject`
- **Error**: `ApiException<GetUsersSavedEpisodesError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `GetUsersSavedEpisodesRequest` | `src/SpotifyWebApi/Requests/Episodes/GetUsersSavedEpisodesRequest.cs` |
| `PagingSavedEpisodeObject` | `src/SpotifyWebApi/Models/PagingSavedEpisodeObject.cs` |
| `GetUsersSavedEpisodesError` | `src/SpotifyWebApi/Errors/GetUsersSavedEpisodesError.cs` |
| `Unauthorized1` | `src/SpotifyWebApi/Models/Unauthorized1.cs` |
| `Forbidden1` | `src/SpotifyWebApi/Models/Forbidden1.cs` |
| `TooManyRequests1` | `src/SpotifyWebApi/Models/TooManyRequests1.cs` |

### RemoveEpisodesUser

- **Auth**: `options.Oauth20`
- **Signature**: `RemoveEpisodesUser(RemoveEpisodesUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ids`
- **Query params (wire ← C#)**: `ids` ← `Ids`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RemoveEpisodesUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `RemoveEpisodesUserRequest` | `src/SpotifyWebApi/Requests/Episodes/RemoveEpisodesUserRequest.cs` |
| `RemoveEpisodesRequest` | `src/SpotifyWebApi/Models/RemoveEpisodesRequest.cs` |
| `RemoveEpisodesUserError` | `src/SpotifyWebApi/Errors/RemoveEpisodesUserError.cs` |
| `Unauthorized1` | `src/SpotifyWebApi/Models/Unauthorized1.cs` |
| `Forbidden1` | `src/SpotifyWebApi/Models/Forbidden1.cs` |
| `TooManyRequests1` | `src/SpotifyWebApi/Models/TooManyRequests1.cs` |

### SaveEpisodesUser

- **Auth**: `options.Oauth20`
- **Signature**: `SaveEpisodesUser(SaveEpisodesUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ids`
- **Query params (wire ← C#)**: `ids` ← `Ids`
- **Returns**: `void` (Task)
- **Error**: `ApiException<SaveEpisodesUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `SaveEpisodesUserRequest` | `src/SpotifyWebApi/Requests/Episodes/SaveEpisodesUserRequest.cs` |
| `SaveEpisodesRequest` | `src/SpotifyWebApi/Models/SaveEpisodesRequest.cs` |
| `SaveEpisodesUserError` | `src/SpotifyWebApi/Errors/SaveEpisodesUserError.cs` |
| `Unauthorized1` | `src/SpotifyWebApi/Models/Unauthorized1.cs` |
| `Forbidden1` | `src/SpotifyWebApi/Models/Forbidden1.cs` |
| `TooManyRequests1` | `src/SpotifyWebApi/Models/TooManyRequests1.cs` |

