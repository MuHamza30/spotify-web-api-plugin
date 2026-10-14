<!-- Generated file — do not edit; regenerated with the SDK. -->

# Chapters — operations

Accessor: `client.Chapters` · Source: `src/SpotifyWebApi/Api/Chapters.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetAChapter

- **Auth**: `options.Oauth20`
- **Signature**: `GetAChapter(GetAChapterRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Query params (wire ← C#)**: `market` ← `Market`
- **Returns**: `ChapterObject`
- **Error**: `ApiException<GetAChapterError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `GetAChapterRequest` | `src/SpotifyWebApi/Requests/Chapters/GetAChapterRequest.cs` |
| `ChapterObject` | `src/SpotifyWebApi/Models/ChapterObject.cs` |
| `GetAChapterError` | `src/SpotifyWebApi/Errors/GetAChapterError.cs` |
| `Unauthorized1` | `src/SpotifyWebApi/Models/Unauthorized1.cs` |
| `Forbidden1` | `src/SpotifyWebApi/Models/Forbidden1.cs` |
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

### GetSeveralChapters

- **Auth**: `options.Oauth20`
- **Signature**: `GetSeveralChapters(GetSeveralChaptersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ids`
- **Query params (wire ← C#)**: `ids` ← `Ids`, `market` ← `Market`
- **Returns**: `ManyChapters`
- **Error**: `ApiException<GetSeveralChaptersError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `GetSeveralChaptersRequest` | `src/SpotifyWebApi/Requests/Chapters/GetSeveralChaptersRequest.cs` |
| `ManyChapters` | `src/SpotifyWebApi/Models/ManyChapters.cs` |
| `GetSeveralChaptersError` | `src/SpotifyWebApi/Errors/GetSeveralChaptersError.cs` |
| `Unauthorized1` | `src/SpotifyWebApi/Models/Unauthorized1.cs` |
| `Forbidden1` | `src/SpotifyWebApi/Models/Forbidden1.cs` |
| `TooManyRequests1` | `src/SpotifyWebApi/Models/TooManyRequests1.cs` |

