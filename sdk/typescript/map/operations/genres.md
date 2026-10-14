<!-- Generated file — do not edit; regenerated with the SDK. -->

# Genres — operations

Accessor: `client.genres` · Source: `src/resources/genres.ts` · 1 operation · Request and error types: namespace `Genres`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `spotify-web-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getRecommendationGenres

- **Signature**: `getRecommendationGenres(options?: RequestOptions): ApiPromise<ManyGenres, Genres.GetRecommendationGenresError>`
- **Wire**: `GET /recommendations/available-genre-seeds`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ManyGenres`
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Genres.GetRecommendationGenresError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `ManyGenres` | `manyGenresSchema` | `src/models/many-genres.ts` |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

