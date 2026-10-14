<!-- Generated file — do not edit; regenerated with the SDK. -->

# Tracks — operations

Accessor: `client.Tracks` · Source: `src/SpotifyWebApi/Api/Tracks.cs` · 17 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### AddTracksToPlaylist

- **Auth**: `options.Oauth20`
- **Signature**: `AddTracksToPlaylist(AddTracksToPlaylistRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PlaylistId`
- **Query params (wire ← C#)**: `position` ← `Position`, `uris` ← `Uris`
- **Returns**: `PlaylistSnapshotId`
- **Error**: `ApiException<AddTracksToPlaylistError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `AddTracksToPlaylistRequest` | `src/SpotifyWebApi/Requests/Playlists/AddTracksToPlaylistRequest.cs` |
| `PlaylistsTracksRequest` | `src/SpotifyWebApi/Models/PlaylistsTracksRequest.cs` |
| `PlaylistSnapshotId` | `src/SpotifyWebApi/Models/PlaylistSnapshotId.cs` |
| `AddTracksToPlaylistError` | `src/SpotifyWebApi/Errors/AddTracksToPlaylistError.cs` |
| `Unauthorized1` | `src/SpotifyWebApi/Models/Unauthorized1.cs` |
| `Forbidden1` | `src/SpotifyWebApi/Models/Forbidden1.cs` |
| `TooManyRequests1` | `src/SpotifyWebApi/Models/TooManyRequests1.cs` |

### CheckUsersSavedTracks

- **Auth**: `options.Oauth20`
- **Signature**: `CheckUsersSavedTracks(CheckUsersSavedTracksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ids`
- **Query params (wire ← C#)**: `ids` ← `Ids`
- **Returns**: `IReadOnlyList<bool>`
- **Error**: `ApiException<CheckUsersSavedTracksError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `CheckUsersSavedTracksRequest` | `src/SpotifyWebApi/Requests/Tracks/CheckUsersSavedTracksRequest.cs` |
| `CheckUsersSavedTracksError` | `src/SpotifyWebApi/Errors/CheckUsersSavedTracksError.cs` |
| `Unauthorized1` | `src/SpotifyWebApi/Models/Unauthorized1.cs` |
| `Forbidden1` | `src/SpotifyWebApi/Models/Forbidden1.cs` |
| `TooManyRequests1` | `src/SpotifyWebApi/Models/TooManyRequests1.cs` |

### GetAnAlbumsTracks

- **Auth**: `options.Oauth20`
- **Signature**: `GetAnAlbumsTracks(GetAnAlbumsTracksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Query params (wire ← C#)**: `market` ← `Market`, `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `PagingSimplifiedTrackObject`
- **Error**: `ApiException<GetAnAlbumsTracksError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `GetAnAlbumsTracksRequest` | `src/SpotifyWebApi/Requests/Albums/GetAnAlbumsTracksRequest.cs` |
| `PagingSimplifiedTrackObject` | `src/SpotifyWebApi/Models/PagingSimplifiedTrackObject.cs` |
| `GetAnAlbumsTracksError` | `src/SpotifyWebApi/Errors/GetAnAlbumsTracksError.cs` |
| `Unauthorized1` | `src/SpotifyWebApi/Models/Unauthorized1.cs` |
| `Forbidden1` | `src/SpotifyWebApi/Models/Forbidden1.cs` |
| `TooManyRequests1` | `src/SpotifyWebApi/Models/TooManyRequests1.cs` |

### GetAnArtistsTopTracks

- **Auth**: `options.Oauth20`
- **Signature**: `GetAnArtistsTopTracks(GetAnArtistsTopTracksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Query params (wire ← C#)**: `market` ← `Market`
- **Returns**: `ManyTracks`
- **Error**: `ApiException<GetAnArtistsTopTracksError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `GetAnArtistsTopTracksRequest` | `src/SpotifyWebApi/Requests/Artists/GetAnArtistsTopTracksRequest.cs` |
| `ManyTracks` | `src/SpotifyWebApi/Models/ManyTracks.cs` |
| `GetAnArtistsTopTracksError` | `src/SpotifyWebApi/Errors/GetAnArtistsTopTracksError.cs` |
| `Unauthorized1` | `src/SpotifyWebApi/Models/Unauthorized1.cs` |
| `Forbidden1` | `src/SpotifyWebApi/Models/Forbidden1.cs` |
| `TooManyRequests1` | `src/SpotifyWebApi/Models/TooManyRequests1.cs` |

### GetAudioAnalysis

- **Auth**: `options.Oauth20`
- **Signature**: `GetAudioAnalysis(GetAudioAnalysisRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `AudioAnalysisObject`
- **Error**: `ApiException<GetAudioAnalysisError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `GetAudioAnalysisRequest` | `src/SpotifyWebApi/Requests/Tracks/GetAudioAnalysisRequest.cs` |
| `AudioAnalysisObject` | `src/SpotifyWebApi/Models/AudioAnalysisObject.cs` |
| `GetAudioAnalysisError` | `src/SpotifyWebApi/Errors/GetAudioAnalysisError.cs` |
| `Unauthorized1` | `src/SpotifyWebApi/Models/Unauthorized1.cs` |
| `Forbidden1` | `src/SpotifyWebApi/Models/Forbidden1.cs` |
| `TooManyRequests1` | `src/SpotifyWebApi/Models/TooManyRequests1.cs` |

### GetAudioFeatures

- **Auth**: `options.Oauth20`
- **Signature**: `GetAudioFeatures(GetAudioFeaturesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `AudioFeaturesObject`
- **Error**: `ApiException<GetAudioFeaturesError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `GetAudioFeaturesRequest` | `src/SpotifyWebApi/Requests/Tracks/GetAudioFeaturesRequest.cs` |
| `AudioFeaturesObject` | `src/SpotifyWebApi/Models/AudioFeaturesObject.cs` |
| `GetAudioFeaturesError` | `src/SpotifyWebApi/Errors/GetAudioFeaturesError.cs` |
| `Unauthorized1` | `src/SpotifyWebApi/Models/Unauthorized1.cs` |
| `Forbidden1` | `src/SpotifyWebApi/Models/Forbidden1.cs` |
| `TooManyRequests1` | `src/SpotifyWebApi/Models/TooManyRequests1.cs` |

### GetPlaylistsTracks

- **Auth**: `options.Oauth20`
- **Signature**: `GetPlaylistsTracks(GetPlaylistsTracksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PlaylistId`
- **Query params (wire ← C#)**: `market` ← `Market`, `fields` ← `Fields`, `limit` ← `Limit`, `offset` ← `Offset`, `additional_types` ← `AdditionalTypes`
- **Returns**: `PagingPlaylistTrackObject`
- **Error**: `ApiException<GetPlaylistsTracksError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `GetPlaylistsTracksRequest` | `src/SpotifyWebApi/Requests/Playlists/GetPlaylistsTracksRequest.cs` |
| `PagingPlaylistTrackObject` | `src/SpotifyWebApi/Models/PagingPlaylistTrackObject.cs` |
| `GetPlaylistsTracksError` | `src/SpotifyWebApi/Errors/GetPlaylistsTracksError.cs` |
| `Unauthorized1` | `src/SpotifyWebApi/Models/Unauthorized1.cs` |
| `Forbidden1` | `src/SpotifyWebApi/Models/Forbidden1.cs` |
| `TooManyRequests1` | `src/SpotifyWebApi/Models/TooManyRequests1.cs` |

### GetRecommendations

- **Auth**: `options.Oauth20`
- **Signature**: `GetRecommendations(GetRecommendationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `market` ← `Market`, `seed_artists` ← `SeedArtists`, `seed_genres` ← `SeedGenres`, `seed_tracks` ← `SeedTracks`, `min_acousticness` ← `MinAcousticness`, `max_acousticness` ← `MaxAcousticness`, `target_acousticness` ← `TargetAcousticness`, `min_danceability` ← `MinDanceability`, `max_danceability` ← `MaxDanceability`, `target_danceability` ← `TargetDanceability`, `min_duration_ms` ← `MinDurationMs`, `max_duration_ms` ← `MaxDurationMs`, `target_duration_ms` ← `TargetDurationMs`, `min_energy` ← `MinEnergy`, `max_energy` ← `MaxEnergy`, `target_energy` ← `TargetEnergy`, `min_instrumentalness` ← `MinInstrumentalness`, `max_instrumentalness` ← `MaxInstrumentalness`, `target_instrumentalness` ← `TargetInstrumentalness`, `min_key` ← `MinKey`, `max_key` ← `MaxKey`, `target_key` ← `TargetKey`, `min_liveness` ← `MinLiveness`, `max_liveness` ← `MaxLiveness`, `target_liveness` ← `TargetLiveness`, `min_loudness` ← `MinLoudness`, `max_loudness` ← `MaxLoudness`, `target_loudness` ← `TargetLoudness`, `min_mode` ← `MinMode`, `max_mode` ← `MaxMode`, `target_mode` ← `TargetMode`, `min_popularity` ← `MinPopularity`, `max_popularity` ← `MaxPopularity`, `target_popularity` ← `TargetPopularity`, `min_speechiness` ← `MinSpeechiness`, `max_speechiness` ← `MaxSpeechiness`, `target_speechiness` ← `TargetSpeechiness`, `min_tempo` ← `MinTempo`, `max_tempo` ← `MaxTempo`, `target_tempo` ← `TargetTempo`, `min_time_signature` ← `MinTimeSignature`, `max_time_signature` ← `MaxTimeSignature`, `target_time_signature` ← `TargetTimeSignature`, `min_valence` ← `MinValence`, `max_valence` ← `MaxValence`, `target_valence` ← `TargetValence`
- **Returns**: `RecommendationsObject`
- **Error**: `ApiException<GetRecommendationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `GetRecommendationsRequest` | `src/SpotifyWebApi/Requests/Tracks/GetRecommendationsRequest.cs` |
| `RecommendationsObject` | `src/SpotifyWebApi/Models/RecommendationsObject.cs` |
| `GetRecommendationsError` | `src/SpotifyWebApi/Errors/GetRecommendationsError.cs` |
| `Unauthorized1` | `src/SpotifyWebApi/Models/Unauthorized1.cs` |
| `Forbidden1` | `src/SpotifyWebApi/Models/Forbidden1.cs` |
| `TooManyRequests1` | `src/SpotifyWebApi/Models/TooManyRequests1.cs` |

### GetSeveralAudioFeatures

- **Auth**: `options.Oauth20`
- **Signature**: `GetSeveralAudioFeatures(GetSeveralAudioFeaturesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ids`
- **Query params (wire ← C#)**: `ids` ← `Ids`
- **Returns**: `ManyAudioFeatures`
- **Error**: `ApiException<GetSeveralAudioFeaturesError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `GetSeveralAudioFeaturesRequest` | `src/SpotifyWebApi/Requests/Tracks/GetSeveralAudioFeaturesRequest.cs` |
| `ManyAudioFeatures` | `src/SpotifyWebApi/Models/ManyAudioFeatures.cs` |
| `GetSeveralAudioFeaturesError` | `src/SpotifyWebApi/Errors/GetSeveralAudioFeaturesError.cs` |
| `Unauthorized1` | `src/SpotifyWebApi/Models/Unauthorized1.cs` |
| `Forbidden1` | `src/SpotifyWebApi/Models/Forbidden1.cs` |
| `TooManyRequests1` | `src/SpotifyWebApi/Models/TooManyRequests1.cs` |

### GetSeveralTracks

- **Auth**: `options.Oauth20`
- **Signature**: `GetSeveralTracks(GetSeveralTracksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ids`
- **Query params (wire ← C#)**: `ids` ← `Ids`, `market` ← `Market`
- **Returns**: `ManyTracks`
- **Error**: `ApiException<GetSeveralTracksError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `GetSeveralTracksRequest` | `src/SpotifyWebApi/Requests/Tracks/GetSeveralTracksRequest.cs` |
| `ManyTracks` | `src/SpotifyWebApi/Models/ManyTracks.cs` |
| `GetSeveralTracksError` | `src/SpotifyWebApi/Errors/GetSeveralTracksError.cs` |
| `Unauthorized1` | `src/SpotifyWebApi/Models/Unauthorized1.cs` |
| `Forbidden1` | `src/SpotifyWebApi/Models/Forbidden1.cs` |
| `TooManyRequests1` | `src/SpotifyWebApi/Models/TooManyRequests1.cs` |

### GetTrack

- **Auth**: `options.Oauth20`
- **Signature**: `GetTrack(GetTrackRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Query params (wire ← C#)**: `market` ← `Market`
- **Returns**: `TrackObject`
- **Error**: `ApiException<GetTrackError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `GetTrackRequest` | `src/SpotifyWebApi/Requests/Tracks/GetTrackRequest.cs` |
| `TrackObject` | `src/SpotifyWebApi/Models/TrackObject.cs` |
| `GetTrackError` | `src/SpotifyWebApi/Errors/GetTrackError.cs` |
| `Unauthorized1` | `src/SpotifyWebApi/Models/Unauthorized1.cs` |
| `Forbidden1` | `src/SpotifyWebApi/Models/Forbidden1.cs` |
| `TooManyRequests1` | `src/SpotifyWebApi/Models/TooManyRequests1.cs` |

### GetUsersSavedTracks

- **Auth**: `options.Oauth20`
- **Signature**: `GetUsersSavedTracks(GetUsersSavedTracksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `market` ← `Market`, `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `PagingSavedTrackObject`
- **Error**: `ApiException<GetUsersSavedTracksError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `GetUsersSavedTracksRequest` | `src/SpotifyWebApi/Requests/Tracks/GetUsersSavedTracksRequest.cs` |
| `PagingSavedTrackObject` | `src/SpotifyWebApi/Models/PagingSavedTrackObject.cs` |
| `GetUsersSavedTracksError` | `src/SpotifyWebApi/Errors/GetUsersSavedTracksError.cs` |
| `Unauthorized1` | `src/SpotifyWebApi/Models/Unauthorized1.cs` |
| `Forbidden1` | `src/SpotifyWebApi/Models/Forbidden1.cs` |
| `TooManyRequests1` | `src/SpotifyWebApi/Models/TooManyRequests1.cs` |

### GetUsersTopTracks

- **Auth**: `options.Oauth20`
- **Signature**: `GetUsersTopTracks(GetUsersTopTracksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `time_range` ← `TimeRange`, `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `PagingTrackObject`
- **Error**: `ApiException<GetUsersTopTracksError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `GetUsersTopTracksRequest` | `src/SpotifyWebApi/Requests/Users/GetUsersTopTracksRequest.cs` |
| `PagingTrackObject` | `src/SpotifyWebApi/Models/PagingTrackObject.cs` |
| `GetUsersTopTracksError` | `src/SpotifyWebApi/Errors/GetUsersTopTracksError.cs` |
| `Unauthorized1` | `src/SpotifyWebApi/Models/Unauthorized1.cs` |
| `Forbidden1` | `src/SpotifyWebApi/Models/Forbidden1.cs` |
| `TooManyRequests1` | `src/SpotifyWebApi/Models/TooManyRequests1.cs` |

### RemoveTracksPlaylist

- **Auth**: `options.Oauth20`
- **Signature**: `RemoveTracksPlaylist(RemoveTracksPlaylistRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PlaylistId`
- **Returns**: `PlaylistSnapshotId`
- **Error**: `ApiException<RemoveTracksPlaylistError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `RemoveTracksPlaylistRequest` | `src/SpotifyWebApi/Requests/Playlists/RemoveTracksPlaylistRequest.cs` |
| `PlaylistsTracksRequest2` | `src/SpotifyWebApi/Models/PlaylistsTracksRequest2.cs` |
| `PlaylistSnapshotId` | `src/SpotifyWebApi/Models/PlaylistSnapshotId.cs` |
| `RemoveTracksPlaylistError` | `src/SpotifyWebApi/Errors/RemoveTracksPlaylistError.cs` |
| `Unauthorized1` | `src/SpotifyWebApi/Models/Unauthorized1.cs` |
| `Forbidden1` | `src/SpotifyWebApi/Models/Forbidden1.cs` |
| `TooManyRequests1` | `src/SpotifyWebApi/Models/TooManyRequests1.cs` |

### RemoveTracksUser

- **Auth**: `options.Oauth20`
- **Signature**: `RemoveTracksUser(RemoveTracksUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ids`
- **Query params (wire ← C#)**: `ids` ← `Ids`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RemoveTracksUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `RemoveTracksUserRequest` | `src/SpotifyWebApi/Requests/Tracks/RemoveTracksUserRequest.cs` |
| `RemoveTracksRequest` | `src/SpotifyWebApi/Models/RemoveTracksRequest.cs` |
| `RemoveTracksUserError` | `src/SpotifyWebApi/Errors/RemoveTracksUserError.cs` |
| `Unauthorized1` | `src/SpotifyWebApi/Models/Unauthorized1.cs` |
| `Forbidden1` | `src/SpotifyWebApi/Models/Forbidden1.cs` |
| `TooManyRequests1` | `src/SpotifyWebApi/Models/TooManyRequests1.cs` |

### ReorderOrReplacePlaylistsTracks

- **Auth**: `options.Oauth20`
- **Signature**: `ReorderOrReplacePlaylistsTracks(ReorderOrReplacePlaylistsTracksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PlaylistId`
- **Query params (wire ← C#)**: `uris` ← `Uris`
- **Returns**: `PlaylistSnapshotId`
- **Error**: `ApiException<ReorderOrReplacePlaylistsTracksError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `ReorderOrReplacePlaylistsTracksRequest` | `src/SpotifyWebApi/Requests/Playlists/ReorderOrReplacePlaylistsTracksRequest.cs` |
| `PlaylistsTracksRequest1` | `src/SpotifyWebApi/Models/PlaylistsTracksRequest1.cs` |
| `PlaylistSnapshotId` | `src/SpotifyWebApi/Models/PlaylistSnapshotId.cs` |
| `ReorderOrReplacePlaylistsTracksError` | `src/SpotifyWebApi/Errors/ReorderOrReplacePlaylistsTracksError.cs` |
| `Unauthorized1` | `src/SpotifyWebApi/Models/Unauthorized1.cs` |
| `Forbidden1` | `src/SpotifyWebApi/Models/Forbidden1.cs` |
| `TooManyRequests1` | `src/SpotifyWebApi/Models/TooManyRequests1.cs` |

### SaveTracksUser

- **Auth**: `options.Oauth20`
- **Signature**: `SaveTracksUser(SaveTracksUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ids`
- **Query params (wire ← C#)**: `ids` ← `Ids`
- **Returns**: `void` (Task)
- **Error**: `ApiException<SaveTracksUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `SaveTracksUserRequest` | `src/SpotifyWebApi/Requests/Tracks/SaveTracksUserRequest.cs` |
| `SaveTracksRequest` | `src/SpotifyWebApi/Models/SaveTracksRequest.cs` |
| `SaveTracksUserError` | `src/SpotifyWebApi/Errors/SaveTracksUserError.cs` |
| `Unauthorized1` | `src/SpotifyWebApi/Models/Unauthorized1.cs` |
| `Forbidden1` | `src/SpotifyWebApi/Models/Forbidden1.cs` |
| `TooManyRequests1` | `src/SpotifyWebApi/Models/TooManyRequests1.cs` |

