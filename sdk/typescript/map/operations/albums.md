<!-- Generated file — do not edit; regenerated with the SDK. -->

# Albums — operations

Accessor: `client.albums` · Source: `src/resources/albums.ts` · 9 operations · Request and error types: namespace `Albums`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `spotify-web-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### checkUsersSavedAlbums

- **Signature**: `checkUsersSavedAlbums(request: Albums.CheckUsersSavedAlbumsRequest, options?: RequestOptions): ApiPromise<boolean[], Albums.CheckUsersSavedAlbumsError>`
- **Wire**: `GET /me/albums/contains`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `boolean[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Albums.CheckUsersSavedAlbumsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Albums.CheckUsersSavedAlbumsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ids` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

### getAnAlbum

- **Signature**: `getAnAlbum(request: Albums.GetAnAlbumRequest, options?: RequestOptions): ApiPromise<AlbumObject, Albums.GetAnAlbumError>`
- **Wire**: `GET /albums/{id}`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AlbumObject`
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Albums.GetAnAlbumError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Albums.GetAnAlbumRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `market` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AlbumObject` | `albumObjectSchema` | `src/models/album-object.ts` |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

### getAnAlbumsTracks

- **Signature**: `getAnAlbumsTracks(request: Albums.GetAnAlbumsTracksRequest, options?: RequestOptions): ApiPromise<PagingSimplifiedTrackObject, Albums.GetAnAlbumsTracksError>`
- **Wire**: `GET /albums/{id}/tracks`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PagingSimplifiedTrackObject`
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Albums.GetAnAlbumsTracksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Albums.GetAnAlbumsTracksRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `id` | `path` | `string` | yes | — |
| `market` | `query` | `string` | no | — |
| `limit` | `query` | `number` | no | `20` |
| `offset` | `query` | `number` | no | `0` |

| Type | Schema value | Source |
| --- | --- | --- |
| `PagingSimplifiedTrackObject` | `pagingSimplifiedTrackObjectSchema` | `src/models/paging-simplified-track-object.ts` |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

### getAnArtistsAlbums

- **Signature**: `getAnArtistsAlbums(request: Albums.GetAnArtistsAlbumsRequest, options?: RequestOptions): ApiPromise<PagingArtistDiscographyAlbumObject, Albums.GetAnArtistsAlbumsError>`
- **Wire**: `GET /artists/{id}/albums`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PagingArtistDiscographyAlbumObject`
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Albums.GetAnArtistsAlbumsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Albums.GetAnArtistsAlbumsRequest` (5):

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

### getMultipleAlbums

- **Signature**: `getMultipleAlbums(request: Albums.GetMultipleAlbumsRequest, options?: RequestOptions): ApiPromise<ManyAlbums, Albums.GetMultipleAlbumsError>`
- **Wire**: `GET /albums`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ManyAlbums`
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Albums.GetMultipleAlbumsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Albums.GetMultipleAlbumsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ids` | `query` | `string` | yes |
| `market` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ManyAlbums` | `manyAlbumsSchema` | `src/models/many-albums.ts` |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

### getNewReleases

- **Signature**: `getNewReleases(request: Albums.GetNewReleasesRequest, options?: RequestOptions): ApiPromise<PagedAlbums, Albums.GetNewReleasesError>`
- **Wire**: `GET /browse/new-releases`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PagedAlbums`
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Albums.GetNewReleasesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Albums.GetNewReleasesRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `limit` | `query` | `number` | no | `20` |
| `offset` | `query` | `number` | no | `0` |

| Type | Schema value | Source |
| --- | --- | --- |
| `PagedAlbums` | `pagedAlbumsSchema` | `src/models/paged-albums.ts` |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

### getUsersSavedAlbums

- **Signature**: `getUsersSavedAlbums(request: Albums.GetUsersSavedAlbumsRequest, options?: RequestOptions): ApiPromise<PagingSavedAlbumObject, Albums.GetUsersSavedAlbumsError>`
- **Wire**: `GET /me/albums`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PagingSavedAlbumObject`
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Albums.GetUsersSavedAlbumsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Albums.GetUsersSavedAlbumsRequest` (3):

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

### removeAlbumsUser

- **Signature**: `removeAlbumsUser(request: Albums.RemoveAlbumsUserRequest, options?: RequestOptions): ApiPromise<undefined, Albums.RemoveAlbumsUserError>`
- **Wire**: `DELETE /me/albums`
- **Auth**: `oauth20`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Albums.RemoveAlbumsUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Albums.RemoveAlbumsUserRequest` (2):

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

### saveAlbumsUser

- **Signature**: `saveAlbumsUser(request: Albums.SaveAlbumsUserRequest, options?: RequestOptions): ApiPromise<undefined, Albums.SaveAlbumsUserError>`
- **Wire**: `PUT /me/albums`
- **Auth**: `oauth20`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Albums.SaveAlbumsUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Albums.SaveAlbumsUserRequest` (2):

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

