<!-- Generated file — do not edit; regenerated with the SDK. -->

# Chapters — operations

Accessor: `client.chapters` · Source: `src/resources/chapters.ts` · 3 operations · Request and error types: namespace `Chapters`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `spotify-web-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getAChapter

- **Signature**: `getAChapter(request: Chapters.GetAChapterRequest, options?: RequestOptions): ApiPromise<ChapterObject, Chapters.GetAChapterError>`
- **Wire**: `GET /chapters/{id}`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ChapterObject`
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Chapters.GetAChapterError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Chapters.GetAChapterRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `market` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ChapterObject` | `chapterObjectSchema` | `src/models/chapter-object.ts` |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

### getAudiobookChapters

- **Signature**: `getAudiobookChapters(request: Chapters.GetAudiobookChaptersRequest, options?: RequestOptions): ApiPromise<PagingSimplifiedChapterObject, Chapters.GetAudiobookChaptersError>`
- **Wire**: `GET /audiobooks/{id}/chapters`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PagingSimplifiedChapterObject`
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Chapters.GetAudiobookChaptersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Chapters.GetAudiobookChaptersRequest` (4):

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

### getSeveralChapters

- **Signature**: `getSeveralChapters(request: Chapters.GetSeveralChaptersRequest, options?: RequestOptions): ApiPromise<ManyChapters, Chapters.GetSeveralChaptersError>`
- **Wire**: `GET /chapters`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ManyChapters`
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Chapters.GetSeveralChaptersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Chapters.GetSeveralChaptersRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ids` | `query` | `string` | yes |
| `market` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ManyChapters` | `manyChaptersSchema` | `src/models/many-chapters.ts` |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

