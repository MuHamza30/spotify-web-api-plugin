<!-- Generated file — do not edit; regenerated with the SDK. -->

# Shows — operations

Accessor: `client.shows` · Source: `src/resources/shows.ts` · 7 operations · Request and error types: namespace `Shows`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `spotify-web-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### checkUsersSavedShows

- **Signature**: `checkUsersSavedShows(request: Shows.CheckUsersSavedShowsRequest, options?: RequestOptions): ApiPromise<boolean[], Shows.CheckUsersSavedShowsError>`
- **Wire**: `GET /me/shows/contains`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `boolean[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Shows.CheckUsersSavedShowsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Shows.CheckUsersSavedShowsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ids` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

### getAShow

- **Signature**: `getAShow(request: Shows.GetAShowRequest, options?: RequestOptions): ApiPromise<ShowObject, Shows.GetAShowError>`
- **Wire**: `GET /shows/{id}`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ShowObject`
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Shows.GetAShowError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Shows.GetAShowRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `market` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ShowObject` | `showObjectSchema` | `src/models/show-object.ts` |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

### getAShowsEpisodes

- **Signature**: `getAShowsEpisodes(request: Shows.GetAShowsEpisodesRequest, options?: RequestOptions): ApiPromise<PagingSimplifiedEpisodeObject, Shows.GetAShowsEpisodesError>`
- **Wire**: `GET /shows/{id}/episodes`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PagingSimplifiedEpisodeObject`
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Shows.GetAShowsEpisodesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Shows.GetAShowsEpisodesRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `id` | `path` | `string` | yes | — |
| `market` | `query` | `string` | no | — |
| `limit` | `query` | `number` | no | `20` |
| `offset` | `query` | `number` | no | `0` |

| Type | Schema value | Source |
| --- | --- | --- |
| `PagingSimplifiedEpisodeObject` | `pagingSimplifiedEpisodeObjectSchema` | `src/models/paging-simplified-episode-object.ts` |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

### getMultipleShows

- **Signature**: `getMultipleShows(request: Shows.GetMultipleShowsRequest, options?: RequestOptions): ApiPromise<ManySimplifiedShows, Shows.GetMultipleShowsError>`
- **Wire**: `GET /shows`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ManySimplifiedShows`
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Shows.GetMultipleShowsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Shows.GetMultipleShowsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ids` | `query` | `string` | yes |
| `market` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ManySimplifiedShows` | `manySimplifiedShowsSchema` | `src/models/many-simplified-shows.ts` |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

### getUsersSavedShows

- **Signature**: `getUsersSavedShows(request: Shows.GetUsersSavedShowsRequest, options?: RequestOptions): ApiPromise<PagingSavedShowObject, Shows.GetUsersSavedShowsError>`
- **Wire**: `GET /me/shows`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PagingSavedShowObject`
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Shows.GetUsersSavedShowsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Shows.GetUsersSavedShowsRequest` (2):

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

### removeShowsUser

- **Signature**: `removeShowsUser(request: Shows.RemoveShowsUserRequest, options?: RequestOptions): ApiPromise<undefined, Shows.RemoveShowsUserError>`
- **Wire**: `DELETE /me/shows`
- **Auth**: `oauth20`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Shows.RemoveShowsUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Shows.RemoveShowsUserRequest` (3):

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

### saveShowsUser

- **Signature**: `saveShowsUser(request: Shows.SaveShowsUserRequest, options?: RequestOptions): ApiPromise<undefined, Shows.SaveShowsUserError>`
- **Wire**: `PUT /me/shows`
- **Auth**: `oauth20`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Shows.SaveShowsUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Shows.SaveShowsUserRequest` (2):

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

