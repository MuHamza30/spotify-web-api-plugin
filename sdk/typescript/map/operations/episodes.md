<!-- Generated file — do not edit; regenerated with the SDK. -->

# Episodes — operations

Accessor: `client.episodes` · Source: `src/resources/episodes.ts` · 7 operations · Request and error types: namespace `Episodes`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `spotify-web-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### checkUsersSavedEpisodes

- **Signature**: `checkUsersSavedEpisodes(request: Episodes.CheckUsersSavedEpisodesRequest, options?: RequestOptions): ApiPromise<boolean[], Episodes.CheckUsersSavedEpisodesError>`
- **Wire**: `GET /me/episodes/contains`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `boolean[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Episodes.CheckUsersSavedEpisodesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Episodes.CheckUsersSavedEpisodesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ids` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

### getAShowsEpisodes

- **Signature**: `getAShowsEpisodes(request: Episodes.GetAShowsEpisodesRequest, options?: RequestOptions): ApiPromise<PagingSimplifiedEpisodeObject, Episodes.GetAShowsEpisodesError>`
- **Wire**: `GET /shows/{id}/episodes`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PagingSimplifiedEpisodeObject`
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Episodes.GetAShowsEpisodesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Episodes.GetAShowsEpisodesRequest` (4):

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

### getAnEpisode

- **Signature**: `getAnEpisode(request: Episodes.GetAnEpisodeRequest, options?: RequestOptions): ApiPromise<EpisodeObject, Episodes.GetAnEpisodeError>`
- **Wire**: `GET /episodes/{id}`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EpisodeObject`
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Episodes.GetAnEpisodeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Episodes.GetAnEpisodeRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `market` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `EpisodeObject` | `episodeObjectSchema` | `src/models/episode-object.ts` |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

### getMultipleEpisodes

- **Signature**: `getMultipleEpisodes(request: Episodes.GetMultipleEpisodesRequest, options?: RequestOptions): ApiPromise<ManyEpisodes, Episodes.GetMultipleEpisodesError>`
- **Wire**: `GET /episodes`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ManyEpisodes`
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Episodes.GetMultipleEpisodesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Episodes.GetMultipleEpisodesRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ids` | `query` | `string` | yes |
| `market` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ManyEpisodes` | `manyEpisodesSchema` | `src/models/many-episodes.ts` |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

### getUsersSavedEpisodes

- **Signature**: `getUsersSavedEpisodes(request: Episodes.GetUsersSavedEpisodesRequest, options?: RequestOptions): ApiPromise<PagingSavedEpisodeObject, Episodes.GetUsersSavedEpisodesError>`
- **Wire**: `GET /me/episodes`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PagingSavedEpisodeObject`
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Episodes.GetUsersSavedEpisodesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Episodes.GetUsersSavedEpisodesRequest` (3):

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

### removeEpisodesUser

- **Signature**: `removeEpisodesUser(request: Episodes.RemoveEpisodesUserRequest, options?: RequestOptions): ApiPromise<undefined, Episodes.RemoveEpisodesUserError>`
- **Wire**: `DELETE /me/episodes`
- **Auth**: `oauth20`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Episodes.RemoveEpisodesUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Episodes.RemoveEpisodesUserRequest` (2):

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

### saveEpisodesUser

- **Signature**: `saveEpisodesUser(request: Episodes.SaveEpisodesUserRequest, options?: RequestOptions): ApiPromise<undefined, Episodes.SaveEpisodesUserError>`
- **Wire**: `PUT /me/episodes`
- **Auth**: `oauth20`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Episodes.SaveEpisodesUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Episodes.SaveEpisodesUserRequest` (2):

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

