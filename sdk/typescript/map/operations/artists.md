<!-- Generated file — do not edit; regenerated with the SDK. -->

# Artists — operations

Accessor: `client.artists` · Source: `src/resources/artists.ts` · 10 operations · Request and error types: namespace `Artists`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `spotify-web-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### checkCurrentUserFollows

- **Signature**: `checkCurrentUserFollows(request: Artists.CheckCurrentUserFollowsRequest, options?: RequestOptions): ApiPromise<boolean[], Artists.CheckCurrentUserFollowsError>`
- **Wire**: `GET /me/following/contains`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `boolean[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Artists.CheckCurrentUserFollowsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Artists.CheckCurrentUserFollowsRequest` (2):

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

### followArtistsUsers

- **Signature**: `followArtistsUsers(request: Artists.FollowArtistsUsersRequest, options?: RequestOptions): ApiPromise<undefined, Artists.FollowArtistsUsersError>`
- **Wire**: `PUT /me/following`
- **Auth**: `oauth20`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Artists.FollowArtistsUsersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Artists.FollowArtistsUsersRequest` (3):

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

### getAnArtist

- **Signature**: `getAnArtist(request: Artists.GetAnArtistRequest, options?: RequestOptions): ApiPromise<ArtistObject, Artists.GetAnArtistError>`
- **Wire**: `GET /artists/{id}`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ArtistObject`
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Artists.GetAnArtistError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Artists.GetAnArtistRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ArtistObject` | `artistObjectSchema` | `src/models/artist-object.ts` |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

### getAnArtistsAlbums

- **Signature**: `getAnArtistsAlbums(request: Artists.GetAnArtistsAlbumsRequest, options?: RequestOptions): ApiPromise<PagingArtistDiscographyAlbumObject, Artists.GetAnArtistsAlbumsError>`
- **Wire**: `GET /artists/{id}/albums`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PagingArtistDiscographyAlbumObject`
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Artists.GetAnArtistsAlbumsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Artists.GetAnArtistsAlbumsRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `includeGroups` | `query` | `include_groups` | `string` | no | — |
| `market` | `query` | — | `string` | no | — |
| `limit` | `query` | — | `number` | no | `20` |
| `offset` | `query` | — | `number` | no | `0` |

| Type | Schema value | Source |
| --- | --- | --- |
| `PagingArtistDiscographyAlbumObject` | `pagingArtistDiscographyAlbumObjectSchema` | `src/models/paging-artist-discography-album-object.ts` |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

### getAnArtistsRelatedArtists

- **Signature**: `getAnArtistsRelatedArtists(request: Artists.GetAnArtistsRelatedArtistsRequest, options?: RequestOptions): ApiPromise<ManyArtists, Artists.GetAnArtistsRelatedArtistsError>`
- **Wire**: `GET /artists/{id}/related-artists`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ManyArtists`
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Artists.GetAnArtistsRelatedArtistsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Artists.GetAnArtistsRelatedArtistsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ManyArtists` | `manyArtistsSchema` | `src/models/many-artists.ts` |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

### getAnArtistsTopTracks

- **Signature**: `getAnArtistsTopTracks(request: Artists.GetAnArtistsTopTracksRequest, options?: RequestOptions): ApiPromise<ManyTracks, Artists.GetAnArtistsTopTracksError>`
- **Wire**: `GET /artists/{id}/top-tracks`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ManyTracks`
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Artists.GetAnArtistsTopTracksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Artists.GetAnArtistsTopTracksRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `market` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ManyTracks` | `manyTracksSchema` | `src/models/many-tracks.ts` |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

### getFollowed

- **Signature**: `getFollowed(request: Artists.GetFollowedRequest, options?: RequestOptions): ApiPromise<CursorPagedArtists, Artists.GetFollowedError>`
- **Wire**: `GET /me/following`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CursorPagedArtists`
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Artists.GetFollowedError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Artists.GetFollowedRequest` (3):

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

### getMultipleArtists

- **Signature**: `getMultipleArtists(request: Artists.GetMultipleArtistsRequest, options?: RequestOptions): ApiPromise<ManyArtists, Artists.GetMultipleArtistsError>`
- **Wire**: `GET /artists`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ManyArtists`
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Artists.GetMultipleArtistsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Artists.GetMultipleArtistsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ids` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ManyArtists` | `manyArtistsSchema` | `src/models/many-artists.ts` |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

### getUsersTopArtists

- **Signature**: `getUsersTopArtists(request: Artists.GetUsersTopArtistsRequest, options?: RequestOptions): ApiPromise<PagingArtistObject, Artists.GetUsersTopArtistsError>`
- **Wire**: `GET /me/top/artists`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PagingArtistObject`
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Artists.GetUsersTopArtistsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Artists.GetUsersTopArtistsRequest` (3):

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

### unfollowArtistsUsers

- **Signature**: `unfollowArtistsUsers(request: Artists.UnfollowArtistsUsersRequest, options?: RequestOptions): ApiPromise<undefined, Artists.UnfollowArtistsUsersError>`
- **Wire**: `DELETE /me/following`
- **Auth**: `oauth20`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Artists.UnfollowArtistsUsersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Artists.UnfollowArtistsUsersRequest` (3):

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

