<!-- Generated file — do not edit; regenerated with the SDK. -->

# CategoriesApi — operations

Accessor: `client.categoriesApi` · Source: `src/resources/categories-api.ts` · 3 operations · Request and error types: namespace `CategoriesApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `spotify-web-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getACategoriesPlaylists

- **Signature**: `getACategoriesPlaylists(request: CategoriesApi.GetACategoriesPlaylistsRequest, options?: RequestOptions): ApiPromise<PagingFeaturedPlaylistObject, CategoriesApi.GetACategoriesPlaylistsError>`
- **Wire**: `GET /browse/categories/{category_id}/playlists`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PagingFeaturedPlaylistObject`
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `CategoriesApi.GetACategoriesPlaylistsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CategoriesApi.GetACategoriesPlaylistsRequest` (3):

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

### getACategory

- **Signature**: `getACategory(request: CategoriesApi.GetACategoryRequest, options?: RequestOptions): ApiPromise<CategoryObject, CategoriesApi.GetACategoryError>`
- **Wire**: `GET /browse/categories/{category_id}`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CategoryObject`
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `CategoriesApi.GetACategoryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CategoriesApi.GetACategoryRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `categoryId` | `path` | `category_id` | `string` | yes |
| `locale` | `query` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CategoryObject` | `categoryObjectSchema` | `src/models/category-object.ts` |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

### getCategories

- **Signature**: `getCategories(request: CategoriesApi.GetCategoriesRequest, options?: RequestOptions): ApiPromise<PagedCategories, CategoriesApi.GetCategoriesError>`
- **Wire**: `GET /browse/categories`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PagedCategories`
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `CategoriesApi.GetCategoriesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CategoriesApi.GetCategoriesRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `locale` | `query` | `string` | no | — |
| `limit` | `query` | `number` | no | `20` |
| `offset` | `query` | `number` | no | `0` |

| Type | Schema value | Source |
| --- | --- | --- |
| `PagedCategories` | `pagedCategoriesSchema` | `src/models/paged-categories.ts` |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

