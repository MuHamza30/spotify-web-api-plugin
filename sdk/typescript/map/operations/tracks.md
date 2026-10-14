<!-- Generated file — do not edit; regenerated with the SDK. -->

# Tracks — operations

Accessor: `client.tracks` · Source: `src/resources/tracks.ts` · 17 operations · Request and error types: namespace `Tracks`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `spotify-web-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### addTracksToPlaylist

- **Signature**: `addTracksToPlaylist(request: Tracks.AddTracksToPlaylistRequest, options?: RequestOptions): ApiPromise<PlaylistSnapshotId, Tracks.AddTracksToPlaylistError>`
- **Wire**: `POST /playlists/{playlist_id}/tracks`
- **Auth**: `oauth20`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PlaylistSnapshotId`
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Tracks.AddTracksToPlaylistError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tracks.AddTracksToPlaylistRequest` (4):

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

### checkUsersSavedTracks

- **Signature**: `checkUsersSavedTracks(request: Tracks.CheckUsersSavedTracksRequest, options?: RequestOptions): ApiPromise<boolean[], Tracks.CheckUsersSavedTracksError>`
- **Wire**: `GET /me/tracks/contains`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `boolean[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Tracks.CheckUsersSavedTracksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tracks.CheckUsersSavedTracksRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ids` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

### getAnAlbumsTracks

- **Signature**: `getAnAlbumsTracks(request: Tracks.GetAnAlbumsTracksRequest, options?: RequestOptions): ApiPromise<PagingSimplifiedTrackObject, Tracks.GetAnAlbumsTracksError>`
- **Wire**: `GET /albums/{id}/tracks`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PagingSimplifiedTrackObject`
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Tracks.GetAnAlbumsTracksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tracks.GetAnAlbumsTracksRequest` (4):

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

### getAnArtistsTopTracks

- **Signature**: `getAnArtistsTopTracks(request: Tracks.GetAnArtistsTopTracksRequest, options?: RequestOptions): ApiPromise<ManyTracks, Tracks.GetAnArtistsTopTracksError>`
- **Wire**: `GET /artists/{id}/top-tracks`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ManyTracks`
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Tracks.GetAnArtistsTopTracksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tracks.GetAnArtistsTopTracksRequest` (2):

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

### getAudioAnalysis

- **Signature**: `getAudioAnalysis(request: Tracks.GetAudioAnalysisRequest, options?: RequestOptions): ApiPromise<AudioAnalysisObject, Tracks.GetAudioAnalysisError>`
- **Wire**: `GET /audio-analysis/{id}`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AudioAnalysisObject`
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Tracks.GetAudioAnalysisError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tracks.GetAudioAnalysisRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AudioAnalysisObject` | `audioAnalysisObjectSchema` | `src/models/audio-analysis-object.ts` |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

### getAudioFeatures

- **Signature**: `getAudioFeatures(request: Tracks.GetAudioFeaturesRequest, options?: RequestOptions): ApiPromise<AudioFeaturesObject, Tracks.GetAudioFeaturesError>`
- **Wire**: `GET /audio-features/{id}`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AudioFeaturesObject`
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Tracks.GetAudioFeaturesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tracks.GetAudioFeaturesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AudioFeaturesObject` | `audioFeaturesObjectSchema` | `src/models/audio-features-object.ts` |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

### getPlaylistsTracks

- **Signature**: `getPlaylistsTracks(request: Tracks.GetPlaylistsTracksRequest, options?: RequestOptions): ApiPromise<PagingPlaylistTrackObject, Tracks.GetPlaylistsTracksError>`
- **Wire**: `GET /playlists/{playlist_id}/tracks`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PagingPlaylistTrackObject`
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Tracks.GetPlaylistsTracksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tracks.GetPlaylistsTracksRequest` (6):

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

### getRecommendations

- **Signature**: `getRecommendations(request: Tracks.GetRecommendationsRequest, options?: RequestOptions): ApiPromise<RecommendationsObject, Tracks.GetRecommendationsError>`
- **Wire**: `GET /recommendations`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RecommendationsObject`
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Tracks.GetRecommendationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tracks.GetRecommendationsRequest` (47):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `limit` | `query` | — | `number` | no | `20` |
| `market` | `query` | — | `string` | no | — |
| `seedArtists` | `query` | `seed_artists` | `string` | no | — |
| `seedGenres` | `query` | `seed_genres` | `string` | no | — |
| `seedTracks` | `query` | `seed_tracks` | `string` | no | — |
| `minAcousticness` | `query` | `min_acousticness` | `number` | no | — |
| `maxAcousticness` | `query` | `max_acousticness` | `number` | no | — |
| `targetAcousticness` | `query` | `target_acousticness` | `number` | no | — |
| `minDanceability` | `query` | `min_danceability` | `number` | no | — |
| `maxDanceability` | `query` | `max_danceability` | `number` | no | — |
| `targetDanceability` | `query` | `target_danceability` | `number` | no | — |
| `minDurationMs` | `query` | `min_duration_ms` | `number` | no | — |
| `maxDurationMs` | `query` | `max_duration_ms` | `number` | no | — |
| `targetDurationMs` | `query` | `target_duration_ms` | `number` | no | — |
| `minEnergy` | `query` | `min_energy` | `number` | no | — |
| `maxEnergy` | `query` | `max_energy` | `number` | no | — |
| `targetEnergy` | `query` | `target_energy` | `number` | no | — |
| `minInstrumentalness` | `query` | `min_instrumentalness` | `number` | no | — |
| `maxInstrumentalness` | `query` | `max_instrumentalness` | `number` | no | — |
| `targetInstrumentalness` | `query` | `target_instrumentalness` | `number` | no | — |
| `minKey` | `query` | `min_key` | `number` | no | — |
| `maxKey` | `query` | `max_key` | `number` | no | — |
| `targetKey` | `query` | `target_key` | `number` | no | — |
| `minLiveness` | `query` | `min_liveness` | `number` | no | — |
| `maxLiveness` | `query` | `max_liveness` | `number` | no | — |
| `targetLiveness` | `query` | `target_liveness` | `number` | no | — |
| `minLoudness` | `query` | `min_loudness` | `number` | no | — |
| `maxLoudness` | `query` | `max_loudness` | `number` | no | — |
| `targetLoudness` | `query` | `target_loudness` | `number` | no | — |
| `minMode` | `query` | `min_mode` | `number` | no | — |
| `maxMode` | `query` | `max_mode` | `number` | no | — |
| `targetMode` | `query` | `target_mode` | `number` | no | — |
| `minPopularity` | `query` | `min_popularity` | `number` | no | — |
| `maxPopularity` | `query` | `max_popularity` | `number` | no | — |
| `targetPopularity` | `query` | `target_popularity` | `number` | no | — |
| `minSpeechiness` | `query` | `min_speechiness` | `number` | no | — |
| `maxSpeechiness` | `query` | `max_speechiness` | `number` | no | — |
| `targetSpeechiness` | `query` | `target_speechiness` | `number` | no | — |
| `minTempo` | `query` | `min_tempo` | `number` | no | — |
| `maxTempo` | `query` | `max_tempo` | `number` | no | — |
| `targetTempo` | `query` | `target_tempo` | `number` | no | — |
| `minTimeSignature` | `query` | `min_time_signature` | `number` | no | — |
| `maxTimeSignature` | `query` | `max_time_signature` | `number` | no | — |
| `targetTimeSignature` | `query` | `target_time_signature` | `number` | no | — |
| `minValence` | `query` | `min_valence` | `number` | no | — |
| `maxValence` | `query` | `max_valence` | `number` | no | — |
| `targetValence` | `query` | `target_valence` | `number` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `RecommendationsObject` | `recommendationsObjectSchema` | `src/models/recommendations-object.ts` |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

### getSeveralAudioFeatures

- **Signature**: `getSeveralAudioFeatures(request: Tracks.GetSeveralAudioFeaturesRequest, options?: RequestOptions): ApiPromise<ManyAudioFeatures, Tracks.GetSeveralAudioFeaturesError>`
- **Wire**: `GET /audio-features`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ManyAudioFeatures`
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Tracks.GetSeveralAudioFeaturesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tracks.GetSeveralAudioFeaturesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ids` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ManyAudioFeatures` | `manyAudioFeaturesSchema` | `src/models/many-audio-features.ts` |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

### getSeveralTracks

- **Signature**: `getSeveralTracks(request: Tracks.GetSeveralTracksRequest, options?: RequestOptions): ApiPromise<ManyTracks, Tracks.GetSeveralTracksError>`
- **Wire**: `GET /tracks`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ManyTracks`
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Tracks.GetSeveralTracksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tracks.GetSeveralTracksRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ids` | `query` | `string` | yes |
| `market` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ManyTracks` | `manyTracksSchema` | `src/models/many-tracks.ts` |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

### getTrack

- **Signature**: `getTrack(request: Tracks.GetTrackRequest, options?: RequestOptions): ApiPromise<TrackObject, Tracks.GetTrackError>`
- **Wire**: `GET /tracks/{id}`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TrackObject`
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Tracks.GetTrackError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tracks.GetTrackRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `market` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TrackObject` | `trackObjectSchema` | `src/models/track-object.ts` |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

### getUsersSavedTracks

- **Signature**: `getUsersSavedTracks(request: Tracks.GetUsersSavedTracksRequest, options?: RequestOptions): ApiPromise<PagingSavedTrackObject, Tracks.GetUsersSavedTracksError>`
- **Wire**: `GET /me/tracks`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PagingSavedTrackObject`
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Tracks.GetUsersSavedTracksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tracks.GetUsersSavedTracksRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `market` | `query` | `string` | no | — |
| `limit` | `query` | `number` | no | `20` |
| `offset` | `query` | `number` | no | `0` |

| Type | Schema value | Source |
| --- | --- | --- |
| `PagingSavedTrackObject` | `pagingSavedTrackObjectSchema` | `src/models/paging-saved-track-object.ts` |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

### getUsersTopTracks

- **Signature**: `getUsersTopTracks(request: Tracks.GetUsersTopTracksRequest, options?: RequestOptions): ApiPromise<PagingTrackObject, Tracks.GetUsersTopTracksError>`
- **Wire**: `GET /me/top/tracks`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PagingTrackObject`
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Tracks.GetUsersTopTracksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tracks.GetUsersTopTracksRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `timeRange` | `query` | `time_range` | `string` | no | `"medium_term"` |
| `limit` | `query` | — | `number` | no | `20` |
| `offset` | `query` | — | `number` | no | `0` |

| Type | Schema value | Source |
| --- | --- | --- |
| `PagingTrackObject` | `pagingTrackObjectSchema` | `src/models/paging-track-object.ts` |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

### removeTracksPlaylist

- **Signature**: `removeTracksPlaylist(request: Tracks.RemoveTracksPlaylistRequest, options?: RequestOptions): ApiPromise<PlaylistSnapshotId, Tracks.RemoveTracksPlaylistError>`
- **Wire**: `DELETE /playlists/{playlist_id}/tracks`
- **Auth**: `oauth20`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PlaylistSnapshotId`
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Tracks.RemoveTracksPlaylistError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tracks.RemoveTracksPlaylistRequest` (2):

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

### removeTracksUser

- **Signature**: `removeTracksUser(request: Tracks.RemoveTracksUserRequest, options?: RequestOptions): ApiPromise<undefined, Tracks.RemoveTracksUserError>`
- **Wire**: `DELETE /me/tracks`
- **Auth**: `oauth20`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Tracks.RemoveTracksUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tracks.RemoveTracksUserRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ids` | `query` | `string` | yes |
| `body` | `body` | `RemoveTracksRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `RemoveTracksRequest` | `removeTracksRequestSchema` | `src/models/remove-tracks-request.ts` |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

### reorderOrReplacePlaylistsTracks

- **Signature**: `reorderOrReplacePlaylistsTracks(request: Tracks.ReorderOrReplacePlaylistsTracksRequest, options?: RequestOptions): ApiPromise<PlaylistSnapshotId, Tracks.ReorderOrReplacePlaylistsTracksError>`
- **Wire**: `PUT /playlists/{playlist_id}/tracks`
- **Auth**: `oauth20`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PlaylistSnapshotId`
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Tracks.ReorderOrReplacePlaylistsTracksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tracks.ReorderOrReplacePlaylistsTracksRequest` (3):

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

### saveTracksUser

- **Signature**: `saveTracksUser(request: Tracks.SaveTracksUserRequest, options?: RequestOptions): ApiPromise<undefined, Tracks.SaveTracksUserError>`
- **Wire**: `PUT /me/tracks`
- **Auth**: `oauth20`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Tracks.SaveTracksUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tracks.SaveTracksUserRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ids` | `query` | `string` | yes |
| `body` | `body` | `SaveTracksRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SaveTracksRequest` | `saveTracksRequestSchema` | `src/models/save-tracks-request.ts` |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

