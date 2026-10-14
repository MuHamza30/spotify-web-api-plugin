<!-- Generated file — do not edit; regenerated with the SDK. -->

# Library — operations

Accessor: `client.library` · Source: `src/resources/library.ts` · 29 operations · Request and error types: namespace `Library`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `spotify-web-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### changePlaylistDetails

- **Signature**: `changePlaylistDetails(request: Library.ChangePlaylistDetailsRequest, options?: RequestOptions): ApiPromise<undefined, Library.ChangePlaylistDetailsError>`
- **Wire**: `PUT /playlists/{playlist_id}`
- **Auth**: `oauth20`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Library.ChangePlaylistDetailsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Library.ChangePlaylistDetailsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `playlistId` | `path` | `playlist_id` | `string` | yes |
| `body` | `body` | — | `PlaylistsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PlaylistsRequest` | `playlistsRequestSchema` | `src/models/playlists-request.ts` |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

### checkCurrentUserFollows

- **Signature**: `checkCurrentUserFollows(request: Library.CheckCurrentUserFollowsRequest, options?: RequestOptions): ApiPromise<boolean[], Library.CheckCurrentUserFollowsError>`
- **Wire**: `GET /me/following/contains`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `boolean[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Library.CheckCurrentUserFollowsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Library.CheckCurrentUserFollowsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `type` | `query` | `ItemType3` | yes |
| `ids` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ItemType3` | `itemType3Schema` | `src/models/item-type3.ts` |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

### checkUsersSavedAlbums

- **Signature**: `checkUsersSavedAlbums(request: Library.CheckUsersSavedAlbumsRequest, options?: RequestOptions): ApiPromise<boolean[], Library.CheckUsersSavedAlbumsError>`
- **Wire**: `GET /me/albums/contains`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `boolean[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Library.CheckUsersSavedAlbumsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Library.CheckUsersSavedAlbumsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ids` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

### checkUsersSavedAudiobooks

- **Signature**: `checkUsersSavedAudiobooks(request: Library.CheckUsersSavedAudiobooksRequest, options?: RequestOptions): ApiPromise<boolean[], Library.CheckUsersSavedAudiobooksError>`
- **Wire**: `GET /me/audiobooks/contains`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `boolean[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Library.CheckUsersSavedAudiobooksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Library.CheckUsersSavedAudiobooksRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ids` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

### checkUsersSavedEpisodes

- **Signature**: `checkUsersSavedEpisodes(request: Library.CheckUsersSavedEpisodesRequest, options?: RequestOptions): ApiPromise<boolean[], Library.CheckUsersSavedEpisodesError>`
- **Wire**: `GET /me/episodes/contains`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `boolean[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Library.CheckUsersSavedEpisodesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Library.CheckUsersSavedEpisodesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ids` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

### checkUsersSavedShows

- **Signature**: `checkUsersSavedShows(request: Library.CheckUsersSavedShowsRequest, options?: RequestOptions): ApiPromise<boolean[], Library.CheckUsersSavedShowsError>`
- **Wire**: `GET /me/shows/contains`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `boolean[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Library.CheckUsersSavedShowsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Library.CheckUsersSavedShowsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ids` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

### checkUsersSavedTracks

- **Signature**: `checkUsersSavedTracks(request: Library.CheckUsersSavedTracksRequest, options?: RequestOptions): ApiPromise<boolean[], Library.CheckUsersSavedTracksError>`
- **Wire**: `GET /me/tracks/contains`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `boolean[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Library.CheckUsersSavedTracksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Library.CheckUsersSavedTracksRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ids` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

### createPlaylist

- **Signature**: `createPlaylist(request: Library.CreatePlaylistRequest, options?: RequestOptions): ApiPromise<PlaylistObject, Library.CreatePlaylistError>`
- **Wire**: `POST /users/{user_id}/playlists`
- **Auth**: `oauth20`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PlaylistObject`
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Library.CreatePlaylistError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Library.CreatePlaylistRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `userId` | `path` | `user_id` | `string` | yes |
| `body` | `body` | — | `UsersPlaylistsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UsersPlaylistsRequest` | `usersPlaylistsRequestSchema` | `src/models/users-playlists-request.ts` |
| `PlaylistObject` | `playlistObjectSchema` | `src/models/playlist-object.ts` |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

### followArtistsUsers

- **Signature**: `followArtistsUsers(request: Library.FollowArtistsUsersRequest, options?: RequestOptions): ApiPromise<undefined, Library.FollowArtistsUsersError>`
- **Wire**: `PUT /me/following`
- **Auth**: `oauth20`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Library.FollowArtistsUsersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Library.FollowArtistsUsersRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `type` | `query` | `ItemType2` | yes |
| `ids` | `query` | `string` | yes |
| `body` | `body` | `FollowArtistsOrUsersRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ItemType2` | `itemType2Schema` | `src/models/item-type2.ts` |
| `FollowArtistsOrUsersRequest` | `followArtistsOrUsersRequestSchema` | `src/models/follow-artists-or-users-request.ts` |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

### getAListOfCurrentUsersPlaylists

- **Signature**: `getAListOfCurrentUsersPlaylists(request: Library.GetAListOfCurrentUsersPlaylistsRequest, options?: RequestOptions): ApiPromise<PagingPlaylistObject, Library.GetAListOfCurrentUsersPlaylistsError>`
- **Wire**: `GET /me/playlists`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PagingPlaylistObject`
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Library.GetAListOfCurrentUsersPlaylistsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Library.GetAListOfCurrentUsersPlaylistsRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `limit` | `query` | `number` | no | `20` |
| `offset` | `query` | `number` | no | `0` |

| Type | Schema value | Source |
| --- | --- | --- |
| `PagingPlaylistObject` | `pagingPlaylistObjectSchema` | `src/models/paging-playlist-object.ts` |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

### getFollowed

- **Signature**: `getFollowed(request: Library.GetFollowedRequest, options?: RequestOptions): ApiPromise<CursorPagedArtists, Library.GetFollowedError>`
- **Wire**: `GET /me/following`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CursorPagedArtists`
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Library.GetFollowedError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Library.GetFollowedRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `type` | `query` | `ItemType1` | yes | — |
| `after` | `query` | `string` | no | — |
| `limit` | `query` | `number` | no | `20` |

| Type | Schema value | Source |
| --- | --- | --- |
| `ItemType1` | `itemType1Schema` | `src/models/item-type1.ts` |
| `CursorPagedArtists` | `cursorPagedArtistsSchema` | `src/models/cursor-paged-artists.ts` |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

### getUsersSavedAlbums

- **Signature**: `getUsersSavedAlbums(request: Library.GetUsersSavedAlbumsRequest, options?: RequestOptions): ApiPromise<PagingSavedAlbumObject, Library.GetUsersSavedAlbumsError>`
- **Wire**: `GET /me/albums`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PagingSavedAlbumObject`
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Library.GetUsersSavedAlbumsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Library.GetUsersSavedAlbumsRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `limit` | `query` | `number` | no | `20` |
| `offset` | `query` | `number` | no | `0` |
| `market` | `query` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `PagingSavedAlbumObject` | `pagingSavedAlbumObjectSchema` | `src/models/paging-saved-album-object.ts` |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

### getUsersSavedAudiobooks

- **Signature**: `getUsersSavedAudiobooks(request: Library.GetUsersSavedAudiobooksRequest, options?: RequestOptions): ApiPromise<PagingSavedAudiobookObject, Library.GetUsersSavedAudiobooksError>`
- **Wire**: `GET /me/audiobooks`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PagingSavedAudiobookObject`
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Library.GetUsersSavedAudiobooksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Library.GetUsersSavedAudiobooksRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `limit` | `query` | `number` | no | `20` |
| `offset` | `query` | `number` | no | `0` |

| Type | Schema value | Source |
| --- | --- | --- |
| `PagingSavedAudiobookObject` | `pagingSavedAudiobookObjectSchema` | `src/models/paging-saved-audiobook-object.ts` |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

### getUsersSavedEpisodes

- **Signature**: `getUsersSavedEpisodes(request: Library.GetUsersSavedEpisodesRequest, options?: RequestOptions): ApiPromise<PagingSavedEpisodeObject, Library.GetUsersSavedEpisodesError>`
- **Wire**: `GET /me/episodes`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PagingSavedEpisodeObject`
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Library.GetUsersSavedEpisodesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Library.GetUsersSavedEpisodesRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `market` | `query` | `string` | no | — |
| `limit` | `query` | `number` | no | `20` |
| `offset` | `query` | `number` | no | `0` |

| Type | Schema value | Source |
| --- | --- | --- |
| `PagingSavedEpisodeObject` | `pagingSavedEpisodeObjectSchema` | `src/models/paging-saved-episode-object.ts` |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

### getUsersSavedShows

- **Signature**: `getUsersSavedShows(request: Library.GetUsersSavedShowsRequest, options?: RequestOptions): ApiPromise<PagingSavedShowObject, Library.GetUsersSavedShowsError>`
- **Wire**: `GET /me/shows`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PagingSavedShowObject`
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Library.GetUsersSavedShowsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Library.GetUsersSavedShowsRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `limit` | `query` | `number` | no | `20` |
| `offset` | `query` | `number` | no | `0` |

| Type | Schema value | Source |
| --- | --- | --- |
| `PagingSavedShowObject` | `pagingSavedShowObjectSchema` | `src/models/paging-saved-show-object.ts` |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

### getUsersSavedTracks

- **Signature**: `getUsersSavedTracks(request: Library.GetUsersSavedTracksRequest, options?: RequestOptions): ApiPromise<PagingSavedTrackObject, Library.GetUsersSavedTracksError>`
- **Wire**: `GET /me/tracks`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PagingSavedTrackObject`
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Library.GetUsersSavedTracksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Library.GetUsersSavedTracksRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `market` | `query` | `string` | no | — |
| `limit` | `query` | `number` | no | `20` |
| `offset` | `query` | `number` | no | `0` |

| Type | Schema value | Source |
| --- | --- | --- |
| `PagingSavedTrackObject` | `pagingSavedTrackObjectSchema` | `src/models/paging-saved-track-object.ts` |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

### getUsersTopArtists

- **Signature**: `getUsersTopArtists(request: Library.GetUsersTopArtistsRequest, options?: RequestOptions): ApiPromise<PagingArtistObject, Library.GetUsersTopArtistsError>`
- **Wire**: `GET /me/top/artists`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PagingArtistObject`
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Library.GetUsersTopArtistsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Library.GetUsersTopArtistsRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `timeRange` | `query` | `time_range` | `string` | no | `"medium_term"` |
| `limit` | `query` | — | `number` | no | `20` |
| `offset` | `query` | — | `number` | no | `0` |

| Type | Schema value | Source |
| --- | --- | --- |
| `PagingArtistObject` | `pagingArtistObjectSchema` | `src/models/paging-artist-object.ts` |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

### getUsersTopTracks

- **Signature**: `getUsersTopTracks(request: Library.GetUsersTopTracksRequest, options?: RequestOptions): ApiPromise<PagingTrackObject, Library.GetUsersTopTracksError>`
- **Wire**: `GET /me/top/tracks`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PagingTrackObject`
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Library.GetUsersTopTracksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Library.GetUsersTopTracksRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `timeRange` | `query` | `time_range` | `string` | no | `"medium_term"` |
| `limit` | `query` | — | `number` | no | `20` |
| `offset` | `query` | — | `number` | no | `0` |

| Type | Schema value | Source |
| --- | --- | --- |
| `PagingTrackObject` | `pagingTrackObjectSchema` | `src/models/paging-track-object.ts` |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

### removeAlbumsUser

- **Signature**: `removeAlbumsUser(request: Library.RemoveAlbumsUserRequest, options?: RequestOptions): ApiPromise<undefined, Library.RemoveAlbumsUserError>`
- **Wire**: `DELETE /me/albums`
- **Auth**: `oauth20`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Library.RemoveAlbumsUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Library.RemoveAlbumsUserRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ids` | `query` | `string` | yes |
| `body` | `body` | `RemoveAlbumsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `RemoveAlbumsRequest` | `removeAlbumsRequestSchema` | `src/models/remove-albums-request.ts` |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

### removeAudiobooksUser

- **Signature**: `removeAudiobooksUser(request: Library.RemoveAudiobooksUserRequest, options?: RequestOptions): ApiPromise<undefined, Library.RemoveAudiobooksUserError>`
- **Wire**: `DELETE /me/audiobooks`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Library.RemoveAudiobooksUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Library.RemoveAudiobooksUserRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ids` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

### removeEpisodesUser

- **Signature**: `removeEpisodesUser(request: Library.RemoveEpisodesUserRequest, options?: RequestOptions): ApiPromise<undefined, Library.RemoveEpisodesUserError>`
- **Wire**: `DELETE /me/episodes`
- **Auth**: `oauth20`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Library.RemoveEpisodesUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Library.RemoveEpisodesUserRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ids` | `query` | `string` | yes |
| `body` | `body` | `RemoveEpisodesRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `RemoveEpisodesRequest` | `removeEpisodesRequestSchema` | `src/models/remove-episodes-request.ts` |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

### removeShowsUser

- **Signature**: `removeShowsUser(request: Library.RemoveShowsUserRequest, options?: RequestOptions): ApiPromise<undefined, Library.RemoveShowsUserError>`
- **Wire**: `DELETE /me/shows`
- **Auth**: `oauth20`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Library.RemoveShowsUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Library.RemoveShowsUserRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ids` | `query` | `string` | yes |
| `market` | `query` | `string` | no |
| `body` | `body` | `RemoveShowsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `RemoveShowsRequest` | `removeShowsRequestSchema` | `src/models/remove-shows-request.ts` |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

### removeTracksUser

- **Signature**: `removeTracksUser(request: Library.RemoveTracksUserRequest, options?: RequestOptions): ApiPromise<undefined, Library.RemoveTracksUserError>`
- **Wire**: `DELETE /me/tracks`
- **Auth**: `oauth20`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Library.RemoveTracksUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Library.RemoveTracksUserRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ids` | `query` | `string` | yes |
| `body` | `body` | `RemoveTracksRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `RemoveTracksRequest` | `removeTracksRequestSchema` | `src/models/remove-tracks-request.ts` |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

### saveAlbumsUser

- **Signature**: `saveAlbumsUser(request: Library.SaveAlbumsUserRequest, options?: RequestOptions): ApiPromise<undefined, Library.SaveAlbumsUserError>`
- **Wire**: `PUT /me/albums`
- **Auth**: `oauth20`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Library.SaveAlbumsUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Library.SaveAlbumsUserRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ids` | `query` | `string` | yes |
| `body` | `body` | `SaveAlbumsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SaveAlbumsRequest` | `saveAlbumsRequestSchema` | `src/models/save-albums-request.ts` |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

### saveAudiobooksUser

- **Signature**: `saveAudiobooksUser(request: Library.SaveAudiobooksUserRequest, options?: RequestOptions): ApiPromise<undefined, Library.SaveAudiobooksUserError>`
- **Wire**: `PUT /me/audiobooks`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Library.SaveAudiobooksUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Library.SaveAudiobooksUserRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ids` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

### saveEpisodesUser

- **Signature**: `saveEpisodesUser(request: Library.SaveEpisodesUserRequest, options?: RequestOptions): ApiPromise<undefined, Library.SaveEpisodesUserError>`
- **Wire**: `PUT /me/episodes`
- **Auth**: `oauth20`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Library.SaveEpisodesUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Library.SaveEpisodesUserRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ids` | `query` | `string` | yes |
| `body` | `body` | `SaveEpisodesRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SaveEpisodesRequest` | `saveEpisodesRequestSchema` | `src/models/save-episodes-request.ts` |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

### saveShowsUser

- **Signature**: `saveShowsUser(request: Library.SaveShowsUserRequest, options?: RequestOptions): ApiPromise<undefined, Library.SaveShowsUserError>`
- **Wire**: `PUT /me/shows`
- **Auth**: `oauth20`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Library.SaveShowsUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Library.SaveShowsUserRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ids` | `query` | `string` | yes |
| `body` | `body` | `SaveShowsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SaveShowsRequest` | `saveShowsRequestSchema` | `src/models/save-shows-request.ts` |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

### saveTracksUser

- **Signature**: `saveTracksUser(request: Library.SaveTracksUserRequest, options?: RequestOptions): ApiPromise<undefined, Library.SaveTracksUserError>`
- **Wire**: `PUT /me/tracks`
- **Auth**: `oauth20`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Library.SaveTracksUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Library.SaveTracksUserRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ids` | `query` | `string` | yes |
| `body` | `body` | `SaveTracksRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SaveTracksRequest` | `saveTracksRequestSchema` | `src/models/save-tracks-request.ts` |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

### unfollowArtistsUsers

- **Signature**: `unfollowArtistsUsers(request: Library.UnfollowArtistsUsersRequest, options?: RequestOptions): ApiPromise<undefined, Library.UnfollowArtistsUsersError>`
- **Wire**: `DELETE /me/following`
- **Auth**: `oauth20`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Library.UnfollowArtistsUsersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Library.UnfollowArtistsUsersRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `type` | `query` | `ItemType3` | yes |
| `ids` | `query` | `string` | yes |
| `body` | `body` | `UnfollowArtistsOrUsersRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ItemType3` | `itemType3Schema` | `src/models/item-type3.ts` |
| `UnfollowArtistsOrUsersRequest` | `unfollowArtistsOrUsersRequestSchema` | `src/models/unfollow-artists-or-users-request.ts` |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

