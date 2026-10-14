<!-- Generated file — do not edit; regenerated with the SDK. -->

# Player — operations

Accessor: `client.player` · Source: `src/resources/player.ts` · 15 operations · Request and error types: namespace `Player`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `spotify-web-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### addToQueue

- **Signature**: `addToQueue(request: Player.AddToQueueRequest, options?: RequestOptions): ApiPromise<undefined, Player.AddToQueueError>`
- **Wire**: `POST /me/player/queue`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Player.AddToQueueError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Player.AddToQueueRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `uri` | `query` | — | `string` | yes |
| `deviceId` | `query` | `device_id` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

### getAUsersAvailableDevices

- **Signature**: `getAUsersAvailableDevices(options?: RequestOptions): ApiPromise<ManyDevices, Player.GetAUsersAvailableDevicesError>`
- **Wire**: `GET /me/player/devices`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ManyDevices`
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Player.GetAUsersAvailableDevicesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `ManyDevices` | `manyDevicesSchema` | `src/models/many-devices.ts` |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

### getInformationAboutTheUsersCurrentPlayback

- **Signature**: `getInformationAboutTheUsersCurrentPlayback(request: Player.GetInformationAboutTheUsersCurrentPlaybackRequest, options?: RequestOptions): ApiPromise<CurrentlyPlayingContextObject, Player.GetInformationAboutTheUsersCurrentPlaybackError>`
- **Wire**: `GET /me/player`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CurrentlyPlayingContextObject`
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Player.GetInformationAboutTheUsersCurrentPlaybackError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Player.GetInformationAboutTheUsersCurrentPlaybackRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `market` | `query` | — | `string` | no |
| `additionalTypes` | `query` | `additional_types` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CurrentlyPlayingContextObject` | `currentlyPlayingContextObjectSchema` | `src/models/currently-playing-context-object.ts` |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

### getQueue

- **Signature**: `getQueue(options?: RequestOptions): ApiPromise<QueueObject, Player.GetQueueError>`
- **Wire**: `GET /me/player/queue`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `QueueObject`
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Player.GetQueueError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `QueueObject` | `queueObjectSchema` | `src/models/queue-object.ts` |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

### getRecentlyPlayed

