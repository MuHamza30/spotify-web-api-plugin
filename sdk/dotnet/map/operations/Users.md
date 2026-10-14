<!-- Generated file — do not edit; regenerated with the SDK. -->

# Users — operations

Accessor: `client.Users` · Source: `src/SpotifyWebApi/Api/Users.cs` · 12 operations

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

### CheckIfUserFollowsPlaylist

- **Auth**: `options.Oauth20`
- **Signature**: `CheckIfUserFollowsPlaylist(CheckIfUserFollowsPlaylistRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PlaylistId`, `Ids`
- **Query params (wire ← C#)**: `ids` ← `Ids`
- **Returns**: `IReadOnlyList<bool>`
- **Error**: `ApiException<CheckIfUserFollowsPlaylistError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `CheckIfUserFollowsPlaylistRequest` | `src/SpotifyWebApi/Requests/Users/CheckIfUserFollowsPlaylistRequest.cs` |
| `CheckIfUserFollowsPlaylistError` | `src/SpotifyWebApi/Errors/CheckIfUserFollowsPlaylistError.cs` |
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

### FollowPlaylist

- **Auth**: `options.Oauth20`
- **Signature**: `FollowPlaylist(FollowPlaylistRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PlaylistId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<FollowPlaylistError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `FollowPlaylistRequest` | `src/SpotifyWebApi/Requests/Users/FollowPlaylistRequest.cs` |
| `PlaylistsFollowersRequest` | `src/SpotifyWebApi/Models/PlaylistsFollowersRequest.cs` |
| `FollowPlaylistError` | `src/SpotifyWebApi/Errors/FollowPlaylistError.cs` |
| `Unauthorized1` | `src/SpotifyWebApi/Models/Unauthorized1.cs` |
| `Forbidden1` | `src/SpotifyWebApi/Models/Forbidden1.cs` |
| `TooManyRequests1` | `src/SpotifyWebApi/Models/TooManyRequests1.cs` |

### GetCurrentUsersProfile

- **Auth**: `options.Oauth20`
- **Signature**: `GetCurrentUsersProfile(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `PrivateUserObject`
- **Error**: `ApiException<GetCurrentUsersProfileError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `PrivateUserObject` | `src/SpotifyWebApi/Models/PrivateUserObject.cs` |
| `GetCurrentUsersProfileError` | `src/SpotifyWebApi/Errors/GetCurrentUsersProfileError.cs` |
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

### GetListUsersPlaylists

- **Auth**: `options.Oauth20`
- **Signature**: `GetListUsersPlaylists(GetListUsersPlaylistsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `PagingPlaylistObject`
- **Error**: `ApiException<GetListUsersPlaylistsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `GetListUsersPlaylistsRequest` | `src/SpotifyWebApi/Requests/Playlists/GetListUsersPlaylistsRequest.cs` |
| `PagingPlaylistObject` | `src/SpotifyWebApi/Models/PagingPlaylistObject.cs` |
| `GetListUsersPlaylistsError` | `src/SpotifyWebApi/Errors/GetListUsersPlaylistsError.cs` |
| `Unauthorized1` | `src/SpotifyWebApi/Models/Unauthorized1.cs` |
| `Forbidden1` | `src/SpotifyWebApi/Models/Forbidden1.cs` |
| `TooManyRequests1` | `src/SpotifyWebApi/Models/TooManyRequests1.cs` |

### GetUsersProfile

- **Auth**: `options.Oauth20`
- **Signature**: `GetUsersProfile(GetUsersProfileRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`
- **Returns**: `PublicUserObject`
- **Error**: `ApiException<GetUsersProfileError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `GetUsersProfileRequest` | `src/SpotifyWebApi/Requests/Users/GetUsersProfileRequest.cs` |
| `PublicUserObject` | `src/SpotifyWebApi/Models/PublicUserObject.cs` |
| `GetUsersProfileError` | `src/SpotifyWebApi/Errors/GetUsersProfileError.cs` |
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

### GetUsersTopTracks

- **Auth**: `options.Oauth20`
- **Signature**: `GetUsersTopTracks(GetUsersTopTracksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `time_range` ← `TimeRange`, `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `PagingTrackObject`
- **Error**: `ApiException<GetUsersTopTracksError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `GetUsersTopTracksRequest` | `src/SpotifyWebApi/Requests/Users/GetUsersTopTracksRequest.cs` |
| `PagingTrackObject` | `src/SpotifyWebApi/Models/PagingTrackObject.cs` |
| `GetUsersTopTracksError` | `src/SpotifyWebApi/Errors/GetUsersTopTracksError.cs` |
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

### UnfollowPlaylist

- **Auth**: `options.Oauth20`
- **Signature**: `UnfollowPlaylist(UnfollowPlaylistRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PlaylistId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<UnfollowPlaylistError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `UnfollowPlaylistRequest` | `src/SpotifyWebApi/Requests/Users/UnfollowPlaylistRequest.cs` |
| `UnfollowPlaylistError` | `src/SpotifyWebApi/Errors/UnfollowPlaylistError.cs` |
| `Unauthorized1` | `src/SpotifyWebApi/Models/Unauthorized1.cs` |
| `Forbidden1` | `src/SpotifyWebApi/Models/Forbidden1.cs` |
| `TooManyRequests1` | `src/SpotifyWebApi/Models/TooManyRequests1.cs` |

