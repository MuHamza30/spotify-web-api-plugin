<!-- Generated file — do not edit; regenerated with the SDK. -->

# Audiobooks — operations

Accessor: `client.audiobooks` · Source: `src/resources/audiobooks.ts` · 7 operations · Request and error types: namespace `Audiobooks`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `spotify-web-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### checkUsersSavedAudiobooks

- **Signature**: `checkUsersSavedAudiobooks(request: Audiobooks.CheckUsersSavedAudiobooksRequest, options?: RequestOptions): ApiPromise<boolean[], Audiobooks.CheckUsersSavedAudiobooksError>`
- **Wire**: `GET /me/audiobooks/contains`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `boolean[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Audiobooks.CheckUsersSavedAudiobooksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Audiobooks.CheckUsersSavedAudiobooksRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ids` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

### getAnAudiobook

- **Signature**: `getAnAudiobook(request: Audiobooks.GetAnAudiobookRequest, options?: RequestOptions): ApiPromise<AudiobookObject, Audiobooks.GetAnAudiobookError>`
- **Wire**: `GET /audiobooks/{id}`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AudiobookObject`
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Audiobooks.GetAnAudiobookError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequest1"` [400] `BadRequest1` · `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"notFound1"` [404] `NotFound1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Audiobooks.GetAnAudiobookRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `market` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AudiobookObject` | `audiobookObjectSchema` | `src/models/audiobook-object.ts` |
| `BadRequest1` | `badRequest1Schema` | `src/models/bad-request1.ts` |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `NotFound1` | `notFound1Schema` | `src/models/not-found1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

### getAudiobookChapters

- **Signature**: `getAudiobookChapters(request: Audiobooks.GetAudiobookChaptersRequest, options?: RequestOptions): ApiPromise<PagingSimplifiedChapterObject, Audiobooks.GetAudiobookChaptersError>`
- **Wire**: `GET /audiobooks/{id}/chapters`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PagingSimplifiedChapterObject`
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Audiobooks.GetAudiobookChaptersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Audiobooks.GetAudiobookChaptersRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `id` | `path` | `string` | yes | — |
| `market` | `query` | `string` | no | — |
| `limit` | `query` | `number` | no | `20` |
| `offset` | `query` | `number` | no | `0` |

| Type | Schema value | Source |
| --- | --- | --- |
| `PagingSimplifiedChapterObject` | `pagingSimplifiedChapterObjectSchema` | `src/models/paging-simplified-chapter-object.ts` |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

### getMultipleAudiobooks

- **Signature**: `getMultipleAudiobooks(request: Audiobooks.GetMultipleAudiobooksRequest, options?: RequestOptions): ApiPromise<ManyAudiobooks, Audiobooks.GetMultipleAudiobooksError>`
- **Wire**: `GET /audiobooks`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ManyAudiobooks`
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Audiobooks.GetMultipleAudiobooksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Audiobooks.GetMultipleAudiobooksRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ids` | `query` | `string` | yes |
| `market` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ManyAudiobooks` | `manyAudiobooksSchema` | `src/models/many-audiobooks.ts` |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

### getUsersSavedAudiobooks

- **Signature**: `getUsersSavedAudiobooks(request: Audiobooks.GetUsersSavedAudiobooksRequest, options?: RequestOptions): ApiPromise<PagingSavedAudiobookObject, Audiobooks.GetUsersSavedAudiobooksError>`
- **Wire**: `GET /me/audiobooks`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PagingSavedAudiobookObject`
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Audiobooks.GetUsersSavedAudiobooksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Audiobooks.GetUsersSavedAudiobooksRequest` (2):

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

### removeAudiobooksUser

- **Signature**: `removeAudiobooksUser(request: Audiobooks.RemoveAudiobooksUserRequest, options?: RequestOptions): ApiPromise<undefined, Audiobooks.RemoveAudiobooksUserError>`
- **Wire**: `DELETE /me/audiobooks`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Audiobooks.RemoveAudiobooksUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Audiobooks.RemoveAudiobooksUserRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ids` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

### saveAudiobooksUser

- **Signature**: `saveAudiobooksUser(request: Audiobooks.SaveAudiobooksUserRequest, options?: RequestOptions): ApiPromise<undefined, Audiobooks.SaveAudiobooksUserError>`
- **Wire**: `PUT /me/audiobooks`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Audiobooks.SaveAudiobooksUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Audiobooks.SaveAudiobooksUserRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ids` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

