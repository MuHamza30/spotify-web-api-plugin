<!-- Generated file — do not edit; regenerated with the SDK. -->

# Playlists — operations

Accessor: `client.playlists` · Source: `src/resources/playlists.ts` · 16 operations · Request and error types: namespace `Playlists`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `spotify-web-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### addTracksToPlaylist

- **Signature**: `addTracksToPlaylist(request: Playlists.AddTracksToPlaylistRequest, options?: RequestOptions): ApiPromise<PlaylistSnapshotId, Playlists.AddTracksToPlaylistError>`
- **Wire**: `POST /playlists/{playlist_id}/tracks`
- **Auth**: `oauth20`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PlaylistSnapshotId`
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Playlists.AddTracksToPlaylistError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Playlists.AddTracksToPlaylistRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `playlistId` | `path` | `playlist_id` | `string` | yes |
| `position` | `query` | — | `number` | no |
| `uris` | `query` | — | `string` | no |
| `body` | `body` | — | `PlaylistsTracksRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PlaylistsTracksRequest` | `playlistsTracksRequestSchema` | `src/models/playlists-tracks-request.ts` |
| `PlaylistSnapshotId` | `playlistSnapshotIdSchema` | `src/models/playlist-snapshot-id.ts` |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

### changePlaylistDetails

