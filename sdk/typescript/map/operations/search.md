<!-- Generated file — do not edit; regenerated with the SDK. -->

# Search — operations

Accessor: `client.search` · Source: `src/resources/search.ts` · 1 operation · Request and error types: namespace `Search`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `spotify-web-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### search

- **Signature**: `search(request: Search.SearchRequest, options?: RequestOptions): ApiPromise<SearchItems, Search.SearchError>`
- **Wire**: `GET /search`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SearchItems`
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Search.SearchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Search.SearchRequest` (6):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `q` | `query` | — | `string` | yes | — |
| `type` | `query` | — | `ItemType[]` | yes | — |
| `market` | `query` | — | `string` | no | — |
| `limit` | `query` | — | `number` | no | `20` |
| `offset` | `query` | — | `number` | no | `0` |
| `includeExternal` | `query` | `include_external` | `IncludeExternal` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ItemType` | `itemTypeSchema` | `src/models/item-type.ts` |
| `IncludeExternal` | `includeExternalSchema` | `src/models/include-external.ts` |
| `SearchItems` | `searchItemsSchema` | `src/models/search-items.ts` |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