- **Signature**: `getRecentlyPlayed(request: Player.GetRecentlyPlayedRequest, options?: RequestOptions): ApiPromise<CursorPagingPlayHistoryObject, Player.GetRecentlyPlayedError>`
- **Wire**: `GET /me/player/recently-played`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CursorPagingPlayHistoryObject`
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Player.GetRecentlyPlayedError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Player.GetRecentlyPlayedRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `limit` | `query` | `number` | no | `20` |
| `after` | `query` | `number` | no | — |
| `before` | `query` | `number` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `CursorPagingPlayHistoryObject` | `cursorPagingPlayHistoryObjectSchema` | `src/models/cursor-paging-play-history-object.ts` |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

### getTheUsersCurrentlyPlayingTrack

- **Signature**: `getTheUsersCurrentlyPlayingTrack(request: Player.GetTheUsersCurrentlyPlayingTrackRequest, options?: RequestOptions): ApiPromise<CurrentlyPlayingObject, Player.GetTheUsersCurrentlyPlayingTrackError>`
- **Wire**: `GET /me/player/currently-playing`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CurrentlyPlayingObject`
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Player.GetTheUsersCurrentlyPlayingTrackError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Player.GetTheUsersCurrentlyPlayingTrackRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `market` | `query` | — | `string` | no |
| `additionalTypes` | `query` | `additional_types` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CurrentlyPlayingObject` | `currentlyPlayingObjectSchema` | `src/models/currently-playing-object.ts` |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

### pauseAUsersPlayback

- **Signature**: `pauseAUsersPlayback(request: Player.PauseAUsersPlaybackRequest, options?: RequestOptions): ApiPromise<undefined, Player.PauseAUsersPlaybackError>`
- **Wire**: `PUT /me/player/pause`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Player.PauseAUsersPlaybackError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Player.PauseAUsersPlaybackRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `deviceId` | `query` | `device_id` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

### seekToPositionInCurrentlyPlayingTrack

- **Signature**: `seekToPositionInCurrentlyPlayingTrack(request: Player.SeekToPositionInCurrentlyPlayingTrackRequest, options?: RequestOptions): ApiPromise<undefined, Player.SeekToPositionInCurrentlyPlayingTrackError>`
- **Wire**: `PUT /me/player/seek`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Player.SeekToPositionInCurrentlyPlayingTrackError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Player.SeekToPositionInCurrentlyPlayingTrackRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `positionMs` | `query` | `position_ms` | `number` | yes |
| `deviceId` | `query` | `device_id` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

### setRepeatModeOnUsersPlayback

- **Signature**: `setRepeatModeOnUsersPlayback(request: Player.SetRepeatModeOnUsersPlaybackRequest, options?: RequestOptions): ApiPromise<undefined, Player.SetRepeatModeOnUsersPlaybackError>`
- **Wire**: `PUT /me/player/repeat`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Player.SetRepeatModeOnUsersPlaybackError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Player.SetRepeatModeOnUsersPlaybackRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `state` | `query` | — | `string` | yes |
| `deviceId` | `query` | `device_id` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

### setVolumeForUsersPlayback

- **Signature**: `setVolumeForUsersPlayback(request: Player.SetVolumeForUsersPlaybackRequest, options?: RequestOptions): ApiPromise<undefined, Player.SetVolumeForUsersPlaybackError>`
- **Wire**: `PUT /me/player/volume`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Player.SetVolumeForUsersPlaybackError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Player.SetVolumeForUsersPlaybackRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `volumePercent` | `query` | `volume_percent` | `number` | yes |
| `deviceId` | `query` | `device_id` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

### skipUsersPlaybackToNextTrack

- **Signature**: `skipUsersPlaybackToNextTrack(request: Player.SkipUsersPlaybackToNextTrackRequest, options?: RequestOptions): ApiPromise<undefined, Player.SkipUsersPlaybackToNextTrackError>`
- **Wire**: `POST /me/player/next`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Player.SkipUsersPlaybackToNextTrackError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Player.SkipUsersPlaybackToNextTrackRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `deviceId` | `query` | `device_id` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

### skipUsersPlaybackToPreviousTrack

- **Signature**: `skipUsersPlaybackToPreviousTrack(request: Player.SkipUsersPlaybackToPreviousTrackRequest, options?: RequestOptions): ApiPromise<undefined, Player.SkipUsersPlaybackToPreviousTrackError>`
- **Wire**: `POST /me/player/previous`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Player.SkipUsersPlaybackToPreviousTrackError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Player.SkipUsersPlaybackToPreviousTrackRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `deviceId` | `query` | `device_id` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

### startAUsersPlayback

- **Signature**: `startAUsersPlayback(request: Player.StartAUsersPlaybackRequest, options?: RequestOptions): ApiPromise<undefined, Player.StartAUsersPlaybackError>`
- **Wire**: `PUT /me/player/play`
- **Auth**: `oauth20`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Player.StartAUsersPlaybackError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Player.StartAUsersPlaybackRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `deviceId` | `query` | `device_id` | `string` | no |
| `body` | `body` | — | `StartOrResumePlaybackRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `StartOrResumePlaybackRequest` | `startOrResumePlaybackRequestSchema` | `src/models/start-or-resume-playback-request.ts` |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

### toggleShuffleForUsersPlayback

- **Signature**: `toggleShuffleForUsersPlayback(request: Player.ToggleShuffleForUsersPlaybackRequest, options?: RequestOptions): ApiPromise<undefined, Player.ToggleShuffleForUsersPlaybackError>`
- **Wire**: `PUT /me/player/shuffle`
- **Auth**: `oauth20`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Player.ToggleShuffleForUsersPlaybackError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Player.ToggleShuffleForUsersPlaybackRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `state` | `query` | — | `boolean` | yes |
| `deviceId` | `query` | `device_id` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

### transferAUsersPlayback

- **Signature**: `transferAUsersPlayback(request: Player.TransferAUsersPlaybackRequest, options?: RequestOptions): ApiPromise<undefined, Player.TransferAUsersPlaybackError>`
- **Wire**: `PUT /me/player`
- **Auth**: `oauth20`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `SpotifyWebApiError` with `kind: "api"`, an instance of `Player.TransferAUsersPlaybackError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Player.TransferAUsersPlaybackRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `MePlayerRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `MePlayerRequest` | `mePlayerRequestSchema` | `src/models/me-player-request.ts` |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |

