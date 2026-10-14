<!-- Generated file — do not edit; regenerated with the SDK. -->

# Library — operations

Accessor: `client.Library` · Source: `src/SpotifyWebApi/Api/Library.cs` · 29 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

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

### CheckUsersSavedTracks

- **Auth**: `options.Oauth20`
- **Signature**: `CheckUsersSavedTracks(CheckUsersSavedTracksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ids`
- **Query params (wire ← C#)**: `ids` ← `Ids`
- **Returns**: `IReadOnlyList<bool>`
- **Error**: `ApiException<CheckUsersSavedTracksError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `CheckUsersSavedTracksRequest` | `src/SpotifyWebApi/Requests/Tracks/CheckUsersSavedTracksRequest.cs` |
| `CheckUsersSavedTracksError` | `src/SpotifyWebApi/Errors/CheckUsersSavedTracksError.cs` |
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

### GetUsersSavedTracks

- **Auth**: `options.Oauth20`
- **Signature**: `GetUsersSavedTracks(GetUsersSavedTracksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `market` ← `Market`, `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `PagingSavedTrackObject`
- **Error**: `ApiException<GetUsersSavedTracksError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `GetUsersSavedTracksRequest` | `src/SpotifyWebApi/Requests/Tracks/GetUsersSavedTracksRequest.cs` |
| `PagingSavedTrackObject` | `src/SpotifyWebApi/Models/PagingSavedTrackObject.cs` |
| `GetUsersSavedTracksError` | `src/SpotifyWebApi/Errors/GetUsersSavedTracksError.cs` |
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

### RemoveTracksUser

- **Auth**: `options.Oauth20`
- **Signature**: `RemoveTracksUser(RemoveTracksUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ids`
- **Query params (wire ← C#)**: `ids` ← `Ids`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RemoveTracksUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `RemoveTracksUserRequest` | `src/SpotifyWebApi/Requests/Tracks/RemoveTracksUserRequest.cs` |
| `RemoveTracksRequest` | `src/SpotifyWebApi/Models/RemoveTracksRequest.cs` |
| `RemoveTracksUserError` | `src/SpotifyWebApi/Errors/RemoveTracksUserError.cs` |
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

### SaveTracksUser

- **Auth**: `options.Oauth20`
- **Signature**: `SaveTracksUser(SaveTracksUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ids`
- **Query params (wire ← C#)**: `ids` ← `Ids`
- **Returns**: `void` (Task)
- **Error**: `ApiException<SaveTracksUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `SaveTracksUserRequest` | `src/SpotifyWebApi/Requests/Tracks/SaveTracksUserRequest.cs` |
| `SaveTracksRequest` | `src/SpotifyWebApi/Models/SaveTracksRequest.cs` |
| `SaveTracksUserError` | `src/SpotifyWebApi/Errors/SaveTracksUserError.cs` |
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

