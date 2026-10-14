<!-- Generated file — do not edit; regenerated with the SDK. -->

# Users — operations

Accessor: `client.users` · Source: `src/resources/users.ts` · 12 operations · Request and error types: namespace `Users`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `spotify-web-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### checkCurrentUserFollows

- **Signature**: `checkCurrentUserFollows(request: Users.CheckCurrentUserFollowsRequest, options?: RequestOptions): ApiPromise<boolean[], Users.CheckCurrentUserFollowsError>`
- **Wire**: `GET /me/following/contains`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `boolean[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Users.CheckCurrentUserFollowsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Users.CheckCurrentUserFollowsRequest` (2):

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

### checkIfUserFollowsPlaylist

- **Signature**: `checkIfUserFollowsPlaylist(request: Users.CheckIfUserFollowsPlaylistRequest, options?: RequestOptions): ApiPromise<boolean[], Users.CheckIfUserFollowsPlaylistError>`
- **Wire**: `GET /playlists/{playlist_id}/followers/contains`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `boolean[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Users.CheckIfUserFollowsPlaylistError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Users.CheckIfUserFollowsPlaylistRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `playlistId` | `path` | `playlist_id` | `string` | yes |
| `ids` | `query` | — | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

### followArtistsUsers

- **Signature**: `followArtistsUsers(request: Users.FollowArtistsUsersRequest, options?: RequestOptions): ApiPromise<undefined, Users.FollowArtistsUsersError>`
- **Wire**: `PUT /me/following`
- **Auth**: `oauth20`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Users.FollowArtistsUsersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Users.FollowArtistsUsersRequest` (3):

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

### followPlaylist

- **Signature**: `followPlaylist(request: Users.FollowPlaylistRequest, options?: RequestOptions): ApiPromise<undefined, Users.FollowPlaylistError>`
- **Wire**: `PUT /playlists/{playlist_id}/followers`
- **Auth**: `oauth20`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Users.FollowPlaylistError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Users.FollowPlaylistRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `playlistId` | `path` | `playlist_id` | `string` | yes |
| `body` | `body` | — | `PlaylistsFollowersRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PlaylistsFollowersRequest` | `playlistsFollowersRequestSchema` | `src/models/playlists-followers-request.ts` |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

### getCurrentUsersProfile

- **Signature**: `getCurrentUsersProfile(options?: RequestOptions): ApiPromise<PrivateUserObject, Users.GetCurrentUsersProfileError>`
- **Wire**: `GET /me`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PrivateUserObject`
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Users.GetCurrentUsersProfileError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `PrivateUserObject` | `privateUserObjectSchema` | `src/models/private-user-object.ts` |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

### getFollowed

- **Signature**: `getFollowed(request: Users.GetFollowedRequest, options?: RequestOptions): ApiPromise<CursorPagedArtists, Users.GetFollowedError>`
- **Wire**: `GET /me/following`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CursorPagedArtists`
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Users.GetFollowedError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Users.GetFollowedRequest` (3):

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

### getListUsersPlaylists

- **Signature**: `getListUsersPlaylists(request: Users.GetListUsersPlaylistsRequest, options?: RequestOptions): ApiPromise<PagingPlaylistObject, Users.GetListUsersPlaylistsError>`
- **Wire**: `GET /users/{user_id}/playlists`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PagingPlaylistObject`
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Users.GetListUsersPlaylistsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Users.GetListUsersPlaylistsRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `userId` | `path` | `user_id` | `string` | yes | — |
| `limit` | `query` | — | `number` | no | `20` |
| `offset` | `query` | — | `number` | no | `0` |

| Type | Schema value | Source |
| --- | --- | --- |
| `PagingPlaylistObject` | `pagingPlaylistObjectSchema` | `src/models/paging-playlist-object.ts` |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

### getUsersProfile

- **Signature**: `getUsersProfile(request: Users.GetUsersProfileRequest, options?: RequestOptions): ApiPromise<PublicUserObject, Users.GetUsersProfileError>`
- **Wire**: `GET /users/{user_id}`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PublicUserObject`
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Users.GetUsersProfileError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Users.GetUsersProfileRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `userId` | `path` | `user_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicUserObject` | `publicUserObjectSchema` | `src/models/public-user-object.ts` |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

### getUsersTopArtists

- **Signature**: `getUsersTopArtists(request: Users.GetUsersTopArtistsRequest, options?: RequestOptions): ApiPromise<PagingArtistObject, Users.GetUsersTopArtistsError>`
- **Wire**: `GET /me/top/artists`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PagingArtistObject`
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Users.GetUsersTopArtistsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Users.GetUsersTopArtistsRequest` (3):

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

- **Signature**: `getUsersTopTracks(request: Users.GetUsersTopTracksRequest, options?: RequestOptions): ApiPromise<PagingTrackObject, Users.GetUsersTopTracksError>`
- **Wire**: `GET /me/top/tracks`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PagingTrackObject`
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Users.GetUsersTopTracksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Users.GetUsersTopTracksRequest` (3):

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

### unfollowArtistsUsers

- **Signature**: `unfollowArtistsUsers(request: Users.UnfollowArtistsUsersRequest, options?: RequestOptions): ApiPromise<undefined, Users.UnfollowArtistsUsersError>`
- **Wire**: `DELETE /me/following`
- **Auth**: `oauth20`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Users.UnfollowArtistsUsersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Users.UnfollowArtistsUsersRequest` (3):

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

### unfollowPlaylist

- **Signature**: `unfollowPlaylist(request: Users.UnfollowPlaylistRequest, options?: RequestOptions): ApiPromise<undefined, Users.UnfollowPlaylistError>`
- **Wire**: `DELETE /playlists/{playlist_id}/followers`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Users.UnfollowPlaylistError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Users.UnfollowPlaylistRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `playlistId` | `path` | `playlist_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