- **Signature**: `changePlaylistDetails(request: Playlists.ChangePlaylistDetailsRequest, options?: RequestOptions): ApiPromise<undefined, Playlists.ChangePlaylistDetailsError>`
- **Wire**: `PUT /playlists/{playlist_id}`
- **Auth**: `oauth20`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Playlists.ChangePlaylistDetailsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Playlists.ChangePlaylistDetailsRequest` (2):

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

### checkIfUserFollowsPlaylist

- **Signature**: `checkIfUserFollowsPlaylist(request: Playlists.CheckIfUserFollowsPlaylistRequest, options?: RequestOptions): ApiPromise<boolean[], Playlists.CheckIfUserFollowsPlaylistError>`
- **Wire**: `GET /playlists/{playlist_id}/followers/contains`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `boolean[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Playlists.CheckIfUserFollowsPlaylistError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Playlists.CheckIfUserFollowsPlaylistRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `playlistId` | `path` | `playlist_id` | `string` | yes |
| `ids` | `query` | — | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

### createPlaylist

- **Signature**: `createPlaylist(request: Playlists.CreatePlaylistRequest, options?: RequestOptions): ApiPromise<PlaylistObject, Playlists.CreatePlaylistError>`
- **Wire**: `POST /users/{user_id}/playlists`
- **Auth**: `oauth20`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PlaylistObject`
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Playlists.CreatePlaylistError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Playlists.CreatePlaylistRequest` (2):

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

### followPlaylist

- **Signature**: `followPlaylist(request: Playlists.FollowPlaylistRequest, options?: RequestOptions): ApiPromise<undefined, Playlists.FollowPlaylistError>`
- **Wire**: `PUT /playlists/{playlist_id}/followers`
- **Auth**: `oauth20`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Playlists.FollowPlaylistError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Playlists.FollowPlaylistRequest` (2):

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

### getACategoriesPlaylists

- **Signature**: `getACategoriesPlaylists(request: Playlists.GetACategoriesPlaylistsRequest, options?: RequestOptions): ApiPromise<PagingFeaturedPlaylistObject, Playlists.GetACategoriesPlaylistsError>`
- **Wire**: `GET /browse/categories/{category_id}/playlists`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PagingFeaturedPlaylistObject`
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Playlists.GetACategoriesPlaylistsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Playlists.GetACategoriesPlaylistsRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `categoryId` | `path` | `category_id` | `string` | yes | — |
| `limit` | `query` | — | `number` | no | `20` |
| `offset` | `query` | — | `number` | no | `0` |

| Type | Schema value | Source |
| --- | --- | --- |
| `PagingFeaturedPlaylistObject` | `pagingFeaturedPlaylistObjectSchema` | `src/models/paging-featured-playlist-object.ts` |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

### getAListOfCurrentUsersPlaylists

- **Signature**: `getAListOfCurrentUsersPlaylists(request: Playlists.GetAListOfCurrentUsersPlaylistsRequest, options?: RequestOptions): ApiPromise<PagingPlaylistObject, Playlists.GetAListOfCurrentUsersPlaylistsError>`
- **Wire**: `GET /me/playlists`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PagingPlaylistObject`
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Playlists.GetAListOfCurrentUsersPlaylistsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Playlists.GetAListOfCurrentUsersPlaylistsRequest` (2):

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

### getFeaturedPlaylists

- **Signature**: `getFeaturedPlaylists(request: Playlists.GetFeaturedPlaylistsRequest, options?: RequestOptions): ApiPromise<PagingFeaturedPlaylistObject, Playlists.GetFeaturedPlaylistsError>`
- **Wire**: `GET /browse/featured-playlists`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PagingFeaturedPlaylistObject`
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Playlists.GetFeaturedPlaylistsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Playlists.GetFeaturedPlaylistsRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `locale` | `query` | `string` | no | — |
| `limit` | `query` | `number` | no | `20` |
| `offset` | `query` | `number` | no | `0` |

| Type | Schema value | Source |
| --- | --- | --- |
| `PagingFeaturedPlaylistObject` | `pagingFeaturedPlaylistObjectSchema` | `src/models/paging-featured-playlist-object.ts` |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

### getListUsersPlaylists

- **Signature**: `getListUsersPlaylists(request: Playlists.GetListUsersPlaylistsRequest, options?: RequestOptions): ApiPromise<PagingPlaylistObject, Playlists.GetListUsersPlaylistsError>`
- **Wire**: `GET /users/{user_id}/playlists`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PagingPlaylistObject`
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Playlists.GetListUsersPlaylistsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Playlists.GetListUsersPlaylistsRequest` (3):

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

### getPlaylist

- **Signature**: `getPlaylist(request: Playlists.GetPlaylistRequest, options?: RequestOptions): ApiPromise<PlaylistObject, Playlists.GetPlaylistError>`
- **Wire**: `GET /playlists/{playlist_id}`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlaylistObject`
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Playlists.GetPlaylistError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Playlists.GetPlaylistRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `playlistId` | `path` | `playlist_id` | `string` | yes |
| `market` | `query` | — | `string` | no |
| `fields` | `query` | — | `string` | no |
| `additionalTypes` | `query` | `additional_types` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PlaylistObject` | `playlistObjectSchema` | `src/models/playlist-object.ts` |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

### getPlaylistCover

- **Signature**: `getPlaylistCover(request: Playlists.GetPlaylistCoverRequest, options?: RequestOptions): ApiPromise<ImageObject[], Playlists.GetPlaylistCoverError>`
- **Wire**: `GET /playlists/{playlist_id}/images`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ImageObject[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Playlists.GetPlaylistCoverError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Playlists.GetPlaylistCoverRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `playlistId` | `path` | `playlist_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ImageObject` | `imageObjectSchema` | `src/models/image-object.ts` |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

### getPlaylistsTracks

- **Signature**: `getPlaylistsTracks(request: Playlists.GetPlaylistsTracksRequest, options?: RequestOptions): ApiPromise<PagingPlaylistTrackObject, Playlists.GetPlaylistsTracksError>`
- **Wire**: `GET /playlists/{playlist_id}/tracks`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PagingPlaylistTrackObject`
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Playlists.GetPlaylistsTracksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Playlists.GetPlaylistsTracksRequest` (6):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `playlistId` | `path` | `playlist_id` | `string` | yes | — |
| `market` | `query` | — | `string` | no | — |
| `fields` | `query` | — | `string` | no | — |
| `limit` | `query` | — | `number` | no | `20` |
| `offset` | `query` | — | `number` | no | `0` |
| `additionalTypes` | `query` | `additional_types` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `PagingPlaylistTrackObject` | `pagingPlaylistTrackObjectSchema` | `src/models/paging-playlist-track-object.ts` |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

### removeTracksPlaylist

- **Signature**: `removeTracksPlaylist(request: Playlists.RemoveTracksPlaylistRequest, options?: RequestOptions): ApiPromise<PlaylistSnapshotId, Playlists.RemoveTracksPlaylistError>`
- **Wire**: `DELETE /playlists/{playlist_id}/tracks`
- **Auth**: `oauth20`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PlaylistSnapshotId`
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Playlists.RemoveTracksPlaylistError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Playlists.RemoveTracksPlaylistRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `playlistId` | `path` | `playlist_id` | `string` | yes |
| `body` | `body` | — | `PlaylistsTracksRequest2` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PlaylistsTracksRequest2` | `playlistsTracksRequest2Schema` | `src/models/playlists-tracks-request2.ts` |
| `PlaylistSnapshotId` | `playlistSnapshotIdSchema` | `src/models/playlist-snapshot-id.ts` |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

### reorderOrReplacePlaylistsTracks

- **Signature**: `reorderOrReplacePlaylistsTracks(request: Playlists.ReorderOrReplacePlaylistsTracksRequest, options?: RequestOptions): ApiPromise<PlaylistSnapshotId, Playlists.ReorderOrReplacePlaylistsTracksError>`
- **Wire**: `PUT /playlists/{playlist_id}/tracks`
- **Auth**: `oauth20`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PlaylistSnapshotId`
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Playlists.ReorderOrReplacePlaylistsTracksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Playlists.ReorderOrReplacePlaylistsTracksRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `playlistId` | `path` | `playlist_id` | `string` | yes |
| `uris` | `query` | — | `string` | no |
| `body` | `body` | — | `PlaylistsTracksRequest1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PlaylistsTracksRequest1` | `playlistsTracksRequest1Schema` | `src/models/playlists-tracks-request1.ts` |
| `PlaylistSnapshotId` | `playlistSnapshotIdSchema` | `src/models/playlist-snapshot-id.ts` |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

### unfollowPlaylist

- **Signature**: `unfollowPlaylist(request: Playlists.UnfollowPlaylistRequest, options?: RequestOptions): ApiPromise<undefined, Playlists.UnfollowPlaylistError>`
- **Wire**: `DELETE /playlists/{playlist_id}/followers`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Playlists.UnfollowPlaylistError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Playlists.UnfollowPlaylistRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `playlistId` | `path` | `playlist_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

### uploadCustomPlaylistCover

- **Signature**: `uploadCustomPlaylistCover(request: Playlists.UploadCustomPlaylistCoverRequest, options?: RequestOptions): ApiPromise<undefined, Playlists.UploadCustomPlaylistCoverError>`
- **Wire**: `PUT /playlists/{playlist_id}/images`
- **Auth**: `oauth20`
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Playlists.UploadCustomPlaylistCoverError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Playlists.UploadCustomPlaylistCoverRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `playlistId` | `path` | `playlist_id` | `string` | yes |
| `body` | `body` | — | `Record<string, unknown>` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

