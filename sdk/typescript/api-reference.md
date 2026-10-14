# Reference

> Source: [SpotifyWebApiClient](src/client.ts)

## Albums

> Source: [Albums](src/resources/albums.ts)

<details>
<summary><code>checkUsersSavedAlbums(request: Albums.CheckUsersSavedAlbumsRequest, options?: RequestOptions): ApiPromise&lt;boolean[], Albums.CheckUsersSavedAlbumsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check if one or more albums is already saved in the current Spotify user's 'Your Music' library.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.albums.checkUsersSavedAlbums({
    ids: "382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc",
  });
  // TODO: Handle 'response' of type boolean[]
} catch (err) {
  // TODO: Handle 'err' of type Albums.CheckUsersSavedAlbumsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.albums.checkUsersSavedAlbums({
  ids: "382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type boolean[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.albums.checkUsersSavedAlbums(request)`

- **OnSuccess**: <code>boolean[]</code>
- **OnError**: throws <code>[Albums.CheckUsersSavedAlbumsError](src/resources/albums.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.albums.checkUsersSavedAlbums(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;boolean[], Albums.CheckUsersSavedAlbumsError&gt;</code>, with `result.value` of type <code>boolean[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAnAlbum(request: Albums.GetAnAlbumRequest, options?: RequestOptions): ApiPromise&lt;AlbumObject, Albums.GetAnAlbumError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Spotify catalog information for a single album.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.albums.getAnAlbum({ id: "4aawyAB9vmqN3uQ7FjRGTy", market: "ES" });
  // TODO: Handle 'response' of type AlbumObject
} catch (err) {
  // TODO: Handle 'err' of type Albums.GetAnAlbumError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.albums.getAnAlbum({ id: "4aawyAB9vmqN3uQ7FjRGTy", market: "ES" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AlbumObject
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>market?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.albums.getAnAlbum(request)`

- **OnSuccess**: <code>[AlbumObject](src/models/album-object.ts)</code>
- **OnError**: throws <code>[Albums.GetAnAlbumError](src/resources/albums.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.albums.getAnAlbum(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AlbumObject, Albums.GetAnAlbumError&gt;</code>, with `result.value` of type <code>[AlbumObject](src/models/album-object.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAnAlbumsTracks(request: Albums.GetAnAlbumsTracksRequest, options?: RequestOptions): ApiPromise&lt;PagingSimplifiedTrackObject, Albums.GetAnAlbumsTracksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Spotify catalog information about an album’s tracks.
Optional parameters can be used to limit the number of tracks returned.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.albums.getAnAlbumsTracks({
    id: "4aawyAB9vmqN3uQ7FjRGTy",
    market: "ES",
    limit: 10,
    offset: 5,
  });
  // TODO: Handle 'response' of type PagingSimplifiedTrackObject
} catch (err) {
  // TODO: Handle 'err' of type Albums.GetAnAlbumsTracksError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.albums.getAnAlbumsTracks({
  id: "4aawyAB9vmqN3uQ7FjRGTy",
  market: "ES",
  limit: 10,
  offset: 5,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PagingSimplifiedTrackObject
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>market?</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 20 |
| <code>offset?</code> | <code>number</code> | -<br>**Default**: 0 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.albums.getAnAlbumsTracks(request)`

- **OnSuccess**: <code>[PagingSimplifiedTrackObject](src/models/paging-simplified-track-object.ts)</code>
- **OnError**: throws <code>[Albums.GetAnAlbumsTracksError](src/resources/albums.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.albums.getAnAlbumsTracks(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PagingSimplifiedTrackObject, Albums.GetAnAlbumsTracksError&gt;</code>, with `result.value` of type <code>[PagingSimplifiedTrackObject](src/models/paging-simplified-track-object.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAnArtistsAlbums(request: Albums.GetAnArtistsAlbumsRequest, options?: RequestOptions): ApiPromise&lt;PagingArtistDiscographyAlbumObject, Albums.GetAnArtistsAlbumsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Spotify catalog information about an artist's albums.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.albums.getAnArtistsAlbums({
    id: "0TnOYISbd1XYRBk9myaseg",
    includeGroups: "single,appears_on",
    market: "ES",
    limit: 10,
    offset: 5,
  });
  // TODO: Handle 'response' of type PagingArtistDiscographyAlbumObject
} catch (err) {
  // TODO: Handle 'err' of type Albums.GetAnArtistsAlbumsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.albums.getAnArtistsAlbums({
  id: "0TnOYISbd1XYRBk9myaseg",
  includeGroups: "single,appears_on",
  market: "ES",
  limit: 10,
  offset: 5,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PagingArtistDiscographyAlbumObject
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>includeGroups?</code> | <code>string</code> | - |
| <code>market?</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 20 |
| <code>offset?</code> | <code>number</code> | -<br>**Default**: 0 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.albums.getAnArtistsAlbums(request)`

- **OnSuccess**: <code>[PagingArtistDiscographyAlbumObject](src/models/paging-artist-discography-album-object.ts)</code>
- **OnError**: throws <code>[Albums.GetAnArtistsAlbumsError](src/resources/albums.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.albums.getAnArtistsAlbums(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PagingArtistDiscographyAlbumObject, Albums.GetAnArtistsAlbumsError&gt;</code>, with `result.value` of type <code>[PagingArtistDiscographyAlbumObject](src/models/paging-artist-discography-album-object.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMultipleAlbums(request: Albums.GetMultipleAlbumsRequest, options?: RequestOptions): ApiPromise&lt;ManyAlbums, Albums.GetMultipleAlbumsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Spotify catalog information for multiple albums identified by their Spotify IDs.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.albums.getMultipleAlbums({
    ids: "382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc",
    market: "ES",
  });
  // TODO: Handle 'response' of type ManyAlbums
} catch (err) {
  // TODO: Handle 'err' of type Albums.GetMultipleAlbumsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.albums.getMultipleAlbums({
  ids: "382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc",
  market: "ES",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ManyAlbums
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |
| <code>market?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.albums.getMultipleAlbums(request)`

- **OnSuccess**: <code>[ManyAlbums](src/models/many-albums.ts)</code>
- **OnError**: throws <code>[Albums.GetMultipleAlbumsError](src/resources/albums.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.albums.getMultipleAlbums(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ManyAlbums, Albums.GetMultipleAlbumsError&gt;</code>, with `result.value` of type <code>[ManyAlbums](src/models/many-albums.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getNewReleases(request: Albums.GetNewReleasesRequest, options?: RequestOptions): ApiPromise&lt;PagedAlbums, Albums.GetNewReleasesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of new album releases featured in Spotify (shown, for example, on a Spotify player’s “Browse” tab).


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.albums.getNewReleases({ limit: 10, offset: 5 });
  // TODO: Handle 'response' of type PagedAlbums
} catch (err) {
  // TODO: Handle 'err' of type Albums.GetNewReleasesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.albums.getNewReleases({ limit: 10, offset: 5 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PagedAlbums
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 20 |
| <code>offset?</code> | <code>number</code> | -<br>**Default**: 0 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.albums.getNewReleases(request)`

- **OnSuccess**: <code>[PagedAlbums](src/models/paged-albums.ts)</code>
- **OnError**: throws <code>[Albums.GetNewReleasesError](src/resources/albums.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.albums.getNewReleases(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PagedAlbums, Albums.GetNewReleasesError&gt;</code>, with `result.value` of type <code>[PagedAlbums](src/models/paged-albums.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUsersSavedAlbums(request: Albums.GetUsersSavedAlbumsRequest, options?: RequestOptions): ApiPromise&lt;PagingSavedAlbumObject, Albums.GetUsersSavedAlbumsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of the albums saved in the current Spotify user's 'Your Music' library.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.albums.getUsersSavedAlbums({ limit: 10, offset: 5, market: "ES" });
  // TODO: Handle 'response' of type PagingSavedAlbumObject
} catch (err) {
  // TODO: Handle 'err' of type Albums.GetUsersSavedAlbumsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.albums.getUsersSavedAlbums({ limit: 10, offset: 5, market: "ES" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PagingSavedAlbumObject
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 20 |
| <code>offset?</code> | <code>number</code> | -<br>**Default**: 0 |
| <code>market?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.albums.getUsersSavedAlbums(request)`

- **OnSuccess**: <code>[PagingSavedAlbumObject](src/models/paging-saved-album-object.ts)</code>
- **OnError**: throws <code>[Albums.GetUsersSavedAlbumsError](src/resources/albums.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.albums.getUsersSavedAlbums(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PagingSavedAlbumObject, Albums.GetUsersSavedAlbumsError&gt;</code>, with `result.value` of type <code>[PagingSavedAlbumObject](src/models/paging-saved-album-object.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>removeAlbumsUser(request: Albums.RemoveAlbumsUserRequest, options?: RequestOptions): ApiPromise&lt;undefined, Albums.RemoveAlbumsUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove one or more albums from the current user's 'Your Music' library.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.albums.removeAlbumsUser({
    ids: "382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc",
  });
} catch (err) {
  // TODO: Handle 'err' of type Albums.RemoveAlbumsUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.albums.removeAlbumsUser({
  ids: "382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |
| <code>body?</code> | <code>[RemoveAlbumsRequest](src/models/remove-albums-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.albums.removeAlbumsUser(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Albums.RemoveAlbumsUserError](src/resources/albums.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.albums.removeAlbumsUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Albums.RemoveAlbumsUserError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>saveAlbumsUser(request: Albums.SaveAlbumsUserRequest, options?: RequestOptions): ApiPromise&lt;undefined, Albums.SaveAlbumsUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Save one or more albums to the current user's 'Your Music' library.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.albums.saveAlbumsUser({
    ids: "382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc",
  });
} catch (err) {
  // TODO: Handle 'err' of type Albums.SaveAlbumsUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.albums.saveAlbumsUser({
  ids: "382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |
| <code>body?</code> | <code>[SaveAlbumsRequest](src/models/save-albums-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.albums.saveAlbumsUser(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Albums.SaveAlbumsUserError](src/resources/albums.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.albums.saveAlbumsUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Albums.SaveAlbumsUserError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Tracks

> Source: [Tracks](src/resources/tracks.ts)

<details>
<summary><code>addTracksToPlaylist(request: Tracks.AddTracksToPlaylistRequest, options?: RequestOptions): ApiPromise&lt;PlaylistSnapshotId, Tracks.AddTracksToPlaylistError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add one or more items to a user's playlist.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tracks.addTracksToPlaylist({
    playlistId: "3cEYpjA9oz9GiPac4AsH4n",
    position: 0,
    uris: "spotify:track:4iV5W9uYEdYUVa79Axb7Rh,spotify:track:1301WleyT98MSxVHPZCA6M",
  });
  // TODO: Handle 'response' of type PlaylistSnapshotId
} catch (err) {
  // TODO: Handle 'err' of type Tracks.AddTracksToPlaylistError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tracks.addTracksToPlaylist({
  playlistId: "3cEYpjA9oz9GiPac4AsH4n",
  position: 0,
  uris: "spotify:track:4iV5W9uYEdYUVa79Axb7Rh,spotify:track:1301WleyT98MSxVHPZCA6M",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PlaylistSnapshotId
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>playlistId</code> | <code>string</code> | - |
| <code>position?</code> | <code>number</code> | - |
| <code>uris?</code> | <code>string</code> | - |
| <code>body?</code> | <code>[PlaylistsTracksRequest](src/models/playlists-tracks-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tracks.addTracksToPlaylist(request)`

- **OnSuccess**: <code>[PlaylistSnapshotId](src/models/playlist-snapshot-id.ts)</code>
- **OnError**: throws <code>[Tracks.AddTracksToPlaylistError](src/resources/tracks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tracks.addTracksToPlaylist(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PlaylistSnapshotId, Tracks.AddTracksToPlaylistError&gt;</code>, with `result.value` of type <code>[PlaylistSnapshotId](src/models/playlist-snapshot-id.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>checkUsersSavedTracks(request: Tracks.CheckUsersSavedTracksRequest, options?: RequestOptions): ApiPromise&lt;boolean[], Tracks.CheckUsersSavedTracksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check if one or more tracks is already saved in the current Spotify user's 'Your Music' library.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tracks.checkUsersSavedTracks({
    ids: "7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B",
  });
  // TODO: Handle 'response' of type boolean[]
} catch (err) {
  // TODO: Handle 'err' of type Tracks.CheckUsersSavedTracksError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tracks.checkUsersSavedTracks({
  ids: "7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type boolean[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tracks.checkUsersSavedTracks(request)`

- **OnSuccess**: <code>boolean[]</code>
- **OnError**: throws <code>[Tracks.CheckUsersSavedTracksError](src/resources/tracks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tracks.checkUsersSavedTracks(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;boolean[], Tracks.CheckUsersSavedTracksError&gt;</code>, with `result.value` of type <code>boolean[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAnAlbumsTracks(request: Tracks.GetAnAlbumsTracksRequest, options?: RequestOptions): ApiPromise&lt;PagingSimplifiedTrackObject, Tracks.GetAnAlbumsTracksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Spotify catalog information about an album’s tracks.
Optional parameters can be used to limit the number of tracks returned.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tracks.getAnAlbumsTracks({
    id: "4aawyAB9vmqN3uQ7FjRGTy",
    market: "ES",
    limit: 10,
    offset: 5,
  });
  // TODO: Handle 'response' of type PagingSimplifiedTrackObject
} catch (err) {
  // TODO: Handle 'err' of type Tracks.GetAnAlbumsTracksError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tracks.getAnAlbumsTracks({
  id: "4aawyAB9vmqN3uQ7FjRGTy",
  market: "ES",
  limit: 10,
  offset: 5,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PagingSimplifiedTrackObject
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>market?</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 20 |
| <code>offset?</code> | <code>number</code> | -<br>**Default**: 0 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tracks.getAnAlbumsTracks(request)`

- **OnSuccess**: <code>[PagingSimplifiedTrackObject](src/models/paging-simplified-track-object.ts)</code>
- **OnError**: throws <code>[Tracks.GetAnAlbumsTracksError](src/resources/tracks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tracks.getAnAlbumsTracks(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PagingSimplifiedTrackObject, Tracks.GetAnAlbumsTracksError&gt;</code>, with `result.value` of type <code>[PagingSimplifiedTrackObject](src/models/paging-simplified-track-object.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAnArtistsTopTracks(request: Tracks.GetAnArtistsTopTracksRequest, options?: RequestOptions): ApiPromise&lt;ManyTracks, Tracks.GetAnArtistsTopTracksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Spotify catalog information about an artist's top tracks by country.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tracks.getAnArtistsTopTracks({ id: "0TnOYISbd1XYRBk9myaseg", market: "ES" });
  // TODO: Handle 'response' of type ManyTracks
} catch (err) {
  // TODO: Handle 'err' of type Tracks.GetAnArtistsTopTracksError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tracks.getAnArtistsTopTracks({
  id: "0TnOYISbd1XYRBk9myaseg",
  market: "ES",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ManyTracks
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>market?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tracks.getAnArtistsTopTracks(request)`

- **OnSuccess**: <code>[ManyTracks](src/models/many-tracks.ts)</code>
- **OnError**: throws <code>[Tracks.GetAnArtistsTopTracksError](src/resources/tracks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tracks.getAnArtistsTopTracks(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ManyTracks, Tracks.GetAnArtistsTopTracksError&gt;</code>, with `result.value` of type <code>[ManyTracks](src/models/many-tracks.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAudioAnalysis(request: Tracks.GetAudioAnalysisRequest, options?: RequestOptions): ApiPromise&lt;AudioAnalysisObject, Tracks.GetAudioAnalysisError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a low-level audio analysis for a track in the Spotify catalog. The audio analysis describes the track’s structure and musical content, including rhythm, pitch, and timbre.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tracks.getAudioAnalysis({ id: "11dFghVXANMlKmJXsNCbNl" });
  // TODO: Handle 'response' of type AudioAnalysisObject
} catch (err) {
  // TODO: Handle 'err' of type Tracks.GetAudioAnalysisError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tracks.getAudioAnalysis({ id: "11dFghVXANMlKmJXsNCbNl" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AudioAnalysisObject
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tracks.getAudioAnalysis(request)`

- **OnSuccess**: <code>[AudioAnalysisObject](src/models/audio-analysis-object.ts)</code>
- **OnError**: throws <code>[Tracks.GetAudioAnalysisError](src/resources/tracks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tracks.getAudioAnalysis(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AudioAnalysisObject, Tracks.GetAudioAnalysisError&gt;</code>, with `result.value` of type <code>[AudioAnalysisObject](src/models/audio-analysis-object.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAudioFeatures(request: Tracks.GetAudioFeaturesRequest, options?: RequestOptions): ApiPromise&lt;AudioFeaturesObject, Tracks.GetAudioFeaturesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get audio feature information for a single track identified by its unique
Spotify ID.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tracks.getAudioFeatures({ id: "11dFghVXANMlKmJXsNCbNl" });
  // TODO: Handle 'response' of type AudioFeaturesObject
} catch (err) {
  // TODO: Handle 'err' of type Tracks.GetAudioFeaturesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tracks.getAudioFeatures({ id: "11dFghVXANMlKmJXsNCbNl" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AudioFeaturesObject
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tracks.getAudioFeatures(request)`

- **OnSuccess**: <code>[AudioFeaturesObject](src/models/audio-features-object.ts)</code>
- **OnError**: throws <code>[Tracks.GetAudioFeaturesError](src/resources/tracks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tracks.getAudioFeatures(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AudioFeaturesObject, Tracks.GetAudioFeaturesError&gt;</code>, with `result.value` of type <code>[AudioFeaturesObject](src/models/audio-features-object.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPlaylistsTracks(request: Tracks.GetPlaylistsTracksRequest, options?: RequestOptions): ApiPromise&lt;PagingPlaylistTrackObject, Tracks.GetPlaylistsTracksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get full details of the items of a playlist owned by a Spotify user.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tracks.getPlaylistsTracks({
    playlistId: "3cEYpjA9oz9GiPac4AsH4n",
    market: "ES",
    fields: "items(added_by.id,track(name,href,album(name,href)))",
    limit: 10,
    offset: 5,
  });
  // TODO: Handle 'response' of type PagingPlaylistTrackObject
} catch (err) {
  // TODO: Handle 'err' of type Tracks.GetPlaylistsTracksError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tracks.getPlaylistsTracks({
  playlistId: "3cEYpjA9oz9GiPac4AsH4n",
  market: "ES",
  fields: "items(added_by.id,track(name,href,album(name,href)))",
  limit: 10,
  offset: 5,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PagingPlaylistTrackObject
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>playlistId</code> | <code>string</code> | - |
| <code>market?</code> | <code>string</code> | - |
| <code>fields?</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 20 |
| <code>offset?</code> | <code>number</code> | -<br>**Default**: 0 |
| <code>additionalTypes?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tracks.getPlaylistsTracks(request)`

- **OnSuccess**: <code>[PagingPlaylistTrackObject](src/models/paging-playlist-track-object.ts)</code>
- **OnError**: throws <code>[Tracks.GetPlaylistsTracksError](src/resources/tracks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tracks.getPlaylistsTracks(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PagingPlaylistTrackObject, Tracks.GetPlaylistsTracksError&gt;</code>, with `result.value` of type <code>[PagingPlaylistTrackObject](src/models/paging-playlist-track-object.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getRecommendations(request: Tracks.GetRecommendationsRequest, options?: RequestOptions): ApiPromise&lt;RecommendationsObject, Tracks.GetRecommendationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Recommendations are generated based on the available information for a given seed entity and matched against similar artists and tracks. If there is sufficient information about the provided seeds, a list of tracks will be returned together with pool size details.

For artists and tracks that are very new or obscure there might not be enough data to generate a list of tracks.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tracks.getRecommendations({
    limit: 10,
    market: "ES",
    seedArtists: "4NHQUGzhtTLFvgF5SZesLK",
    seedGenres: "classical,country",
    seedTracks: "0c6xIDDpzE81m2q797ordA",
  });
  // TODO: Handle 'response' of type RecommendationsObject
} catch (err) {
  // TODO: Handle 'err' of type Tracks.GetRecommendationsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tracks.getRecommendations({
  limit: 10,
  market: "ES",
  seedArtists: "4NHQUGzhtTLFvgF5SZesLK",
  seedGenres: "classical,country",
  seedTracks: "0c6xIDDpzE81m2q797ordA",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RecommendationsObject
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 20 |
| <code>market?</code> | <code>string</code> | - |
| <code>seedArtists?</code> | <code>string</code> | - |
| <code>seedGenres?</code> | <code>string</code> | - |
| <code>seedTracks?</code> | <code>string</code> | - |
| <code>minAcousticness?</code> | <code>number</code> | - |
| <code>maxAcousticness?</code> | <code>number</code> | - |
| <code>targetAcousticness?</code> | <code>number</code> | - |
| <code>minDanceability?</code> | <code>number</code> | - |
| <code>maxDanceability?</code> | <code>number</code> | - |
| <code>targetDanceability?</code> | <code>number</code> | - |
| <code>minDurationMs?</code> | <code>number</code> | - |
| <code>maxDurationMs?</code> | <code>number</code> | - |
| <code>targetDurationMs?</code> | <code>number</code> | - |
| <code>minEnergy?</code> | <code>number</code> | - |
| <code>maxEnergy?</code> | <code>number</code> | - |
| <code>targetEnergy?</code> | <code>number</code> | - |
| <code>minInstrumentalness?</code> | <code>number</code> | - |
| <code>maxInstrumentalness?</code> | <code>number</code> | - |
| <code>targetInstrumentalness?</code> | <code>number</code> | - |
| <code>minKey?</code> | <code>number</code> | - |
| <code>maxKey?</code> | <code>number</code> | - |
| <code>targetKey?</code> | <code>number</code> | - |
| <code>minLiveness?</code> | <code>number</code> | - |
| <code>maxLiveness?</code> | <code>number</code> | - |
| <code>targetLiveness?</code> | <code>number</code> | - |
| <code>minLoudness?</code> | <code>number</code> | - |
| <code>maxLoudness?</code> | <code>number</code> | - |
| <code>targetLoudness?</code> | <code>number</code> | - |
| <code>minMode?</code> | <code>number</code> | - |
| <code>maxMode?</code> | <code>number</code> | - |
| <code>targetMode?</code> | <code>number</code> | - |
| <code>minPopularity?</code> | <code>number</code> | - |
| <code>maxPopularity?</code> | <code>number</code> | - |
| <code>targetPopularity?</code> | <code>number</code> | - |
| <code>minSpeechiness?</code> | <code>number</code> | - |
| <code>maxSpeechiness?</code> | <code>number</code> | - |
| <code>targetSpeechiness?</code> | <code>number</code> | - |
| <code>minTempo?</code> | <code>number</code> | - |
| <code>maxTempo?</code> | <code>number</code> | - |
| <code>targetTempo?</code> | <code>number</code> | - |
| <code>minTimeSignature?</code> | <code>number</code> | - |
| <code>maxTimeSignature?</code> | <code>number</code> | - |
| <code>targetTimeSignature?</code> | <code>number</code> | - |
| <code>minValence?</code> | <code>number</code> | - |
| <code>maxValence?</code> | <code>number</code> | - |
| <code>targetValence?</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tracks.getRecommendations(request)`

- **OnSuccess**: <code>[RecommendationsObject](src/models/recommendations-object.ts)</code>
- **OnError**: throws <code>[Tracks.GetRecommendationsError](src/resources/tracks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tracks.getRecommendations(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RecommendationsObject, Tracks.GetRecommendationsError&gt;</code>, with `result.value` of type <code>[RecommendationsObject](src/models/recommendations-object.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSeveralAudioFeatures(request: Tracks.GetSeveralAudioFeaturesRequest, options?: RequestOptions): ApiPromise&lt;ManyAudioFeatures, Tracks.GetSeveralAudioFeaturesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get audio features for multiple tracks based on their Spotify IDs.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tracks.getSeveralAudioFeatures({
    ids: "7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B",
  });
  // TODO: Handle 'response' of type ManyAudioFeatures
} catch (err) {
  // TODO: Handle 'err' of type Tracks.GetSeveralAudioFeaturesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tracks.getSeveralAudioFeatures({
  ids: "7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ManyAudioFeatures
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tracks.getSeveralAudioFeatures(request)`

- **OnSuccess**: <code>[ManyAudioFeatures](src/models/many-audio-features.ts)</code>
- **OnError**: throws <code>[Tracks.GetSeveralAudioFeaturesError](src/resources/tracks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tracks.getSeveralAudioFeatures(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ManyAudioFeatures, Tracks.GetSeveralAudioFeaturesError&gt;</code>, with `result.value` of type <code>[ManyAudioFeatures](src/models/many-audio-features.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSeveralTracks(request: Tracks.GetSeveralTracksRequest, options?: RequestOptions): ApiPromise&lt;ManyTracks, Tracks.GetSeveralTracksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Spotify catalog information for multiple tracks based on their Spotify IDs.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tracks.getSeveralTracks({
    ids: "7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B",
    market: "ES",
  });
  // TODO: Handle 'response' of type ManyTracks
} catch (err) {
  // TODO: Handle 'err' of type Tracks.GetSeveralTracksError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tracks.getSeveralTracks({
  ids: "7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B",
  market: "ES",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ManyTracks
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |
| <code>market?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tracks.getSeveralTracks(request)`

- **OnSuccess**: <code>[ManyTracks](src/models/many-tracks.ts)</code>
- **OnError**: throws <code>[Tracks.GetSeveralTracksError](src/resources/tracks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tracks.getSeveralTracks(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ManyTracks, Tracks.GetSeveralTracksError&gt;</code>, with `result.value` of type <code>[ManyTracks](src/models/many-tracks.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTrack(request: Tracks.GetTrackRequest, options?: RequestOptions): ApiPromise&lt;TrackObject, Tracks.GetTrackError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Spotify catalog information for a single track identified by its
unique Spotify ID.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tracks.getTrack({ id: "11dFghVXANMlKmJXsNCbNl", market: "ES" });
  // TODO: Handle 'response' of type TrackObject
} catch (err) {
  // TODO: Handle 'err' of type Tracks.GetTrackError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tracks.getTrack({ id: "11dFghVXANMlKmJXsNCbNl", market: "ES" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TrackObject
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>market?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tracks.getTrack(request)`

- **OnSuccess**: <code>[TrackObject](src/models/track-object.ts)</code>
- **OnError**: throws <code>[Tracks.GetTrackError](src/resources/tracks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tracks.getTrack(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TrackObject, Tracks.GetTrackError&gt;</code>, with `result.value` of type <code>[TrackObject](src/models/track-object.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUsersSavedTracks(request: Tracks.GetUsersSavedTracksRequest, options?: RequestOptions): ApiPromise&lt;PagingSavedTrackObject, Tracks.GetUsersSavedTracksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of the songs saved in the current Spotify user's 'Your Music' library.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tracks.getUsersSavedTracks({ market: "ES", limit: 10, offset: 5 });
  // TODO: Handle 'response' of type PagingSavedTrackObject
} catch (err) {
  // TODO: Handle 'err' of type Tracks.GetUsersSavedTracksError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tracks.getUsersSavedTracks({ market: "ES", limit: 10, offset: 5 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PagingSavedTrackObject
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>market?</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 20 |
| <code>offset?</code> | <code>number</code> | -<br>**Default**: 0 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tracks.getUsersSavedTracks(request)`

- **OnSuccess**: <code>[PagingSavedTrackObject](src/models/paging-saved-track-object.ts)</code>
- **OnError**: throws <code>[Tracks.GetUsersSavedTracksError](src/resources/tracks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tracks.getUsersSavedTracks(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PagingSavedTrackObject, Tracks.GetUsersSavedTracksError&gt;</code>, with `result.value` of type <code>[PagingSavedTrackObject](src/models/paging-saved-track-object.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUsersTopTracks(request: Tracks.GetUsersTopTracksRequest, options?: RequestOptions): ApiPromise&lt;PagingTrackObject, Tracks.GetUsersTopTracksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the current user's top tracks based on calculated affinity.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tracks.getUsersTopTracks({ timeRange: "medium_term", limit: 10, offset: 5 });
  // TODO: Handle 'response' of type PagingTrackObject
} catch (err) {
  // TODO: Handle 'err' of type Tracks.GetUsersTopTracksError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tracks.getUsersTopTracks({
  timeRange: "medium_term",
  limit: 10,
  offset: 5,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PagingTrackObject
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timeRange?</code> | <code>string</code> | -<br>**Default**: "medium_term" |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 20 |
| <code>offset?</code> | <code>number</code> | -<br>**Default**: 0 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tracks.getUsersTopTracks(request)`

- **OnSuccess**: <code>[PagingTrackObject](src/models/paging-track-object.ts)</code>
- **OnError**: throws <code>[Tracks.GetUsersTopTracksError](src/resources/tracks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tracks.getUsersTopTracks(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PagingTrackObject, Tracks.GetUsersTopTracksError&gt;</code>, with `result.value` of type <code>[PagingTrackObject](src/models/paging-track-object.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>removeTracksPlaylist(request: Tracks.RemoveTracksPlaylistRequest, options?: RequestOptions): ApiPromise&lt;PlaylistSnapshotId, Tracks.RemoveTracksPlaylistError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove one or more items from a user's playlist.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tracks.removeTracksPlaylist({ playlistId: "3cEYpjA9oz9GiPac4AsH4n" });
  // TODO: Handle 'response' of type PlaylistSnapshotId
} catch (err) {
  // TODO: Handle 'err' of type Tracks.RemoveTracksPlaylistError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tracks.removeTracksPlaylist({
  playlistId: "3cEYpjA9oz9GiPac4AsH4n",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PlaylistSnapshotId
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>playlistId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[PlaylistsTracksRequest2](src/models/playlists-tracks-request2.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tracks.removeTracksPlaylist(request)`

- **OnSuccess**: <code>[PlaylistSnapshotId](src/models/playlist-snapshot-id.ts)</code>
- **OnError**: throws <code>[Tracks.RemoveTracksPlaylistError](src/resources/tracks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tracks.removeTracksPlaylist(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PlaylistSnapshotId, Tracks.RemoveTracksPlaylistError&gt;</code>, with `result.value` of type <code>[PlaylistSnapshotId](src/models/playlist-snapshot-id.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>removeTracksUser(request: Tracks.RemoveTracksUserRequest, options?: RequestOptions): ApiPromise&lt;undefined, Tracks.RemoveTracksUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove one or more tracks from the current user's 'Your Music' library.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.tracks.removeTracksUser({
    ids: "7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B",
  });
} catch (err) {
  // TODO: Handle 'err' of type Tracks.RemoveTracksUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tracks.removeTracksUser({
  ids: "7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |
| <code>body?</code> | <code>[RemoveTracksRequest](src/models/remove-tracks-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tracks.removeTracksUser(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Tracks.RemoveTracksUserError](src/resources/tracks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tracks.removeTracksUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Tracks.RemoveTracksUserError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>reorderOrReplacePlaylistsTracks(request: Tracks.ReorderOrReplacePlaylistsTracksRequest, options?: RequestOptions): ApiPromise&lt;PlaylistSnapshotId, Tracks.ReorderOrReplacePlaylistsTracksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Either reorder or replace items in a playlist depending on the request's parameters.
To reorder items, include `range_start`, `insert_before`, `range_length` and `snapshot_id` in the request's body.
To replace items, include `uris` as either a query parameter or in the request's body.
Replacing items in a playlist will overwrite its existing items. This operation can be used for replacing or clearing items in a playlist.
<br/>
**Note**: Replace and reorder are mutually exclusive operations which share the same endpoint, but have different parameters.
These operations can't be applied together in a single request.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tracks.reorderOrReplacePlaylistsTracks({
    playlistId: "3cEYpjA9oz9GiPac4AsH4n",
  });
  // TODO: Handle 'response' of type PlaylistSnapshotId
} catch (err) {
  // TODO: Handle 'err' of type Tracks.ReorderOrReplacePlaylistsTracksError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tracks.reorderOrReplacePlaylistsTracks({
  playlistId: "3cEYpjA9oz9GiPac4AsH4n",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PlaylistSnapshotId
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>playlistId</code> | <code>string</code> | - |
| <code>uris?</code> | <code>string</code> | - |
| <code>body?</code> | <code>[PlaylistsTracksRequest1](src/models/playlists-tracks-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tracks.reorderOrReplacePlaylistsTracks(request)`

- **OnSuccess**: <code>[PlaylistSnapshotId](src/models/playlist-snapshot-id.ts)</code>
- **OnError**: throws <code>[Tracks.ReorderOrReplacePlaylistsTracksError](src/resources/tracks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tracks.reorderOrReplacePlaylistsTracks(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PlaylistSnapshotId, Tracks.ReorderOrReplacePlaylistsTracksError&gt;</code>, with `result.value` of type <code>[PlaylistSnapshotId](src/models/playlist-snapshot-id.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>saveTracksUser(request: Tracks.SaveTracksUserRequest, options?: RequestOptions): ApiPromise&lt;undefined, Tracks.SaveTracksUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Save one or more tracks to the current user's 'Your Music' library.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.tracks.saveTracksUser({
    ids: "7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B",
  });
} catch (err) {
  // TODO: Handle 'err' of type Tracks.SaveTracksUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tracks.saveTracksUser({
  ids: "7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |
| <code>body?</code> | <code>[SaveTracksRequest](src/models/save-tracks-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tracks.saveTracksUser(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Tracks.SaveTracksUserError](src/resources/tracks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tracks.saveTracksUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Tracks.SaveTracksUserError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Library

> Source: [Library](src/resources/library.ts)

<details>
<summary><code>changePlaylistDetails(request: Library.ChangePlaylistDetailsRequest, options?: RequestOptions): ApiPromise&lt;undefined, Library.ChangePlaylistDetailsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Change a playlist's name and public/private state. (The user must, of
course, own the playlist.)


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.library.changePlaylistDetails({ playlistId: "3cEYpjA9oz9GiPac4AsH4n" });
} catch (err) {
  // TODO: Handle 'err' of type Library.ChangePlaylistDetailsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.library.changePlaylistDetails({
  playlistId: "3cEYpjA9oz9GiPac4AsH4n",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>playlistId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[PlaylistsRequest](src/models/playlists-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.library.changePlaylistDetails(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Library.ChangePlaylistDetailsError](src/resources/library.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.library.changePlaylistDetails(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Library.ChangePlaylistDetailsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>checkCurrentUserFollows(request: Library.CheckCurrentUserFollowsRequest, options?: RequestOptions): ApiPromise&lt;boolean[], Library.CheckCurrentUserFollowsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check to see if the current user is following one or more artists or other Spotify users.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.library.checkCurrentUserFollows({
    type: ItemType3.Artist,
    ids: "2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6",
  });
  // TODO: Handle 'response' of type boolean[]
} catch (err) {
  // TODO: Handle 'err' of type Library.CheckCurrentUserFollowsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.library.checkCurrentUserFollows({
  type: ItemType3.Artist,
  ids: "2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type boolean[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>type</code> | <code>[ItemType3](src/models/item-type3.ts)</code> | - |
| <code>ids</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.library.checkCurrentUserFollows(request)`

- **OnSuccess**: <code>boolean[]</code>
- **OnError**: throws <code>[Library.CheckCurrentUserFollowsError](src/resources/library.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.library.checkCurrentUserFollows(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;boolean[], Library.CheckCurrentUserFollowsError&gt;</code>, with `result.value` of type <code>boolean[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>checkUsersSavedAlbums(request: Library.CheckUsersSavedAlbumsRequest, options?: RequestOptions): ApiPromise&lt;boolean[], Library.CheckUsersSavedAlbumsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check if one or more albums is already saved in the current Spotify user's 'Your Music' library.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.library.checkUsersSavedAlbums({
    ids: "382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc",
  });
  // TODO: Handle 'response' of type boolean[]
} catch (err) {
  // TODO: Handle 'err' of type Library.CheckUsersSavedAlbumsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.library.checkUsersSavedAlbums({
  ids: "382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type boolean[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.library.checkUsersSavedAlbums(request)`

- **OnSuccess**: <code>boolean[]</code>
- **OnError**: throws <code>[Library.CheckUsersSavedAlbumsError](src/resources/library.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.library.checkUsersSavedAlbums(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;boolean[], Library.CheckUsersSavedAlbumsError&gt;</code>, with `result.value` of type <code>boolean[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>checkUsersSavedAudiobooks(request: Library.CheckUsersSavedAudiobooksRequest, options?: RequestOptions): ApiPromise&lt;boolean[], Library.CheckUsersSavedAudiobooksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check if one or more audiobooks are already saved in the current Spotify user's library.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.library.checkUsersSavedAudiobooks({
    ids: "18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ,7iHfbu1YPACw6oZPAFJtqe",
  });
  // TODO: Handle 'response' of type boolean[]
} catch (err) {
  // TODO: Handle 'err' of type Library.CheckUsersSavedAudiobooksError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.library.checkUsersSavedAudiobooks({
  ids: "18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ,7iHfbu1YPACw6oZPAFJtqe",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type boolean[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.library.checkUsersSavedAudiobooks(request)`

- **OnSuccess**: <code>boolean[]</code>
- **OnError**: throws <code>[Library.CheckUsersSavedAudiobooksError](src/resources/library.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.library.checkUsersSavedAudiobooks(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;boolean[], Library.CheckUsersSavedAudiobooksError&gt;</code>, with `result.value` of type <code>boolean[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>checkUsersSavedEpisodes(request: Library.CheckUsersSavedEpisodesRequest, options?: RequestOptions): ApiPromise&lt;boolean[], Library.CheckUsersSavedEpisodesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check if one or more episodes is already saved in the current Spotify user's 'Your Episodes' library.<br/>
This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)..


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.library.checkUsersSavedEpisodes({
    ids: "77o6BIVlYM3msb4MMIL1jH,0Q86acNRm6V9GYx55SXKwf",
  });
  // TODO: Handle 'response' of type boolean[]
} catch (err) {
  // TODO: Handle 'err' of type Library.CheckUsersSavedEpisodesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.library.checkUsersSavedEpisodes({
  ids: "77o6BIVlYM3msb4MMIL1jH,0Q86acNRm6V9GYx55SXKwf",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type boolean[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.library.checkUsersSavedEpisodes(request)`

- **OnSuccess**: <code>boolean[]</code>
- **OnError**: throws <code>[Library.CheckUsersSavedEpisodesError](src/resources/library.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.library.checkUsersSavedEpisodes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;boolean[], Library.CheckUsersSavedEpisodesError&gt;</code>, with `result.value` of type <code>boolean[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>checkUsersSavedShows(request: Library.CheckUsersSavedShowsRequest, options?: RequestOptions): ApiPromise&lt;boolean[], Library.CheckUsersSavedShowsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check if one or more shows is already saved in the current Spotify user's library.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.library.checkUsersSavedShows({
    ids: "5CfCWKI5pZ28U0uOzXkDHe,5as3aKmN2k11yfDDDSrvaZ",
  });
  // TODO: Handle 'response' of type boolean[]
} catch (err) {
  // TODO: Handle 'err' of type Library.CheckUsersSavedShowsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.library.checkUsersSavedShows({
  ids: "5CfCWKI5pZ28U0uOzXkDHe,5as3aKmN2k11yfDDDSrvaZ",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type boolean[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.library.checkUsersSavedShows(request)`

- **OnSuccess**: <code>boolean[]</code>
- **OnError**: throws <code>[Library.CheckUsersSavedShowsError](src/resources/library.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.library.checkUsersSavedShows(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;boolean[], Library.CheckUsersSavedShowsError&gt;</code>, with `result.value` of type <code>boolean[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>checkUsersSavedTracks(request: Library.CheckUsersSavedTracksRequest, options?: RequestOptions): ApiPromise&lt;boolean[], Library.CheckUsersSavedTracksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check if one or more tracks is already saved in the current Spotify user's 'Your Music' library.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.library.checkUsersSavedTracks({
    ids: "7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B",
  });
  // TODO: Handle 'response' of type boolean[]
} catch (err) {
  // TODO: Handle 'err' of type Library.CheckUsersSavedTracksError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.library.checkUsersSavedTracks({
  ids: "7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type boolean[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.library.checkUsersSavedTracks(request)`

- **OnSuccess**: <code>boolean[]</code>
- **OnError**: throws <code>[Library.CheckUsersSavedTracksError](src/resources/library.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.library.checkUsersSavedTracks(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;boolean[], Library.CheckUsersSavedTracksError&gt;</code>, with `result.value` of type <code>boolean[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createPlaylist(request: Library.CreatePlaylistRequest, options?: RequestOptions): ApiPromise&lt;PlaylistObject, Library.CreatePlaylistError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a playlist for a Spotify user. (The playlist will be empty until
you [add tracks](https://developer.spotify.com/documentation/web-api/reference/add-tracks-to-playlist).)
Each user is generally limited to a maximum of 11000 playlists.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.library.createPlaylist({ userId: "smedjan" });
  // TODO: Handle 'response' of type PlaylistObject
} catch (err) {
  // TODO: Handle 'err' of type Library.CreatePlaylistError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.library.createPlaylist({ userId: "smedjan" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PlaylistObject
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[UsersPlaylistsRequest](src/models/users-playlists-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.library.createPlaylist(request)`

- **OnSuccess**: <code>[PlaylistObject](src/models/playlist-object.ts)</code>
- **OnError**: throws <code>[Library.CreatePlaylistError](src/resources/library.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.library.createPlaylist(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PlaylistObject, Library.CreatePlaylistError&gt;</code>, with `result.value` of type <code>[PlaylistObject](src/models/playlist-object.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>followArtistsUsers(request: Library.FollowArtistsUsersRequest, options?: RequestOptions): ApiPromise&lt;undefined, Library.FollowArtistsUsersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add the current user as a follower of one or more artists or other Spotify users.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.library.followArtistsUsers({
    type: ItemType2.Artist,
    ids: "2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6",
  });
} catch (err) {
  // TODO: Handle 'err' of type Library.FollowArtistsUsersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.library.followArtistsUsers({
  type: ItemType2.Artist,
  ids: "2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>type</code> | <code>[ItemType2](src/models/item-type2.ts)</code> | - |
| <code>ids</code> | <code>string</code> | - |
| <code>body?</code> | <code>[FollowArtistsOrUsersRequest](src/models/follow-artists-or-users-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.library.followArtistsUsers(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Library.FollowArtistsUsersError](src/resources/library.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.library.followArtistsUsers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Library.FollowArtistsUsersError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAListOfCurrentUsersPlaylists(request: Library.GetAListOfCurrentUsersPlaylistsRequest, options?: RequestOptions): ApiPromise&lt;PagingPlaylistObject, Library.GetAListOfCurrentUsersPlaylistsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of the playlists owned or followed by the current Spotify
user.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.library.getAListOfCurrentUsersPlaylists({ limit: 10, offset: 5 });
  // TODO: Handle 'response' of type PagingPlaylistObject
} catch (err) {
  // TODO: Handle 'err' of type Library.GetAListOfCurrentUsersPlaylistsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.library.getAListOfCurrentUsersPlaylists({ limit: 10, offset: 5 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PagingPlaylistObject
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 20 |
| <code>offset?</code> | <code>number</code> | -<br>**Default**: 0 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.library.getAListOfCurrentUsersPlaylists(request)`

- **OnSuccess**: <code>[PagingPlaylistObject](src/models/paging-playlist-object.ts)</code>
- **OnError**: throws <code>[Library.GetAListOfCurrentUsersPlaylistsError](src/resources/library.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.library.getAListOfCurrentUsersPlaylists(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PagingPlaylistObject, Library.GetAListOfCurrentUsersPlaylistsError&gt;</code>, with `result.value` of type <code>[PagingPlaylistObject](src/models/paging-playlist-object.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getFollowed(request: Library.GetFollowedRequest, options?: RequestOptions): ApiPromise&lt;CursorPagedArtists, Library.GetFollowedError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the current user's followed artists.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.library.getFollowed({
    type: ItemType1.Artist,
    after: "0I2XqVXqHScXjHhk6AYYRe",
    limit: 10,
  });
  // TODO: Handle 'response' of type CursorPagedArtists
} catch (err) {
  // TODO: Handle 'err' of type Library.GetFollowedError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.library.getFollowed({
  type: ItemType1.Artist,
  after: "0I2XqVXqHScXjHhk6AYYRe",
  limit: 10,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CursorPagedArtists
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>type</code> | <code>[ItemType1](src/models/item-type1.ts)</code> | - |
| <code>after?</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 20 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.library.getFollowed(request)`

- **OnSuccess**: <code>[CursorPagedArtists](src/models/cursor-paged-artists.ts)</code>
- **OnError**: throws <code>[Library.GetFollowedError](src/resources/library.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.library.getFollowed(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CursorPagedArtists, Library.GetFollowedError&gt;</code>, with `result.value` of type <code>[CursorPagedArtists](src/models/cursor-paged-artists.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUsersSavedAlbums(request: Library.GetUsersSavedAlbumsRequest, options?: RequestOptions): ApiPromise&lt;PagingSavedAlbumObject, Library.GetUsersSavedAlbumsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of the albums saved in the current Spotify user's 'Your Music' library.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.library.getUsersSavedAlbums({ limit: 10, offset: 5, market: "ES" });
  // TODO: Handle 'response' of type PagingSavedAlbumObject
} catch (err) {
  // TODO: Handle 'err' of type Library.GetUsersSavedAlbumsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.library.getUsersSavedAlbums({ limit: 10, offset: 5, market: "ES" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PagingSavedAlbumObject
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 20 |
| <code>offset?</code> | <code>number</code> | -<br>**Default**: 0 |
| <code>market?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.library.getUsersSavedAlbums(request)`

- **OnSuccess**: <code>[PagingSavedAlbumObject](src/models/paging-saved-album-object.ts)</code>
- **OnError**: throws <code>[Library.GetUsersSavedAlbumsError](src/resources/library.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.library.getUsersSavedAlbums(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PagingSavedAlbumObject, Library.GetUsersSavedAlbumsError&gt;</code>, with `result.value` of type <code>[PagingSavedAlbumObject](src/models/paging-saved-album-object.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUsersSavedAudiobooks(request: Library.GetUsersSavedAudiobooksRequest, options?: RequestOptions): ApiPromise&lt;PagingSavedAudiobookObject, Library.GetUsersSavedAudiobooksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of the audiobooks saved in the current Spotify user's 'Your Music' library.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.library.getUsersSavedAudiobooks({ limit: 10, offset: 5 });
  // TODO: Handle 'response' of type PagingSavedAudiobookObject
} catch (err) {
  // TODO: Handle 'err' of type Library.GetUsersSavedAudiobooksError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.library.getUsersSavedAudiobooks({ limit: 10, offset: 5 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PagingSavedAudiobookObject
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 20 |
| <code>offset?</code> | <code>number</code> | -<br>**Default**: 0 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.library.getUsersSavedAudiobooks(request)`

- **OnSuccess**: <code>[PagingSavedAudiobookObject](src/models/paging-saved-audiobook-object.ts)</code>
- **OnError**: throws <code>[Library.GetUsersSavedAudiobooksError](src/resources/library.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.library.getUsersSavedAudiobooks(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PagingSavedAudiobookObject, Library.GetUsersSavedAudiobooksError&gt;</code>, with `result.value` of type <code>[PagingSavedAudiobookObject](src/models/paging-saved-audiobook-object.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUsersSavedEpisodes(request: Library.GetUsersSavedEpisodesRequest, options?: RequestOptions): ApiPromise&lt;PagingSavedEpisodeObject, Library.GetUsersSavedEpisodesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of the episodes saved in the current Spotify user's library.<br/>
This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer).


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.library.getUsersSavedEpisodes({ market: "ES", limit: 10, offset: 5 });
  // TODO: Handle 'response' of type PagingSavedEpisodeObject
} catch (err) {
  // TODO: Handle 'err' of type Library.GetUsersSavedEpisodesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.library.getUsersSavedEpisodes({
  market: "ES",
  limit: 10,
  offset: 5,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PagingSavedEpisodeObject
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>market?</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 20 |
| <code>offset?</code> | <code>number</code> | -<br>**Default**: 0 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.library.getUsersSavedEpisodes(request)`

- **OnSuccess**: <code>[PagingSavedEpisodeObject](src/models/paging-saved-episode-object.ts)</code>
- **OnError**: throws <code>[Library.GetUsersSavedEpisodesError](src/resources/library.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.library.getUsersSavedEpisodes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PagingSavedEpisodeObject, Library.GetUsersSavedEpisodesError&gt;</code>, with `result.value` of type <code>[PagingSavedEpisodeObject](src/models/paging-saved-episode-object.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUsersSavedShows(request: Library.GetUsersSavedShowsRequest, options?: RequestOptions): ApiPromise&lt;PagingSavedShowObject, Library.GetUsersSavedShowsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of shows saved in the current Spotify user's library. Optional parameters can be used to limit the number of shows returned.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.library.getUsersSavedShows({ limit: 10, offset: 5 });
  // TODO: Handle 'response' of type PagingSavedShowObject
} catch (err) {
  // TODO: Handle 'err' of type Library.GetUsersSavedShowsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.library.getUsersSavedShows({ limit: 10, offset: 5 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PagingSavedShowObject
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 20 |
| <code>offset?</code> | <code>number</code> | -<br>**Default**: 0 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.library.getUsersSavedShows(request)`

- **OnSuccess**: <code>[PagingSavedShowObject](src/models/paging-saved-show-object.ts)</code>
- **OnError**: throws <code>[Library.GetUsersSavedShowsError](src/resources/library.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.library.getUsersSavedShows(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PagingSavedShowObject, Library.GetUsersSavedShowsError&gt;</code>, with `result.value` of type <code>[PagingSavedShowObject](src/models/paging-saved-show-object.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUsersSavedTracks(request: Library.GetUsersSavedTracksRequest, options?: RequestOptions): ApiPromise&lt;PagingSavedTrackObject, Library.GetUsersSavedTracksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of the songs saved in the current Spotify user's 'Your Music' library.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.library.getUsersSavedTracks({ market: "ES", limit: 10, offset: 5 });
  // TODO: Handle 'response' of type PagingSavedTrackObject
} catch (err) {
  // TODO: Handle 'err' of type Library.GetUsersSavedTracksError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.library.getUsersSavedTracks({ market: "ES", limit: 10, offset: 5 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PagingSavedTrackObject
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>market?</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 20 |
| <code>offset?</code> | <code>number</code> | -<br>**Default**: 0 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.library.getUsersSavedTracks(request)`

- **OnSuccess**: <code>[PagingSavedTrackObject](src/models/paging-saved-track-object.ts)</code>
- **OnError**: throws <code>[Library.GetUsersSavedTracksError](src/resources/library.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.library.getUsersSavedTracks(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PagingSavedTrackObject, Library.GetUsersSavedTracksError&gt;</code>, with `result.value` of type <code>[PagingSavedTrackObject](src/models/paging-saved-track-object.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUsersTopArtists(request: Library.GetUsersTopArtistsRequest, options?: RequestOptions): ApiPromise&lt;PagingArtistObject, Library.GetUsersTopArtistsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the current user's top artists based on calculated affinity.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.library.getUsersTopArtists({
    timeRange: "medium_term",
    limit: 10,
    offset: 5,
  });
  // TODO: Handle 'response' of type PagingArtistObject
} catch (err) {
  // TODO: Handle 'err' of type Library.GetUsersTopArtistsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.library.getUsersTopArtists({
  timeRange: "medium_term",
  limit: 10,
  offset: 5,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PagingArtistObject
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timeRange?</code> | <code>string</code> | -<br>**Default**: "medium_term" |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 20 |
| <code>offset?</code> | <code>number</code> | -<br>**Default**: 0 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.library.getUsersTopArtists(request)`

- **OnSuccess**: <code>[PagingArtistObject](src/models/paging-artist-object.ts)</code>
- **OnError**: throws <code>[Library.GetUsersTopArtistsError](src/resources/library.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.library.getUsersTopArtists(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PagingArtistObject, Library.GetUsersTopArtistsError&gt;</code>, with `result.value` of type <code>[PagingArtistObject](src/models/paging-artist-object.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUsersTopTracks(request: Library.GetUsersTopTracksRequest, options?: RequestOptions): ApiPromise&lt;PagingTrackObject, Library.GetUsersTopTracksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the current user's top tracks based on calculated affinity.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.library.getUsersTopTracks({ timeRange: "medium_term", limit: 10, offset: 5 });
  // TODO: Handle 'response' of type PagingTrackObject
} catch (err) {
  // TODO: Handle 'err' of type Library.GetUsersTopTracksError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.library.getUsersTopTracks({
  timeRange: "medium_term",
  limit: 10,
  offset: 5,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PagingTrackObject
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timeRange?</code> | <code>string</code> | -<br>**Default**: "medium_term" |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 20 |
| <code>offset?</code> | <code>number</code> | -<br>**Default**: 0 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.library.getUsersTopTracks(request)`

- **OnSuccess**: <code>[PagingTrackObject](src/models/paging-track-object.ts)</code>
- **OnError**: throws <code>[Library.GetUsersTopTracksError](src/resources/library.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.library.getUsersTopTracks(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PagingTrackObject, Library.GetUsersTopTracksError&gt;</code>, with `result.value` of type <code>[PagingTrackObject](src/models/paging-track-object.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>removeAlbumsUser(request: Library.RemoveAlbumsUserRequest, options?: RequestOptions): ApiPromise&lt;undefined, Library.RemoveAlbumsUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove one or more albums from the current user's 'Your Music' library.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.library.removeAlbumsUser({
    ids: "382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc",
  });
} catch (err) {
  // TODO: Handle 'err' of type Library.RemoveAlbumsUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.library.removeAlbumsUser({
  ids: "382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |
| <code>body?</code> | <code>[RemoveAlbumsRequest](src/models/remove-albums-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.library.removeAlbumsUser(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Library.RemoveAlbumsUserError](src/resources/library.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.library.removeAlbumsUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Library.RemoveAlbumsUserError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>removeAudiobooksUser(request: Library.RemoveAudiobooksUserRequest, options?: RequestOptions): ApiPromise&lt;undefined, Library.RemoveAudiobooksUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove one or more audiobooks from the Spotify user's library.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.library.removeAudiobooksUser({
    ids: "18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ,7iHfbu1YPACw6oZPAFJtqe",
  });
} catch (err) {
  // TODO: Handle 'err' of type Library.RemoveAudiobooksUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.library.removeAudiobooksUser({
  ids: "18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ,7iHfbu1YPACw6oZPAFJtqe",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.library.removeAudiobooksUser(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Library.RemoveAudiobooksUserError](src/resources/library.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.library.removeAudiobooksUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Library.RemoveAudiobooksUserError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>removeEpisodesUser(request: Library.RemoveEpisodesUserRequest, options?: RequestOptions): ApiPromise&lt;undefined, Library.RemoveEpisodesUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove one or more episodes from the current user's library.<br/>
This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer).


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.library.removeEpisodesUser({
    ids: "7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B",
  });
} catch (err) {
  // TODO: Handle 'err' of type Library.RemoveEpisodesUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.library.removeEpisodesUser({
  ids: "7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |
| <code>body?</code> | <code>[RemoveEpisodesRequest](src/models/remove-episodes-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.library.removeEpisodesUser(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Library.RemoveEpisodesUserError](src/resources/library.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.library.removeEpisodesUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Library.RemoveEpisodesUserError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>removeShowsUser(request: Library.RemoveShowsUserRequest, options?: RequestOptions): ApiPromise&lt;undefined, Library.RemoveShowsUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete one or more shows from current Spotify user's library.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.library.removeShowsUser({
    ids: "5CfCWKI5pZ28U0uOzXkDHe,5as3aKmN2k11yfDDDSrvaZ",
    market: "ES",
  });
} catch (err) {
  // TODO: Handle 'err' of type Library.RemoveShowsUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.library.removeShowsUser({
  ids: "5CfCWKI5pZ28U0uOzXkDHe,5as3aKmN2k11yfDDDSrvaZ",
  market: "ES",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |
| <code>market?</code> | <code>string</code> | - |
| <code>body?</code> | <code>[RemoveShowsRequest](src/models/remove-shows-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.library.removeShowsUser(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Library.RemoveShowsUserError](src/resources/library.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.library.removeShowsUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Library.RemoveShowsUserError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>removeTracksUser(request: Library.RemoveTracksUserRequest, options?: RequestOptions): ApiPromise&lt;undefined, Library.RemoveTracksUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove one or more tracks from the current user's 'Your Music' library.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.library.removeTracksUser({
    ids: "7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B",
  });
} catch (err) {
  // TODO: Handle 'err' of type Library.RemoveTracksUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.library.removeTracksUser({
  ids: "7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |
| <code>body?</code> | <code>[RemoveTracksRequest](src/models/remove-tracks-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.library.removeTracksUser(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Library.RemoveTracksUserError](src/resources/library.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.library.removeTracksUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Library.RemoveTracksUserError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>saveAlbumsUser(request: Library.SaveAlbumsUserRequest, options?: RequestOptions): ApiPromise&lt;undefined, Library.SaveAlbumsUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Save one or more albums to the current user's 'Your Music' library.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.library.saveAlbumsUser({
    ids: "382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc",
  });
} catch (err) {
  // TODO: Handle 'err' of type Library.SaveAlbumsUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.library.saveAlbumsUser({
  ids: "382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |
| <code>body?</code> | <code>[SaveAlbumsRequest](src/models/save-albums-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.library.saveAlbumsUser(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Library.SaveAlbumsUserError](src/resources/library.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.library.saveAlbumsUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Library.SaveAlbumsUserError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>saveAudiobooksUser(request: Library.SaveAudiobooksUserRequest, options?: RequestOptions): ApiPromise&lt;undefined, Library.SaveAudiobooksUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Save one or more audiobooks to the current Spotify user's library.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.library.saveAudiobooksUser({
    ids: "18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ,7iHfbu1YPACw6oZPAFJtqe",
  });
} catch (err) {
  // TODO: Handle 'err' of type Library.SaveAudiobooksUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.library.saveAudiobooksUser({
  ids: "18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ,7iHfbu1YPACw6oZPAFJtqe",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.library.saveAudiobooksUser(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Library.SaveAudiobooksUserError](src/resources/library.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.library.saveAudiobooksUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Library.SaveAudiobooksUserError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>saveEpisodesUser(request: Library.SaveEpisodesUserRequest, options?: RequestOptions): ApiPromise&lt;undefined, Library.SaveEpisodesUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Save one or more episodes to the current user's library.<br/>
This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer).


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.library.saveEpisodesUser({ ids: "77o6BIVlYM3msb4MMIL1jH,0Q86acNRm6V9GYx55SXKwf" });
} catch (err) {
  // TODO: Handle 'err' of type Library.SaveEpisodesUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.library.saveEpisodesUser({
  ids: "77o6BIVlYM3msb4MMIL1jH,0Q86acNRm6V9GYx55SXKwf",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |
| <code>body?</code> | <code>[SaveEpisodesRequest](src/models/save-episodes-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.library.saveEpisodesUser(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Library.SaveEpisodesUserError](src/resources/library.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.library.saveEpisodesUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Library.SaveEpisodesUserError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>saveShowsUser(request: Library.SaveShowsUserRequest, options?: RequestOptions): ApiPromise&lt;undefined, Library.SaveShowsUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Save one or more shows to current Spotify user's library.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.library.saveShowsUser({ ids: "5CfCWKI5pZ28U0uOzXkDHe,5as3aKmN2k11yfDDDSrvaZ" });
} catch (err) {
  // TODO: Handle 'err' of type Library.SaveShowsUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.library.saveShowsUser({
  ids: "5CfCWKI5pZ28U0uOzXkDHe,5as3aKmN2k11yfDDDSrvaZ",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |
| <code>body?</code> | <code>[SaveShowsRequest](src/models/save-shows-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.library.saveShowsUser(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Library.SaveShowsUserError](src/resources/library.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.library.saveShowsUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Library.SaveShowsUserError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>saveTracksUser(request: Library.SaveTracksUserRequest, options?: RequestOptions): ApiPromise&lt;undefined, Library.SaveTracksUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Save one or more tracks to the current user's 'Your Music' library.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.library.saveTracksUser({
    ids: "7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B",
  });
} catch (err) {
  // TODO: Handle 'err' of type Library.SaveTracksUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.library.saveTracksUser({
  ids: "7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |
| <code>body?</code> | <code>[SaveTracksRequest](src/models/save-tracks-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.library.saveTracksUser(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Library.SaveTracksUserError](src/resources/library.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.library.saveTracksUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Library.SaveTracksUserError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>unfollowArtistsUsers(request: Library.UnfollowArtistsUsersRequest, options?: RequestOptions): ApiPromise&lt;undefined, Library.UnfollowArtistsUsersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove the current user as a follower of one or more artists or other Spotify users.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.library.unfollowArtistsUsers({
    type: ItemType3.Artist,
    ids: "2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6",
  });
} catch (err) {
  // TODO: Handle 'err' of type Library.UnfollowArtistsUsersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.library.unfollowArtistsUsers({
  type: ItemType3.Artist,
  ids: "2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>type</code> | <code>[ItemType3](src/models/item-type3.ts)</code> | - |
| <code>ids</code> | <code>string</code> | - |
| <code>body?</code> | <code>[UnfollowArtistsOrUsersRequest](src/models/unfollow-artists-or-users-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.library.unfollowArtistsUsers(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Library.UnfollowArtistsUsersError](src/resources/library.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.library.unfollowArtistsUsers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Library.UnfollowArtistsUsersError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Artists

> Source: [Artists](src/resources/artists.ts)

<details>
<summary><code>checkCurrentUserFollows(request: Artists.CheckCurrentUserFollowsRequest, options?: RequestOptions): ApiPromise&lt;boolean[], Artists.CheckCurrentUserFollowsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check to see if the current user is following one or more artists or other Spotify users.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.artists.checkCurrentUserFollows({
    type: ItemType3.Artist,
    ids: "2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6",
  });
  // TODO: Handle 'response' of type boolean[]
} catch (err) {
  // TODO: Handle 'err' of type Artists.CheckCurrentUserFollowsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.artists.checkCurrentUserFollows({
  type: ItemType3.Artist,
  ids: "2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type boolean[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>type</code> | <code>[ItemType3](src/models/item-type3.ts)</code> | - |
| <code>ids</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.artists.checkCurrentUserFollows(request)`

- **OnSuccess**: <code>boolean[]</code>
- **OnError**: throws <code>[Artists.CheckCurrentUserFollowsError](src/resources/artists.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.artists.checkCurrentUserFollows(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;boolean[], Artists.CheckCurrentUserFollowsError&gt;</code>, with `result.value` of type <code>boolean[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>followArtistsUsers(request: Artists.FollowArtistsUsersRequest, options?: RequestOptions): ApiPromise&lt;undefined, Artists.FollowArtistsUsersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add the current user as a follower of one or more artists or other Spotify users.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.artists.followArtistsUsers({
    type: ItemType2.Artist,
    ids: "2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6",
  });
} catch (err) {
  // TODO: Handle 'err' of type Artists.FollowArtistsUsersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.artists.followArtistsUsers({
  type: ItemType2.Artist,
  ids: "2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>type</code> | <code>[ItemType2](src/models/item-type2.ts)</code> | - |
| <code>ids</code> | <code>string</code> | - |
| <code>body?</code> | <code>[FollowArtistsOrUsersRequest](src/models/follow-artists-or-users-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.artists.followArtistsUsers(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Artists.FollowArtistsUsersError](src/resources/artists.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.artists.followArtistsUsers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Artists.FollowArtistsUsersError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAnArtist(request: Artists.GetAnArtistRequest, options?: RequestOptions): ApiPromise&lt;ArtistObject, Artists.GetAnArtistError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Spotify catalog information for a single artist identified by their unique Spotify ID.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.artists.getAnArtist({ id: "0TnOYISbd1XYRBk9myaseg" });
  // TODO: Handle 'response' of type ArtistObject
} catch (err) {
  // TODO: Handle 'err' of type Artists.GetAnArtistError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.artists.getAnArtist({ id: "0TnOYISbd1XYRBk9myaseg" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ArtistObject
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.artists.getAnArtist(request)`

- **OnSuccess**: <code>[ArtistObject](src/models/artist-object.ts)</code>
- **OnError**: throws <code>[Artists.GetAnArtistError](src/resources/artists.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.artists.getAnArtist(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ArtistObject, Artists.GetAnArtistError&gt;</code>, with `result.value` of type <code>[ArtistObject](src/models/artist-object.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAnArtistsAlbums(request: Artists.GetAnArtistsAlbumsRequest, options?: RequestOptions): ApiPromise&lt;PagingArtistDiscographyAlbumObject, Artists.GetAnArtistsAlbumsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Spotify catalog information about an artist's albums.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.artists.getAnArtistsAlbums({
    id: "0TnOYISbd1XYRBk9myaseg",
    includeGroups: "single,appears_on",
    market: "ES",
    limit: 10,
    offset: 5,
  });
  // TODO: Handle 'response' of type PagingArtistDiscographyAlbumObject
} catch (err) {
  // TODO: Handle 'err' of type Artists.GetAnArtistsAlbumsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.artists.getAnArtistsAlbums({
  id: "0TnOYISbd1XYRBk9myaseg",
  includeGroups: "single,appears_on",
  market: "ES",
  limit: 10,
  offset: 5,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PagingArtistDiscographyAlbumObject
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>includeGroups?</code> | <code>string</code> | - |
| <code>market?</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 20 |
| <code>offset?</code> | <code>number</code> | -<br>**Default**: 0 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.artists.getAnArtistsAlbums(request)`

- **OnSuccess**: <code>[PagingArtistDiscographyAlbumObject](src/models/paging-artist-discography-album-object.ts)</code>
- **OnError**: throws <code>[Artists.GetAnArtistsAlbumsError](src/resources/artists.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.artists.getAnArtistsAlbums(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PagingArtistDiscographyAlbumObject, Artists.GetAnArtistsAlbumsError&gt;</code>, with `result.value` of type <code>[PagingArtistDiscographyAlbumObject](src/models/paging-artist-discography-album-object.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAnArtistsRelatedArtists(request: Artists.GetAnArtistsRelatedArtistsRequest, options?: RequestOptions): ApiPromise&lt;ManyArtists, Artists.GetAnArtistsRelatedArtistsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Spotify catalog information about artists similar to a given artist. Similarity is based on analysis of the Spotify community's listening history.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.artists.getAnArtistsRelatedArtists({ id: "0TnOYISbd1XYRBk9myaseg" });
  // TODO: Handle 'response' of type ManyArtists
} catch (err) {
  // TODO: Handle 'err' of type Artists.GetAnArtistsRelatedArtistsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.artists.getAnArtistsRelatedArtists({
  id: "0TnOYISbd1XYRBk9myaseg",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ManyArtists
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.artists.getAnArtistsRelatedArtists(request)`

- **OnSuccess**: <code>[ManyArtists](src/models/many-artists.ts)</code>
- **OnError**: throws <code>[Artists.GetAnArtistsRelatedArtistsError](src/resources/artists.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.artists.getAnArtistsRelatedArtists(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ManyArtists, Artists.GetAnArtistsRelatedArtistsError&gt;</code>, with `result.value` of type <code>[ManyArtists](src/models/many-artists.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAnArtistsTopTracks(request: Artists.GetAnArtistsTopTracksRequest, options?: RequestOptions): ApiPromise&lt;ManyTracks, Artists.GetAnArtistsTopTracksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Spotify catalog information about an artist's top tracks by country.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.artists.getAnArtistsTopTracks({ id: "0TnOYISbd1XYRBk9myaseg", market: "ES" });
  // TODO: Handle 'response' of type ManyTracks
} catch (err) {
  // TODO: Handle 'err' of type Artists.GetAnArtistsTopTracksError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.artists.getAnArtistsTopTracks({
  id: "0TnOYISbd1XYRBk9myaseg",
  market: "ES",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ManyTracks
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>market?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.artists.getAnArtistsTopTracks(request)`

- **OnSuccess**: <code>[ManyTracks](src/models/many-tracks.ts)</code>
- **OnError**: throws <code>[Artists.GetAnArtistsTopTracksError](src/resources/artists.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.artists.getAnArtistsTopTracks(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ManyTracks, Artists.GetAnArtistsTopTracksError&gt;</code>, with `result.value` of type <code>[ManyTracks](src/models/many-tracks.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getFollowed(request: Artists.GetFollowedRequest, options?: RequestOptions): ApiPromise&lt;CursorPagedArtists, Artists.GetFollowedError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the current user's followed artists.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.artists.getFollowed({
    type: ItemType1.Artist,
    after: "0I2XqVXqHScXjHhk6AYYRe",
    limit: 10,
  });
  // TODO: Handle 'response' of type CursorPagedArtists
} catch (err) {
  // TODO: Handle 'err' of type Artists.GetFollowedError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.artists.getFollowed({
  type: ItemType1.Artist,
  after: "0I2XqVXqHScXjHhk6AYYRe",
  limit: 10,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CursorPagedArtists
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>type</code> | <code>[ItemType1](src/models/item-type1.ts)</code> | - |
| <code>after?</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 20 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.artists.getFollowed(request)`

- **OnSuccess**: <code>[CursorPagedArtists](src/models/cursor-paged-artists.ts)</code>
- **OnError**: throws <code>[Artists.GetFollowedError](src/resources/artists.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.artists.getFollowed(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CursorPagedArtists, Artists.GetFollowedError&gt;</code>, with `result.value` of type <code>[CursorPagedArtists](src/models/cursor-paged-artists.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMultipleArtists(request: Artists.GetMultipleArtistsRequest, options?: RequestOptions): ApiPromise&lt;ManyArtists, Artists.GetMultipleArtistsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Spotify catalog information for several artists based on their Spotify IDs.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.artists.getMultipleArtists({
    ids: "2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6",
  });
  // TODO: Handle 'response' of type ManyArtists
} catch (err) {
  // TODO: Handle 'err' of type Artists.GetMultipleArtistsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.artists.getMultipleArtists({
  ids: "2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ManyArtists
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.artists.getMultipleArtists(request)`

- **OnSuccess**: <code>[ManyArtists](src/models/many-artists.ts)</code>
- **OnError**: throws <code>[Artists.GetMultipleArtistsError](src/resources/artists.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.artists.getMultipleArtists(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ManyArtists, Artists.GetMultipleArtistsError&gt;</code>, with `result.value` of type <code>[ManyArtists](src/models/many-artists.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUsersTopArtists(request: Artists.GetUsersTopArtistsRequest, options?: RequestOptions): ApiPromise&lt;PagingArtistObject, Artists.GetUsersTopArtistsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the current user's top artists based on calculated affinity.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.artists.getUsersTopArtists({
    timeRange: "medium_term",
    limit: 10,
    offset: 5,
  });
  // TODO: Handle 'response' of type PagingArtistObject
} catch (err) {
  // TODO: Handle 'err' of type Artists.GetUsersTopArtistsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.artists.getUsersTopArtists({
  timeRange: "medium_term",
  limit: 10,
  offset: 5,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PagingArtistObject
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timeRange?</code> | <code>string</code> | -<br>**Default**: "medium_term" |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 20 |
| <code>offset?</code> | <code>number</code> | -<br>**Default**: 0 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.artists.getUsersTopArtists(request)`

- **OnSuccess**: <code>[PagingArtistObject](src/models/paging-artist-object.ts)</code>
- **OnError**: throws <code>[Artists.GetUsersTopArtistsError](src/resources/artists.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.artists.getUsersTopArtists(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PagingArtistObject, Artists.GetUsersTopArtistsError&gt;</code>, with `result.value` of type <code>[PagingArtistObject](src/models/paging-artist-object.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>unfollowArtistsUsers(request: Artists.UnfollowArtistsUsersRequest, options?: RequestOptions): ApiPromise&lt;undefined, Artists.UnfollowArtistsUsersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove the current user as a follower of one or more artists or other Spotify users.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.artists.unfollowArtistsUsers({
    type: ItemType3.Artist,
    ids: "2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6",
  });
} catch (err) {
  // TODO: Handle 'err' of type Artists.UnfollowArtistsUsersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.artists.unfollowArtistsUsers({
  type: ItemType3.Artist,
  ids: "2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>type</code> | <code>[ItemType3](src/models/item-type3.ts)</code> | - |
| <code>ids</code> | <code>string</code> | - |
| <code>body?</code> | <code>[UnfollowArtistsOrUsersRequest](src/models/unfollow-artists-or-users-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.artists.unfollowArtistsUsers(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Artists.UnfollowArtistsUsersError](src/resources/artists.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.artists.unfollowArtistsUsers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Artists.UnfollowArtistsUsersError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Audiobooks

> Source: [Audiobooks](src/resources/audiobooks.ts)

<details>
<summary><code>checkUsersSavedAudiobooks(request: Audiobooks.CheckUsersSavedAudiobooksRequest, options?: RequestOptions): ApiPromise&lt;boolean[], Audiobooks.CheckUsersSavedAudiobooksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check if one or more audiobooks are already saved in the current Spotify user's library.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.audiobooks.checkUsersSavedAudiobooks({
    ids: "18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ,7iHfbu1YPACw6oZPAFJtqe",
  });
  // TODO: Handle 'response' of type boolean[]
} catch (err) {
  // TODO: Handle 'err' of type Audiobooks.CheckUsersSavedAudiobooksError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.audiobooks.checkUsersSavedAudiobooks({
  ids: "18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ,7iHfbu1YPACw6oZPAFJtqe",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type boolean[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.audiobooks.checkUsersSavedAudiobooks(request)`

- **OnSuccess**: <code>boolean[]</code>
- **OnError**: throws <code>[Audiobooks.CheckUsersSavedAudiobooksError](src/resources/audiobooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.audiobooks.checkUsersSavedAudiobooks(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;boolean[], Audiobooks.CheckUsersSavedAudiobooksError&gt;</code>, with `result.value` of type <code>boolean[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAnAudiobook(request: Audiobooks.GetAnAudiobookRequest, options?: RequestOptions): ApiPromise&lt;AudiobookObject, Audiobooks.GetAnAudiobookError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Spotify catalog information for a single audiobook. Audiobooks are only available within the US, UK, Canada, Ireland, New Zealand and Australia markets.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.audiobooks.getAnAudiobook({ id: "7iHfbu1YPACw6oZPAFJtqe", market: "ES" });
  // TODO: Handle 'response' of type AudiobookObject
} catch (err) {
  // TODO: Handle 'err' of type Audiobooks.GetAnAudiobookError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.audiobooks.getAnAudiobook({
  id: "7iHfbu1YPACw6oZPAFJtqe",
  market: "ES",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AudiobookObject
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>market?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.audiobooks.getAnAudiobook(request)`

- **OnSuccess**: <code>[AudiobookObject](src/models/audiobook-object.ts)</code>
- **OnError**: throws <code>[Audiobooks.GetAnAudiobookError](src/resources/audiobooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.audiobooks.getAnAudiobook(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AudiobookObject, Audiobooks.GetAnAudiobookError&gt;</code>, with `result.value` of type <code>[AudiobookObject](src/models/audiobook-object.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAudiobookChapters(request: Audiobooks.GetAudiobookChaptersRequest, options?: RequestOptions): ApiPromise&lt;PagingSimplifiedChapterObject, Audiobooks.GetAudiobookChaptersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Spotify catalog information about an audiobook's chapters. Audiobooks are only available within the US, UK, Canada, Ireland, New Zealand and Australia markets.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.audiobooks.getAudiobookChapters({
    id: "7iHfbu1YPACw6oZPAFJtqe",
    market: "ES",
    limit: 10,
    offset: 5,
  });
  // TODO: Handle 'response' of type PagingSimplifiedChapterObject
} catch (err) {
  // TODO: Handle 'err' of type Audiobooks.GetAudiobookChaptersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.audiobooks.getAudiobookChapters({
  id: "7iHfbu1YPACw6oZPAFJtqe",
  market: "ES",
  limit: 10,
  offset: 5,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PagingSimplifiedChapterObject
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>market?</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 20 |
| <code>offset?</code> | <code>number</code> | -<br>**Default**: 0 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.audiobooks.getAudiobookChapters(request)`

- **OnSuccess**: <code>[PagingSimplifiedChapterObject](src/models/paging-simplified-chapter-object.ts)</code>
- **OnError**: throws <code>[Audiobooks.GetAudiobookChaptersError](src/resources/audiobooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.audiobooks.getAudiobookChapters(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PagingSimplifiedChapterObject, Audiobooks.GetAudiobookChaptersError&gt;</code>, with `result.value` of type <code>[PagingSimplifiedChapterObject](src/models/paging-simplified-chapter-object.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMultipleAudiobooks(request: Audiobooks.GetMultipleAudiobooksRequest, options?: RequestOptions): ApiPromise&lt;ManyAudiobooks, Audiobooks.GetMultipleAudiobooksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Spotify catalog information for several audiobooks identified by their Spotify IDs. Audiobooks are only available within the US, UK, Canada, Ireland, New Zealand and Australia markets.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.audiobooks.getMultipleAudiobooks({
    ids: "18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ,7iHfbu1YPACw6oZPAFJtqe",
    market: "ES",
  });
  // TODO: Handle 'response' of type ManyAudiobooks
} catch (err) {
  // TODO: Handle 'err' of type Audiobooks.GetMultipleAudiobooksError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.audiobooks.getMultipleAudiobooks({
  ids: "18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ,7iHfbu1YPACw6oZPAFJtqe",
  market: "ES",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ManyAudiobooks
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |
| <code>market?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.audiobooks.getMultipleAudiobooks(request)`

- **OnSuccess**: <code>[ManyAudiobooks](src/models/many-audiobooks.ts)</code>
- **OnError**: throws <code>[Audiobooks.GetMultipleAudiobooksError](src/resources/audiobooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.audiobooks.getMultipleAudiobooks(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ManyAudiobooks, Audiobooks.GetMultipleAudiobooksError&gt;</code>, with `result.value` of type <code>[ManyAudiobooks](src/models/many-audiobooks.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUsersSavedAudiobooks(request: Audiobooks.GetUsersSavedAudiobooksRequest, options?: RequestOptions): ApiPromise&lt;PagingSavedAudiobookObject, Audiobooks.GetUsersSavedAudiobooksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of the audiobooks saved in the current Spotify user's 'Your Music' library.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.audiobooks.getUsersSavedAudiobooks({ limit: 10, offset: 5 });
  // TODO: Handle 'response' of type PagingSavedAudiobookObject
} catch (err) {
  // TODO: Handle 'err' of type Audiobooks.GetUsersSavedAudiobooksError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.audiobooks.getUsersSavedAudiobooks({ limit: 10, offset: 5 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PagingSavedAudiobookObject
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 20 |
| <code>offset?</code> | <code>number</code> | -<br>**Default**: 0 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.audiobooks.getUsersSavedAudiobooks(request)`

- **OnSuccess**: <code>[PagingSavedAudiobookObject](src/models/paging-saved-audiobook-object.ts)</code>
- **OnError**: throws <code>[Audiobooks.GetUsersSavedAudiobooksError](src/resources/audiobooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.audiobooks.getUsersSavedAudiobooks(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PagingSavedAudiobookObject, Audiobooks.GetUsersSavedAudiobooksError&gt;</code>, with `result.value` of type <code>[PagingSavedAudiobookObject](src/models/paging-saved-audiobook-object.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>removeAudiobooksUser(request: Audiobooks.RemoveAudiobooksUserRequest, options?: RequestOptions): ApiPromise&lt;undefined, Audiobooks.RemoveAudiobooksUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove one or more audiobooks from the Spotify user's library.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.audiobooks.removeAudiobooksUser({
    ids: "18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ,7iHfbu1YPACw6oZPAFJtqe",
  });
} catch (err) {
  // TODO: Handle 'err' of type Audiobooks.RemoveAudiobooksUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.audiobooks.removeAudiobooksUser({
  ids: "18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ,7iHfbu1YPACw6oZPAFJtqe",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.audiobooks.removeAudiobooksUser(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Audiobooks.RemoveAudiobooksUserError](src/resources/audiobooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.audiobooks.removeAudiobooksUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Audiobooks.RemoveAudiobooksUserError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>saveAudiobooksUser(request: Audiobooks.SaveAudiobooksUserRequest, options?: RequestOptions): ApiPromise&lt;undefined, Audiobooks.SaveAudiobooksUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Save one or more audiobooks to the current Spotify user's library.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.audiobooks.saveAudiobooksUser({
    ids: "18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ,7iHfbu1YPACw6oZPAFJtqe",
  });
} catch (err) {
  // TODO: Handle 'err' of type Audiobooks.SaveAudiobooksUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.audiobooks.saveAudiobooksUser({
  ids: "18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ,7iHfbu1YPACw6oZPAFJtqe",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.audiobooks.saveAudiobooksUser(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Audiobooks.SaveAudiobooksUserError](src/resources/audiobooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.audiobooks.saveAudiobooksUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Audiobooks.SaveAudiobooksUserError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Chapters

> Source: [Chapters](src/resources/chapters.ts)

<details>
<summary><code>getAChapter(request: Chapters.GetAChapterRequest, options?: RequestOptions): ApiPromise&lt;ChapterObject, Chapters.GetAChapterError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Spotify catalog information for a single audiobook chapter. Chapters are only available within the US, UK, Canada, Ireland, New Zealand and Australia markets.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.chapters.getAChapter({ id: "0D5wENdkdwbqlrHoaJ9g29", market: "ES" });
  // TODO: Handle 'response' of type ChapterObject
} catch (err) {
  // TODO: Handle 'err' of type Chapters.GetAChapterError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.chapters.getAChapter({
  id: "0D5wENdkdwbqlrHoaJ9g29",
  market: "ES",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ChapterObject
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>market?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.chapters.getAChapter(request)`

- **OnSuccess**: <code>[ChapterObject](src/models/chapter-object.ts)</code>
- **OnError**: throws <code>[Chapters.GetAChapterError](src/resources/chapters.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.chapters.getAChapter(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ChapterObject, Chapters.GetAChapterError&gt;</code>, with `result.value` of type <code>[ChapterObject](src/models/chapter-object.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAudiobookChapters(request: Chapters.GetAudiobookChaptersRequest, options?: RequestOptions): ApiPromise&lt;PagingSimplifiedChapterObject, Chapters.GetAudiobookChaptersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Spotify catalog information about an audiobook's chapters. Audiobooks are only available within the US, UK, Canada, Ireland, New Zealand and Australia markets.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.chapters.getAudiobookChapters({
    id: "7iHfbu1YPACw6oZPAFJtqe",
    market: "ES",
    limit: 10,
    offset: 5,
  });
  // TODO: Handle 'response' of type PagingSimplifiedChapterObject
} catch (err) {
  // TODO: Handle 'err' of type Chapters.GetAudiobookChaptersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.chapters.getAudiobookChapters({
  id: "7iHfbu1YPACw6oZPAFJtqe",
  market: "ES",
  limit: 10,
  offset: 5,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PagingSimplifiedChapterObject
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>market?</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 20 |
| <code>offset?</code> | <code>number</code> | -<br>**Default**: 0 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.chapters.getAudiobookChapters(request)`

- **OnSuccess**: <code>[PagingSimplifiedChapterObject](src/models/paging-simplified-chapter-object.ts)</code>
- **OnError**: throws <code>[Chapters.GetAudiobookChaptersError](src/resources/chapters.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.chapters.getAudiobookChapters(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PagingSimplifiedChapterObject, Chapters.GetAudiobookChaptersError&gt;</code>, with `result.value` of type <code>[PagingSimplifiedChapterObject](src/models/paging-simplified-chapter-object.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSeveralChapters(request: Chapters.GetSeveralChaptersRequest, options?: RequestOptions): ApiPromise&lt;ManyChapters, Chapters.GetSeveralChaptersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Spotify catalog information for several audiobook chapters identified by their Spotify IDs. Chapters are only available within the US, UK, Canada, Ireland, New Zealand and Australia markets.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.chapters.getSeveralChapters({
    ids: "0IsXVP0JmcB2adSE338GkK,3ZXb8FKZGU0EHALYX6uCzU,0D5wENdkdwbqlrHoaJ9g29",
    market: "ES",
  });
  // TODO: Handle 'response' of type ManyChapters
} catch (err) {
  // TODO: Handle 'err' of type Chapters.GetSeveralChaptersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.chapters.getSeveralChapters({
  ids: "0IsXVP0JmcB2adSE338GkK,3ZXb8FKZGU0EHALYX6uCzU,0D5wENdkdwbqlrHoaJ9g29",
  market: "ES",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ManyChapters
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |
| <code>market?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.chapters.getSeveralChapters(request)`

- **OnSuccess**: <code>[ManyChapters](src/models/many-chapters.ts)</code>
- **OnError**: throws <code>[Chapters.GetSeveralChaptersError](src/resources/chapters.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.chapters.getSeveralChapters(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ManyChapters, Chapters.GetSeveralChaptersError&gt;</code>, with `result.value` of type <code>[ManyChapters](src/models/many-chapters.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## CategoriesApi

> Source: [CategoriesApi](src/resources/categories-api.ts)

<details>
<summary><code>getACategoriesPlaylists(request: CategoriesApi.GetACategoriesPlaylistsRequest, options?: RequestOptions): ApiPromise&lt;PagingFeaturedPlaylistObject, CategoriesApi.GetACategoriesPlaylistsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of Spotify playlists tagged with a particular category.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.categoriesApi.getACategoriesPlaylists({
    categoryId: "dinner",
    limit: 10,
    offset: 5,
  });
  // TODO: Handle 'response' of type PagingFeaturedPlaylistObject
} catch (err) {
  // TODO: Handle 'err' of type CategoriesApi.GetACategoriesPlaylistsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.categoriesApi.getACategoriesPlaylists({
  categoryId: "dinner",
  limit: 10,
  offset: 5,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PagingFeaturedPlaylistObject
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>categoryId</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 20 |
| <code>offset?</code> | <code>number</code> | -<br>**Default**: 0 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.categoriesApi.getACategoriesPlaylists(request)`

- **OnSuccess**: <code>[PagingFeaturedPlaylistObject](src/models/paging-featured-playlist-object.ts)</code>
- **OnError**: throws <code>[CategoriesApi.GetACategoriesPlaylistsError](src/resources/categories-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.categoriesApi.getACategoriesPlaylists(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PagingFeaturedPlaylistObject, CategoriesApi.GetACategoriesPlaylistsError&gt;</code>, with `result.value` of type <code>[PagingFeaturedPlaylistObject](src/models/paging-featured-playlist-object.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getACategory(request: CategoriesApi.GetACategoryRequest, options?: RequestOptions): ApiPromise&lt;CategoryObject, CategoriesApi.GetACategoryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a single category used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab).


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.categoriesApi.getACategory({ categoryId: "dinner", locale: "sv_SE" });
  // TODO: Handle 'response' of type CategoryObject
} catch (err) {
  // TODO: Handle 'err' of type CategoriesApi.GetACategoryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.categoriesApi.getACategory({
  categoryId: "dinner",
  locale: "sv_SE",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CategoryObject
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>categoryId</code> | <code>string</code> | - |
| <code>locale?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.categoriesApi.getACategory(request)`

- **OnSuccess**: <code>[CategoryObject](src/models/category-object.ts)</code>
- **OnError**: throws <code>[CategoriesApi.GetACategoryError](src/resources/categories-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.categoriesApi.getACategory(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CategoryObject, CategoriesApi.GetACategoryError&gt;</code>, with `result.value` of type <code>[CategoryObject](src/models/category-object.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCategories(request: CategoriesApi.GetCategoriesRequest, options?: RequestOptions): ApiPromise&lt;PagedCategories, CategoriesApi.GetCategoriesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of categories used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab).


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.categoriesApi.getCategories({ locale: "sv_SE", limit: 10, offset: 5 });
  // TODO: Handle 'response' of type PagedCategories
} catch (err) {
  // TODO: Handle 'err' of type CategoriesApi.GetCategoriesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.categoriesApi.getCategories({
  locale: "sv_SE",
  limit: 10,
  offset: 5,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PagedCategories
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>locale?</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 20 |
| <code>offset?</code> | <code>number</code> | -<br>**Default**: 0 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.categoriesApi.getCategories(request)`

- **OnSuccess**: <code>[PagedCategories](src/models/paged-categories.ts)</code>
- **OnError**: throws <code>[CategoriesApi.GetCategoriesError](src/resources/categories-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.categoriesApi.getCategories(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PagedCategories, CategoriesApi.GetCategoriesError&gt;</code>, with `result.value` of type <code>[PagedCategories](src/models/paged-categories.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Episodes

> Source: [Episodes](src/resources/episodes.ts)

<details>
<summary><code>checkUsersSavedEpisodes(request: Episodes.CheckUsersSavedEpisodesRequest, options?: RequestOptions): ApiPromise&lt;boolean[], Episodes.CheckUsersSavedEpisodesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check if one or more episodes is already saved in the current Spotify user's 'Your Episodes' library.<br/>
This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)..


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.episodes.checkUsersSavedEpisodes({
    ids: "77o6BIVlYM3msb4MMIL1jH,0Q86acNRm6V9GYx55SXKwf",
  });
  // TODO: Handle 'response' of type boolean[]
} catch (err) {
  // TODO: Handle 'err' of type Episodes.CheckUsersSavedEpisodesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.episodes.checkUsersSavedEpisodes({
  ids: "77o6BIVlYM3msb4MMIL1jH,0Q86acNRm6V9GYx55SXKwf",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type boolean[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.episodes.checkUsersSavedEpisodes(request)`

- **OnSuccess**: <code>boolean[]</code>
- **OnError**: throws <code>[Episodes.CheckUsersSavedEpisodesError](src/resources/episodes.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.episodes.checkUsersSavedEpisodes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;boolean[], Episodes.CheckUsersSavedEpisodesError&gt;</code>, with `result.value` of type <code>boolean[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAShowsEpisodes(request: Episodes.GetAShowsEpisodesRequest, options?: RequestOptions): ApiPromise&lt;PagingSimplifiedEpisodeObject, Episodes.GetAShowsEpisodesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Spotify catalog information about an show’s episodes. Optional parameters can be used to limit the number of episodes returned.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.episodes.getAShowsEpisodes({
    id: "38bS44xjbVVZ3No3ByF1dJ",
    market: "ES",
    limit: 10,
    offset: 5,
  });
  // TODO: Handle 'response' of type PagingSimplifiedEpisodeObject
} catch (err) {
  // TODO: Handle 'err' of type Episodes.GetAShowsEpisodesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.episodes.getAShowsEpisodes({
  id: "38bS44xjbVVZ3No3ByF1dJ",
  market: "ES",
  limit: 10,
  offset: 5,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PagingSimplifiedEpisodeObject
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>market?</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 20 |
| <code>offset?</code> | <code>number</code> | -<br>**Default**: 0 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.episodes.getAShowsEpisodes(request)`

- **OnSuccess**: <code>[PagingSimplifiedEpisodeObject](src/models/paging-simplified-episode-object.ts)</code>
- **OnError**: throws <code>[Episodes.GetAShowsEpisodesError](src/resources/episodes.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.episodes.getAShowsEpisodes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PagingSimplifiedEpisodeObject, Episodes.GetAShowsEpisodesError&gt;</code>, with `result.value` of type <code>[PagingSimplifiedEpisodeObject](src/models/paging-simplified-episode-object.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAnEpisode(request: Episodes.GetAnEpisodeRequest, options?: RequestOptions): ApiPromise&lt;EpisodeObject, Episodes.GetAnEpisodeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Spotify catalog information for a single episode identified by its
unique Spotify ID.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.episodes.getAnEpisode({ id: "512ojhOuo1ktJprKbVcKyQ", market: "ES" });
  // TODO: Handle 'response' of type EpisodeObject
} catch (err) {
  // TODO: Handle 'err' of type Episodes.GetAnEpisodeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.episodes.getAnEpisode({
  id: "512ojhOuo1ktJprKbVcKyQ",
  market: "ES",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EpisodeObject
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>market?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.episodes.getAnEpisode(request)`

- **OnSuccess**: <code>[EpisodeObject](src/models/episode-object.ts)</code>
- **OnError**: throws <code>[Episodes.GetAnEpisodeError](src/resources/episodes.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.episodes.getAnEpisode(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EpisodeObject, Episodes.GetAnEpisodeError&gt;</code>, with `result.value` of type <code>[EpisodeObject](src/models/episode-object.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMultipleEpisodes(request: Episodes.GetMultipleEpisodesRequest, options?: RequestOptions): ApiPromise&lt;ManyEpisodes, Episodes.GetMultipleEpisodesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Spotify catalog information for several episodes based on their Spotify IDs.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.episodes.getMultipleEpisodes({
    ids: "77o6BIVlYM3msb4MMIL1jH,0Q86acNRm6V9GYx55SXKwf",
    market: "ES",
  });
  // TODO: Handle 'response' of type ManyEpisodes
} catch (err) {
  // TODO: Handle 'err' of type Episodes.GetMultipleEpisodesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.episodes.getMultipleEpisodes({
  ids: "77o6BIVlYM3msb4MMIL1jH,0Q86acNRm6V9GYx55SXKwf",
  market: "ES",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ManyEpisodes
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |
| <code>market?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.episodes.getMultipleEpisodes(request)`

- **OnSuccess**: <code>[ManyEpisodes](src/models/many-episodes.ts)</code>
- **OnError**: throws <code>[Episodes.GetMultipleEpisodesError](src/resources/episodes.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.episodes.getMultipleEpisodes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ManyEpisodes, Episodes.GetMultipleEpisodesError&gt;</code>, with `result.value` of type <code>[ManyEpisodes](src/models/many-episodes.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUsersSavedEpisodes(request: Episodes.GetUsersSavedEpisodesRequest, options?: RequestOptions): ApiPromise&lt;PagingSavedEpisodeObject, Episodes.GetUsersSavedEpisodesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of the episodes saved in the current Spotify user's library.<br/>
This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer).


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.episodes.getUsersSavedEpisodes({ market: "ES", limit: 10, offset: 5 });
  // TODO: Handle 'response' of type PagingSavedEpisodeObject
} catch (err) {
  // TODO: Handle 'err' of type Episodes.GetUsersSavedEpisodesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.episodes.getUsersSavedEpisodes({
  market: "ES",
  limit: 10,
  offset: 5,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PagingSavedEpisodeObject
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>market?</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 20 |
| <code>offset?</code> | <code>number</code> | -<br>**Default**: 0 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.episodes.getUsersSavedEpisodes(request)`

- **OnSuccess**: <code>[PagingSavedEpisodeObject](src/models/paging-saved-episode-object.ts)</code>
- **OnError**: throws <code>[Episodes.GetUsersSavedEpisodesError](src/resources/episodes.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.episodes.getUsersSavedEpisodes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PagingSavedEpisodeObject, Episodes.GetUsersSavedEpisodesError&gt;</code>, with `result.value` of type <code>[PagingSavedEpisodeObject](src/models/paging-saved-episode-object.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>removeEpisodesUser(request: Episodes.RemoveEpisodesUserRequest, options?: RequestOptions): ApiPromise&lt;undefined, Episodes.RemoveEpisodesUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove one or more episodes from the current user's library.<br/>
This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer).


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.episodes.removeEpisodesUser({
    ids: "7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B",
  });
} catch (err) {
  // TODO: Handle 'err' of type Episodes.RemoveEpisodesUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.episodes.removeEpisodesUser({
  ids: "7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |
| <code>body?</code> | <code>[RemoveEpisodesRequest](src/models/remove-episodes-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.episodes.removeEpisodesUser(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Episodes.RemoveEpisodesUserError](src/resources/episodes.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.episodes.removeEpisodesUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Episodes.RemoveEpisodesUserError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>saveEpisodesUser(request: Episodes.SaveEpisodesUserRequest, options?: RequestOptions): ApiPromise&lt;undefined, Episodes.SaveEpisodesUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Save one or more episodes to the current user's library.<br/>
This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer).


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.episodes.saveEpisodesUser({ ids: "77o6BIVlYM3msb4MMIL1jH,0Q86acNRm6V9GYx55SXKwf" });
} catch (err) {
  // TODO: Handle 'err' of type Episodes.SaveEpisodesUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.episodes.saveEpisodesUser({
  ids: "77o6BIVlYM3msb4MMIL1jH,0Q86acNRm6V9GYx55SXKwf",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |
| <code>body?</code> | <code>[SaveEpisodesRequest](src/models/save-episodes-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.episodes.saveEpisodesUser(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Episodes.SaveEpisodesUserError](src/resources/episodes.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.episodes.saveEpisodesUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Episodes.SaveEpisodesUserError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Genres

> Source: [Genres](src/resources/genres.ts)

<details>
<summary><code>getRecommendationGenres(options?: RequestOptions): ApiPromise&lt;ManyGenres, Genres.GetRecommendationGenresError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of available genres seed parameter values for [recommendations](https://developer.spotify.com/documentation/web-api/reference/get-recommendations).


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.genres.getRecommendationGenres();
  // TODO: Handle 'response' of type ManyGenres
} catch (err) {
  // TODO: Handle 'err' of type Genres.GetRecommendationGenresError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.genres.getRecommendationGenres().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ManyGenres
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.genres.getRecommendationGenres()`

- **OnSuccess**: <code>[ManyGenres](src/models/many-genres.ts)</code>
- **OnError**: throws <code>[Genres.GetRecommendationGenresError](src/resources/genres.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.genres.getRecommendationGenres().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ManyGenres, Genres.GetRecommendationGenresError&gt;</code>, with `result.value` of type <code>[ManyGenres](src/models/many-genres.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## MarketsApi

> Source: [MarketsApi](src/resources/markets-api.ts)

<details>
<summary><code>getAvailableMarkets(options?: RequestOptions): ApiPromise&lt;Markets, MarketsApi.GetAvailableMarketsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the list of markets where Spotify is available.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.marketsApi.getAvailableMarkets();
  // TODO: Handle 'response' of type Markets
} catch (err) {
  // TODO: Handle 'err' of type MarketsApi.GetAvailableMarketsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.marketsApi.getAvailableMarkets().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Markets
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.marketsApi.getAvailableMarkets()`

- **OnSuccess**: <code>[Markets](src/models/markets.ts)</code>
- **OnError**: throws <code>[MarketsApi.GetAvailableMarketsError](src/resources/markets-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.marketsApi.getAvailableMarkets().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Markets, MarketsApi.GetAvailableMarketsError&gt;</code>, with `result.value` of type <code>[Markets](src/models/markets.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Player

> Source: [Player](src/resources/player.ts)

<details>
<summary><code>addToQueue(request: Player.AddToQueueRequest, options?: RequestOptions): ApiPromise&lt;undefined, Player.AddToQueueError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add an item to the end of the user's current playback queue. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.player.addToQueue({
    uri: "spotify:track:4iV5W9uYEdYUVa79Axb7Rh",
    deviceId: "0d1841b0976bae2a3a310dd74c0f3df354899bc8",
  });
} catch (err) {
  // TODO: Handle 'err' of type Player.AddToQueueError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.player.addToQueue({
  uri: "spotify:track:4iV5W9uYEdYUVa79Axb7Rh",
  deviceId: "0d1841b0976bae2a3a310dd74c0f3df354899bc8",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>uri</code> | <code>string</code> | - |
| <code>deviceId?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.player.addToQueue(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Player.AddToQueueError](src/resources/player.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.player.addToQueue(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Player.AddToQueueError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAUsersAvailableDevices(options?: RequestOptions): ApiPromise&lt;ManyDevices, Player.GetAUsersAvailableDevicesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get information about a user’s available Spotify Connect devices. Some device models are not supported and will not be listed in the API response.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.player.getAUsersAvailableDevices();
  // TODO: Handle 'response' of type ManyDevices
} catch (err) {
  // TODO: Handle 'err' of type Player.GetAUsersAvailableDevicesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.player.getAUsersAvailableDevices().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ManyDevices
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.player.getAUsersAvailableDevices()`

- **OnSuccess**: <code>[ManyDevices](src/models/many-devices.ts)</code>
- **OnError**: throws <code>[Player.GetAUsersAvailableDevicesError](src/resources/player.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.player.getAUsersAvailableDevices().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ManyDevices, Player.GetAUsersAvailableDevicesError&gt;</code>, with `result.value` of type <code>[ManyDevices](src/models/many-devices.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getInformationAboutTheUsersCurrentPlayback(request: Player.GetInformationAboutTheUsersCurrentPlaybackRequest, options?: RequestOptions): ApiPromise&lt;CurrentlyPlayingContextObject, Player.GetInformationAboutTheUsersCurrentPlaybackError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get information about the user’s current playback state, including track or episode, progress, and active device.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.player.getInformationAboutTheUsersCurrentPlayback({ market: "ES" });
  // TODO: Handle 'response' of type CurrentlyPlayingContextObject
} catch (err) {
  // TODO: Handle 'err' of type Player.GetInformationAboutTheUsersCurrentPlaybackError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.player.getInformationAboutTheUsersCurrentPlayback({ market: "ES" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CurrentlyPlayingContextObject
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>market?</code> | <code>string</code> | - |
| <code>additionalTypes?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.player.getInformationAboutTheUsersCurrentPlayback(request)`

- **OnSuccess**: <code>[CurrentlyPlayingContextObject](src/models/currently-playing-context-object.ts)</code>
- **OnError**: throws <code>[Player.GetInformationAboutTheUsersCurrentPlaybackError](src/resources/player.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.player.getInformationAboutTheUsersCurrentPlayback(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CurrentlyPlayingContextObject, Player.GetInformationAboutTheUsersCurrentPlaybackError&gt;</code>, with `result.value` of type <code>[CurrentlyPlayingContextObject](src/models/currently-playing-context-object.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getQueue(options?: RequestOptions): ApiPromise&lt;QueueObject, Player.GetQueueError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the list of objects that make up the user's queue.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.player.getQueue();
  // TODO: Handle 'response' of type QueueObject
} catch (err) {
  // TODO: Handle 'err' of type Player.GetQueueError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.player.getQueue().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type QueueObject
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.player.getQueue()`

- **OnSuccess**: <code>[QueueObject](src/models/queue-object.ts)</code>
- **OnError**: throws <code>[Player.GetQueueError](src/resources/player.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.player.getQueue().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;QueueObject, Player.GetQueueError&gt;</code>, with `result.value` of type <code>[QueueObject](src/models/queue-object.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getRecentlyPlayed(request: Player.GetRecentlyPlayedRequest, options?: RequestOptions): ApiPromise&lt;CursorPagingPlayHistoryObject, Player.GetRecentlyPlayedError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get tracks from the current user's recently played tracks.
_**Note**: Currently doesn't support podcast episodes._


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.player.getRecentlyPlayed({ limit: 10, after: 1484811043508 });
  // TODO: Handle 'response' of type CursorPagingPlayHistoryObject
} catch (err) {
  // TODO: Handle 'err' of type Player.GetRecentlyPlayedError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.player.getRecentlyPlayed({ limit: 10, after: 1484811043508 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CursorPagingPlayHistoryObject
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 20 |
| <code>after?</code> | <code>number</code> | - |
| <code>before?</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.player.getRecentlyPlayed(request)`

- **OnSuccess**: <code>[CursorPagingPlayHistoryObject](src/models/cursor-paging-play-history-object.ts)</code>
- **OnError**: throws <code>[Player.GetRecentlyPlayedError](src/resources/player.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.player.getRecentlyPlayed(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CursorPagingPlayHistoryObject, Player.GetRecentlyPlayedError&gt;</code>, with `result.value` of type <code>[CursorPagingPlayHistoryObject](src/models/cursor-paging-play-history-object.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTheUsersCurrentlyPlayingTrack(request: Player.GetTheUsersCurrentlyPlayingTrackRequest, options?: RequestOptions): ApiPromise&lt;CurrentlyPlayingObject, Player.GetTheUsersCurrentlyPlayingTrackError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the object currently being played on the user's Spotify account.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.player.getTheUsersCurrentlyPlayingTrack({ market: "ES" });
  // TODO: Handle 'response' of type CurrentlyPlayingObject
} catch (err) {
  // TODO: Handle 'err' of type Player.GetTheUsersCurrentlyPlayingTrackError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.player.getTheUsersCurrentlyPlayingTrack({ market: "ES" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CurrentlyPlayingObject
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>market?</code> | <code>string</code> | - |
| <code>additionalTypes?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.player.getTheUsersCurrentlyPlayingTrack(request)`

- **OnSuccess**: <code>[CurrentlyPlayingObject](src/models/currently-playing-object.ts)</code>
- **OnError**: throws <code>[Player.GetTheUsersCurrentlyPlayingTrackError](src/resources/player.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.player.getTheUsersCurrentlyPlayingTrack(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CurrentlyPlayingObject, Player.GetTheUsersCurrentlyPlayingTrackError&gt;</code>, with `result.value` of type <code>[CurrentlyPlayingObject](src/models/currently-playing-object.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>pauseAUsersPlayback(request: Player.PauseAUsersPlaybackRequest, options?: RequestOptions): ApiPromise&lt;undefined, Player.PauseAUsersPlaybackError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Pause playback on the user's account. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.player.pauseAUsersPlayback({ deviceId: "0d1841b0976bae2a3a310dd74c0f3df354899bc8" });
} catch (err) {
  // TODO: Handle 'err' of type Player.PauseAUsersPlaybackError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.player.pauseAUsersPlayback({
  deviceId: "0d1841b0976bae2a3a310dd74c0f3df354899bc8",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>deviceId?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.player.pauseAUsersPlayback(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Player.PauseAUsersPlaybackError](src/resources/player.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.player.pauseAUsersPlayback(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Player.PauseAUsersPlaybackError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>seekToPositionInCurrentlyPlayingTrack(request: Player.SeekToPositionInCurrentlyPlayingTrackRequest, options?: RequestOptions): ApiPromise&lt;undefined, Player.SeekToPositionInCurrentlyPlayingTrackError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Seeks to the given position in the user’s currently playing track. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.player.seekToPositionInCurrentlyPlayingTrack({
    positionMs: 25000,
    deviceId: "0d1841b0976bae2a3a310dd74c0f3df354899bc8",
  });
} catch (err) {
  // TODO: Handle 'err' of type Player.SeekToPositionInCurrentlyPlayingTrackError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.player.seekToPositionInCurrentlyPlayingTrack({
  positionMs: 25000,
  deviceId: "0d1841b0976bae2a3a310dd74c0f3df354899bc8",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>positionMs</code> | <code>number</code> | - |
| <code>deviceId?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.player.seekToPositionInCurrentlyPlayingTrack(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Player.SeekToPositionInCurrentlyPlayingTrackError](src/resources/player.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.player.seekToPositionInCurrentlyPlayingTrack(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Player.SeekToPositionInCurrentlyPlayingTrackError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>setRepeatModeOnUsersPlayback(request: Player.SetRepeatModeOnUsersPlaybackRequest, options?: RequestOptions): ApiPromise&lt;undefined, Player.SetRepeatModeOnUsersPlaybackError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Set the repeat mode for the user's playback. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.player.setRepeatModeOnUsersPlayback({
    state: "context",
    deviceId: "0d1841b0976bae2a3a310dd74c0f3df354899bc8",
  });
} catch (err) {
  // TODO: Handle 'err' of type Player.SetRepeatModeOnUsersPlaybackError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.player.setRepeatModeOnUsersPlayback({
  state: "context",
  deviceId: "0d1841b0976bae2a3a310dd74c0f3df354899bc8",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>state</code> | <code>string</code> | - |
| <code>deviceId?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.player.setRepeatModeOnUsersPlayback(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Player.SetRepeatModeOnUsersPlaybackError](src/resources/player.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.player.setRepeatModeOnUsersPlayback(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Player.SetRepeatModeOnUsersPlaybackError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>setVolumeForUsersPlayback(request: Player.SetVolumeForUsersPlaybackRequest, options?: RequestOptions): ApiPromise&lt;undefined, Player.SetVolumeForUsersPlaybackError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Set the volume for the user’s current playback device. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.player.setVolumeForUsersPlayback({
    volumePercent: 50,
    deviceId: "0d1841b0976bae2a3a310dd74c0f3df354899bc8",
  });
} catch (err) {
  // TODO: Handle 'err' of type Player.SetVolumeForUsersPlaybackError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.player.setVolumeForUsersPlayback({
  volumePercent: 50,
  deviceId: "0d1841b0976bae2a3a310dd74c0f3df354899bc8",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>volumePercent</code> | <code>number</code> | - |
| <code>deviceId?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.player.setVolumeForUsersPlayback(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Player.SetVolumeForUsersPlaybackError](src/resources/player.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.player.setVolumeForUsersPlayback(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Player.SetVolumeForUsersPlaybackError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>skipUsersPlaybackToNextTrack(request: Player.SkipUsersPlaybackToNextTrackRequest, options?: RequestOptions): ApiPromise&lt;undefined, Player.SkipUsersPlaybackToNextTrackError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Skips to next track in the user’s queue. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.player.skipUsersPlaybackToNextTrack({ deviceId: "0d1841b0976bae2a3a310dd74c0f3df354899bc8" });
} catch (err) {
  // TODO: Handle 'err' of type Player.SkipUsersPlaybackToNextTrackError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.player.skipUsersPlaybackToNextTrack({
  deviceId: "0d1841b0976bae2a3a310dd74c0f3df354899bc8",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>deviceId?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.player.skipUsersPlaybackToNextTrack(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Player.SkipUsersPlaybackToNextTrackError](src/resources/player.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.player.skipUsersPlaybackToNextTrack(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Player.SkipUsersPlaybackToNextTrackError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>skipUsersPlaybackToPreviousTrack(request: Player.SkipUsersPlaybackToPreviousTrackRequest, options?: RequestOptions): ApiPromise&lt;undefined, Player.SkipUsersPlaybackToPreviousTrackError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Skips to previous track in the user’s queue. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.player.skipUsersPlaybackToPreviousTrack({
    deviceId: "0d1841b0976bae2a3a310dd74c0f3df354899bc8",
  });
} catch (err) {
  // TODO: Handle 'err' of type Player.SkipUsersPlaybackToPreviousTrackError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.player.skipUsersPlaybackToPreviousTrack({
  deviceId: "0d1841b0976bae2a3a310dd74c0f3df354899bc8",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>deviceId?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.player.skipUsersPlaybackToPreviousTrack(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Player.SkipUsersPlaybackToPreviousTrackError](src/resources/player.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.player.skipUsersPlaybackToPreviousTrack(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Player.SkipUsersPlaybackToPreviousTrackError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>startAUsersPlayback(request: Player.StartAUsersPlaybackRequest, options?: RequestOptions): ApiPromise&lt;undefined, Player.StartAUsersPlaybackError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Start a new context or resume current playback on the user's active device. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.player.startAUsersPlayback({ deviceId: "0d1841b0976bae2a3a310dd74c0f3df354899bc8" });
} catch (err) {
  // TODO: Handle 'err' of type Player.StartAUsersPlaybackError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.player.startAUsersPlayback({
  deviceId: "0d1841b0976bae2a3a310dd74c0f3df354899bc8",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>deviceId?</code> | <code>string</code> | - |
| <code>body?</code> | <code>[StartOrResumePlaybackRequest](src/models/start-or-resume-playback-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.player.startAUsersPlayback(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Player.StartAUsersPlaybackError](src/resources/player.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.player.startAUsersPlayback(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Player.StartAUsersPlaybackError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>toggleShuffleForUsersPlayback(request: Player.ToggleShuffleForUsersPlaybackRequest, options?: RequestOptions): ApiPromise&lt;undefined, Player.ToggleShuffleForUsersPlaybackError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Toggle shuffle on or off for user’s playback. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.player.toggleShuffleForUsersPlayback({
    state: true,
    deviceId: "0d1841b0976bae2a3a310dd74c0f3df354899bc8",
  });
} catch (err) {
  // TODO: Handle 'err' of type Player.ToggleShuffleForUsersPlaybackError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.player.toggleShuffleForUsersPlayback({
  state: true,
  deviceId: "0d1841b0976bae2a3a310dd74c0f3df354899bc8",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>state</code> | <code>boolean</code> | - |
| <code>deviceId?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.player.toggleShuffleForUsersPlayback(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Player.ToggleShuffleForUsersPlaybackError](src/resources/player.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.player.toggleShuffleForUsersPlayback(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Player.ToggleShuffleForUsersPlaybackError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>transferAUsersPlayback(request: Player.TransferAUsersPlaybackRequest, options?: RequestOptions): ApiPromise&lt;undefined, Player.TransferAUsersPlaybackError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Transfer playback to a new device and optionally begin playback. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.player.transferAUsersPlayback();
} catch (err) {
  // TODO: Handle 'err' of type Player.TransferAUsersPlaybackError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.player.transferAUsersPlayback().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[MePlayerRequest](src/models/me-player-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.player.transferAUsersPlayback(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Player.TransferAUsersPlaybackError](src/resources/player.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.player.transferAUsersPlayback(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Player.TransferAUsersPlaybackError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Playlists

> Source: [Playlists](src/resources/playlists.ts)

<details>
<summary><code>addTracksToPlaylist(request: Playlists.AddTracksToPlaylistRequest, options?: RequestOptions): ApiPromise&lt;PlaylistSnapshotId, Playlists.AddTracksToPlaylistError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add one or more items to a user's playlist.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.playlists.addTracksToPlaylist({
    playlistId: "3cEYpjA9oz9GiPac4AsH4n",
    position: 0,
    uris: "spotify:track:4iV5W9uYEdYUVa79Axb7Rh,spotify:track:1301WleyT98MSxVHPZCA6M",
  });
  // TODO: Handle 'response' of type PlaylistSnapshotId
} catch (err) {
  // TODO: Handle 'err' of type Playlists.AddTracksToPlaylistError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.playlists.addTracksToPlaylist({
  playlistId: "3cEYpjA9oz9GiPac4AsH4n",
  position: 0,
  uris: "spotify:track:4iV5W9uYEdYUVa79Axb7Rh,spotify:track:1301WleyT98MSxVHPZCA6M",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PlaylistSnapshotId
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>playlistId</code> | <code>string</code> | - |
| <code>position?</code> | <code>number</code> | - |
| <code>uris?</code> | <code>string</code> | - |
| <code>body?</code> | <code>[PlaylistsTracksRequest](src/models/playlists-tracks-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.playlists.addTracksToPlaylist(request)`

- **OnSuccess**: <code>[PlaylistSnapshotId](src/models/playlist-snapshot-id.ts)</code>
- **OnError**: throws <code>[Playlists.AddTracksToPlaylistError](src/resources/playlists.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.playlists.addTracksToPlaylist(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PlaylistSnapshotId, Playlists.AddTracksToPlaylistError&gt;</code>, with `result.value` of type <code>[PlaylistSnapshotId](src/models/playlist-snapshot-id.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>changePlaylistDetails(request: Playlists.ChangePlaylistDetailsRequest, options?: RequestOptions): ApiPromise&lt;undefined, Playlists.ChangePlaylistDetailsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Change a playlist's name and public/private state. (The user must, of
course, own the playlist.)


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.playlists.changePlaylistDetails({ playlistId: "3cEYpjA9oz9GiPac4AsH4n" });
} catch (err) {
  // TODO: Handle 'err' of type Playlists.ChangePlaylistDetailsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.playlists.changePlaylistDetails({
  playlistId: "3cEYpjA9oz9GiPac4AsH4n",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>playlistId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[PlaylistsRequest](src/models/playlists-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.playlists.changePlaylistDetails(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Playlists.ChangePlaylistDetailsError](src/resources/playlists.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.playlists.changePlaylistDetails(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Playlists.ChangePlaylistDetailsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>checkIfUserFollowsPlaylist(request: Playlists.CheckIfUserFollowsPlaylistRequest, options?: RequestOptions): ApiPromise&lt;boolean[], Playlists.CheckIfUserFollowsPlaylistError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check to see if one or more Spotify users are following a specified playlist.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.playlists.checkIfUserFollowsPlaylist({
    playlistId: "3cEYpjA9oz9GiPac4AsH4n",
    ids: "jmperezperez,thelinmichael,wizzler",
  });
  // TODO: Handle 'response' of type boolean[]
} catch (err) {
  // TODO: Handle 'err' of type Playlists.CheckIfUserFollowsPlaylistError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.playlists.checkIfUserFollowsPlaylist({
  playlistId: "3cEYpjA9oz9GiPac4AsH4n",
  ids: "jmperezperez,thelinmichael,wizzler",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type boolean[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>playlistId</code> | <code>string</code> | - |
| <code>ids</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.playlists.checkIfUserFollowsPlaylist(request)`

- **OnSuccess**: <code>boolean[]</code>
- **OnError**: throws <code>[Playlists.CheckIfUserFollowsPlaylistError](src/resources/playlists.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.playlists.checkIfUserFollowsPlaylist(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;boolean[], Playlists.CheckIfUserFollowsPlaylistError&gt;</code>, with `result.value` of type <code>boolean[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createPlaylist(request: Playlists.CreatePlaylistRequest, options?: RequestOptions): ApiPromise&lt;PlaylistObject, Playlists.CreatePlaylistError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a playlist for a Spotify user. (The playlist will be empty until
you [add tracks](https://developer.spotify.com/documentation/web-api/reference/add-tracks-to-playlist).)
Each user is generally limited to a maximum of 11000 playlists.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.playlists.createPlaylist({ userId: "smedjan" });
  // TODO: Handle 'response' of type PlaylistObject
} catch (err) {
  // TODO: Handle 'err' of type Playlists.CreatePlaylistError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.playlists.createPlaylist({ userId: "smedjan" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PlaylistObject
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[UsersPlaylistsRequest](src/models/users-playlists-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.playlists.createPlaylist(request)`

- **OnSuccess**: <code>[PlaylistObject](src/models/playlist-object.ts)</code>
- **OnError**: throws <code>[Playlists.CreatePlaylistError](src/resources/playlists.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.playlists.createPlaylist(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PlaylistObject, Playlists.CreatePlaylistError&gt;</code>, with `result.value` of type <code>[PlaylistObject](src/models/playlist-object.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>followPlaylist(request: Playlists.FollowPlaylistRequest, options?: RequestOptions): ApiPromise&lt;undefined, Playlists.FollowPlaylistError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add the current user as a follower of a playlist.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.playlists.followPlaylist({ playlistId: "3cEYpjA9oz9GiPac4AsH4n" });
} catch (err) {
  // TODO: Handle 'err' of type Playlists.FollowPlaylistError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.playlists.followPlaylist({ playlistId: "3cEYpjA9oz9GiPac4AsH4n" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>playlistId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[PlaylistsFollowersRequest](src/models/playlists-followers-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.playlists.followPlaylist(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Playlists.FollowPlaylistError](src/resources/playlists.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.playlists.followPlaylist(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Playlists.FollowPlaylistError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getACategoriesPlaylists(request: Playlists.GetACategoriesPlaylistsRequest, options?: RequestOptions): ApiPromise&lt;PagingFeaturedPlaylistObject, Playlists.GetACategoriesPlaylistsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of Spotify playlists tagged with a particular category.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.playlists.getACategoriesPlaylists({
    categoryId: "dinner",
    limit: 10,
    offset: 5,
  });
  // TODO: Handle 'response' of type PagingFeaturedPlaylistObject
} catch (err) {
  // TODO: Handle 'err' of type Playlists.GetACategoriesPlaylistsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.playlists.getACategoriesPlaylists({
  categoryId: "dinner",
  limit: 10,
  offset: 5,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PagingFeaturedPlaylistObject
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>categoryId</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 20 |
| <code>offset?</code> | <code>number</code> | -<br>**Default**: 0 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.playlists.getACategoriesPlaylists(request)`

- **OnSuccess**: <code>[PagingFeaturedPlaylistObject](src/models/paging-featured-playlist-object.ts)</code>
- **OnError**: throws <code>[Playlists.GetACategoriesPlaylistsError](src/resources/playlists.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.playlists.getACategoriesPlaylists(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PagingFeaturedPlaylistObject, Playlists.GetACategoriesPlaylistsError&gt;</code>, with `result.value` of type <code>[PagingFeaturedPlaylistObject](src/models/paging-featured-playlist-object.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAListOfCurrentUsersPlaylists(request: Playlists.GetAListOfCurrentUsersPlaylistsRequest, options?: RequestOptions): ApiPromise&lt;PagingPlaylistObject, Playlists.GetAListOfCurrentUsersPlaylistsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of the playlists owned or followed by the current Spotify
user.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.playlists.getAListOfCurrentUsersPlaylists({ limit: 10, offset: 5 });
  // TODO: Handle 'response' of type PagingPlaylistObject
} catch (err) {
  // TODO: Handle 'err' of type Playlists.GetAListOfCurrentUsersPlaylistsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.playlists.getAListOfCurrentUsersPlaylists({ limit: 10, offset: 5 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PagingPlaylistObject
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 20 |
| <code>offset?</code> | <code>number</code> | -<br>**Default**: 0 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.playlists.getAListOfCurrentUsersPlaylists(request)`

- **OnSuccess**: <code>[PagingPlaylistObject](src/models/paging-playlist-object.ts)</code>
- **OnError**: throws <code>[Playlists.GetAListOfCurrentUsersPlaylistsError](src/resources/playlists.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.playlists.getAListOfCurrentUsersPlaylists(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PagingPlaylistObject, Playlists.GetAListOfCurrentUsersPlaylistsError&gt;</code>, with `result.value` of type <code>[PagingPlaylistObject](src/models/paging-playlist-object.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getFeaturedPlaylists(request: Playlists.GetFeaturedPlaylistsRequest, options?: RequestOptions): ApiPromise&lt;PagingFeaturedPlaylistObject, Playlists.GetFeaturedPlaylistsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of Spotify featured playlists (shown, for example, on a Spotify player's 'Browse' tab).


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.playlists.getFeaturedPlaylists({ locale: "sv_SE", limit: 10, offset: 5 });
  // TODO: Handle 'response' of type PagingFeaturedPlaylistObject
} catch (err) {
  // TODO: Handle 'err' of type Playlists.GetFeaturedPlaylistsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.playlists.getFeaturedPlaylists({
  locale: "sv_SE",
  limit: 10,
  offset: 5,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PagingFeaturedPlaylistObject
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>locale?</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 20 |
| <code>offset?</code> | <code>number</code> | -<br>**Default**: 0 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.playlists.getFeaturedPlaylists(request)`

- **OnSuccess**: <code>[PagingFeaturedPlaylistObject](src/models/paging-featured-playlist-object.ts)</code>
- **OnError**: throws <code>[Playlists.GetFeaturedPlaylistsError](src/resources/playlists.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.playlists.getFeaturedPlaylists(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PagingFeaturedPlaylistObject, Playlists.GetFeaturedPlaylistsError&gt;</code>, with `result.value` of type <code>[PagingFeaturedPlaylistObject](src/models/paging-featured-playlist-object.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getListUsersPlaylists(request: Playlists.GetListUsersPlaylistsRequest, options?: RequestOptions): ApiPromise&lt;PagingPlaylistObject, Playlists.GetListUsersPlaylistsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of the playlists owned or followed by a Spotify user.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.playlists.getListUsersPlaylists({ userId: "smedjan", limit: 10, offset: 5 });
  // TODO: Handle 'response' of type PagingPlaylistObject
} catch (err) {
  // TODO: Handle 'err' of type Playlists.GetListUsersPlaylistsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.playlists.getListUsersPlaylists({
  userId: "smedjan",
  limit: 10,
  offset: 5,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PagingPlaylistObject
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 20 |
| <code>offset?</code> | <code>number</code> | -<br>**Default**: 0 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.playlists.getListUsersPlaylists(request)`

- **OnSuccess**: <code>[PagingPlaylistObject](src/models/paging-playlist-object.ts)</code>
- **OnError**: throws <code>[Playlists.GetListUsersPlaylistsError](src/resources/playlists.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.playlists.getListUsersPlaylists(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PagingPlaylistObject, Playlists.GetListUsersPlaylistsError&gt;</code>, with `result.value` of type <code>[PagingPlaylistObject](src/models/paging-playlist-object.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPlaylist(request: Playlists.GetPlaylistRequest, options?: RequestOptions): ApiPromise&lt;PlaylistObject, Playlists.GetPlaylistError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a playlist owned by a Spotify user.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.playlists.getPlaylist({
    playlistId: "3cEYpjA9oz9GiPac4AsH4n",
    market: "ES",
    fields: "items(added_by.id,track(name,href,album(name,href)))",
  });
  // TODO: Handle 'response' of type PlaylistObject
} catch (err) {
  // TODO: Handle 'err' of type Playlists.GetPlaylistError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.playlists.getPlaylist({
  playlistId: "3cEYpjA9oz9GiPac4AsH4n",
  market: "ES",
  fields: "items(added_by.id,track(name,href,album(name,href)))",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PlaylistObject
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>playlistId</code> | <code>string</code> | - |
| <code>market?</code> | <code>string</code> | - |
| <code>fields?</code> | <code>string</code> | - |
| <code>additionalTypes?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.playlists.getPlaylist(request)`

- **OnSuccess**: <code>[PlaylistObject](src/models/playlist-object.ts)</code>
- **OnError**: throws <code>[Playlists.GetPlaylistError](src/resources/playlists.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.playlists.getPlaylist(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PlaylistObject, Playlists.GetPlaylistError&gt;</code>, with `result.value` of type <code>[PlaylistObject](src/models/playlist-object.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPlaylistCover(request: Playlists.GetPlaylistCoverRequest, options?: RequestOptions): ApiPromise&lt;ImageObject[], Playlists.GetPlaylistCoverError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the current image associated with a specific playlist.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.playlists.getPlaylistCover({ playlistId: "3cEYpjA9oz9GiPac4AsH4n" });
  // TODO: Handle 'response' of type ImageObject[]
} catch (err) {
  // TODO: Handle 'err' of type Playlists.GetPlaylistCoverError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.playlists.getPlaylistCover({
  playlistId: "3cEYpjA9oz9GiPac4AsH4n",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImageObject[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>playlistId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.playlists.getPlaylistCover(request)`

- **OnSuccess**: <code>[ImageObject](src/models/image-object.ts)[]</code>
- **OnError**: throws <code>[Playlists.GetPlaylistCoverError](src/resources/playlists.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.playlists.getPlaylistCover(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImageObject[], Playlists.GetPlaylistCoverError&gt;</code>, with `result.value` of type <code>[ImageObject](src/models/image-object.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPlaylistsTracks(request: Playlists.GetPlaylistsTracksRequest, options?: RequestOptions): ApiPromise&lt;PagingPlaylistTrackObject, Playlists.GetPlaylistsTracksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get full details of the items of a playlist owned by a Spotify user.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.playlists.getPlaylistsTracks({
    playlistId: "3cEYpjA9oz9GiPac4AsH4n",
    market: "ES",
    fields: "items(added_by.id,track(name,href,album(name,href)))",
    limit: 10,
    offset: 5,
  });
  // TODO: Handle 'response' of type PagingPlaylistTrackObject
} catch (err) {
  // TODO: Handle 'err' of type Playlists.GetPlaylistsTracksError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.playlists.getPlaylistsTracks({
  playlistId: "3cEYpjA9oz9GiPac4AsH4n",
  market: "ES",
  fields: "items(added_by.id,track(name,href,album(name,href)))",
  limit: 10,
  offset: 5,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PagingPlaylistTrackObject
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>playlistId</code> | <code>string</code> | - |
| <code>market?</code> | <code>string</code> | - |
| <code>fields?</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 20 |
| <code>offset?</code> | <code>number</code> | -<br>**Default**: 0 |
| <code>additionalTypes?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.playlists.getPlaylistsTracks(request)`

- **OnSuccess**: <code>[PagingPlaylistTrackObject](src/models/paging-playlist-track-object.ts)</code>
- **OnError**: throws <code>[Playlists.GetPlaylistsTracksError](src/resources/playlists.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.playlists.getPlaylistsTracks(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PagingPlaylistTrackObject, Playlists.GetPlaylistsTracksError&gt;</code>, with `result.value` of type <code>[PagingPlaylistTrackObject](src/models/paging-playlist-track-object.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>removeTracksPlaylist(request: Playlists.RemoveTracksPlaylistRequest, options?: RequestOptions): ApiPromise&lt;PlaylistSnapshotId, Playlists.RemoveTracksPlaylistError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove one or more items from a user's playlist.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.playlists.removeTracksPlaylist({ playlistId: "3cEYpjA9oz9GiPac4AsH4n" });
  // TODO: Handle 'response' of type PlaylistSnapshotId
} catch (err) {
  // TODO: Handle 'err' of type Playlists.RemoveTracksPlaylistError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.playlists.removeTracksPlaylist({
  playlistId: "3cEYpjA9oz9GiPac4AsH4n",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PlaylistSnapshotId
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>playlistId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[PlaylistsTracksRequest2](src/models/playlists-tracks-request2.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.playlists.removeTracksPlaylist(request)`

- **OnSuccess**: <code>[PlaylistSnapshotId](src/models/playlist-snapshot-id.ts)</code>
- **OnError**: throws <code>[Playlists.RemoveTracksPlaylistError](src/resources/playlists.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.playlists.removeTracksPlaylist(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PlaylistSnapshotId, Playlists.RemoveTracksPlaylistError&gt;</code>, with `result.value` of type <code>[PlaylistSnapshotId](src/models/playlist-snapshot-id.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>reorderOrReplacePlaylistsTracks(request: Playlists.ReorderOrReplacePlaylistsTracksRequest, options?: RequestOptions): ApiPromise&lt;PlaylistSnapshotId, Playlists.ReorderOrReplacePlaylistsTracksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Either reorder or replace items in a playlist depending on the request's parameters.
To reorder items, include `range_start`, `insert_before`, `range_length` and `snapshot_id` in the request's body.
To replace items, include `uris` as either a query parameter or in the request's body.
Replacing items in a playlist will overwrite its existing items. This operation can be used for replacing or clearing items in a playlist.
<br/>
**Note**: Replace and reorder are mutually exclusive operations which share the same endpoint, but have different parameters.
These operations can't be applied together in a single request.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.playlists.reorderOrReplacePlaylistsTracks({
    playlistId: "3cEYpjA9oz9GiPac4AsH4n",
  });
  // TODO: Handle 'response' of type PlaylistSnapshotId
} catch (err) {
  // TODO: Handle 'err' of type Playlists.ReorderOrReplacePlaylistsTracksError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.playlists.reorderOrReplacePlaylistsTracks({
  playlistId: "3cEYpjA9oz9GiPac4AsH4n",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PlaylistSnapshotId
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>playlistId</code> | <code>string</code> | - |
| <code>uris?</code> | <code>string</code> | - |
| <code>body?</code> | <code>[PlaylistsTracksRequest1](src/models/playlists-tracks-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.playlists.reorderOrReplacePlaylistsTracks(request)`

- **OnSuccess**: <code>[PlaylistSnapshotId](src/models/playlist-snapshot-id.ts)</code>
- **OnError**: throws <code>[Playlists.ReorderOrReplacePlaylistsTracksError](src/resources/playlists.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.playlists.reorderOrReplacePlaylistsTracks(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PlaylistSnapshotId, Playlists.ReorderOrReplacePlaylistsTracksError&gt;</code>, with `result.value` of type <code>[PlaylistSnapshotId](src/models/playlist-snapshot-id.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>unfollowPlaylist(request: Playlists.UnfollowPlaylistRequest, options?: RequestOptions): ApiPromise&lt;undefined, Playlists.UnfollowPlaylistError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove the current user as a follower of a playlist.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.playlists.unfollowPlaylist({ playlistId: "3cEYpjA9oz9GiPac4AsH4n" });
} catch (err) {
  // TODO: Handle 'err' of type Playlists.UnfollowPlaylistError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.playlists.unfollowPlaylist({
  playlistId: "3cEYpjA9oz9GiPac4AsH4n",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>playlistId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.playlists.unfollowPlaylist(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Playlists.UnfollowPlaylistError](src/resources/playlists.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.playlists.unfollowPlaylist(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Playlists.UnfollowPlaylistError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>uploadCustomPlaylistCover(request: Playlists.UploadCustomPlaylistCoverRequest, options?: RequestOptions): ApiPromise&lt;undefined, Playlists.UploadCustomPlaylistCoverError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Replace the image used to represent a specific playlist.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.playlists.uploadCustomPlaylistCover({ playlistId: "3cEYpjA9oz9GiPac4AsH4n", body: {} });
} catch (err) {
  // TODO: Handle 'err' of type Playlists.UploadCustomPlaylistCoverError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.playlists.uploadCustomPlaylistCover({
  playlistId: "3cEYpjA9oz9GiPac4AsH4n",
  body: {},
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>playlistId</code> | <code>string</code> | - |
| <code>body</code> | <code>Record&lt;string, unknown&gt;</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.playlists.uploadCustomPlaylistCover(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Playlists.UploadCustomPlaylistCoverError](src/resources/playlists.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.playlists.uploadCustomPlaylistCover(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Playlists.UploadCustomPlaylistCoverError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Users

> Source: [Users](src/resources/users.ts)

<details>
<summary><code>checkCurrentUserFollows(request: Users.CheckCurrentUserFollowsRequest, options?: RequestOptions): ApiPromise&lt;boolean[], Users.CheckCurrentUserFollowsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check to see if the current user is following one or more artists or other Spotify users.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.checkCurrentUserFollows({
    type: ItemType3.Artist,
    ids: "2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6",
  });
  // TODO: Handle 'response' of type boolean[]
} catch (err) {
  // TODO: Handle 'err' of type Users.CheckCurrentUserFollowsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users.checkCurrentUserFollows({
  type: ItemType3.Artist,
  ids: "2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type boolean[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>type</code> | <code>[ItemType3](src/models/item-type3.ts)</code> | - |
| <code>ids</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.checkCurrentUserFollows(request)`

- **OnSuccess**: <code>boolean[]</code>
- **OnError**: throws <code>[Users.CheckCurrentUserFollowsError](src/resources/users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.users.checkCurrentUserFollows(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;boolean[], Users.CheckCurrentUserFollowsError&gt;</code>, with `result.value` of type <code>boolean[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>checkIfUserFollowsPlaylist(request: Users.CheckIfUserFollowsPlaylistRequest, options?: RequestOptions): ApiPromise&lt;boolean[], Users.CheckIfUserFollowsPlaylistError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check to see if one or more Spotify users are following a specified playlist.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.checkIfUserFollowsPlaylist({
    playlistId: "3cEYpjA9oz9GiPac4AsH4n",
    ids: "jmperezperez,thelinmichael,wizzler",
  });
  // TODO: Handle 'response' of type boolean[]
} catch (err) {
  // TODO: Handle 'err' of type Users.CheckIfUserFollowsPlaylistError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users.checkIfUserFollowsPlaylist({
  playlistId: "3cEYpjA9oz9GiPac4AsH4n",
  ids: "jmperezperez,thelinmichael,wizzler",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type boolean[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>playlistId</code> | <code>string</code> | - |
| <code>ids</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.checkIfUserFollowsPlaylist(request)`

- **OnSuccess**: <code>boolean[]</code>
- **OnError**: throws <code>[Users.CheckIfUserFollowsPlaylistError](src/resources/users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.users.checkIfUserFollowsPlaylist(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;boolean[], Users.CheckIfUserFollowsPlaylistError&gt;</code>, with `result.value` of type <code>boolean[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>followArtistsUsers(request: Users.FollowArtistsUsersRequest, options?: RequestOptions): ApiPromise&lt;undefined, Users.FollowArtistsUsersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add the current user as a follower of one or more artists or other Spotify users.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.users.followArtistsUsers({
    type: ItemType2.Artist,
    ids: "2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6",
  });
} catch (err) {
  // TODO: Handle 'err' of type Users.FollowArtistsUsersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users.followArtistsUsers({
  type: ItemType2.Artist,
  ids: "2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>type</code> | <code>[ItemType2](src/models/item-type2.ts)</code> | - |
| <code>ids</code> | <code>string</code> | - |
| <code>body?</code> | <code>[FollowArtistsOrUsersRequest](src/models/follow-artists-or-users-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.followArtistsUsers(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Users.FollowArtistsUsersError](src/resources/users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.users.followArtistsUsers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Users.FollowArtistsUsersError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>followPlaylist(request: Users.FollowPlaylistRequest, options?: RequestOptions): ApiPromise&lt;undefined, Users.FollowPlaylistError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add the current user as a follower of a playlist.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.users.followPlaylist({ playlistId: "3cEYpjA9oz9GiPac4AsH4n" });
} catch (err) {
  // TODO: Handle 'err' of type Users.FollowPlaylistError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users.followPlaylist({ playlistId: "3cEYpjA9oz9GiPac4AsH4n" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>playlistId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[PlaylistsFollowersRequest](src/models/playlists-followers-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.followPlaylist(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Users.FollowPlaylistError](src/resources/users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.users.followPlaylist(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Users.FollowPlaylistError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCurrentUsersProfile(options?: RequestOptions): ApiPromise&lt;PrivateUserObject, Users.GetCurrentUsersProfileError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get detailed profile information about the current user (including the
current user's username).


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.getCurrentUsersProfile();
  // TODO: Handle 'response' of type PrivateUserObject
} catch (err) {
  // TODO: Handle 'err' of type Users.GetCurrentUsersProfileError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users.getCurrentUsersProfile().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PrivateUserObject
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.getCurrentUsersProfile()`

- **OnSuccess**: <code>[PrivateUserObject](src/models/private-user-object.ts)</code>
- **OnError**: throws <code>[Users.GetCurrentUsersProfileError](src/resources/users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.users.getCurrentUsersProfile().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PrivateUserObject, Users.GetCurrentUsersProfileError&gt;</code>, with `result.value` of type <code>[PrivateUserObject](src/models/private-user-object.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getFollowed(request: Users.GetFollowedRequest, options?: RequestOptions): ApiPromise&lt;CursorPagedArtists, Users.GetFollowedError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the current user's followed artists.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.getFollowed({
    type: ItemType1.Artist,
    after: "0I2XqVXqHScXjHhk6AYYRe",
    limit: 10,
  });
  // TODO: Handle 'response' of type CursorPagedArtists
} catch (err) {
  // TODO: Handle 'err' of type Users.GetFollowedError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users.getFollowed({
  type: ItemType1.Artist,
  after: "0I2XqVXqHScXjHhk6AYYRe",
  limit: 10,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CursorPagedArtists
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>type</code> | <code>[ItemType1](src/models/item-type1.ts)</code> | - |
| <code>after?</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 20 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.getFollowed(request)`

- **OnSuccess**: <code>[CursorPagedArtists](src/models/cursor-paged-artists.ts)</code>
- **OnError**: throws <code>[Users.GetFollowedError](src/resources/users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.users.getFollowed(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CursorPagedArtists, Users.GetFollowedError&gt;</code>, with `result.value` of type <code>[CursorPagedArtists](src/models/cursor-paged-artists.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getListUsersPlaylists(request: Users.GetListUsersPlaylistsRequest, options?: RequestOptions): ApiPromise&lt;PagingPlaylistObject, Users.GetListUsersPlaylistsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of the playlists owned or followed by a Spotify user.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.getListUsersPlaylists({ userId: "smedjan", limit: 10, offset: 5 });
  // TODO: Handle 'response' of type PagingPlaylistObject
} catch (err) {
  // TODO: Handle 'err' of type Users.GetListUsersPlaylistsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users.getListUsersPlaylists({
  userId: "smedjan",
  limit: 10,
  offset: 5,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PagingPlaylistObject
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 20 |
| <code>offset?</code> | <code>number</code> | -<br>**Default**: 0 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.getListUsersPlaylists(request)`

- **OnSuccess**: <code>[PagingPlaylistObject](src/models/paging-playlist-object.ts)</code>
- **OnError**: throws <code>[Users.GetListUsersPlaylistsError](src/resources/users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.users.getListUsersPlaylists(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PagingPlaylistObject, Users.GetListUsersPlaylistsError&gt;</code>, with `result.value` of type <code>[PagingPlaylistObject](src/models/paging-playlist-object.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUsersProfile(request: Users.GetUsersProfileRequest, options?: RequestOptions): ApiPromise&lt;PublicUserObject, Users.GetUsersProfileError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get public profile information about a Spotify user.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.getUsersProfile({ userId: "smedjan" });
  // TODO: Handle 'response' of type PublicUserObject
} catch (err) {
  // TODO: Handle 'err' of type Users.GetUsersProfileError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users.getUsersProfile({ userId: "smedjan" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicUserObject
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.getUsersProfile(request)`

- **OnSuccess**: <code>[PublicUserObject](src/models/public-user-object.ts)</code>
- **OnError**: throws <code>[Users.GetUsersProfileError](src/resources/users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.users.getUsersProfile(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicUserObject, Users.GetUsersProfileError&gt;</code>, with `result.value` of type <code>[PublicUserObject](src/models/public-user-object.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUsersTopArtists(request: Users.GetUsersTopArtistsRequest, options?: RequestOptions): ApiPromise&lt;PagingArtistObject, Users.GetUsersTopArtistsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the current user's top artists based on calculated affinity.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.getUsersTopArtists({ timeRange: "medium_term", limit: 10, offset: 5 });
  // TODO: Handle 'response' of type PagingArtistObject
} catch (err) {
  // TODO: Handle 'err' of type Users.GetUsersTopArtistsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users.getUsersTopArtists({
  timeRange: "medium_term",
  limit: 10,
  offset: 5,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PagingArtistObject
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timeRange?</code> | <code>string</code> | -<br>**Default**: "medium_term" |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 20 |
| <code>offset?</code> | <code>number</code> | -<br>**Default**: 0 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.getUsersTopArtists(request)`

- **OnSuccess**: <code>[PagingArtistObject](src/models/paging-artist-object.ts)</code>
- **OnError**: throws <code>[Users.GetUsersTopArtistsError](src/resources/users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.users.getUsersTopArtists(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PagingArtistObject, Users.GetUsersTopArtistsError&gt;</code>, with `result.value` of type <code>[PagingArtistObject](src/models/paging-artist-object.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUsersTopTracks(request: Users.GetUsersTopTracksRequest, options?: RequestOptions): ApiPromise&lt;PagingTrackObject, Users.GetUsersTopTracksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the current user's top tracks based on calculated affinity.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.getUsersTopTracks({ timeRange: "medium_term", limit: 10, offset: 5 });
  // TODO: Handle 'response' of type PagingTrackObject
} catch (err) {
  // TODO: Handle 'err' of type Users.GetUsersTopTracksError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users.getUsersTopTracks({
  timeRange: "medium_term",
  limit: 10,
  offset: 5,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PagingTrackObject
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timeRange?</code> | <code>string</code> | -<br>**Default**: "medium_term" |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 20 |
| <code>offset?</code> | <code>number</code> | -<br>**Default**: 0 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.getUsersTopTracks(request)`

- **OnSuccess**: <code>[PagingTrackObject](src/models/paging-track-object.ts)</code>
- **OnError**: throws <code>[Users.GetUsersTopTracksError](src/resources/users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.users.getUsersTopTracks(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PagingTrackObject, Users.GetUsersTopTracksError&gt;</code>, with `result.value` of type <code>[PagingTrackObject](src/models/paging-track-object.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>unfollowArtistsUsers(request: Users.UnfollowArtistsUsersRequest, options?: RequestOptions): ApiPromise&lt;undefined, Users.UnfollowArtistsUsersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove the current user as a follower of one or more artists or other Spotify users.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.users.unfollowArtistsUsers({
    type: ItemType3.Artist,
    ids: "2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6",
  });
} catch (err) {
  // TODO: Handle 'err' of type Users.UnfollowArtistsUsersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users.unfollowArtistsUsers({
  type: ItemType3.Artist,
  ids: "2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>type</code> | <code>[ItemType3](src/models/item-type3.ts)</code> | - |
| <code>ids</code> | <code>string</code> | - |
| <code>body?</code> | <code>[UnfollowArtistsOrUsersRequest](src/models/unfollow-artists-or-users-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.unfollowArtistsUsers(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Users.UnfollowArtistsUsersError](src/resources/users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.users.unfollowArtistsUsers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Users.UnfollowArtistsUsersError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>unfollowPlaylist(request: Users.UnfollowPlaylistRequest, options?: RequestOptions): ApiPromise&lt;undefined, Users.UnfollowPlaylistError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove the current user as a follower of a playlist.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.users.unfollowPlaylist({ playlistId: "3cEYpjA9oz9GiPac4AsH4n" });
} catch (err) {
  // TODO: Handle 'err' of type Users.UnfollowPlaylistError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users.unfollowPlaylist({ playlistId: "3cEYpjA9oz9GiPac4AsH4n" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>playlistId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.unfollowPlaylist(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Users.UnfollowPlaylistError](src/resources/users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.users.unfollowPlaylist(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Users.UnfollowPlaylistError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Search

> Source: [Search](src/resources/search.ts)

<details>
<summary><code>search(request: Search.SearchRequest, options?: RequestOptions): ApiPromise&lt;SearchItems, Search.SearchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Spotify catalog information about albums, artists, playlists, tracks, shows, episodes or audiobooks
that match a keyword string. Audiobooks are only available within the US, UK, Canada, Ireland, New Zealand and Australia markets.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.search.search({
    q: "remaster%20track:Doxy%20artist:Miles%20Davis",
    type: [ItemType.Album],
    market: "ES",
    limit: 10,
    offset: 5,
  });
  // TODO: Handle 'response' of type SearchItems
} catch (err) {
  // TODO: Handle 'err' of type Search.SearchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.search.search({
  q: "remaster%20track:Doxy%20artist:Miles%20Davis",
  type: [ItemType.Album],
  market: "ES",
  limit: 10,
  offset: 5,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SearchItems
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>q</code> | <code>string</code> | - |
| <code>type</code> | <code>[ItemType](src/models/item-type.ts)[]</code> | - |
| <code>market?</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 20 |
| <code>offset?</code> | <code>number</code> | -<br>**Default**: 0 |
| <code>includeExternal?</code> | <code>[IncludeExternal](src/models/include-external.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.search.search(request)`

- **OnSuccess**: <code>[SearchItems](src/models/search-items.ts)</code>
- **OnError**: throws <code>[Search.SearchError](src/resources/search.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.search.search(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SearchItems, Search.SearchError&gt;</code>, with `result.value` of type <code>[SearchItems](src/models/search-items.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Shows

> Source: [Shows](src/resources/shows.ts)

<details>
<summary><code>checkUsersSavedShows(request: Shows.CheckUsersSavedShowsRequest, options?: RequestOptions): ApiPromise&lt;boolean[], Shows.CheckUsersSavedShowsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check if one or more shows is already saved in the current Spotify user's library.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.shows.checkUsersSavedShows({
    ids: "5CfCWKI5pZ28U0uOzXkDHe,5as3aKmN2k11yfDDDSrvaZ",
  });
  // TODO: Handle 'response' of type boolean[]
} catch (err) {
  // TODO: Handle 'err' of type Shows.CheckUsersSavedShowsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.shows.checkUsersSavedShows({
  ids: "5CfCWKI5pZ28U0uOzXkDHe,5as3aKmN2k11yfDDDSrvaZ",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type boolean[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.shows.checkUsersSavedShows(request)`

- **OnSuccess**: <code>boolean[]</code>
- **OnError**: throws <code>[Shows.CheckUsersSavedShowsError](src/resources/shows.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.shows.checkUsersSavedShows(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;boolean[], Shows.CheckUsersSavedShowsError&gt;</code>, with `result.value` of type <code>boolean[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAShow(request: Shows.GetAShowRequest, options?: RequestOptions): ApiPromise&lt;ShowObject, Shows.GetAShowError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Spotify catalog information for a single show identified by its
unique Spotify ID.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.shows.getAShow({ id: "38bS44xjbVVZ3No3ByF1dJ", market: "ES" });
  // TODO: Handle 'response' of type ShowObject
} catch (err) {
  // TODO: Handle 'err' of type Shows.GetAShowError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.shows.getAShow({ id: "38bS44xjbVVZ3No3ByF1dJ", market: "ES" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ShowObject
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>market?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.shows.getAShow(request)`

- **OnSuccess**: <code>[ShowObject](src/models/show-object.ts)</code>
- **OnError**: throws <code>[Shows.GetAShowError](src/resources/shows.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.shows.getAShow(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ShowObject, Shows.GetAShowError&gt;</code>, with `result.value` of type <code>[ShowObject](src/models/show-object.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAShowsEpisodes(request: Shows.GetAShowsEpisodesRequest, options?: RequestOptions): ApiPromise&lt;PagingSimplifiedEpisodeObject, Shows.GetAShowsEpisodesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Spotify catalog information about an show’s episodes. Optional parameters can be used to limit the number of episodes returned.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.shows.getAShowsEpisodes({
    id: "38bS44xjbVVZ3No3ByF1dJ",
    market: "ES",
    limit: 10,
    offset: 5,
  });
  // TODO: Handle 'response' of type PagingSimplifiedEpisodeObject
} catch (err) {
  // TODO: Handle 'err' of type Shows.GetAShowsEpisodesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.shows.getAShowsEpisodes({
  id: "38bS44xjbVVZ3No3ByF1dJ",
  market: "ES",
  limit: 10,
  offset: 5,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PagingSimplifiedEpisodeObject
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>market?</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 20 |
| <code>offset?</code> | <code>number</code> | -<br>**Default**: 0 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.shows.getAShowsEpisodes(request)`

- **OnSuccess**: <code>[PagingSimplifiedEpisodeObject](src/models/paging-simplified-episode-object.ts)</code>
- **OnError**: throws <code>[Shows.GetAShowsEpisodesError](src/resources/shows.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.shows.getAShowsEpisodes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PagingSimplifiedEpisodeObject, Shows.GetAShowsEpisodesError&gt;</code>, with `result.value` of type <code>[PagingSimplifiedEpisodeObject](src/models/paging-simplified-episode-object.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMultipleShows(request: Shows.GetMultipleShowsRequest, options?: RequestOptions): ApiPromise&lt;ManySimplifiedShows, Shows.GetMultipleShowsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Spotify catalog information for several shows based on their Spotify IDs.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.shows.getMultipleShows({
    ids: "5CfCWKI5pZ28U0uOzXkDHe,5as3aKmN2k11yfDDDSrvaZ",
    market: "ES",
  });
  // TODO: Handle 'response' of type ManySimplifiedShows
} catch (err) {
  // TODO: Handle 'err' of type Shows.GetMultipleShowsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.shows.getMultipleShows({
  ids: "5CfCWKI5pZ28U0uOzXkDHe,5as3aKmN2k11yfDDDSrvaZ",
  market: "ES",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ManySimplifiedShows
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |
| <code>market?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.shows.getMultipleShows(request)`

- **OnSuccess**: <code>[ManySimplifiedShows](src/models/many-simplified-shows.ts)</code>
- **OnError**: throws <code>[Shows.GetMultipleShowsError](src/resources/shows.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.shows.getMultipleShows(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ManySimplifiedShows, Shows.GetMultipleShowsError&gt;</code>, with `result.value` of type <code>[ManySimplifiedShows](src/models/many-simplified-shows.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUsersSavedShows(request: Shows.GetUsersSavedShowsRequest, options?: RequestOptions): ApiPromise&lt;PagingSavedShowObject, Shows.GetUsersSavedShowsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of shows saved in the current Spotify user's library. Optional parameters can be used to limit the number of shows returned.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.shows.getUsersSavedShows({ limit: 10, offset: 5 });
  // TODO: Handle 'response' of type PagingSavedShowObject
} catch (err) {
  // TODO: Handle 'err' of type Shows.GetUsersSavedShowsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.shows.getUsersSavedShows({ limit: 10, offset: 5 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PagingSavedShowObject
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 20 |
| <code>offset?</code> | <code>number</code> | -<br>**Default**: 0 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.shows.getUsersSavedShows(request)`

- **OnSuccess**: <code>[PagingSavedShowObject](src/models/paging-saved-show-object.ts)</code>
- **OnError**: throws <code>[Shows.GetUsersSavedShowsError](src/resources/shows.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.shows.getUsersSavedShows(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PagingSavedShowObject, Shows.GetUsersSavedShowsError&gt;</code>, with `result.value` of type <code>[PagingSavedShowObject](src/models/paging-saved-show-object.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>removeShowsUser(request: Shows.RemoveShowsUserRequest, options?: RequestOptions): ApiPromise&lt;undefined, Shows.RemoveShowsUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete one or more shows from current Spotify user's library.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.shows.removeShowsUser({ ids: "5CfCWKI5pZ28U0uOzXkDHe,5as3aKmN2k11yfDDDSrvaZ", market: "ES" });
} catch (err) {
  // TODO: Handle 'err' of type Shows.RemoveShowsUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.shows.removeShowsUser({
  ids: "5CfCWKI5pZ28U0uOzXkDHe,5as3aKmN2k11yfDDDSrvaZ",
  market: "ES",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |
| <code>market?</code> | <code>string</code> | - |
| <code>body?</code> | <code>[RemoveShowsRequest](src/models/remove-shows-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.shows.removeShowsUser(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Shows.RemoveShowsUserError](src/resources/shows.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.shows.removeShowsUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Shows.RemoveShowsUserError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>saveShowsUser(request: Shows.SaveShowsUserRequest, options?: RequestOptions): ApiPromise&lt;undefined, Shows.SaveShowsUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Save one or more shows to current Spotify user's library.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.shows.saveShowsUser({ ids: "5CfCWKI5pZ28U0uOzXkDHe,5as3aKmN2k11yfDDDSrvaZ" });
} catch (err) {
  // TODO: Handle 'err' of type Shows.SaveShowsUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.shows.saveShowsUser({
  ids: "5CfCWKI5pZ28U0uOzXkDHe,5as3aKmN2k11yfDDDSrvaZ",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>string</code> | - |
| <code>body?</code> | <code>[SaveShowsRequest](src/models/save-shows-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.shows.saveShowsUser(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Shows.SaveShowsUserError](src/resources/shows.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.shows.saveShowsUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Shows.SaveShowsUserError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SpotifyWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

