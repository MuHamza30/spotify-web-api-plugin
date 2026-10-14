<!-- Generated file — do not edit; regenerated with the SDK. -->

# Audiobooks — operations

Accessor: `client.Audiobooks` · Source: `src/SpotifyWebApi/Api/Audiobooks.cs` · 7 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CheckUsersSavedAudiobooks

- **Auth**: `options.Oauth20`
- **Signature**: `CheckUsersSavedAudiobooks(CheckUsersSavedAudiobooksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ids`
- **Query params (wire ← C#)**: `ids` ← `Ids`
- **Returns**: `IReadOnlyList<bool>`
- **Error**: `ApiException<CheckUsersSavedAudiobooksError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `CheckUsersSavedAudiobooksRequest` | `src/SpotifyWebApi/Requests/Audiobooks/CheckUsersSavedAudiobooksRequest.cs` |
| `CheckUsersSavedAudiobooksError` | `src/SpotifyWebApi/Errors/CheckUsersSavedAudiobooksError.cs` |
| `Unauthorized1` | `src/SpotifyWebApi/Models/Unauthorized1.cs` |
| `Forbidden1` | `src/SpotifyWebApi/Models/Forbidden1.cs` |
| `TooManyRequests1` | `src/SpotifyWebApi/Models/TooManyRequests1.cs` |

### GetAnAudiobook

- **Auth**: `options.Oauth20`
- **Signature**: `GetAnAudiobook(GetAnAudiobookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Query params (wire ← C#)**: `market` ← `Market`
- **Returns**: `AudiobookObject`
- **Error**: `ApiException<GetAnAudiobookError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequest1(out BadRequest1)` [400] · `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetNotFound1(out NotFound1)` [404] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `GetAnAudiobookRequest` | `src/SpotifyWebApi/Requests/Audiobooks/GetAnAudiobookRequest.cs` |
| `AudiobookObject` | `src/SpotifyWebApi/Models/AudiobookObject.cs` |
| `GetAnAudiobookError` | `src/SpotifyWebApi/Errors/GetAnAudiobookError.cs` |
| `BadRequest1` | `src/SpotifyWebApi/Models/BadRequest1.cs` |
| `Unauthorized1` | `src/SpotifyWebApi/Models/Unauthorized1.cs` |
| `Forbidden1` | `src/SpotifyWebApi/Models/Forbidden1.cs` |
| `NotFound1` | `src/SpotifyWebApi/Models/NotFound1.cs` |
| `TooManyRequests1` | `src/SpotifyWebApi/Models/TooManyRequests1.cs` |

### GetAudiobookChapters

- **Auth**: `options.Oauth20`
- **Signature**: `GetAudiobookChapters(GetAudiobookChaptersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Query params (wire ← C#)**: `market` ← `Market`, `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `PagingSimplifiedChapterObject`
- **Error**: `ApiException<GetAudiobookChaptersError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `GetAudiobookChaptersRequest` | `src/SpotifyWebApi/Requests/Audiobooks/GetAudiobookChaptersRequest.cs` |
| `PagingSimplifiedChapterObject` | `src/SpotifyWebApi/Models/PagingSimplifiedChapterObject.cs` |
| `GetAudiobookChaptersError` | `src/SpotifyWebApi/Errors/GetAudiobookChaptersError.cs` |
| `Unauthorized1` | `src/SpotifyWebApi/Models/Unauthorized1.cs` |
| `Forbidden1` | `src/SpotifyWebApi/Models/Forbidden1.cs` |
| `TooManyRequests1` | `src/SpotifyWebApi/Models/TooManyRequests1.cs` |

### GetMultipleAudiobooks

- **Auth**: `options.Oauth20`
- **Signature**: `GetMultipleAudiobooks(GetMultipleAudiobooksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ids`
- **Query params (wire ← C#)**: `ids` ← `Ids`, `market` ← `Market`
- **Returns**: `ManyAudiobooks`
- **Error**: `ApiException<GetMultipleAudiobooksError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `GetMultipleAudiobooksRequest` | `src/SpotifyWebApi/Requests/Audiobooks/GetMultipleAudiobooksRequest.cs` |
| `ManyAudiobooks` | `src/SpotifyWebApi/Models/ManyAudiobooks.cs` |
| `GetMultipleAudiobooksError` | `src/SpotifyWebApi/Errors/GetMultipleAudiobooksError.cs` |
| `Unauthorized1` | `src/SpotifyWebApi/Models/Unauthorized1.cs` |
| `Forbidden1` | `src/SpotifyWebApi/Models/Forbidden1.cs` |
| `TooManyRequests1` | `src/SpotifyWebApi/Models/TooManyRequests1.cs` |

### GetUsersSavedAudiobooks

- **Auth**: `options.Oauth20`
- **Signature**: `GetUsersSavedAudiobooks(GetUsersSavedAudiobooksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `PagingSavedAudiobookObject`
- **Error**: `ApiException<GetUsersSavedAudiobooksError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `GetUsersSavedAudiobooksRequest` | `src/SpotifyWebApi/Requests/Audiobooks/GetUsersSavedAudiobooksRequest.cs` |
| `PagingSavedAudiobookObject` | `src/SpotifyWebApi/Models/PagingSavedAudiobookObject.cs` |
| `GetUsersSavedAudiobooksError` | `src/SpotifyWebApi/Errors/GetUsersSavedAudiobooksError.cs` |
| `Unauthorized1` | `src/SpotifyWebApi/Models/Unauthorized1.cs` |
| `Forbidden1` | `src/SpotifyWebApi/Models/Forbidden1.cs` |
| `TooManyRequests1` | `src/SpotifyWebApi/Models/TooManyRequests1.cs` |

### RemoveAudiobooksUser

- **Auth**: `options.Oauth20`
- **Signature**: `RemoveAudiobooksUser(RemoveAudiobooksUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ids`
- **Query params (wire ← C#)**: `ids` ← `Ids`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RemoveAudiobooksUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `RemoveAudiobooksUserRequest` | `src/SpotifyWebApi/Requests/Audiobooks/RemoveAudiobooksUserRequest.cs` |
| `RemoveAudiobooksUserError` | `src/SpotifyWebApi/Errors/RemoveAudiobooksUserError.cs` |
| `Unauthorized1` | `src/SpotifyWebApi/Models/Unauthorized1.cs` |
| `Forbidden1` | `src/SpotifyWebApi/Models/Forbidden1.cs` |
| `TooManyRequests1` | `src/SpotifyWebApi/Models/TooManyRequests1.cs` |

### SaveAudiobooksUser

- **Auth**: `options.Oauth20`
- **Signature**: `SaveAudiobooksUser(SaveAudiobooksUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ids`
- **Query params (wire ← C#)**: `ids` ← `Ids`
- **Returns**: `void` (Task)
- **Error**: `ApiException<SaveAudiobooksUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `SaveAudiobooksUserRequest` | `src/SpotifyWebApi/Requests/Audiobooks/SaveAudiobooksUserRequest.cs` |
| `SaveAudiobooksUserError` | `src/SpotifyWebApi/Errors/SaveAudiobooksUserError.cs` |
| `Unauthorized1` | `src/SpotifyWebApi/Models/Unauthorized1.cs` |
| `Forbidden1` | `src/SpotifyWebApi/Models/Forbidden1.cs` |
| `TooManyRequests1` | `src/SpotifyWebApi/Models/TooManyRequests1.cs` |

