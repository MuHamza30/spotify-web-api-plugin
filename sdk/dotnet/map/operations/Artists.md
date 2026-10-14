<!-- Generated file — do not edit; regenerated with the SDK. -->

# Artists — operations

Accessor: `client.Artists` · Source: `src/SpotifyWebApi/Api/Artists.cs` · 10 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CheckCurrentUserFollows

- **Auth**: `options.Oauth20`
- **Signature**: `CheckCurrentUserFollows(CheckCurrentUserFollowsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Type`, `Ids`
- **Query params (wire ← C#)**: `type` ← `Type`, `ids` ← `Ids`
- **Returns**: `IReadOnlyList<bool>`
- **Error**: `ApiException<CheckCurrentUserFollowsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `CheckCurrentUserFollowsRequest` | `src/SpotifyWebApi/Requests/Users/CheckCurrentUserFollowsRequest.cs` |
| `ItemType3` | `src/SpotifyWebApi/Models/Enums/ItemType3.cs` |
| `CheckCurrentUserFollowsError` | `src/SpotifyWebApi/Errors/CheckCurrentUserFollowsError.cs` |
| `Unauthorized1` | `src/SpotifyWebApi/Models/Unauthorized1.cs` |
| `Forbidden1` | `src/SpotifyWebApi/Models/Forbidden1.cs` |
| `TooManyRequests1` | `src/SpotifyWebApi/Models/TooManyRequests1.cs` |

### FollowArtistsUsers

- **Auth**: `options.Oauth20`
- **Signature**: `FollowArtistsUsers(FollowArtistsUsersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Type`, `Ids`
- **Query params (wire ← C#)**: `type` ← `Type`, `ids` ← `Ids`
- **Returns**: `void` (Task)
- **Error**: `ApiException<FollowArtistsUsersError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `FollowArtistsUsersRequest` | `src/SpotifyWebApi/Requests/Users/FollowArtistsUsersRequest.cs` |
| `ItemType2` | `src/SpotifyWebApi/Models/Enums/ItemType2.cs` |
| `FollowArtistsOrUsersRequest` | `src/SpotifyWebApi/Models/FollowArtistsOrUsersRequest.cs` |
| `FollowArtistsUsersError` | `src/SpotifyWebApi/Errors/FollowArtistsUsersError.cs` |
| `Unauthorized1` | `src/SpotifyWebApi/Models/Unauthorized1.cs` |
| `Forbidden1` | `src/SpotifyWebApi/Models/Forbidden1.cs` |
| `TooManyRequests1` | `src/SpotifyWebApi/Models/TooManyRequests1.cs` |

### GetAnArtist

- **Auth**: `options.Oauth20`
- **Signature**: `GetAnArtist(GetAnArtistRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ArtistObject`
- **Error**: `ApiException<GetAnArtistError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `GetAnArtistRequest` | `src/SpotifyWebApi/Requests/Artists/GetAnArtistRequest.cs` |
| `ArtistObject` | `src/SpotifyWebApi/Models/ArtistObject.cs` |
| `GetAnArtistError` | `src/SpotifyWebApi/Errors/GetAnArtistError.cs` |
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

### GetAnArtistsRelatedArtists

- **Auth**: `options.Oauth20`
- **Signature**: `GetAnArtistsRelatedArtists(GetAnArtistsRelatedArtistsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ManyArtists`
- **Error**: `ApiException<GetAnArtistsRelatedArtistsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `GetAnArtistsRelatedArtistsRequest` | `src/SpotifyWebApi/Requests/Artists/GetAnArtistsRelatedArtistsRequest.cs` |
| `ManyArtists` | `src/SpotifyWebApi/Models/ManyArtists.cs` |
| `GetAnArtistsRelatedArtistsError` | `src/SpotifyWebApi/Errors/GetAnArtistsRelatedArtistsError.cs` |
| `Unauthorized1` | `src/SpotifyWebApi/Models/Unauthorized1.cs` |
| `Forbidden1` | `src/SpotifyWebApi/Models/Forbidden1.cs` |
| `TooManyRequests1` | `src/SpotifyWebApi/Models/TooManyRequests1.cs` |

### GetAnArtistsTopTracks

- **Auth**: `options.Oauth20`
- **Signature**: `GetAnArtistsTopTracks(GetAnArtistsTopTracksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Query params (wire ← C#)**: `market` ← `Market`
- **Returns**: `ManyTracks`
- **Error**: `ApiException<GetAnArtistsTopTracksError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `GetAnArtistsTopTracksRequest` | `src/SpotifyWebApi/Requests/Artists/GetAnArtistsTopTracksRequest.cs` |
| `ManyTracks` | `src/SpotifyWebApi/Models/ManyTracks.cs` |
| `GetAnArtistsTopTracksError` | `src/SpotifyWebApi/Errors/GetAnArtistsTopTracksError.cs` |
| `Unauthorized1` | `src/SpotifyWebApi/Models/Unauthorized1.cs` |
| `Forbidden1` | `src/SpotifyWebApi/Models/Forbidden1.cs` |
| `TooManyRequests1` | `src/SpotifyWebApi/Models/TooManyRequests1.cs` |

### GetFollowed

- **Auth**: `options.Oauth20`
- **Signature**: `GetFollowed(GetFollowedRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Type`
- **Query params (wire ← C#)**: `type` ← `Type`, `after` ← `After`, `limit` ← `Limit`
- **Returns**: `CursorPagedArtists`
- **Error**: `ApiException<GetFollowedError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `GetFollowedRequest` | `src/SpotifyWebApi/Requests/Users/GetFollowedRequest.cs` |
| `ItemType1` | `src/SpotifyWebApi/Models/Enums/ItemType1.cs` |
| `CursorPagedArtists` | `src/SpotifyWebApi/Models/CursorPagedArtists.cs` |
| `GetFollowedError` | `src/SpotifyWebApi/Errors/GetFollowedError.cs` |
| `Unauthorized1` | `src/SpotifyWebApi/Models/Unauthorized1.cs` |
| `Forbidden1` | `src/SpotifyWebApi/Models/Forbidden1.cs` |
| `TooManyRequests1` | `src/SpotifyWebApi/Models/TooManyRequests1.cs` |

### GetMultipleArtists

- **Auth**: `options.Oauth20`
- **Signature**: `GetMultipleArtists(GetMultipleArtistsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ids`
- **Query params (wire ← C#)**: `ids` ← `Ids`
- **Returns**: `ManyArtists`
- **Error**: `ApiException<GetMultipleArtistsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `GetMultipleArtistsRequest` | `src/SpotifyWebApi/Requests/Artists/GetMultipleArtistsRequest.cs` |
| `ManyArtists` | `src/SpotifyWebApi/Models/ManyArtists.cs` |
| `GetMultipleArtistsError` | `src/SpotifyWebApi/Errors/GetMultipleArtistsError.cs` |
| `Unauthorized1` | `src/SpotifyWebApi/Models/Unauthorized1.cs` |
| `Forbidden1` | `src/SpotifyWebApi/Models/Forbidden1.cs` |
| `TooManyRequests1` | `src/SpotifyWebApi/Models/TooManyRequests1.cs` |

### GetUsersTopArtists

- **Auth**: `options.Oauth20`
- **Signature**: `GetUsersTopArtists(GetUsersTopArtistsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `time_range` ← `TimeRange`, `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `PagingArtistObject`
- **Error**: `ApiException<GetUsersTopArtistsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `GetUsersTopArtistsRequest` | `src/SpotifyWebApi/Requests/Users/GetUsersTopArtistsRequest.cs` |
| `PagingArtistObject` | `src/SpotifyWebApi/Models/PagingArtistObject.cs` |
| `GetUsersTopArtistsError` | `src/SpotifyWebApi/Errors/GetUsersTopArtistsError.cs` |
| `Unauthorized1` | `src/SpotifyWebApi/Models/Unauthorized1.cs` |
| `Forbidden1` | `src/SpotifyWebApi/Models/Forbidden1.cs` |
| `TooManyRequests1` | `src/SpotifyWebApi/Models/TooManyRequests1.cs` |

### UnfollowArtistsUsers

- **Auth**: `options.Oauth20`
- **Signature**: `UnfollowArtistsUsers(UnfollowArtistsUsersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Type`, `Ids`
- **Query params (wire ← C#)**: `type` ← `Type`, `ids` ← `Ids`
- **Returns**: `void` (Task)
- **Error**: `ApiException<UnfollowArtistsUsersError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `UnfollowArtistsUsersRequest` | `src/SpotifyWebApi/Requests/Users/UnfollowArtistsUsersRequest.cs` |
| `ItemType3` | `src/SpotifyWebApi/Models/Enums/ItemType3.cs` |
| `UnfollowArtistsOrUsersRequest` | `src/SpotifyWebApi/Models/UnfollowArtistsOrUsersRequest.cs` |
| `UnfollowArtistsUsersError` | `src/SpotifyWebApi/Errors/UnfollowArtistsUsersError.cs` |
| `Unauthorized1` | `src/SpotifyWebApi/Models/Unauthorized1.cs` |
| `Forbidden1` | `src/SpotifyWebApi/Models/Forbidden1.cs` |
| `TooManyRequests1` | `src/SpotifyWebApi/Models/TooManyRequests1.cs` |

