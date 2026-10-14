<!-- Generated file — do not edit; regenerated with the SDK. -->

# Player — operations

Accessor: `client.Player` · Source: `src/SpotifyWebApi/Api/Player.cs` · 15 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### AddToQueue

- **Auth**: `options.Oauth20`
- **Signature**: `AddToQueue(AddToQueueRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Uri`
- **Query params (wire ← C#)**: `uri` ← `Uri`, `device_id` ← `DeviceId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<AddToQueueError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `AddToQueueRequest` | `src/SpotifyWebApi/Requests/Player/AddToQueueRequest.cs` |
| `AddToQueueError` | `src/SpotifyWebApi/Errors/AddToQueueError.cs` |
| `Unauthorized1` | `src/SpotifyWebApi/Models/Unauthorized1.cs` |
| `Forbidden1` | `src/SpotifyWebApi/Models/Forbidden1.cs` |
| `TooManyRequests1` | `src/SpotifyWebApi/Models/TooManyRequests1.cs` |

### GetAUsersAvailableDevices

- **Auth**: `options.Oauth20`
- **Signature**: `GetAUsersAvailableDevices(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ManyDevices`
- **Error**: `ApiException<GetAUsersAvailableDevicesError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `ManyDevices` | `src/SpotifyWebApi/Models/ManyDevices.cs` |
| `GetAUsersAvailableDevicesError` | `src/SpotifyWebApi/Errors/GetAUsersAvailableDevicesError.cs` |
| `Unauthorized1` | `src/SpotifyWebApi/Models/Unauthorized1.cs` |
| `Forbidden1` | `src/SpotifyWebApi/Models/Forbidden1.cs` |
| `TooManyRequests1` | `src/SpotifyWebApi/Models/TooManyRequests1.cs` |

### GetInformationAboutTheUsersCurrentPlayback

- **Auth**: `options.Oauth20`
- **Signature**: `GetInformationAboutTheUsersCurrentPlayback(GetInformationAboutTheUsersCurrentPlaybackRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `market` ← `Market`, `additional_types` ← `AdditionalTypes`
- **Returns**: `CurrentlyPlayingContextObject`
- **Error**: `ApiException<GetInformationAboutTheUsersCurrentPlaybackError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `GetInformationAboutTheUsersCurrentPlaybackRequest` | `src/SpotifyWebApi/Requests/Player/GetInformationAboutTheUsersCurrentPlaybackRequest.cs` |
| `CurrentlyPlayingContextObject` | `src/SpotifyWebApi/Models/CurrentlyPlayingContextObject.cs` |
| `GetInformationAboutTheUsersCurrentPlaybackError` | `src/SpotifyWebApi/Errors/GetInformationAboutTheUsersCurrentPlaybackError.cs` |
| `Unauthorized1` | `src/SpotifyWebApi/Models/Unauthorized1.cs` |
| `Forbidden1` | `src/SpotifyWebApi/Models/Forbidden1.cs` |
| `TooManyRequests1` | `src/SpotifyWebApi/Models/TooManyRequests1.cs` |

### GetQueue

- **Auth**: `options.Oauth20`
- **Signature**: `GetQueue(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `QueueObject`
- **Error**: `ApiException<GetQueueError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `QueueObject` | `src/SpotifyWebApi/Models/QueueObject.cs` |
| `GetQueueError` | `src/SpotifyWebApi/Errors/GetQueueError.cs` |
| `Unauthorized1` | `src/SpotifyWebApi/Models/Unauthorized1.cs` |
| `Forbidden1` | `src/SpotifyWebApi/Models/Forbidden1.cs` |
| `TooManyRequests1` | `src/SpotifyWebApi/Models/TooManyRequests1.cs` |

### GetRecentlyPlayed

- **Auth**: `options.Oauth20`
- **Signature**: `GetRecentlyPlayed(GetRecentlyPlayedRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `after` ← `After`, `before` ← `Before`
- **Returns**: `CursorPagingPlayHistoryObject`
- **Error**: `ApiException<GetRecentlyPlayedError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `GetRecentlyPlayedRequest` | `src/SpotifyWebApi/Requests/Player/GetRecentlyPlayedRequest.cs` |
| `CursorPagingPlayHistoryObject` | `src/SpotifyWebApi/Models/CursorPagingPlayHistoryObject.cs` |
| `GetRecentlyPlayedError` | `src/SpotifyWebApi/Errors/GetRecentlyPlayedError.cs` |
| `Unauthorized1` | `src/SpotifyWebApi/Models/Unauthorized1.cs` |
| `Forbidden1` | `src/SpotifyWebApi/Models/Forbidden1.cs` |
| `TooManyRequests1` | `src/SpotifyWebApi/Models/TooManyRequests1.cs` |

### GetTheUsersCurrentlyPlayingTrack

- **Auth**: `options.Oauth20`
- **Signature**: `GetTheUsersCurrentlyPlayingTrack(GetTheUsersCurrentlyPlayingTrackRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `market` ← `Market`, `additional_types` ← `AdditionalTypes`
- **Returns**: `CurrentlyPlayingObject`
- **Error**: `ApiException<GetTheUsersCurrentlyPlayingTrackError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `GetTheUsersCurrentlyPlayingTrackRequest` | `src/SpotifyWebApi/Requests/Player/GetTheUsersCurrentlyPlayingTrackRequest.cs` |
| `CurrentlyPlayingObject` | `src/SpotifyWebApi/Models/CurrentlyPlayingObject.cs` |
| `GetTheUsersCurrentlyPlayingTrackError` | `src/SpotifyWebApi/Errors/GetTheUsersCurrentlyPlayingTrackError.cs` |
| `Unauthorized1` | `src/SpotifyWebApi/Models/Unauthorized1.cs` |
| `Forbidden1` | `src/SpotifyWebApi/Models/Forbidden1.cs` |
| `TooManyRequests1` | `src/SpotifyWebApi/Models/TooManyRequests1.cs` |

### PauseAUsersPlayback

- **Auth**: `options.Oauth20`
- **Signature**: `PauseAUsersPlayback(PauseAUsersPlaybackRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `device_id` ← `DeviceId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<PauseAUsersPlaybackError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `PauseAUsersPlaybackRequest` | `src/SpotifyWebApi/Requests/Player/PauseAUsersPlaybackRequest.cs` |
| `PauseAUsersPlaybackError` | `src/SpotifyWebApi/Errors/PauseAUsersPlaybackError.cs` |
| `Unauthorized1` | `src/SpotifyWebApi/Models/Unauthorized1.cs` |
| `Forbidden1` | `src/SpotifyWebApi/Models/Forbidden1.cs` |
| `TooManyRequests1` | `src/SpotifyWebApi/Models/TooManyRequests1.cs` |

### SeekToPositionInCurrentlyPlayingTrack

- **Auth**: `options.Oauth20`
- **Signature**: `SeekToPositionInCurrentlyPlayingTrack(SeekToPositionInCurrentlyPlayingTrackRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PositionMs`
- **Query params (wire ← C#)**: `position_ms` ← `PositionMs`, `device_id` ← `DeviceId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<SeekToPositionInCurrentlyPlayingTrackError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `SeekToPositionInCurrentlyPlayingTrackRequest` | `src/SpotifyWebApi/Requests/Player/SeekToPositionInCurrentlyPlayingTrackRequest.cs` |
| `SeekToPositionInCurrentlyPlayingTrackError` | `src/SpotifyWebApi/Errors/SeekToPositionInCurrentlyPlayingTrackError.cs` |
| `Unauthorized1` | `src/SpotifyWebApi/Models/Unauthorized1.cs` |
| `Forbidden1` | `src/SpotifyWebApi/Models/Forbidden1.cs` |
| `TooManyRequests1` | `src/SpotifyWebApi/Models/TooManyRequests1.cs` |

### SetRepeatModeOnUsersPlayback

- **Auth**: `options.Oauth20`
- **Signature**: `SetRepeatModeOnUsersPlayback(SetRepeatModeOnUsersPlaybackRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `State`
- **Query params (wire ← C#)**: `state` ← `State`, `device_id` ← `DeviceId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<SetRepeatModeOnUsersPlaybackError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `SetRepeatModeOnUsersPlaybackRequest` | `src/SpotifyWebApi/Requests/Player/SetRepeatModeOnUsersPlaybackRequest.cs` |
| `SetRepeatModeOnUsersPlaybackError` | `src/SpotifyWebApi/Errors/SetRepeatModeOnUsersPlaybackError.cs` |
| `Unauthorized1` | `src/SpotifyWebApi/Models/Unauthorized1.cs` |
| `Forbidden1` | `src/SpotifyWebApi/Models/Forbidden1.cs` |
| `TooManyRequests1` | `src/SpotifyWebApi/Models/TooManyRequests1.cs` |

### SetVolumeForUsersPlayback

- **Auth**: `options.Oauth20`
- **Signature**: `SetVolumeForUsersPlayback(SetVolumeForUsersPlaybackRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `VolumePercent`
- **Query params (wire ← C#)**: `volume_percent` ← `VolumePercent`, `device_id` ← `DeviceId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<SetVolumeForUsersPlaybackError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `SetVolumeForUsersPlaybackRequest` | `src/SpotifyWebApi/Requests/Player/SetVolumeForUsersPlaybackRequest.cs` |
| `SetVolumeForUsersPlaybackError` | `src/SpotifyWebApi/Errors/SetVolumeForUsersPlaybackError.cs` |
| `Unauthorized1` | `src/SpotifyWebApi/Models/Unauthorized1.cs` |
| `Forbidden1` | `src/SpotifyWebApi/Models/Forbidden1.cs` |
| `TooManyRequests1` | `src/SpotifyWebApi/Models/TooManyRequests1.cs` |

### SkipUsersPlaybackToNextTrack

- **Auth**: `options.Oauth20`
- **Signature**: `SkipUsersPlaybackToNextTrack(SkipUsersPlaybackToNextTrackRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `device_id` ← `DeviceId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<SkipUsersPlaybackToNextTrackError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `SkipUsersPlaybackToNextTrackRequest` | `src/SpotifyWebApi/Requests/Player/SkipUsersPlaybackToNextTrackRequest.cs` |
| `SkipUsersPlaybackToNextTrackError` | `src/SpotifyWebApi/Errors/SkipUsersPlaybackToNextTrackError.cs` |
| `Unauthorized1` | `src/SpotifyWebApi/Models/Unauthorized1.cs` |
| `Forbidden1` | `src/SpotifyWebApi/Models/Forbidden1.cs` |
| `TooManyRequests1` | `src/SpotifyWebApi/Models/TooManyRequests1.cs` |

### SkipUsersPlaybackToPreviousTrack

- **Auth**: `options.Oauth20`
- **Signature**: `SkipUsersPlaybackToPreviousTrack(SkipUsersPlaybackToPreviousTrackRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `device_id` ← `DeviceId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<SkipUsersPlaybackToPreviousTrackError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `SkipUsersPlaybackToPreviousTrackRequest` | `src/SpotifyWebApi/Requests/Player/SkipUsersPlaybackToPreviousTrackRequest.cs` |
| `SkipUsersPlaybackToPreviousTrackError` | `src/SpotifyWebApi/Errors/SkipUsersPlaybackToPreviousTrackError.cs` |
| `Unauthorized1` | `src/SpotifyWebApi/Models/Unauthorized1.cs` |
| `Forbidden1` | `src/SpotifyWebApi/Models/Forbidden1.cs` |
| `TooManyRequests1` | `src/SpotifyWebApi/Models/TooManyRequests1.cs` |

### StartAUsersPlayback

- **Auth**: `options.Oauth20`
- **Signature**: `StartAUsersPlayback(StartAUsersPlaybackRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `device_id` ← `DeviceId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<StartAUsersPlaybackError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `StartAUsersPlaybackRequest` | `src/SpotifyWebApi/Requests/Player/StartAUsersPlaybackRequest.cs` |
| `StartOrResumePlaybackRequest` | `src/SpotifyWebApi/Models/StartOrResumePlaybackRequest.cs` |
| `StartAUsersPlaybackError` | `src/SpotifyWebApi/Errors/StartAUsersPlaybackError.cs` |
| `Unauthorized1` | `src/SpotifyWebApi/Models/Unauthorized1.cs` |
| `Forbidden1` | `src/SpotifyWebApi/Models/Forbidden1.cs` |
| `TooManyRequests1` | `src/SpotifyWebApi/Models/TooManyRequests1.cs` |

### ToggleShuffleForUsersPlayback

- **Auth**: `options.Oauth20`
- **Signature**: `ToggleShuffleForUsersPlayback(ToggleShuffleForUsersPlaybackRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `State`
- **Query params (wire ← C#)**: `state` ← `State`, `device_id` ← `DeviceId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ToggleShuffleForUsersPlaybackError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `ToggleShuffleForUsersPlaybackRequest` | `src/SpotifyWebApi/Requests/Player/ToggleShuffleForUsersPlaybackRequest.cs` |
| `ToggleShuffleForUsersPlaybackError` | `src/SpotifyWebApi/Errors/ToggleShuffleForUsersPlaybackError.cs` |
| `Unauthorized1` | `src/SpotifyWebApi/Models/Unauthorized1.cs` |
| `Forbidden1` | `src/SpotifyWebApi/Models/Forbidden1.cs` |
| `TooManyRequests1` | `src/SpotifyWebApi/Models/TooManyRequests1.cs` |

### TransferAUsersPlayback

- **Auth**: `options.Oauth20`
- **Signature**: `TransferAUsersPlayback(TransferAUsersPlaybackRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `void` (Task)
- **Error**: `ApiException<TransferAUsersPlaybackError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `TransferAUsersPlaybackRequest` | `src/SpotifyWebApi/Requests/Player/TransferAUsersPlaybackRequest.cs` |
| `MePlayerRequest` | `src/SpotifyWebApi/Models/MePlayerRequest.cs` |
| `TransferAUsersPlaybackError` | `src/SpotifyWebApi/Errors/TransferAUsersPlaybackError.cs` |
| `Unauthorized1` | `src/SpotifyWebApi/Models/Unauthorized1.cs` |
| `Forbidden1` | `src/SpotifyWebApi/Models/Forbidden1.cs` |
| `TooManyRequests1` | `src/SpotifyWebApi/Models/TooManyRequests1.cs` |

