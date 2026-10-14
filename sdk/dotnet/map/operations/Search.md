<!-- Generated file — do not edit; regenerated with the SDK. -->

# Search — operations

Accessor: `client.Search` · Source: `src/SpotifyWebApi/Api/Search.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### SearchInvoke

- **Auth**: `options.Oauth20`
- **Signature**: `SearchInvoke(SearchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Q`, `Type`
- **Query params (wire ← C#)**: `q` ← `Q`, `type` ← `Type`, `market` ← `Market`, `limit` ← `Limit`, `offset` ← `Offset`, `include_external` ← `IncludeExternal`
- **Returns**: `SearchItems`
- **Error**: `ApiException<SearchError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `SearchRequest` | `src/SpotifyWebApi/Requests/Search/SearchRequest.cs` |
| `ItemType` | `src/SpotifyWebApi/Models/Enums/ItemType.cs` |
| `IncludeExternal` | `src/SpotifyWebApi/Models/Enums/IncludeExternal.cs` |
| `SearchItems` | `src/SpotifyWebApi/Models/SearchItems.cs` |
| `SearchError` | `src/SpotifyWebApi/Errors/SearchError.cs` |
| `Unauthorized1` | `src/SpotifyWebApi/Models/Unauthorized1.cs` |
| `Forbidden1` | `src/SpotifyWebApi/Models/Forbidden1.cs` |
| `TooManyRequests1` | `src/SpotifyWebApi/Models/TooManyRequests1.cs` |

