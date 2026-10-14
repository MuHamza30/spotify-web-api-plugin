<!-- Generated file — do not edit; regenerated with the SDK. -->

# Playlists — operations

Accessor: `client.Playlists` · Source: `src/SpotifyWebApi/Api/Playlists.cs` · 16 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### AddTracksToPlaylist

- **Auth**: `options.Oauth20`
- **Signature**: `AddTracksToPlaylist(AddTracksToPlaylistRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PlaylistId`
- **Query params (wire ← C#)**: `position` ← `Position`, `uris` ← `Uris`
- **Returns**: `PlaylistSnapshotId`
- **Error**: `ApiException<AddTracksToPlaylistError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `AddTracksToPlaylistRequest` | `src/SpotifyWebApi/Requests/Playlists/AddTracksToPlaylistRequest.cs` |
| `PlaylistsTracksRequest` | `src/SpotifyWebApi/Models/PlaylistsTracksRequest.cs` |
| `PlaylistSnapshotId` | `src/SpotifyWebApi/Models/PlaylistSnapshotId.cs` |
| `AddTracksToPlaylistError` | `src/SpotifyWebApi/Errors/AddTracksToPlaylistError.cs` |
| `Unauthorized1` | `src/SpotifyWebApi/Models/Unauthorized1.cs` |
| `Forbidden1` | `src/SpotifyWebApi/Models/Forbidden1.cs` |
| `TooManyRequests1` | `src/SpotifyWebApi/Models/TooManyRequests1.cs` |

### ChangePlaylistDetails

- **Auth**: `options.Oauth20`
- **Signature**: `ChangePlaylistDetails(ChangePlaylistDetailsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PlaylistId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ChangePlaylistDetailsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `ChangePlaylistDetailsRequest` | `src/SpotifyWebApi/Requests/Playlists/ChangePlaylistDetailsRequest.cs` |
| `PlaylistsRequest` | `src/SpotifyWebApi/Models/PlaylistsRequest.cs` |
| `ChangePlaylistDetailsError` | `src/SpotifyWebApi/Errors/ChangePlaylistDetailsError.cs` |
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

### CreatePlaylist

- **Auth**: `options.Oauth20`
- **Signature**: `CreatePlaylist(CreatePlaylistRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`
- **Returns**: `PlaylistObject`
- **Error**: `ApiException<CreatePlaylistError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `CreatePlaylistRequest` | `src/SpotifyWebApi/Requests/Playlists/CreatePlaylistRequest.cs` |
| `UsersPlaylistsRequest` | `src/SpotifyWebApi/Models/UsersPlaylistsRequest.cs` |
| `PlaylistObject` | `src/SpotifyWebApi/Models/PlaylistObject.cs` |
| `CreatePlaylistError` | `src/SpotifyWebApi/Errors/CreatePlaylistError.cs` |
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

### GetAListOfCurrentUsersPlaylists

- **Auth**: `options.Oauth20`
- **Signature**: `GetAListOfCurrentUsersPlaylists(GetAListOfCurrentUsersPlaylistsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `PagingPlaylistObject`
- **Error**: `ApiException<GetAListOfCurrentUsersPlaylistsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `GetAListOfCurrentUsersPlaylistsRequest` | `src/SpotifyWebApi/Requests/Playlists/GetAListOfCurrentUsersPlaylistsRequest.cs` |
| `PagingPlaylistObject` | `src/SpotifyWebApi/Models/PagingPlaylistObject.cs` |
| `GetAListOfCurrentUsersPlaylistsError` | `src/SpotifyWebApi/Errors/GetAListOfCurrentUsersPlaylistsError.cs` |
| `Unauthorized1` | `src/SpotifyWebApi/Models/Unauthorized1.cs` |
| `Forbidden1` | `src/SpotifyWebApi/Models/Forbidden1.cs` |
| `TooManyRequests1` | `src/SpotifyWebApi/Models/TooManyRequests1.cs` |

### GetFeaturedPlaylists

- **Auth**: `options.Oauth20`
- **Signature**: `GetFeaturedPlaylists(GetFeaturedPlaylistsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `locale` ← `Locale`, `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `PagingFeaturedPlaylistObject`
- **Error**: `ApiException<GetFeaturedPlaylistsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `GetFeaturedPlaylistsRequest` | `src/SpotifyWebApi/Requests/Playlists/GetFeaturedPlaylistsRequest.cs` |
| `PagingFeaturedPlaylistObject` | `src/SpotifyWebApi/Models/PagingFeaturedPlaylistObject.cs` |
| `GetFeaturedPlaylistsError` | `src/SpotifyWebApi/Errors/GetFeaturedPlaylistsError.cs` |
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

### GetPlaylist

- **Auth**: `options.Oauth20`
- **Signature**: `GetPlaylist(GetPlaylistRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PlaylistId`
- **Query params (wire ← C#)**: `market` ← `Market`, `fields` ← `Fields`, `additional_types` ← `AdditionalTypes`
- **Returns**: `PlaylistObject`
- **Error**: `ApiException<GetPlaylistError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `GetPlaylistRequest` | `src/SpotifyWebApi/Requests/Playlists/GetPlaylistRequest.cs` |
| `PlaylistObject` | `src/SpotifyWebApi/Models/PlaylistObject.cs` |
| `GetPlaylistError` | `src/SpotifyWebApi/Errors/GetPlaylistError.cs` |
| `Unauthorized1` | `src/SpotifyWebApi/Models/Unauthorized1.cs` |
| `Forbidden1` | `src/SpotifyWebApi/Models/Forbidden1.cs` |
| `TooManyRequests1` | `src/SpotifyWebApi/Models/TooManyRequests1.cs` |

### GetPlaylistCover

- **Auth**: `options.Oauth20`
- **Signature**: `GetPlaylistCover(GetPlaylistCoverRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PlaylistId`
- **Returns**: `IReadOnlyList<ImageObject>`
- **Error**: `ApiException<GetPlaylistCoverError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `GetPlaylistCoverRequest` | `src/SpotifyWebApi/Requests/Playlists/GetPlaylistCoverRequest.cs` |
| `ImageObject` | `src/SpotifyWebApi/Models/ImageObject.cs` |
| `GetPlaylistCoverError` | `src/SpotifyWebApi/Errors/GetPlaylistCoverError.cs` |
| `Unauthorized1` | `src/SpotifyWebApi/Models/Unauthorized1.cs` |
| `Forbidden1` | `src/SpotifyWebApi/Models/Forbidden1.cs` |
| `TooManyRequests1` | `src/SpotifyWebApi/Models/TooManyRequests1.cs` |

### GetPlaylistsTracks

- **Auth**: `options.Oauth20`
- **Signature**: `GetPlaylistsTracks(GetPlaylistsTracksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PlaylistId`
- **Query params (wire ← C#)**: `market` ← `Market`, `fields` ← `Fields`, `limit` ← `Limit`, `offset` ← `Offset`, `additional_types` ← `AdditionalTypes`
- **Returns**: `PagingPlaylistTrackObject`
- **Error**: `ApiException<GetPlaylistsTracksError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `GetPlaylistsTracksRequest` | `src/SpotifyWebApi/Requests/Playlists/GetPlaylistsTracksRequest.cs` |
| `PagingPlaylistTrackObject` | `src/SpotifyWebApi/Models/PagingPlaylistTrackObject.cs` |
| `GetPlaylistsTracksError` | `src/SpotifyWebApi/Errors/GetPlaylistsTracksError.cs` |
| `Unauthorized1` | `src/SpotifyWebApi/Models/Unauthorized1.cs` |
| `Forbidden1` | `src/SpotifyWebApi/Models/Forbidden1.cs` |
| `TooManyRequests1` | `src/SpotifyWebApi/Models/TooManyRequests1.cs` |

### RemoveTracksPlaylist

- **Auth**: `options.Oauth20`
- **Signature**: `RemoveTracksPlaylist(RemoveTracksPlaylistRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PlaylistId`
- **Returns**: `PlaylistSnapshotId`
- **Error**: `ApiException<RemoveTracksPlaylistError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `RemoveTracksPlaylistRequest` | `src/SpotifyWebApi/Requests/Playlists/RemoveTracksPlaylistRequest.cs` |
| `PlaylistsTracksRequest2` | `src/SpotifyWebApi/Models/PlaylistsTracksRequest2.cs` |
| `PlaylistSnapshotId` | `src/SpotifyWebApi/Models/PlaylistSnapshotId.cs` |
| `RemoveTracksPlaylistError` | `src/SpotifyWebApi/Errors/RemoveTracksPlaylistError.cs` |
| `Unauthorized1` | `src/SpotifyWebApi/Models/Unauthorized1.cs` |
| `Forbidden1` | `src/SpotifyWebApi/Models/Forbidden1.cs` |
| `TooManyRequests1` | `src/SpotifyWebApi/Models/TooManyRequests1.cs` |

### ReorderOrReplacePlaylistsTracks

- **Auth**: `options.Oauth20`
- **Signature**: `ReorderOrReplacePlaylistsTracks(ReorderOrReplacePlaylistsTracksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PlaylistId`
- **Query params (wire ← C#)**: `uris` ← `Uris`
- **Returns**: `PlaylistSnapshotId`
- **Error**: `ApiException<ReorderOrReplacePlaylistsTracksError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `ReorderOrReplacePlaylistsTracksRequest` | `src/SpotifyWebApi/Requests/Playlists/ReorderOrReplacePlaylistsTracksRequest.cs` |
| `PlaylistsTracksRequest1` | `src/SpotifyWebApi/Models/PlaylistsTracksRequest1.cs` |
| `PlaylistSnapshotId` | `src/SpotifyWebApi/Models/PlaylistSnapshotId.cs` |
| `ReorderOrReplacePlaylistsTracksError` | `src/SpotifyWebApi/Errors/ReorderOrReplacePlaylistsTracksError.cs` |
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

### UploadCustomPlaylistCover

- **Auth**: `options.Oauth20`
- **Signature**: `UploadCustomPlaylistCover(UploadCustomPlaylistCoverRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PlaylistId`, `Body`
- **Returns**: `void` (Task)
- **Error**: `ApiException<UploadCustomPlaylistCoverError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `UploadCustomPlaylistCoverRequest` | `src/SpotifyWebApi/Requests/Playlists/UploadCustomPlaylistCoverRequest.cs` |
| `UploadCustomPlaylistCoverError` | `src/SpotifyWebApi/Errors/UploadCustomPlaylistCoverError.cs` |
| `Unauthorized1` | `src/SpotifyWebApi/Models/Unauthorized1.cs` |
| `Forbidden1` | `src/SpotifyWebApi/Models/Forbidden1.cs` |
| `TooManyRequests1` | `src/SpotifyWebApi/Models/TooManyRequests1.cs` |

