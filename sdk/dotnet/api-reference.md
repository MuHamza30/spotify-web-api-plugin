# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a credential that cannot be applied as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [SpotifyWebApiClient](src/SpotifyWebApi/SpotifyWebApiClient.cs)

## Albums

> Source: [Albums](src/SpotifyWebApi/Api/Albums.cs)

<details>
<summary><code>Task&lt;IReadOnlyList&lt;bool&gt;&gt; CheckUsersSavedAlbums(CheckUsersSavedAlbumsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check if one or more albums is already saved in the current Spotify user's 'Your Music' library.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Albums.CheckUsersSavedAlbums(new CheckUsersSavedAlbumsRequest
    {
        Ids = "382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc",
    });
    // TODO: Handle 'response' of type IReadOnlyList<bool>
}
catch (ApiException<CheckUsersSavedAlbumsError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CheckUsersSavedAlbumsRequest](src/SpotifyWebApi/Requests/Albums/CheckUsersSavedAlbumsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;bool&gt;</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[CheckUsersSavedAlbumsError](src/SpotifyWebApi/Errors/CheckUsersSavedAlbumsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AlbumObject&gt; GetAnAlbum(GetAnAlbumRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Spotify catalog information for a single album.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Albums.GetAnAlbum(new GetAnAlbumRequest
    {
        Id = "4aawyAB9vmqN3uQ7FjRGTy",
        Market = "ES",
    });
    // TODO: Handle 'response' of type AlbumObject
}
catch (ApiException<GetAnAlbumError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetAnAlbumRequest](src/SpotifyWebApi/Requests/Albums/GetAnAlbumRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AlbumObject](src/SpotifyWebApi/Models/AlbumObject.cs)</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[GetAnAlbumError](src/SpotifyWebApi/Errors/GetAnAlbumError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PagingSimplifiedTrackObject&gt; GetAnAlbumsTracks(GetAnAlbumsTracksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Spotify catalog information about an album’s tracks.
Optional parameters can be used to limit the number of tracks returned.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Albums.GetAnAlbumsTracks(new GetAnAlbumsTracksRequest
    {
        Id = "4aawyAB9vmqN3uQ7FjRGTy",
        Market = "ES",
        Limit = 10,
        Offset = 5,
    });
    // TODO: Handle 'response' of type PagingSimplifiedTrackObject
}
catch (ApiException<GetAnAlbumsTracksError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetAnAlbumsTracksRequest](src/SpotifyWebApi/Requests/Albums/GetAnAlbumsTracksRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PagingSimplifiedTrackObject](src/SpotifyWebApi/Models/PagingSimplifiedTrackObject.cs)</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[GetAnAlbumsTracksError](src/SpotifyWebApi/Errors/GetAnAlbumsTracksError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PagingArtistDiscographyAlbumObject&gt; GetAnArtistsAlbums(GetAnArtistsAlbumsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Spotify catalog information about an artist's albums.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Albums.GetAnArtistsAlbums(new GetAnArtistsAlbumsRequest
    {
        Id = "0TnOYISbd1XYRBk9myaseg",
        IncludeGroups = "single,appears_on",
        Market = "ES",
        Limit = 10,
        Offset = 5,
    });
    // TODO: Handle 'response' of type PagingArtistDiscographyAlbumObject
}
catch (ApiException<GetAnArtistsAlbumsError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetAnArtistsAlbumsRequest](src/SpotifyWebApi/Requests/Artists/GetAnArtistsAlbumsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PagingArtistDiscographyAlbumObject](src/SpotifyWebApi/Models/PagingArtistDiscographyAlbumObject.cs)</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[GetAnArtistsAlbumsError](src/SpotifyWebApi/Errors/GetAnArtistsAlbumsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ManyAlbums&gt; GetMultipleAlbums(GetMultipleAlbumsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Spotify catalog information for multiple albums identified by their Spotify IDs.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Albums.GetMultipleAlbums(new GetMultipleAlbumsRequest
    {
        Ids = "382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc",
        Market = "ES",
    });
    // TODO: Handle 'response' of type ManyAlbums
}
catch (ApiException<GetMultipleAlbumsError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetMultipleAlbumsRequest](src/SpotifyWebApi/Requests/Albums/GetMultipleAlbumsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ManyAlbums](src/SpotifyWebApi/Models/ManyAlbums.cs)</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[GetMultipleAlbumsError](src/SpotifyWebApi/Errors/GetMultipleAlbumsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PagedAlbums&gt; GetNewReleases(GetNewReleasesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of new album releases featured in Spotify (shown, for example, on a Spotify player’s “Browse” tab).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Albums.GetNewReleases(new GetNewReleasesRequest { Limit = 10, Offset = 5 });
    // TODO: Handle 'response' of type PagedAlbums
}
catch (ApiException<GetNewReleasesError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetNewReleasesRequest](src/SpotifyWebApi/Requests/Albums/GetNewReleasesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PagedAlbums](src/SpotifyWebApi/Models/PagedAlbums.cs)</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[GetNewReleasesError](src/SpotifyWebApi/Errors/GetNewReleasesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PagingSavedAlbumObject&gt; GetUsersSavedAlbums(GetUsersSavedAlbumsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of the albums saved in the current Spotify user's 'Your Music' library.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Albums.GetUsersSavedAlbums(new GetUsersSavedAlbumsRequest
    {
        Limit = 10,
        Offset = 5,
        Market = "ES",
    });
    // TODO: Handle 'response' of type PagingSavedAlbumObject
}
catch (ApiException<GetUsersSavedAlbumsError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetUsersSavedAlbumsRequest](src/SpotifyWebApi/Requests/Albums/GetUsersSavedAlbumsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PagingSavedAlbumObject](src/SpotifyWebApi/Models/PagingSavedAlbumObject.cs)</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[GetUsersSavedAlbumsError](src/SpotifyWebApi/Errors/GetUsersSavedAlbumsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task RemoveAlbumsUser(RemoveAlbumsUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove one or more albums from the current user's 'Your Music' library.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Albums.RemoveAlbumsUser(new RemoveAlbumsUserRequest
    {
        Ids = "382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc",
    });
}
catch (ApiException<RemoveAlbumsUserError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RemoveAlbumsUserRequest](src/SpotifyWebApi/Requests/Albums/RemoveAlbumsUserRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[RemoveAlbumsUserError](src/SpotifyWebApi/Errors/RemoveAlbumsUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task SaveAlbumsUser(SaveAlbumsUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Save one or more albums to the current user's 'Your Music' library.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Albums.SaveAlbumsUser(new SaveAlbumsUserRequest
    {
        Ids = "382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc",
    });
}
catch (ApiException<SaveAlbumsUserError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SaveAlbumsUserRequest](src/SpotifyWebApi/Requests/Albums/SaveAlbumsUserRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[SaveAlbumsUserError](src/SpotifyWebApi/Errors/SaveAlbumsUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Artists

> Source: [Artists](src/SpotifyWebApi/Api/Artists.cs)

<details>
<summary><code>Task&lt;IReadOnlyList&lt;bool&gt;&gt; CheckCurrentUserFollows(CheckCurrentUserFollowsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check to see if the current user is following one or more artists or other Spotify users.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Artists.CheckCurrentUserFollows(new CheckCurrentUserFollowsRequest
    {
        Type = ItemType3.Artist,
        Ids = "2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6",
    });
    // TODO: Handle 'response' of type IReadOnlyList<bool>
}
catch (ApiException<CheckCurrentUserFollowsError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CheckCurrentUserFollowsRequest](src/SpotifyWebApi/Requests/Users/CheckCurrentUserFollowsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;bool&gt;</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[CheckCurrentUserFollowsError](src/SpotifyWebApi/Errors/CheckCurrentUserFollowsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task FollowArtistsUsers(FollowArtistsUsersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add the current user as a follower of one or more artists or other Spotify users.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Artists.FollowArtistsUsers(new FollowArtistsUsersRequest
    {
        Type = ItemType2.Artist,
        Ids = "2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6",
    });
}
catch (ApiException<FollowArtistsUsersError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FollowArtistsUsersRequest](src/SpotifyWebApi/Requests/Users/FollowArtistsUsersRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[FollowArtistsUsersError](src/SpotifyWebApi/Errors/FollowArtistsUsersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ArtistObject&gt; GetAnArtist(GetAnArtistRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Spotify catalog information for a single artist identified by their unique Spotify ID.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Artists.GetAnArtist(new GetAnArtistRequest { Id = "0TnOYISbd1XYRBk9myaseg" });
    // TODO: Handle 'response' of type ArtistObject
}
catch (ApiException<GetAnArtistError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetAnArtistRequest](src/SpotifyWebApi/Requests/Artists/GetAnArtistRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ArtistObject](src/SpotifyWebApi/Models/ArtistObject.cs)</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[GetAnArtistError](src/SpotifyWebApi/Errors/GetAnArtistError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PagingArtistDiscographyAlbumObject&gt; GetAnArtistsAlbums(GetAnArtistsAlbumsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Spotify catalog information about an artist's albums.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Artists.GetAnArtistsAlbums(new GetAnArtistsAlbumsRequest
    {
        Id = "0TnOYISbd1XYRBk9myaseg",
        IncludeGroups = "single,appears_on",
        Market = "ES",
        Limit = 10,
        Offset = 5,
    });
    // TODO: Handle 'response' of type PagingArtistDiscographyAlbumObject
}
catch (ApiException<GetAnArtistsAlbumsError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetAnArtistsAlbumsRequest](src/SpotifyWebApi/Requests/Artists/GetAnArtistsAlbumsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PagingArtistDiscographyAlbumObject](src/SpotifyWebApi/Models/PagingArtistDiscographyAlbumObject.cs)</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[GetAnArtistsAlbumsError](src/SpotifyWebApi/Errors/GetAnArtistsAlbumsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ManyArtists&gt; GetAnArtistsRelatedArtists(GetAnArtistsRelatedArtistsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Spotify catalog information about artists similar to a given artist. Similarity is based on analysis of the Spotify community's listening history.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Artists.GetAnArtistsRelatedArtists(new GetAnArtistsRelatedArtistsRequest
    {
        Id = "0TnOYISbd1XYRBk9myaseg",
    });
    // TODO: Handle 'response' of type ManyArtists
}
catch (ApiException<GetAnArtistsRelatedArtistsError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetAnArtistsRelatedArtistsRequest](src/SpotifyWebApi/Requests/Artists/GetAnArtistsRelatedArtistsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ManyArtists](src/SpotifyWebApi/Models/ManyArtists.cs)</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[GetAnArtistsRelatedArtistsError](src/SpotifyWebApi/Errors/GetAnArtistsRelatedArtistsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ManyTracks&gt; GetAnArtistsTopTracks(GetAnArtistsTopTracksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Spotify catalog information about an artist's top tracks by country.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Artists.GetAnArtistsTopTracks(new GetAnArtistsTopTracksRequest
    {
        Id = "0TnOYISbd1XYRBk9myaseg",
        Market = "ES",
    });
    // TODO: Handle 'response' of type ManyTracks
}
catch (ApiException<GetAnArtistsTopTracksError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetAnArtistsTopTracksRequest](src/SpotifyWebApi/Requests/Artists/GetAnArtistsTopTracksRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ManyTracks](src/SpotifyWebApi/Models/ManyTracks.cs)</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[GetAnArtistsTopTracksError](src/SpotifyWebApi/Errors/GetAnArtistsTopTracksError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CursorPagedArtists&gt; GetFollowed(GetFollowedRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the current user's followed artists.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Artists.GetFollowed(new GetFollowedRequest
    {
        Type = ItemType1.Artist,
        After = "0I2XqVXqHScXjHhk6AYYRe",
        Limit = 10,
    });
    // TODO: Handle 'response' of type CursorPagedArtists
}
catch (ApiException<GetFollowedError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetFollowedRequest](src/SpotifyWebApi/Requests/Users/GetFollowedRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CursorPagedArtists](src/SpotifyWebApi/Models/CursorPagedArtists.cs)</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[GetFollowedError](src/SpotifyWebApi/Errors/GetFollowedError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ManyArtists&gt; GetMultipleArtists(GetMultipleArtistsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Spotify catalog information for several artists based on their Spotify IDs.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Artists.GetMultipleArtists(new GetMultipleArtistsRequest
    {
        Ids = "2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6",
    });
    // TODO: Handle 'response' of type ManyArtists
}
catch (ApiException<GetMultipleArtistsError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetMultipleArtistsRequest](src/SpotifyWebApi/Requests/Artists/GetMultipleArtistsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ManyArtists](src/SpotifyWebApi/Models/ManyArtists.cs)</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[GetMultipleArtistsError](src/SpotifyWebApi/Errors/GetMultipleArtistsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PagingArtistObject&gt; GetUsersTopArtists(GetUsersTopArtistsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the current user's top artists based on calculated affinity.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Artists.GetUsersTopArtists(new GetUsersTopArtistsRequest
    {
        TimeRange = "medium_term",
        Limit = 10,
        Offset = 5,
    });
    // TODO: Handle 'response' of type PagingArtistObject
}
catch (ApiException<GetUsersTopArtistsError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetUsersTopArtistsRequest](src/SpotifyWebApi/Requests/Users/GetUsersTopArtistsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PagingArtistObject](src/SpotifyWebApi/Models/PagingArtistObject.cs)</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[GetUsersTopArtistsError](src/SpotifyWebApi/Errors/GetUsersTopArtistsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task UnfollowArtistsUsers(UnfollowArtistsUsersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove the current user as a follower of one or more artists or other Spotify users.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Artists.UnfollowArtistsUsers(new UnfollowArtistsUsersRequest
    {
        Type = ItemType3.Artist,
        Ids = "2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6",
    });
}
catch (ApiException<UnfollowArtistsUsersError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UnfollowArtistsUsersRequest](src/SpotifyWebApi/Requests/Users/UnfollowArtistsUsersRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[UnfollowArtistsUsersError](src/SpotifyWebApi/Errors/UnfollowArtistsUsersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Audiobooks

> Source: [Audiobooks](src/SpotifyWebApi/Api/Audiobooks.cs)

<details>
<summary><code>Task&lt;IReadOnlyList&lt;bool&gt;&gt; CheckUsersSavedAudiobooks(CheckUsersSavedAudiobooksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check if one or more audiobooks are already saved in the current Spotify user's library.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Audiobooks.CheckUsersSavedAudiobooks(new CheckUsersSavedAudiobooksRequest
    {
        Ids = "18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ,7iHfbu1YPACw6oZPAFJtqe",
    });
    // TODO: Handle 'response' of type IReadOnlyList<bool>
}
catch (ApiException<CheckUsersSavedAudiobooksError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CheckUsersSavedAudiobooksRequest](src/SpotifyWebApi/Requests/Audiobooks/CheckUsersSavedAudiobooksRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;bool&gt;</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[CheckUsersSavedAudiobooksError](src/SpotifyWebApi/Errors/CheckUsersSavedAudiobooksError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AudiobookObject&gt; GetAnAudiobook(GetAnAudiobookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Spotify catalog information for a single audiobook. Audiobooks are only available within the US, UK, Canada, Ireland, New Zealand and Australia markets.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Audiobooks.GetAnAudiobook(new GetAnAudiobookRequest
    {
        Id = "7iHfbu1YPACw6oZPAFJtqe",
        Market = "ES",
    });
    // TODO: Handle 'response' of type AudiobookObject
}
catch (ApiException<GetAnAudiobookError> ex)
{
    if (ex.Error.TryGetBadRequest1(out var error))
    {
        // TODO: Handle 'error' of type BadRequest1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetAnAudiobookRequest](src/SpotifyWebApi/Requests/Audiobooks/GetAnAudiobookRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AudiobookObject](src/SpotifyWebApi/Models/AudiobookObject.cs)</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[GetAnAudiobookError](src/SpotifyWebApi/Errors/GetAnAudiobookError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PagingSimplifiedChapterObject&gt; GetAudiobookChapters(GetAudiobookChaptersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Spotify catalog information about an audiobook's chapters. Audiobooks are only available within the US, UK, Canada, Ireland, New Zealand and Australia markets.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Audiobooks.GetAudiobookChapters(new GetAudiobookChaptersRequest
    {
        Id = "7iHfbu1YPACw6oZPAFJtqe",
        Market = "ES",
        Limit = 10,
        Offset = 5,
    });
    // TODO: Handle 'response' of type PagingSimplifiedChapterObject
}
catch (ApiException<GetAudiobookChaptersError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetAudiobookChaptersRequest](src/SpotifyWebApi/Requests/Audiobooks/GetAudiobookChaptersRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PagingSimplifiedChapterObject](src/SpotifyWebApi/Models/PagingSimplifiedChapterObject.cs)</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[GetAudiobookChaptersError](src/SpotifyWebApi/Errors/GetAudiobookChaptersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ManyAudiobooks&gt; GetMultipleAudiobooks(GetMultipleAudiobooksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Spotify catalog information for several audiobooks identified by their Spotify IDs. Audiobooks are only available within the US, UK, Canada, Ireland, New Zealand and Australia markets.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Audiobooks.GetMultipleAudiobooks(new GetMultipleAudiobooksRequest
    {
        Ids = "18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ,7iHfbu1YPACw6oZPAFJtqe",
        Market = "ES",
    });
    // TODO: Handle 'response' of type ManyAudiobooks
}
catch (ApiException<GetMultipleAudiobooksError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetMultipleAudiobooksRequest](src/SpotifyWebApi/Requests/Audiobooks/GetMultipleAudiobooksRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ManyAudiobooks](src/SpotifyWebApi/Models/ManyAudiobooks.cs)</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[GetMultipleAudiobooksError](src/SpotifyWebApi/Errors/GetMultipleAudiobooksError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PagingSavedAudiobookObject&gt; GetUsersSavedAudiobooks(GetUsersSavedAudiobooksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of the audiobooks saved in the current Spotify user's 'Your Music' library.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Audiobooks.GetUsersSavedAudiobooks(new GetUsersSavedAudiobooksRequest
    {
        Limit = 10,
        Offset = 5,
    });
    // TODO: Handle 'response' of type PagingSavedAudiobookObject
}
catch (ApiException<GetUsersSavedAudiobooksError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetUsersSavedAudiobooksRequest](src/SpotifyWebApi/Requests/Audiobooks/GetUsersSavedAudiobooksRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PagingSavedAudiobookObject](src/SpotifyWebApi/Models/PagingSavedAudiobookObject.cs)</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[GetUsersSavedAudiobooksError](src/SpotifyWebApi/Errors/GetUsersSavedAudiobooksError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task RemoveAudiobooksUser(RemoveAudiobooksUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove one or more audiobooks from the Spotify user's library.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Audiobooks.RemoveAudiobooksUser(new RemoveAudiobooksUserRequest
    {
        Ids = "18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ,7iHfbu1YPACw6oZPAFJtqe",
    });
}
catch (ApiException<RemoveAudiobooksUserError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RemoveAudiobooksUserRequest](src/SpotifyWebApi/Requests/Audiobooks/RemoveAudiobooksUserRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[RemoveAudiobooksUserError](src/SpotifyWebApi/Errors/RemoveAudiobooksUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task SaveAudiobooksUser(SaveAudiobooksUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Save one or more audiobooks to the current Spotify user's library.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Audiobooks.SaveAudiobooksUser(new SaveAudiobooksUserRequest
    {
        Ids = "18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ,7iHfbu1YPACw6oZPAFJtqe",
    });
}
catch (ApiException<SaveAudiobooksUserError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SaveAudiobooksUserRequest](src/SpotifyWebApi/Requests/Audiobooks/SaveAudiobooksUserRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[SaveAudiobooksUserError](src/SpotifyWebApi/Errors/SaveAudiobooksUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## CategoriesApi

> Source: [CategoriesApi](src/SpotifyWebApi/Api/CategoriesApi.cs)

<details>
<summary><code>Task&lt;PagingFeaturedPlaylistObject&gt; GetACategoriesPlaylists(GetACategoriesPlaylistsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of Spotify playlists tagged with a particular category.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CategoriesApi.GetACategoriesPlaylists(new GetACategoriesPlaylistsRequest
    {
        CategoryId = "dinner",
        Limit = 10,
        Offset = 5,
    });
    // TODO: Handle 'response' of type PagingFeaturedPlaylistObject
}
catch (ApiException<GetACategoriesPlaylistsError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetACategoriesPlaylistsRequest](src/SpotifyWebApi/Requests/Playlists/GetACategoriesPlaylistsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PagingFeaturedPlaylistObject](src/SpotifyWebApi/Models/PagingFeaturedPlaylistObject.cs)</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[GetACategoriesPlaylistsError](src/SpotifyWebApi/Errors/GetACategoriesPlaylistsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CategoryObject&gt; GetACategory(GetACategoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a single category used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CategoriesApi.GetACategory(new GetACategoryRequest
    {
        CategoryId = "dinner",
        Locale = "sv_SE",
    });
    // TODO: Handle 'response' of type CategoryObject
}
catch (ApiException<GetACategoryError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetACategoryRequest](src/SpotifyWebApi/Requests/CategoriesApi/GetACategoryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CategoryObject](src/SpotifyWebApi/Models/CategoryObject.cs)</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[GetACategoryError](src/SpotifyWebApi/Errors/GetACategoryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PagedCategories&gt; GetCategories(GetCategoriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of categories used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CategoriesApi.GetCategories(new GetCategoriesRequest
    {
        Locale = "sv_SE",
        Limit = 10,
        Offset = 5,
    });
    // TODO: Handle 'response' of type PagedCategories
}
catch (ApiException<GetCategoriesError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetCategoriesRequest](src/SpotifyWebApi/Requests/CategoriesApi/GetCategoriesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PagedCategories](src/SpotifyWebApi/Models/PagedCategories.cs)</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[GetCategoriesError](src/SpotifyWebApi/Errors/GetCategoriesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Chapters

> Source: [Chapters](src/SpotifyWebApi/Api/Chapters.cs)

<details>
<summary><code>Task&lt;ChapterObject&gt; GetAChapter(GetAChapterRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Spotify catalog information for a single audiobook chapter. Chapters are only available within the US, UK, Canada, Ireland, New Zealand and Australia markets.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Chapters.GetAChapter(new GetAChapterRequest
    {
        Id = "0D5wENdkdwbqlrHoaJ9g29",
        Market = "ES",
    });
    // TODO: Handle 'response' of type ChapterObject
}
catch (ApiException<GetAChapterError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetAChapterRequest](src/SpotifyWebApi/Requests/Chapters/GetAChapterRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ChapterObject](src/SpotifyWebApi/Models/ChapterObject.cs)</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[GetAChapterError](src/SpotifyWebApi/Errors/GetAChapterError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PagingSimplifiedChapterObject&gt; GetAudiobookChapters(GetAudiobookChaptersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Spotify catalog information about an audiobook's chapters. Audiobooks are only available within the US, UK, Canada, Ireland, New Zealand and Australia markets.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Chapters.GetAudiobookChapters(new GetAudiobookChaptersRequest
    {
        Id = "7iHfbu1YPACw6oZPAFJtqe",
        Market = "ES",
        Limit = 10,
        Offset = 5,
    });
    // TODO: Handle 'response' of type PagingSimplifiedChapterObject
}
catch (ApiException<GetAudiobookChaptersError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetAudiobookChaptersRequest](src/SpotifyWebApi/Requests/Audiobooks/GetAudiobookChaptersRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PagingSimplifiedChapterObject](src/SpotifyWebApi/Models/PagingSimplifiedChapterObject.cs)</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[GetAudiobookChaptersError](src/SpotifyWebApi/Errors/GetAudiobookChaptersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ManyChapters&gt; GetSeveralChapters(GetSeveralChaptersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Spotify catalog information for several audiobook chapters identified by their Spotify IDs. Chapters are only available within the US, UK, Canada, Ireland, New Zealand and Australia markets.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Chapters.GetSeveralChapters(new GetSeveralChaptersRequest
    {
        Ids = "0IsXVP0JmcB2adSE338GkK,3ZXb8FKZGU0EHALYX6uCzU,0D5wENdkdwbqlrHoaJ9g29",
        Market = "ES",
    });
    // TODO: Handle 'response' of type ManyChapters
}
catch (ApiException<GetSeveralChaptersError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetSeveralChaptersRequest](src/SpotifyWebApi/Requests/Chapters/GetSeveralChaptersRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ManyChapters](src/SpotifyWebApi/Models/ManyChapters.cs)</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[GetSeveralChaptersError](src/SpotifyWebApi/Errors/GetSeveralChaptersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Episodes

> Source: [Episodes](src/SpotifyWebApi/Api/Episodes.cs)

<details>
<summary><code>Task&lt;IReadOnlyList&lt;bool&gt;&gt; CheckUsersSavedEpisodes(CheckUsersSavedEpisodesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check if one or more episodes is already saved in the current Spotify user's 'Your Episodes' library.<br/>
This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)..

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Episodes.CheckUsersSavedEpisodes(new CheckUsersSavedEpisodesRequest
    {
        Ids = "77o6BIVlYM3msb4MMIL1jH,0Q86acNRm6V9GYx55SXKwf",
    });
    // TODO: Handle 'response' of type IReadOnlyList<bool>
}
catch (ApiException<CheckUsersSavedEpisodesError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CheckUsersSavedEpisodesRequest](src/SpotifyWebApi/Requests/Episodes/CheckUsersSavedEpisodesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;bool&gt;</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[CheckUsersSavedEpisodesError](src/SpotifyWebApi/Errors/CheckUsersSavedEpisodesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PagingSimplifiedEpisodeObject&gt; GetAShowsEpisodes(GetAShowsEpisodesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Spotify catalog information about an show’s episodes. Optional parameters can be used to limit the number of episodes returned.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Episodes.GetAShowsEpisodes(new GetAShowsEpisodesRequest
    {
        Id = "38bS44xjbVVZ3No3ByF1dJ",
        Market = "ES",
        Limit = 10,
        Offset = 5,
    });
    // TODO: Handle 'response' of type PagingSimplifiedEpisodeObject
}
catch (ApiException<GetAShowsEpisodesError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetAShowsEpisodesRequest](src/SpotifyWebApi/Requests/Shows/GetAShowsEpisodesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PagingSimplifiedEpisodeObject](src/SpotifyWebApi/Models/PagingSimplifiedEpisodeObject.cs)</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[GetAShowsEpisodesError](src/SpotifyWebApi/Errors/GetAShowsEpisodesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;EpisodeObject&gt; GetAnEpisode(GetAnEpisodeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Spotify catalog information for a single episode identified by its
unique Spotify ID.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Episodes.GetAnEpisode(new GetAnEpisodeRequest
    {
        Id = "512ojhOuo1ktJprKbVcKyQ",
        Market = "ES",
    });
    // TODO: Handle 'response' of type EpisodeObject
}
catch (ApiException<GetAnEpisodeError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetAnEpisodeRequest](src/SpotifyWebApi/Requests/Episodes/GetAnEpisodeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EpisodeObject](src/SpotifyWebApi/Models/EpisodeObject.cs)</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[GetAnEpisodeError](src/SpotifyWebApi/Errors/GetAnEpisodeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ManyEpisodes&gt; GetMultipleEpisodes(GetMultipleEpisodesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Spotify catalog information for several episodes based on their Spotify IDs.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Episodes.GetMultipleEpisodes(new GetMultipleEpisodesRequest
    {
        Ids = "77o6BIVlYM3msb4MMIL1jH,0Q86acNRm6V9GYx55SXKwf",
        Market = "ES",
    });
    // TODO: Handle 'response' of type ManyEpisodes
}
catch (ApiException<GetMultipleEpisodesError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetMultipleEpisodesRequest](src/SpotifyWebApi/Requests/Episodes/GetMultipleEpisodesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ManyEpisodes](src/SpotifyWebApi/Models/ManyEpisodes.cs)</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[GetMultipleEpisodesError](src/SpotifyWebApi/Errors/GetMultipleEpisodesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PagingSavedEpisodeObject&gt; GetUsersSavedEpisodes(GetUsersSavedEpisodesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of the episodes saved in the current Spotify user's library.<br/>
This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Episodes.GetUsersSavedEpisodes(new GetUsersSavedEpisodesRequest
    {
        Market = "ES",
        Limit = 10,
        Offset = 5,
    });
    // TODO: Handle 'response' of type PagingSavedEpisodeObject
}
catch (ApiException<GetUsersSavedEpisodesError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetUsersSavedEpisodesRequest](src/SpotifyWebApi/Requests/Episodes/GetUsersSavedEpisodesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PagingSavedEpisodeObject](src/SpotifyWebApi/Models/PagingSavedEpisodeObject.cs)</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[GetUsersSavedEpisodesError](src/SpotifyWebApi/Errors/GetUsersSavedEpisodesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task RemoveEpisodesUser(RemoveEpisodesUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove one or more episodes from the current user's library.<br/>
This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Episodes.RemoveEpisodesUser(new RemoveEpisodesUserRequest
    {
        Ids = "7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B",
    });
}
catch (ApiException<RemoveEpisodesUserError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RemoveEpisodesUserRequest](src/SpotifyWebApi/Requests/Episodes/RemoveEpisodesUserRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[RemoveEpisodesUserError](src/SpotifyWebApi/Errors/RemoveEpisodesUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task SaveEpisodesUser(SaveEpisodesUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Save one or more episodes to the current user's library.<br/>
This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Episodes.SaveEpisodesUser(new SaveEpisodesUserRequest
    {
        Ids = "77o6BIVlYM3msb4MMIL1jH,0Q86acNRm6V9GYx55SXKwf",
    });
}
catch (ApiException<SaveEpisodesUserError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SaveEpisodesUserRequest](src/SpotifyWebApi/Requests/Episodes/SaveEpisodesUserRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[SaveEpisodesUserError](src/SpotifyWebApi/Errors/SaveEpisodesUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Genres

> Source: [Genres](src/SpotifyWebApi/Api/Genres.cs)

<details>
<summary><code>Task&lt;ManyGenres&gt; GetRecommendationGenres(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of available genres seed parameter values for [recommendations](https://developer.spotify.com/documentation/web-api/reference/get-recommendations).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Genres.GetRecommendationGenres();
    // TODO: Handle 'response' of type ManyGenres
}
catch (ApiException<GetRecommendationGenresError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ManyGenres](src/SpotifyWebApi/Models/ManyGenres.cs)</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[GetRecommendationGenresError](src/SpotifyWebApi/Errors/GetRecommendationGenresError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Library

> Source: [Library](src/SpotifyWebApi/Api/Library.cs)

<details>
<summary><code>Task ChangePlaylistDetails(ChangePlaylistDetailsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Change a playlist's name and public/private state. (The user must, of
course, own the playlist.)

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Library.ChangePlaylistDetails(new ChangePlaylistDetailsRequest
    {
        PlaylistId = "3cEYpjA9oz9GiPac4AsH4n",
    });
}
catch (ApiException<ChangePlaylistDetailsError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ChangePlaylistDetailsRequest](src/SpotifyWebApi/Requests/Playlists/ChangePlaylistDetailsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[ChangePlaylistDetailsError](src/SpotifyWebApi/Errors/ChangePlaylistDetailsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;bool&gt;&gt; CheckCurrentUserFollows(CheckCurrentUserFollowsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check to see if the current user is following one or more artists or other Spotify users.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Library.CheckCurrentUserFollows(new CheckCurrentUserFollowsRequest
    {
        Type = ItemType3.Artist,
        Ids = "2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6",
    });
    // TODO: Handle 'response' of type IReadOnlyList<bool>
}
catch (ApiException<CheckCurrentUserFollowsError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CheckCurrentUserFollowsRequest](src/SpotifyWebApi/Requests/Users/CheckCurrentUserFollowsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;bool&gt;</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[CheckCurrentUserFollowsError](src/SpotifyWebApi/Errors/CheckCurrentUserFollowsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;bool&gt;&gt; CheckUsersSavedAlbums(CheckUsersSavedAlbumsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check if one or more albums is already saved in the current Spotify user's 'Your Music' library.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Library.CheckUsersSavedAlbums(new CheckUsersSavedAlbumsRequest
    {
        Ids = "382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc",
    });
    // TODO: Handle 'response' of type IReadOnlyList<bool>
}
catch (ApiException<CheckUsersSavedAlbumsError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CheckUsersSavedAlbumsRequest](src/SpotifyWebApi/Requests/Albums/CheckUsersSavedAlbumsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;bool&gt;</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[CheckUsersSavedAlbumsError](src/SpotifyWebApi/Errors/CheckUsersSavedAlbumsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;bool&gt;&gt; CheckUsersSavedAudiobooks(CheckUsersSavedAudiobooksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check if one or more audiobooks are already saved in the current Spotify user's library.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Library.CheckUsersSavedAudiobooks(new CheckUsersSavedAudiobooksRequest
    {
        Ids = "18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ,7iHfbu1YPACw6oZPAFJtqe",
    });
    // TODO: Handle 'response' of type IReadOnlyList<bool>
}
catch (ApiException<CheckUsersSavedAudiobooksError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CheckUsersSavedAudiobooksRequest](src/SpotifyWebApi/Requests/Audiobooks/CheckUsersSavedAudiobooksRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;bool&gt;</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[CheckUsersSavedAudiobooksError](src/SpotifyWebApi/Errors/CheckUsersSavedAudiobooksError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;bool&gt;&gt; CheckUsersSavedEpisodes(CheckUsersSavedEpisodesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check if one or more episodes is already saved in the current Spotify user's 'Your Episodes' library.<br/>
This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)..

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Library.CheckUsersSavedEpisodes(new CheckUsersSavedEpisodesRequest
    {
        Ids = "77o6BIVlYM3msb4MMIL1jH,0Q86acNRm6V9GYx55SXKwf",
    });
    // TODO: Handle 'response' of type IReadOnlyList<bool>
}
catch (ApiException<CheckUsersSavedEpisodesError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CheckUsersSavedEpisodesRequest](src/SpotifyWebApi/Requests/Episodes/CheckUsersSavedEpisodesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;bool&gt;</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[CheckUsersSavedEpisodesError](src/SpotifyWebApi/Errors/CheckUsersSavedEpisodesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;bool&gt;&gt; CheckUsersSavedShows(CheckUsersSavedShowsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check if one or more shows is already saved in the current Spotify user's library.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Library.CheckUsersSavedShows(new CheckUsersSavedShowsRequest
    {
        Ids = "5CfCWKI5pZ28U0uOzXkDHe,5as3aKmN2k11yfDDDSrvaZ",
    });
    // TODO: Handle 'response' of type IReadOnlyList<bool>
}
catch (ApiException<CheckUsersSavedShowsError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CheckUsersSavedShowsRequest](src/SpotifyWebApi/Requests/Shows/CheckUsersSavedShowsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;bool&gt;</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[CheckUsersSavedShowsError](src/SpotifyWebApi/Errors/CheckUsersSavedShowsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;bool&gt;&gt; CheckUsersSavedTracks(CheckUsersSavedTracksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check if one or more tracks is already saved in the current Spotify user's 'Your Music' library.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Library.CheckUsersSavedTracks(new CheckUsersSavedTracksRequest
    {
        Ids = "7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B",
    });
    // TODO: Handle 'response' of type IReadOnlyList<bool>
}
catch (ApiException<CheckUsersSavedTracksError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CheckUsersSavedTracksRequest](src/SpotifyWebApi/Requests/Tracks/CheckUsersSavedTracksRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;bool&gt;</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[CheckUsersSavedTracksError](src/SpotifyWebApi/Errors/CheckUsersSavedTracksError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PlaylistObject&gt; CreatePlaylist(CreatePlaylistRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Library.CreatePlaylist(new CreatePlaylistRequest { UserId = "smedjan" });
    // TODO: Handle 'response' of type PlaylistObject
}
catch (ApiException<CreatePlaylistError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreatePlaylistRequest](src/SpotifyWebApi/Requests/Playlists/CreatePlaylistRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PlaylistObject](src/SpotifyWebApi/Models/PlaylistObject.cs)</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[CreatePlaylistError](src/SpotifyWebApi/Errors/CreatePlaylistError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task FollowArtistsUsers(FollowArtistsUsersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add the current user as a follower of one or more artists or other Spotify users.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Library.FollowArtistsUsers(new FollowArtistsUsersRequest
    {
        Type = ItemType2.Artist,
        Ids = "2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6",
    });
}
catch (ApiException<FollowArtistsUsersError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FollowArtistsUsersRequest](src/SpotifyWebApi/Requests/Users/FollowArtistsUsersRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[FollowArtistsUsersError](src/SpotifyWebApi/Errors/FollowArtistsUsersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PagingPlaylistObject&gt; GetAListOfCurrentUsersPlaylists(GetAListOfCurrentUsersPlaylistsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of the playlists owned or followed by the current Spotify
user.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Library.GetAListOfCurrentUsersPlaylists(new GetAListOfCurrentUsersPlaylistsRequest
    {
        Limit = 10,
        Offset = 5,
    });
    // TODO: Handle 'response' of type PagingPlaylistObject
}
catch (ApiException<GetAListOfCurrentUsersPlaylistsError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetAListOfCurrentUsersPlaylistsRequest](src/SpotifyWebApi/Requests/Playlists/GetAListOfCurrentUsersPlaylistsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PagingPlaylistObject](src/SpotifyWebApi/Models/PagingPlaylistObject.cs)</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[GetAListOfCurrentUsersPlaylistsError](src/SpotifyWebApi/Errors/GetAListOfCurrentUsersPlaylistsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CursorPagedArtists&gt; GetFollowed(GetFollowedRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the current user's followed artists.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Library.GetFollowed(new GetFollowedRequest
    {
        Type = ItemType1.Artist,
        After = "0I2XqVXqHScXjHhk6AYYRe",
        Limit = 10,
    });
    // TODO: Handle 'response' of type CursorPagedArtists
}
catch (ApiException<GetFollowedError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetFollowedRequest](src/SpotifyWebApi/Requests/Users/GetFollowedRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CursorPagedArtists](src/SpotifyWebApi/Models/CursorPagedArtists.cs)</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[GetFollowedError](src/SpotifyWebApi/Errors/GetFollowedError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PagingSavedAlbumObject&gt; GetUsersSavedAlbums(GetUsersSavedAlbumsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of the albums saved in the current Spotify user's 'Your Music' library.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Library.GetUsersSavedAlbums(new GetUsersSavedAlbumsRequest
    {
        Limit = 10,
        Offset = 5,
        Market = "ES",
    });
    // TODO: Handle 'response' of type PagingSavedAlbumObject
}
catch (ApiException<GetUsersSavedAlbumsError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetUsersSavedAlbumsRequest](src/SpotifyWebApi/Requests/Albums/GetUsersSavedAlbumsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PagingSavedAlbumObject](src/SpotifyWebApi/Models/PagingSavedAlbumObject.cs)</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[GetUsersSavedAlbumsError](src/SpotifyWebApi/Errors/GetUsersSavedAlbumsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PagingSavedAudiobookObject&gt; GetUsersSavedAudiobooks(GetUsersSavedAudiobooksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of the audiobooks saved in the current Spotify user's 'Your Music' library.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Library.GetUsersSavedAudiobooks(new GetUsersSavedAudiobooksRequest
    {
        Limit = 10,
        Offset = 5,
    });
    // TODO: Handle 'response' of type PagingSavedAudiobookObject
}
catch (ApiException<GetUsersSavedAudiobooksError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetUsersSavedAudiobooksRequest](src/SpotifyWebApi/Requests/Audiobooks/GetUsersSavedAudiobooksRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PagingSavedAudiobookObject](src/SpotifyWebApi/Models/PagingSavedAudiobookObject.cs)</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[GetUsersSavedAudiobooksError](src/SpotifyWebApi/Errors/GetUsersSavedAudiobooksError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PagingSavedEpisodeObject&gt; GetUsersSavedEpisodes(GetUsersSavedEpisodesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of the episodes saved in the current Spotify user's library.<br/>
This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Library.GetUsersSavedEpisodes(new GetUsersSavedEpisodesRequest
    {
        Market = "ES",
        Limit = 10,
        Offset = 5,
    });
    // TODO: Handle 'response' of type PagingSavedEpisodeObject
}
catch (ApiException<GetUsersSavedEpisodesError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetUsersSavedEpisodesRequest](src/SpotifyWebApi/Requests/Episodes/GetUsersSavedEpisodesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PagingSavedEpisodeObject](src/SpotifyWebApi/Models/PagingSavedEpisodeObject.cs)</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[GetUsersSavedEpisodesError](src/SpotifyWebApi/Errors/GetUsersSavedEpisodesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PagingSavedShowObject&gt; GetUsersSavedShows(GetUsersSavedShowsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of shows saved in the current Spotify user's library. Optional parameters can be used to limit the number of shows returned.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Library.GetUsersSavedShows(new GetUsersSavedShowsRequest { Limit = 10, Offset = 5 });
    // TODO: Handle 'response' of type PagingSavedShowObject
}
catch (ApiException<GetUsersSavedShowsError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetUsersSavedShowsRequest](src/SpotifyWebApi/Requests/Shows/GetUsersSavedShowsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PagingSavedShowObject](src/SpotifyWebApi/Models/PagingSavedShowObject.cs)</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[GetUsersSavedShowsError](src/SpotifyWebApi/Errors/GetUsersSavedShowsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PagingSavedTrackObject&gt; GetUsersSavedTracks(GetUsersSavedTracksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of the songs saved in the current Spotify user's 'Your Music' library.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Library.GetUsersSavedTracks(new GetUsersSavedTracksRequest
    {
        Market = "ES",
        Limit = 10,
        Offset = 5,
    });
    // TODO: Handle 'response' of type PagingSavedTrackObject
}
catch (ApiException<GetUsersSavedTracksError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetUsersSavedTracksRequest](src/SpotifyWebApi/Requests/Tracks/GetUsersSavedTracksRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PagingSavedTrackObject](src/SpotifyWebApi/Models/PagingSavedTrackObject.cs)</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[GetUsersSavedTracksError](src/SpotifyWebApi/Errors/GetUsersSavedTracksError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PagingArtistObject&gt; GetUsersTopArtists(GetUsersTopArtistsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the current user's top artists based on calculated affinity.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Library.GetUsersTopArtists(new GetUsersTopArtistsRequest
    {
        TimeRange = "medium_term",
        Limit = 10,
        Offset = 5,
    });
    // TODO: Handle 'response' of type PagingArtistObject
}
catch (ApiException<GetUsersTopArtistsError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetUsersTopArtistsRequest](src/SpotifyWebApi/Requests/Users/GetUsersTopArtistsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PagingArtistObject](src/SpotifyWebApi/Models/PagingArtistObject.cs)</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[GetUsersTopArtistsError](src/SpotifyWebApi/Errors/GetUsersTopArtistsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PagingTrackObject&gt; GetUsersTopTracks(GetUsersTopTracksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the current user's top tracks based on calculated affinity.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Library.GetUsersTopTracks(new GetUsersTopTracksRequest
    {
        TimeRange = "medium_term",
        Limit = 10,
        Offset = 5,
    });
    // TODO: Handle 'response' of type PagingTrackObject
}
catch (ApiException<GetUsersTopTracksError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetUsersTopTracksRequest](src/SpotifyWebApi/Requests/Users/GetUsersTopTracksRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PagingTrackObject](src/SpotifyWebApi/Models/PagingTrackObject.cs)</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[GetUsersTopTracksError](src/SpotifyWebApi/Errors/GetUsersTopTracksError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task RemoveAlbumsUser(RemoveAlbumsUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove one or more albums from the current user's 'Your Music' library.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Library.RemoveAlbumsUser(new RemoveAlbumsUserRequest
    {
        Ids = "382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc",
    });
}
catch (ApiException<RemoveAlbumsUserError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RemoveAlbumsUserRequest](src/SpotifyWebApi/Requests/Albums/RemoveAlbumsUserRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[RemoveAlbumsUserError](src/SpotifyWebApi/Errors/RemoveAlbumsUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task RemoveAudiobooksUser(RemoveAudiobooksUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove one or more audiobooks from the Spotify user's library.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Library.RemoveAudiobooksUser(new RemoveAudiobooksUserRequest
    {
        Ids = "18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ,7iHfbu1YPACw6oZPAFJtqe",
    });
}
catch (ApiException<RemoveAudiobooksUserError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RemoveAudiobooksUserRequest](src/SpotifyWebApi/Requests/Audiobooks/RemoveAudiobooksUserRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[RemoveAudiobooksUserError](src/SpotifyWebApi/Errors/RemoveAudiobooksUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task RemoveEpisodesUser(RemoveEpisodesUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove one or more episodes from the current user's library.<br/>
This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Library.RemoveEpisodesUser(new RemoveEpisodesUserRequest
    {
        Ids = "7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B",
    });
}
catch (ApiException<RemoveEpisodesUserError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RemoveEpisodesUserRequest](src/SpotifyWebApi/Requests/Episodes/RemoveEpisodesUserRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[RemoveEpisodesUserError](src/SpotifyWebApi/Errors/RemoveEpisodesUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task RemoveShowsUser(RemoveShowsUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete one or more shows from current Spotify user's library.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Library.RemoveShowsUser(new RemoveShowsUserRequest
    {
        Ids = "5CfCWKI5pZ28U0uOzXkDHe,5as3aKmN2k11yfDDDSrvaZ",
        Market = "ES",
    });
}
catch (ApiException<RemoveShowsUserError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RemoveShowsUserRequest](src/SpotifyWebApi/Requests/Shows/RemoveShowsUserRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[RemoveShowsUserError](src/SpotifyWebApi/Errors/RemoveShowsUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task RemoveTracksUser(RemoveTracksUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove one or more tracks from the current user's 'Your Music' library.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Library.RemoveTracksUser(new RemoveTracksUserRequest
    {
        Ids = "7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B",
    });
}
catch (ApiException<RemoveTracksUserError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RemoveTracksUserRequest](src/SpotifyWebApi/Requests/Tracks/RemoveTracksUserRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[RemoveTracksUserError](src/SpotifyWebApi/Errors/RemoveTracksUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task SaveAlbumsUser(SaveAlbumsUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Save one or more albums to the current user's 'Your Music' library.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Library.SaveAlbumsUser(new SaveAlbumsUserRequest
    {
        Ids = "382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc",
    });
}
catch (ApiException<SaveAlbumsUserError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SaveAlbumsUserRequest](src/SpotifyWebApi/Requests/Albums/SaveAlbumsUserRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[SaveAlbumsUserError](src/SpotifyWebApi/Errors/SaveAlbumsUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task SaveAudiobooksUser(SaveAudiobooksUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Save one or more audiobooks to the current Spotify user's library.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Library.SaveAudiobooksUser(new SaveAudiobooksUserRequest
    {
        Ids = "18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ,7iHfbu1YPACw6oZPAFJtqe",
    });
}
catch (ApiException<SaveAudiobooksUserError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SaveAudiobooksUserRequest](src/SpotifyWebApi/Requests/Audiobooks/SaveAudiobooksUserRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[SaveAudiobooksUserError](src/SpotifyWebApi/Errors/SaveAudiobooksUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task SaveEpisodesUser(SaveEpisodesUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Save one or more episodes to the current user's library.<br/>
This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Library.SaveEpisodesUser(new SaveEpisodesUserRequest
    {
        Ids = "77o6BIVlYM3msb4MMIL1jH,0Q86acNRm6V9GYx55SXKwf",
    });
}
catch (ApiException<SaveEpisodesUserError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SaveEpisodesUserRequest](src/SpotifyWebApi/Requests/Episodes/SaveEpisodesUserRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[SaveEpisodesUserError](src/SpotifyWebApi/Errors/SaveEpisodesUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task SaveShowsUser(SaveShowsUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Save one or more shows to current Spotify user's library.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Library.SaveShowsUser(new SaveShowsUserRequest
    {
        Ids = "5CfCWKI5pZ28U0uOzXkDHe,5as3aKmN2k11yfDDDSrvaZ",
    });
}
catch (ApiException<SaveShowsUserError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SaveShowsUserRequest](src/SpotifyWebApi/Requests/Shows/SaveShowsUserRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[SaveShowsUserError](src/SpotifyWebApi/Errors/SaveShowsUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task SaveTracksUser(SaveTracksUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Save one or more tracks to the current user's 'Your Music' library.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Library.SaveTracksUser(new SaveTracksUserRequest
    {
        Ids = "7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B",
    });
}
catch (ApiException<SaveTracksUserError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SaveTracksUserRequest](src/SpotifyWebApi/Requests/Tracks/SaveTracksUserRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[SaveTracksUserError](src/SpotifyWebApi/Errors/SaveTracksUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task UnfollowArtistsUsers(UnfollowArtistsUsersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove the current user as a follower of one or more artists or other Spotify users.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Library.UnfollowArtistsUsers(new UnfollowArtistsUsersRequest
    {
        Type = ItemType3.Artist,
        Ids = "2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6",
    });
}
catch (ApiException<UnfollowArtistsUsersError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UnfollowArtistsUsersRequest](src/SpotifyWebApi/Requests/Users/UnfollowArtistsUsersRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[UnfollowArtistsUsersError](src/SpotifyWebApi/Errors/UnfollowArtistsUsersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## MarketsApi

> Source: [MarketsApi](src/SpotifyWebApi/Api/MarketsApi.cs)

<details>
<summary><code>Task&lt;Markets&gt; GetAvailableMarkets(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the list of markets where Spotify is available.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MarketsApi.GetAvailableMarkets();
    // TODO: Handle 'response' of type Markets
}
catch (ApiException<GetAvailableMarketsError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Markets](src/SpotifyWebApi/Models/Markets.cs)</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[GetAvailableMarketsError](src/SpotifyWebApi/Errors/GetAvailableMarketsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Player

> Source: [Player](src/SpotifyWebApi/Api/Player.cs)

<details>
<summary><code>Task AddToQueue(AddToQueueRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add an item to the end of the user's current playback queue. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Player.AddToQueue(new AddToQueueRequest
    {
        Uri = "spotify:track:4iV5W9uYEdYUVa79Axb7Rh",
        DeviceId = "0d1841b0976bae2a3a310dd74c0f3df354899bc8",
    });
}
catch (ApiException<AddToQueueError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AddToQueueRequest](src/SpotifyWebApi/Requests/Player/AddToQueueRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[AddToQueueError](src/SpotifyWebApi/Errors/AddToQueueError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ManyDevices&gt; GetAUsersAvailableDevices(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get information about a user’s available Spotify Connect devices. Some device models are not supported and will not be listed in the API response.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Player.GetAUsersAvailableDevices();
    // TODO: Handle 'response' of type ManyDevices
}
catch (ApiException<GetAUsersAvailableDevicesError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ManyDevices](src/SpotifyWebApi/Models/ManyDevices.cs)</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[GetAUsersAvailableDevicesError](src/SpotifyWebApi/Errors/GetAUsersAvailableDevicesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CurrentlyPlayingContextObject&gt; GetInformationAboutTheUsersCurrentPlayback(GetInformationAboutTheUsersCurrentPlaybackRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get information about the user’s current playback state, including track or episode, progress, and active device.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Player.GetInformationAboutTheUsersCurrentPlayback(
        new GetInformationAboutTheUsersCurrentPlaybackRequest { Market = "ES" });
    // TODO: Handle 'response' of type CurrentlyPlayingContextObject
}
catch (ApiException<GetInformationAboutTheUsersCurrentPlaybackError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetInformationAboutTheUsersCurrentPlaybackRequest](src/SpotifyWebApi/Requests/Player/GetInformationAboutTheUsersCurrentPlaybackRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CurrentlyPlayingContextObject](src/SpotifyWebApi/Models/CurrentlyPlayingContextObject.cs)</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[GetInformationAboutTheUsersCurrentPlaybackError](src/SpotifyWebApi/Errors/GetInformationAboutTheUsersCurrentPlaybackError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;QueueObject&gt; GetQueue(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the list of objects that make up the user's queue.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Player.GetQueue();
    // TODO: Handle 'response' of type QueueObject
}
catch (ApiException<GetQueueError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[QueueObject](src/SpotifyWebApi/Models/QueueObject.cs)</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[GetQueueError](src/SpotifyWebApi/Errors/GetQueueError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CursorPagingPlayHistoryObject&gt; GetRecentlyPlayed(GetRecentlyPlayedRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get tracks from the current user's recently played tracks.
_**Note**: Currently doesn't support podcast episodes._

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Player.GetRecentlyPlayed(new GetRecentlyPlayedRequest
    {
        Limit = 10,
        After = 1484811043508L,
    });
    // TODO: Handle 'response' of type CursorPagingPlayHistoryObject
}
catch (ApiException<GetRecentlyPlayedError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetRecentlyPlayedRequest](src/SpotifyWebApi/Requests/Player/GetRecentlyPlayedRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CursorPagingPlayHistoryObject](src/SpotifyWebApi/Models/CursorPagingPlayHistoryObject.cs)</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[GetRecentlyPlayedError](src/SpotifyWebApi/Errors/GetRecentlyPlayedError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CurrentlyPlayingObject&gt; GetTheUsersCurrentlyPlayingTrack(GetTheUsersCurrentlyPlayingTrackRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the object currently being played on the user's Spotify account.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Player.GetTheUsersCurrentlyPlayingTrack(new GetTheUsersCurrentlyPlayingTrackRequest
    {
        Market = "ES",
    });
    // TODO: Handle 'response' of type CurrentlyPlayingObject
}
catch (ApiException<GetTheUsersCurrentlyPlayingTrackError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetTheUsersCurrentlyPlayingTrackRequest](src/SpotifyWebApi/Requests/Player/GetTheUsersCurrentlyPlayingTrackRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CurrentlyPlayingObject](src/SpotifyWebApi/Models/CurrentlyPlayingObject.cs)</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[GetTheUsersCurrentlyPlayingTrackError](src/SpotifyWebApi/Errors/GetTheUsersCurrentlyPlayingTrackError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task PauseAUsersPlayback(PauseAUsersPlaybackRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Pause playback on the user's account. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Player.PauseAUsersPlayback(new PauseAUsersPlaybackRequest
    {
        DeviceId = "0d1841b0976bae2a3a310dd74c0f3df354899bc8",
    });
}
catch (ApiException<PauseAUsersPlaybackError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PauseAUsersPlaybackRequest](src/SpotifyWebApi/Requests/Player/PauseAUsersPlaybackRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[PauseAUsersPlaybackError](src/SpotifyWebApi/Errors/PauseAUsersPlaybackError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task SeekToPositionInCurrentlyPlayingTrack(SeekToPositionInCurrentlyPlayingTrackRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Seeks to the given position in the user’s currently playing track. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Player.SeekToPositionInCurrentlyPlayingTrack(new SeekToPositionInCurrentlyPlayingTrackRequest
    {
        PositionMs = 25000,
        DeviceId = "0d1841b0976bae2a3a310dd74c0f3df354899bc8",
    });
}
catch (ApiException<SeekToPositionInCurrentlyPlayingTrackError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SeekToPositionInCurrentlyPlayingTrackRequest](src/SpotifyWebApi/Requests/Player/SeekToPositionInCurrentlyPlayingTrackRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[SeekToPositionInCurrentlyPlayingTrackError](src/SpotifyWebApi/Errors/SeekToPositionInCurrentlyPlayingTrackError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task SetRepeatModeOnUsersPlayback(SetRepeatModeOnUsersPlaybackRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Set the repeat mode for the user's playback. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Player.SetRepeatModeOnUsersPlayback(new SetRepeatModeOnUsersPlaybackRequest
    {
        State = "context",
        DeviceId = "0d1841b0976bae2a3a310dd74c0f3df354899bc8",
    });
}
catch (ApiException<SetRepeatModeOnUsersPlaybackError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SetRepeatModeOnUsersPlaybackRequest](src/SpotifyWebApi/Requests/Player/SetRepeatModeOnUsersPlaybackRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[SetRepeatModeOnUsersPlaybackError](src/SpotifyWebApi/Errors/SetRepeatModeOnUsersPlaybackError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task SetVolumeForUsersPlayback(SetVolumeForUsersPlaybackRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Set the volume for the user’s current playback device. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Player.SetVolumeForUsersPlayback(new SetVolumeForUsersPlaybackRequest
    {
        VolumePercent = 50,
        DeviceId = "0d1841b0976bae2a3a310dd74c0f3df354899bc8",
    });
}
catch (ApiException<SetVolumeForUsersPlaybackError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SetVolumeForUsersPlaybackRequest](src/SpotifyWebApi/Requests/Player/SetVolumeForUsersPlaybackRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[SetVolumeForUsersPlaybackError](src/SpotifyWebApi/Errors/SetVolumeForUsersPlaybackError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task SkipUsersPlaybackToNextTrack(SkipUsersPlaybackToNextTrackRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Skips to next track in the user’s queue. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Player.SkipUsersPlaybackToNextTrack(new SkipUsersPlaybackToNextTrackRequest
    {
        DeviceId = "0d1841b0976bae2a3a310dd74c0f3df354899bc8",
    });
}
catch (ApiException<SkipUsersPlaybackToNextTrackError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SkipUsersPlaybackToNextTrackRequest](src/SpotifyWebApi/Requests/Player/SkipUsersPlaybackToNextTrackRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[SkipUsersPlaybackToNextTrackError](src/SpotifyWebApi/Errors/SkipUsersPlaybackToNextTrackError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task SkipUsersPlaybackToPreviousTrack(SkipUsersPlaybackToPreviousTrackRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Skips to previous track in the user’s queue. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Player.SkipUsersPlaybackToPreviousTrack(new SkipUsersPlaybackToPreviousTrackRequest
    {
        DeviceId = "0d1841b0976bae2a3a310dd74c0f3df354899bc8",
    });
}
catch (ApiException<SkipUsersPlaybackToPreviousTrackError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SkipUsersPlaybackToPreviousTrackRequest](src/SpotifyWebApi/Requests/Player/SkipUsersPlaybackToPreviousTrackRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[SkipUsersPlaybackToPreviousTrackError](src/SpotifyWebApi/Errors/SkipUsersPlaybackToPreviousTrackError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task StartAUsersPlayback(StartAUsersPlaybackRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Start a new context or resume current playback on the user's active device. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Player.StartAUsersPlayback(new StartAUsersPlaybackRequest
    {
        DeviceId = "0d1841b0976bae2a3a310dd74c0f3df354899bc8",
    });
}
catch (ApiException<StartAUsersPlaybackError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[StartAUsersPlaybackRequest](src/SpotifyWebApi/Requests/Player/StartAUsersPlaybackRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[StartAUsersPlaybackError](src/SpotifyWebApi/Errors/StartAUsersPlaybackError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ToggleShuffleForUsersPlayback(ToggleShuffleForUsersPlaybackRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Toggle shuffle on or off for user’s playback. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Player.ToggleShuffleForUsersPlayback(new ToggleShuffleForUsersPlaybackRequest
    {
        State = true,
        DeviceId = "0d1841b0976bae2a3a310dd74c0f3df354899bc8",
    });
}
catch (ApiException<ToggleShuffleForUsersPlaybackError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ToggleShuffleForUsersPlaybackRequest](src/SpotifyWebApi/Requests/Player/ToggleShuffleForUsersPlaybackRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[ToggleShuffleForUsersPlaybackError](src/SpotifyWebApi/Errors/ToggleShuffleForUsersPlaybackError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task TransferAUsersPlayback(TransferAUsersPlaybackRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Transfer playback to a new device and optionally begin playback. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Player.TransferAUsersPlayback(new TransferAUsersPlaybackRequest());
}
catch (ApiException<TransferAUsersPlaybackError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TransferAUsersPlaybackRequest](src/SpotifyWebApi/Requests/Player/TransferAUsersPlaybackRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[TransferAUsersPlaybackError](src/SpotifyWebApi/Errors/TransferAUsersPlaybackError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Playlists

> Source: [Playlists](src/SpotifyWebApi/Api/Playlists.cs)

<details>
<summary><code>Task&lt;PlaylistSnapshotId&gt; AddTracksToPlaylist(AddTracksToPlaylistRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add one or more items to a user's playlist.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Playlists.AddTracksToPlaylist(new AddTracksToPlaylistRequest
    {
        PlaylistId = "3cEYpjA9oz9GiPac4AsH4n",
        Position = 0,
        Uris = "spotify:track:4iV5W9uYEdYUVa79Axb7Rh,spotify:track:1301WleyT98MSxVHPZCA6M",
    });
    // TODO: Handle 'response' of type PlaylistSnapshotId
}
catch (ApiException<AddTracksToPlaylistError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AddTracksToPlaylistRequest](src/SpotifyWebApi/Requests/Playlists/AddTracksToPlaylistRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PlaylistSnapshotId](src/SpotifyWebApi/Models/PlaylistSnapshotId.cs)</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[AddTracksToPlaylistError](src/SpotifyWebApi/Errors/AddTracksToPlaylistError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ChangePlaylistDetails(ChangePlaylistDetailsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Change a playlist's name and public/private state. (The user must, of
course, own the playlist.)

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Playlists.ChangePlaylistDetails(new ChangePlaylistDetailsRequest
    {
        PlaylistId = "3cEYpjA9oz9GiPac4AsH4n",
    });
}
catch (ApiException<ChangePlaylistDetailsError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ChangePlaylistDetailsRequest](src/SpotifyWebApi/Requests/Playlists/ChangePlaylistDetailsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[ChangePlaylistDetailsError](src/SpotifyWebApi/Errors/ChangePlaylistDetailsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;bool&gt;&gt; CheckIfUserFollowsPlaylist(CheckIfUserFollowsPlaylistRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check to see if one or more Spotify users are following a specified playlist.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Playlists.CheckIfUserFollowsPlaylist(new CheckIfUserFollowsPlaylistRequest
    {
        PlaylistId = "3cEYpjA9oz9GiPac4AsH4n",
        Ids = "jmperezperez,thelinmichael,wizzler",
    });
    // TODO: Handle 'response' of type IReadOnlyList<bool>
}
catch (ApiException<CheckIfUserFollowsPlaylistError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CheckIfUserFollowsPlaylistRequest](src/SpotifyWebApi/Requests/Users/CheckIfUserFollowsPlaylistRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;bool&gt;</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[CheckIfUserFollowsPlaylistError](src/SpotifyWebApi/Errors/CheckIfUserFollowsPlaylistError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PlaylistObject&gt; CreatePlaylist(CreatePlaylistRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Playlists.CreatePlaylist(new CreatePlaylistRequest { UserId = "smedjan" });
    // TODO: Handle 'response' of type PlaylistObject
}
catch (ApiException<CreatePlaylistError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreatePlaylistRequest](src/SpotifyWebApi/Requests/Playlists/CreatePlaylistRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PlaylistObject](src/SpotifyWebApi/Models/PlaylistObject.cs)</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[CreatePlaylistError](src/SpotifyWebApi/Errors/CreatePlaylistError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task FollowPlaylist(FollowPlaylistRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add the current user as a follower of a playlist.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Playlists.FollowPlaylist(new FollowPlaylistRequest { PlaylistId = "3cEYpjA9oz9GiPac4AsH4n" });
}
catch (ApiException<FollowPlaylistError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FollowPlaylistRequest](src/SpotifyWebApi/Requests/Users/FollowPlaylistRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[FollowPlaylistError](src/SpotifyWebApi/Errors/FollowPlaylistError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PagingFeaturedPlaylistObject&gt; GetACategoriesPlaylists(GetACategoriesPlaylistsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of Spotify playlists tagged with a particular category.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Playlists.GetACategoriesPlaylists(new GetACategoriesPlaylistsRequest
    {
        CategoryId = "dinner",
        Limit = 10,
        Offset = 5,
    });
    // TODO: Handle 'response' of type PagingFeaturedPlaylistObject
}
catch (ApiException<GetACategoriesPlaylistsError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetACategoriesPlaylistsRequest](src/SpotifyWebApi/Requests/Playlists/GetACategoriesPlaylistsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PagingFeaturedPlaylistObject](src/SpotifyWebApi/Models/PagingFeaturedPlaylistObject.cs)</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[GetACategoriesPlaylistsError](src/SpotifyWebApi/Errors/GetACategoriesPlaylistsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PagingPlaylistObject&gt; GetAListOfCurrentUsersPlaylists(GetAListOfCurrentUsersPlaylistsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of the playlists owned or followed by the current Spotify
user.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Playlists.GetAListOfCurrentUsersPlaylists(new GetAListOfCurrentUsersPlaylistsRequest
    {
        Limit = 10,
        Offset = 5,
    });
    // TODO: Handle 'response' of type PagingPlaylistObject
}
catch (ApiException<GetAListOfCurrentUsersPlaylistsError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetAListOfCurrentUsersPlaylistsRequest](src/SpotifyWebApi/Requests/Playlists/GetAListOfCurrentUsersPlaylistsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PagingPlaylistObject](src/SpotifyWebApi/Models/PagingPlaylistObject.cs)</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[GetAListOfCurrentUsersPlaylistsError](src/SpotifyWebApi/Errors/GetAListOfCurrentUsersPlaylistsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PagingFeaturedPlaylistObject&gt; GetFeaturedPlaylists(GetFeaturedPlaylistsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of Spotify featured playlists (shown, for example, on a Spotify player's 'Browse' tab).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Playlists.GetFeaturedPlaylists(new GetFeaturedPlaylistsRequest
    {
        Locale = "sv_SE",
        Limit = 10,
        Offset = 5,
    });
    // TODO: Handle 'response' of type PagingFeaturedPlaylistObject
}
catch (ApiException<GetFeaturedPlaylistsError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetFeaturedPlaylistsRequest](src/SpotifyWebApi/Requests/Playlists/GetFeaturedPlaylistsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PagingFeaturedPlaylistObject](src/SpotifyWebApi/Models/PagingFeaturedPlaylistObject.cs)</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[GetFeaturedPlaylistsError](src/SpotifyWebApi/Errors/GetFeaturedPlaylistsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PagingPlaylistObject&gt; GetListUsersPlaylists(GetListUsersPlaylistsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of the playlists owned or followed by a Spotify user.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Playlists.GetListUsersPlaylists(new GetListUsersPlaylistsRequest
    {
        UserId = "smedjan",
        Limit = 10,
        Offset = 5,
    });
    // TODO: Handle 'response' of type PagingPlaylistObject
}
catch (ApiException<GetListUsersPlaylistsError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetListUsersPlaylistsRequest](src/SpotifyWebApi/Requests/Playlists/GetListUsersPlaylistsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PagingPlaylistObject](src/SpotifyWebApi/Models/PagingPlaylistObject.cs)</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[GetListUsersPlaylistsError](src/SpotifyWebApi/Errors/GetListUsersPlaylistsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PlaylistObject&gt; GetPlaylist(GetPlaylistRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a playlist owned by a Spotify user.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Playlists.GetPlaylist(new GetPlaylistRequest
    {
        PlaylistId = "3cEYpjA9oz9GiPac4AsH4n",
        Market = "ES",
        Fields = "items(added_by.id,track(name,href,album(name,href)))",
    });
    // TODO: Handle 'response' of type PlaylistObject
}
catch (ApiException<GetPlaylistError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetPlaylistRequest](src/SpotifyWebApi/Requests/Playlists/GetPlaylistRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PlaylistObject](src/SpotifyWebApi/Models/PlaylistObject.cs)</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[GetPlaylistError](src/SpotifyWebApi/Errors/GetPlaylistError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;ImageObject&gt;&gt; GetPlaylistCover(GetPlaylistCoverRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the current image associated with a specific playlist.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Playlists.GetPlaylistCover(new GetPlaylistCoverRequest
    {
        PlaylistId = "3cEYpjA9oz9GiPac4AsH4n",
    });
    // TODO: Handle 'response' of type IReadOnlyList<ImageObject>
}
catch (ApiException<GetPlaylistCoverError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetPlaylistCoverRequest](src/SpotifyWebApi/Requests/Playlists/GetPlaylistCoverRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[ImageObject](src/SpotifyWebApi/Models/ImageObject.cs)&gt;</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[GetPlaylistCoverError](src/SpotifyWebApi/Errors/GetPlaylistCoverError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PagingPlaylistTrackObject&gt; GetPlaylistsTracks(GetPlaylistsTracksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get full details of the items of a playlist owned by a Spotify user.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Playlists.GetPlaylistsTracks(new GetPlaylistsTracksRequest
    {
        PlaylistId = "3cEYpjA9oz9GiPac4AsH4n",
        Market = "ES",
        Fields = "items(added_by.id,track(name,href,album(name,href)))",
        Limit = 10,
        Offset = 5,
    });
    // TODO: Handle 'response' of type PagingPlaylistTrackObject
}
catch (ApiException<GetPlaylistsTracksError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetPlaylistsTracksRequest](src/SpotifyWebApi/Requests/Playlists/GetPlaylistsTracksRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PagingPlaylistTrackObject](src/SpotifyWebApi/Models/PagingPlaylistTrackObject.cs)</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[GetPlaylistsTracksError](src/SpotifyWebApi/Errors/GetPlaylistsTracksError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PlaylistSnapshotId&gt; RemoveTracksPlaylist(RemoveTracksPlaylistRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove one or more items from a user's playlist.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Playlists.RemoveTracksPlaylist(new RemoveTracksPlaylistRequest
    {
        PlaylistId = "3cEYpjA9oz9GiPac4AsH4n",
    });
    // TODO: Handle 'response' of type PlaylistSnapshotId
}
catch (ApiException<RemoveTracksPlaylistError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RemoveTracksPlaylistRequest](src/SpotifyWebApi/Requests/Playlists/RemoveTracksPlaylistRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PlaylistSnapshotId](src/SpotifyWebApi/Models/PlaylistSnapshotId.cs)</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[RemoveTracksPlaylistError](src/SpotifyWebApi/Errors/RemoveTracksPlaylistError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PlaylistSnapshotId&gt; ReorderOrReplacePlaylistsTracks(ReorderOrReplacePlaylistsTracksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Playlists.ReorderOrReplacePlaylistsTracks(new ReorderOrReplacePlaylistsTracksRequest
    {
        PlaylistId = "3cEYpjA9oz9GiPac4AsH4n",
    });
    // TODO: Handle 'response' of type PlaylistSnapshotId
}
catch (ApiException<ReorderOrReplacePlaylistsTracksError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ReorderOrReplacePlaylistsTracksRequest](src/SpotifyWebApi/Requests/Playlists/ReorderOrReplacePlaylistsTracksRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PlaylistSnapshotId](src/SpotifyWebApi/Models/PlaylistSnapshotId.cs)</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[ReorderOrReplacePlaylistsTracksError](src/SpotifyWebApi/Errors/ReorderOrReplacePlaylistsTracksError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task UnfollowPlaylist(UnfollowPlaylistRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove the current user as a follower of a playlist.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Playlists.UnfollowPlaylist(new UnfollowPlaylistRequest { PlaylistId = "3cEYpjA9oz9GiPac4AsH4n" });
}
catch (ApiException<UnfollowPlaylistError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UnfollowPlaylistRequest](src/SpotifyWebApi/Requests/Users/UnfollowPlaylistRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[UnfollowPlaylistError](src/SpotifyWebApi/Errors/UnfollowPlaylistError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task UploadCustomPlaylistCover(UploadCustomPlaylistCoverRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Replace the image used to represent a specific playlist.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Playlists.UploadCustomPlaylistCover(new UploadCustomPlaylistCoverRequest
    {
        PlaylistId = "3cEYpjA9oz9GiPac4AsH4n",
        Body = body,
    });
}
catch (ApiException<UploadCustomPlaylistCoverError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UploadCustomPlaylistCoverRequest](src/SpotifyWebApi/Requests/Playlists/UploadCustomPlaylistCoverRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[UploadCustomPlaylistCoverError](src/SpotifyWebApi/Errors/UploadCustomPlaylistCoverError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Search

> Source: [Search](src/SpotifyWebApi/Api/Search.cs)

<details>
<summary><code>Task&lt;SearchItems&gt; SearchInvoke(SearchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Spotify catalog information about albums, artists, playlists, tracks, shows, episodes or audiobooks
that match a keyword string. Audiobooks are only available within the US, UK, Canada, Ireland, New Zealand and Australia markets.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Search.SearchInvoke(new SearchRequest
    {
        Q = "remaster%20track:Doxy%20artist:Miles%20Davis",
        Type = [ItemType.Album],
        Market = "ES",
        Limit = 10,
        Offset = 5,
    });
    // TODO: Handle 'response' of type SearchItems
}
catch (ApiException<SearchError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SearchRequest](src/SpotifyWebApi/Requests/Search/SearchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SearchItems](src/SpotifyWebApi/Models/SearchItems.cs)</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[SearchError](src/SpotifyWebApi/Errors/SearchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Shows

> Source: [Shows](src/SpotifyWebApi/Api/Shows.cs)

<details>
<summary><code>Task&lt;IReadOnlyList&lt;bool&gt;&gt; CheckUsersSavedShows(CheckUsersSavedShowsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check if one or more shows is already saved in the current Spotify user's library.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Shows.CheckUsersSavedShows(new CheckUsersSavedShowsRequest
    {
        Ids = "5CfCWKI5pZ28U0uOzXkDHe,5as3aKmN2k11yfDDDSrvaZ",
    });
    // TODO: Handle 'response' of type IReadOnlyList<bool>
}
catch (ApiException<CheckUsersSavedShowsError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CheckUsersSavedShowsRequest](src/SpotifyWebApi/Requests/Shows/CheckUsersSavedShowsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;bool&gt;</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[CheckUsersSavedShowsError](src/SpotifyWebApi/Errors/CheckUsersSavedShowsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ShowObject&gt; GetAShow(GetAShowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Spotify catalog information for a single show identified by its
unique Spotify ID.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Shows.GetAShow(new GetAShowRequest { Id = "38bS44xjbVVZ3No3ByF1dJ", Market = "ES" });
    // TODO: Handle 'response' of type ShowObject
}
catch (ApiException<GetAShowError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetAShowRequest](src/SpotifyWebApi/Requests/Shows/GetAShowRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ShowObject](src/SpotifyWebApi/Models/ShowObject.cs)</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[GetAShowError](src/SpotifyWebApi/Errors/GetAShowError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PagingSimplifiedEpisodeObject&gt; GetAShowsEpisodes(GetAShowsEpisodesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Spotify catalog information about an show’s episodes. Optional parameters can be used to limit the number of episodes returned.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Shows.GetAShowsEpisodes(new GetAShowsEpisodesRequest
    {
        Id = "38bS44xjbVVZ3No3ByF1dJ",
        Market = "ES",
        Limit = 10,
        Offset = 5,
    });
    // TODO: Handle 'response' of type PagingSimplifiedEpisodeObject
}
catch (ApiException<GetAShowsEpisodesError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetAShowsEpisodesRequest](src/SpotifyWebApi/Requests/Shows/GetAShowsEpisodesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PagingSimplifiedEpisodeObject](src/SpotifyWebApi/Models/PagingSimplifiedEpisodeObject.cs)</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[GetAShowsEpisodesError](src/SpotifyWebApi/Errors/GetAShowsEpisodesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ManySimplifiedShows&gt; GetMultipleShows(GetMultipleShowsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Spotify catalog information for several shows based on their Spotify IDs.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Shows.GetMultipleShows(new GetMultipleShowsRequest
    {
        Ids = "5CfCWKI5pZ28U0uOzXkDHe,5as3aKmN2k11yfDDDSrvaZ",
        Market = "ES",
    });
    // TODO: Handle 'response' of type ManySimplifiedShows
}
catch (ApiException<GetMultipleShowsError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetMultipleShowsRequest](src/SpotifyWebApi/Requests/Shows/GetMultipleShowsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ManySimplifiedShows](src/SpotifyWebApi/Models/ManySimplifiedShows.cs)</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[GetMultipleShowsError](src/SpotifyWebApi/Errors/GetMultipleShowsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PagingSavedShowObject&gt; GetUsersSavedShows(GetUsersSavedShowsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of shows saved in the current Spotify user's library. Optional parameters can be used to limit the number of shows returned.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Shows.GetUsersSavedShows(new GetUsersSavedShowsRequest { Limit = 10, Offset = 5 });
    // TODO: Handle 'response' of type PagingSavedShowObject
}
catch (ApiException<GetUsersSavedShowsError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetUsersSavedShowsRequest](src/SpotifyWebApi/Requests/Shows/GetUsersSavedShowsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PagingSavedShowObject](src/SpotifyWebApi/Models/PagingSavedShowObject.cs)</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[GetUsersSavedShowsError](src/SpotifyWebApi/Errors/GetUsersSavedShowsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task RemoveShowsUser(RemoveShowsUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete one or more shows from current Spotify user's library.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Shows.RemoveShowsUser(new RemoveShowsUserRequest
    {
        Ids = "5CfCWKI5pZ28U0uOzXkDHe,5as3aKmN2k11yfDDDSrvaZ",
        Market = "ES",
    });
}
catch (ApiException<RemoveShowsUserError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RemoveShowsUserRequest](src/SpotifyWebApi/Requests/Shows/RemoveShowsUserRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[RemoveShowsUserError](src/SpotifyWebApi/Errors/RemoveShowsUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task SaveShowsUser(SaveShowsUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Save one or more shows to current Spotify user's library.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Shows.SaveShowsUser(new SaveShowsUserRequest
    {
        Ids = "5CfCWKI5pZ28U0uOzXkDHe,5as3aKmN2k11yfDDDSrvaZ",
    });
}
catch (ApiException<SaveShowsUserError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SaveShowsUserRequest](src/SpotifyWebApi/Requests/Shows/SaveShowsUserRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[SaveShowsUserError](src/SpotifyWebApi/Errors/SaveShowsUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Tracks

> Source: [Tracks](src/SpotifyWebApi/Api/Tracks.cs)

<details>
<summary><code>Task&lt;PlaylistSnapshotId&gt; AddTracksToPlaylist(AddTracksToPlaylistRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add one or more items to a user's playlist.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tracks.AddTracksToPlaylist(new AddTracksToPlaylistRequest
    {
        PlaylistId = "3cEYpjA9oz9GiPac4AsH4n",
        Position = 0,
        Uris = "spotify:track:4iV5W9uYEdYUVa79Axb7Rh,spotify:track:1301WleyT98MSxVHPZCA6M",
    });
    // TODO: Handle 'response' of type PlaylistSnapshotId
}
catch (ApiException<AddTracksToPlaylistError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AddTracksToPlaylistRequest](src/SpotifyWebApi/Requests/Playlists/AddTracksToPlaylistRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PlaylistSnapshotId](src/SpotifyWebApi/Models/PlaylistSnapshotId.cs)</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[AddTracksToPlaylistError](src/SpotifyWebApi/Errors/AddTracksToPlaylistError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;bool&gt;&gt; CheckUsersSavedTracks(CheckUsersSavedTracksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check if one or more tracks is already saved in the current Spotify user's 'Your Music' library.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tracks.CheckUsersSavedTracks(new CheckUsersSavedTracksRequest
    {
        Ids = "7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B",
    });
    // TODO: Handle 'response' of type IReadOnlyList<bool>
}
catch (ApiException<CheckUsersSavedTracksError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CheckUsersSavedTracksRequest](src/SpotifyWebApi/Requests/Tracks/CheckUsersSavedTracksRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;bool&gt;</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[CheckUsersSavedTracksError](src/SpotifyWebApi/Errors/CheckUsersSavedTracksError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PagingSimplifiedTrackObject&gt; GetAnAlbumsTracks(GetAnAlbumsTracksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Spotify catalog information about an album’s tracks.
Optional parameters can be used to limit the number of tracks returned.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tracks.GetAnAlbumsTracks(new GetAnAlbumsTracksRequest
    {
        Id = "4aawyAB9vmqN3uQ7FjRGTy",
        Market = "ES",
        Limit = 10,
        Offset = 5,
    });
    // TODO: Handle 'response' of type PagingSimplifiedTrackObject
}
catch (ApiException<GetAnAlbumsTracksError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetAnAlbumsTracksRequest](src/SpotifyWebApi/Requests/Albums/GetAnAlbumsTracksRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PagingSimplifiedTrackObject](src/SpotifyWebApi/Models/PagingSimplifiedTrackObject.cs)</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[GetAnAlbumsTracksError](src/SpotifyWebApi/Errors/GetAnAlbumsTracksError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ManyTracks&gt; GetAnArtistsTopTracks(GetAnArtistsTopTracksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Spotify catalog information about an artist's top tracks by country.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tracks.GetAnArtistsTopTracks(new GetAnArtistsTopTracksRequest
    {
        Id = "0TnOYISbd1XYRBk9myaseg",
        Market = "ES",
    });
    // TODO: Handle 'response' of type ManyTracks
}
catch (ApiException<GetAnArtistsTopTracksError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetAnArtistsTopTracksRequest](src/SpotifyWebApi/Requests/Artists/GetAnArtistsTopTracksRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ManyTracks](src/SpotifyWebApi/Models/ManyTracks.cs)</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[GetAnArtistsTopTracksError](src/SpotifyWebApi/Errors/GetAnArtistsTopTracksError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AudioAnalysisObject&gt; GetAudioAnalysis(GetAudioAnalysisRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a low-level audio analysis for a track in the Spotify catalog. The audio analysis describes the track’s structure and musical content, including rhythm, pitch, and timbre.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tracks.GetAudioAnalysis(new GetAudioAnalysisRequest { Id = "11dFghVXANMlKmJXsNCbNl" });
    // TODO: Handle 'response' of type AudioAnalysisObject
}
catch (ApiException<GetAudioAnalysisError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetAudioAnalysisRequest](src/SpotifyWebApi/Requests/Tracks/GetAudioAnalysisRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AudioAnalysisObject](src/SpotifyWebApi/Models/AudioAnalysisObject.cs)</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[GetAudioAnalysisError](src/SpotifyWebApi/Errors/GetAudioAnalysisError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AudioFeaturesObject&gt; GetAudioFeatures(GetAudioFeaturesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get audio feature information for a single track identified by its unique
Spotify ID.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tracks.GetAudioFeatures(new GetAudioFeaturesRequest { Id = "11dFghVXANMlKmJXsNCbNl" });
    // TODO: Handle 'response' of type AudioFeaturesObject
}
catch (ApiException<GetAudioFeaturesError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetAudioFeaturesRequest](src/SpotifyWebApi/Requests/Tracks/GetAudioFeaturesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AudioFeaturesObject](src/SpotifyWebApi/Models/AudioFeaturesObject.cs)</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[GetAudioFeaturesError](src/SpotifyWebApi/Errors/GetAudioFeaturesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PagingPlaylistTrackObject&gt; GetPlaylistsTracks(GetPlaylistsTracksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get full details of the items of a playlist owned by a Spotify user.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tracks.GetPlaylistsTracks(new GetPlaylistsTracksRequest
    {
        PlaylistId = "3cEYpjA9oz9GiPac4AsH4n",
        Market = "ES",
        Fields = "items(added_by.id,track(name,href,album(name,href)))",
        Limit = 10,
        Offset = 5,
    });
    // TODO: Handle 'response' of type PagingPlaylistTrackObject
}
catch (ApiException<GetPlaylistsTracksError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetPlaylistsTracksRequest](src/SpotifyWebApi/Requests/Playlists/GetPlaylistsTracksRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PagingPlaylistTrackObject](src/SpotifyWebApi/Models/PagingPlaylistTrackObject.cs)</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[GetPlaylistsTracksError](src/SpotifyWebApi/Errors/GetPlaylistsTracksError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;RecommendationsObject&gt; GetRecommendations(GetRecommendationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Recommendations are generated based on the available information for a given seed entity and matched against similar artists and tracks. If there is sufficient information about the provided seeds, a list of tracks will be returned together with pool size details.

For artists and tracks that are very new or obscure there might not be enough data to generate a list of tracks.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tracks.GetRecommendations(new GetRecommendationsRequest
    {
        Limit = 10,
        Market = "ES",
        SeedArtists = "4NHQUGzhtTLFvgF5SZesLK",
        SeedGenres = "classical,country",
        SeedTracks = "0c6xIDDpzE81m2q797ordA",
    });
    // TODO: Handle 'response' of type RecommendationsObject
}
catch (ApiException<GetRecommendationsError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetRecommendationsRequest](src/SpotifyWebApi/Requests/Tracks/GetRecommendationsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RecommendationsObject](src/SpotifyWebApi/Models/RecommendationsObject.cs)</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[GetRecommendationsError](src/SpotifyWebApi/Errors/GetRecommendationsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ManyAudioFeatures&gt; GetSeveralAudioFeatures(GetSeveralAudioFeaturesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get audio features for multiple tracks based on their Spotify IDs.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tracks.GetSeveralAudioFeatures(new GetSeveralAudioFeaturesRequest
    {
        Ids = "7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B",
    });
    // TODO: Handle 'response' of type ManyAudioFeatures
}
catch (ApiException<GetSeveralAudioFeaturesError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetSeveralAudioFeaturesRequest](src/SpotifyWebApi/Requests/Tracks/GetSeveralAudioFeaturesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ManyAudioFeatures](src/SpotifyWebApi/Models/ManyAudioFeatures.cs)</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[GetSeveralAudioFeaturesError](src/SpotifyWebApi/Errors/GetSeveralAudioFeaturesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ManyTracks&gt; GetSeveralTracks(GetSeveralTracksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Spotify catalog information for multiple tracks based on their Spotify IDs.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tracks.GetSeveralTracks(new GetSeveralTracksRequest
    {
        Ids = "7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B",
        Market = "ES",
    });
    // TODO: Handle 'response' of type ManyTracks
}
catch (ApiException<GetSeveralTracksError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetSeveralTracksRequest](src/SpotifyWebApi/Requests/Tracks/GetSeveralTracksRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ManyTracks](src/SpotifyWebApi/Models/ManyTracks.cs)</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[GetSeveralTracksError](src/SpotifyWebApi/Errors/GetSeveralTracksError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TrackObject&gt; GetTrack(GetTrackRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Spotify catalog information for a single track identified by its
unique Spotify ID.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tracks.GetTrack(new GetTrackRequest { Id = "11dFghVXANMlKmJXsNCbNl", Market = "ES" });
    // TODO: Handle 'response' of type TrackObject
}
catch (ApiException<GetTrackError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetTrackRequest](src/SpotifyWebApi/Requests/Tracks/GetTrackRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TrackObject](src/SpotifyWebApi/Models/TrackObject.cs)</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[GetTrackError](src/SpotifyWebApi/Errors/GetTrackError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PagingSavedTrackObject&gt; GetUsersSavedTracks(GetUsersSavedTracksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of the songs saved in the current Spotify user's 'Your Music' library.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tracks.GetUsersSavedTracks(new GetUsersSavedTracksRequest
    {
        Market = "ES",
        Limit = 10,
        Offset = 5,
    });
    // TODO: Handle 'response' of type PagingSavedTrackObject
}
catch (ApiException<GetUsersSavedTracksError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetUsersSavedTracksRequest](src/SpotifyWebApi/Requests/Tracks/GetUsersSavedTracksRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PagingSavedTrackObject](src/SpotifyWebApi/Models/PagingSavedTrackObject.cs)</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[GetUsersSavedTracksError](src/SpotifyWebApi/Errors/GetUsersSavedTracksError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PagingTrackObject&gt; GetUsersTopTracks(GetUsersTopTracksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the current user's top tracks based on calculated affinity.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tracks.GetUsersTopTracks(new GetUsersTopTracksRequest
    {
        TimeRange = "medium_term",
        Limit = 10,
        Offset = 5,
    });
    // TODO: Handle 'response' of type PagingTrackObject
}
catch (ApiException<GetUsersTopTracksError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetUsersTopTracksRequest](src/SpotifyWebApi/Requests/Users/GetUsersTopTracksRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PagingTrackObject](src/SpotifyWebApi/Models/PagingTrackObject.cs)</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[GetUsersTopTracksError](src/SpotifyWebApi/Errors/GetUsersTopTracksError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PlaylistSnapshotId&gt; RemoveTracksPlaylist(RemoveTracksPlaylistRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove one or more items from a user's playlist.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tracks.RemoveTracksPlaylist(new RemoveTracksPlaylistRequest
    {
        PlaylistId = "3cEYpjA9oz9GiPac4AsH4n",
    });
    // TODO: Handle 'response' of type PlaylistSnapshotId
}
catch (ApiException<RemoveTracksPlaylistError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RemoveTracksPlaylistRequest](src/SpotifyWebApi/Requests/Playlists/RemoveTracksPlaylistRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PlaylistSnapshotId](src/SpotifyWebApi/Models/PlaylistSnapshotId.cs)</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[RemoveTracksPlaylistError](src/SpotifyWebApi/Errors/RemoveTracksPlaylistError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task RemoveTracksUser(RemoveTracksUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove one or more tracks from the current user's 'Your Music' library.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Tracks.RemoveTracksUser(new RemoveTracksUserRequest
    {
        Ids = "7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B",
    });
}
catch (ApiException<RemoveTracksUserError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RemoveTracksUserRequest](src/SpotifyWebApi/Requests/Tracks/RemoveTracksUserRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[RemoveTracksUserError](src/SpotifyWebApi/Errors/RemoveTracksUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PlaylistSnapshotId&gt; ReorderOrReplacePlaylistsTracks(ReorderOrReplacePlaylistsTracksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tracks.ReorderOrReplacePlaylistsTracks(new ReorderOrReplacePlaylistsTracksRequest
    {
        PlaylistId = "3cEYpjA9oz9GiPac4AsH4n",
    });
    // TODO: Handle 'response' of type PlaylistSnapshotId
}
catch (ApiException<ReorderOrReplacePlaylistsTracksError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ReorderOrReplacePlaylistsTracksRequest](src/SpotifyWebApi/Requests/Playlists/ReorderOrReplacePlaylistsTracksRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PlaylistSnapshotId](src/SpotifyWebApi/Models/PlaylistSnapshotId.cs)</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[ReorderOrReplacePlaylistsTracksError](src/SpotifyWebApi/Errors/ReorderOrReplacePlaylistsTracksError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task SaveTracksUser(SaveTracksUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Save one or more tracks to the current user's 'Your Music' library.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Tracks.SaveTracksUser(new SaveTracksUserRequest
    {
        Ids = "7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B",
    });
}
catch (ApiException<SaveTracksUserError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SaveTracksUserRequest](src/SpotifyWebApi/Requests/Tracks/SaveTracksUserRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[SaveTracksUserError](src/SpotifyWebApi/Errors/SaveTracksUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Users

> Source: [Users](src/SpotifyWebApi/Api/Users.cs)

<details>
<summary><code>Task&lt;IReadOnlyList&lt;bool&gt;&gt; CheckCurrentUserFollows(CheckCurrentUserFollowsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check to see if the current user is following one or more artists or other Spotify users.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Users.CheckCurrentUserFollows(new CheckCurrentUserFollowsRequest
    {
        Type = ItemType3.Artist,
        Ids = "2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6",
    });
    // TODO: Handle 'response' of type IReadOnlyList<bool>
}
catch (ApiException<CheckCurrentUserFollowsError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CheckCurrentUserFollowsRequest](src/SpotifyWebApi/Requests/Users/CheckCurrentUserFollowsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;bool&gt;</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[CheckCurrentUserFollowsError](src/SpotifyWebApi/Errors/CheckCurrentUserFollowsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;bool&gt;&gt; CheckIfUserFollowsPlaylist(CheckIfUserFollowsPlaylistRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check to see if one or more Spotify users are following a specified playlist.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Users.CheckIfUserFollowsPlaylist(new CheckIfUserFollowsPlaylistRequest
    {
        PlaylistId = "3cEYpjA9oz9GiPac4AsH4n",
        Ids = "jmperezperez,thelinmichael,wizzler",
    });
    // TODO: Handle 'response' of type IReadOnlyList<bool>
}
catch (ApiException<CheckIfUserFollowsPlaylistError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CheckIfUserFollowsPlaylistRequest](src/SpotifyWebApi/Requests/Users/CheckIfUserFollowsPlaylistRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;bool&gt;</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[CheckIfUserFollowsPlaylistError](src/SpotifyWebApi/Errors/CheckIfUserFollowsPlaylistError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task FollowArtistsUsers(FollowArtistsUsersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add the current user as a follower of one or more artists or other Spotify users.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Users.FollowArtistsUsers(new FollowArtistsUsersRequest
    {
        Type = ItemType2.Artist,
        Ids = "2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6",
    });
}
catch (ApiException<FollowArtistsUsersError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FollowArtistsUsersRequest](src/SpotifyWebApi/Requests/Users/FollowArtistsUsersRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[FollowArtistsUsersError](src/SpotifyWebApi/Errors/FollowArtistsUsersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task FollowPlaylist(FollowPlaylistRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add the current user as a follower of a playlist.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Users.FollowPlaylist(new FollowPlaylistRequest { PlaylistId = "3cEYpjA9oz9GiPac4AsH4n" });
}
catch (ApiException<FollowPlaylistError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FollowPlaylistRequest](src/SpotifyWebApi/Requests/Users/FollowPlaylistRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[FollowPlaylistError](src/SpotifyWebApi/Errors/FollowPlaylistError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PrivateUserObject&gt; GetCurrentUsersProfile(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get detailed profile information about the current user (including the
current user's username).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Users.GetCurrentUsersProfile();
    // TODO: Handle 'response' of type PrivateUserObject
}
catch (ApiException<GetCurrentUsersProfileError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PrivateUserObject](src/SpotifyWebApi/Models/PrivateUserObject.cs)</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[GetCurrentUsersProfileError](src/SpotifyWebApi/Errors/GetCurrentUsersProfileError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CursorPagedArtists&gt; GetFollowed(GetFollowedRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the current user's followed artists.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Users.GetFollowed(new GetFollowedRequest
    {
        Type = ItemType1.Artist,
        After = "0I2XqVXqHScXjHhk6AYYRe",
        Limit = 10,
    });
    // TODO: Handle 'response' of type CursorPagedArtists
}
catch (ApiException<GetFollowedError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetFollowedRequest](src/SpotifyWebApi/Requests/Users/GetFollowedRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CursorPagedArtists](src/SpotifyWebApi/Models/CursorPagedArtists.cs)</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[GetFollowedError](src/SpotifyWebApi/Errors/GetFollowedError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PagingPlaylistObject&gt; GetListUsersPlaylists(GetListUsersPlaylistsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of the playlists owned or followed by a Spotify user.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Users.GetListUsersPlaylists(new GetListUsersPlaylistsRequest
    {
        UserId = "smedjan",
        Limit = 10,
        Offset = 5,
    });
    // TODO: Handle 'response' of type PagingPlaylistObject
}
catch (ApiException<GetListUsersPlaylistsError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetListUsersPlaylistsRequest](src/SpotifyWebApi/Requests/Playlists/GetListUsersPlaylistsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PagingPlaylistObject](src/SpotifyWebApi/Models/PagingPlaylistObject.cs)</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[GetListUsersPlaylistsError](src/SpotifyWebApi/Errors/GetListUsersPlaylistsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PublicUserObject&gt; GetUsersProfile(GetUsersProfileRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get public profile information about a Spotify user.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Users.GetUsersProfile(new GetUsersProfileRequest { UserId = "smedjan" });
    // TODO: Handle 'response' of type PublicUserObject
}
catch (ApiException<GetUsersProfileError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetUsersProfileRequest](src/SpotifyWebApi/Requests/Users/GetUsersProfileRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicUserObject](src/SpotifyWebApi/Models/PublicUserObject.cs)</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[GetUsersProfileError](src/SpotifyWebApi/Errors/GetUsersProfileError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PagingArtistObject&gt; GetUsersTopArtists(GetUsersTopArtistsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the current user's top artists based on calculated affinity.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Users.GetUsersTopArtists(new GetUsersTopArtistsRequest
    {
        TimeRange = "medium_term",
        Limit = 10,
        Offset = 5,
    });
    // TODO: Handle 'response' of type PagingArtistObject
}
catch (ApiException<GetUsersTopArtistsError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetUsersTopArtistsRequest](src/SpotifyWebApi/Requests/Users/GetUsersTopArtistsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PagingArtistObject](src/SpotifyWebApi/Models/PagingArtistObject.cs)</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[GetUsersTopArtistsError](src/SpotifyWebApi/Errors/GetUsersTopArtistsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PagingTrackObject&gt; GetUsersTopTracks(GetUsersTopTracksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the current user's top tracks based on calculated affinity.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Users.GetUsersTopTracks(new GetUsersTopTracksRequest
    {
        TimeRange = "medium_term",
        Limit = 10,
        Offset = 5,
    });
    // TODO: Handle 'response' of type PagingTrackObject
}
catch (ApiException<GetUsersTopTracksError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetUsersTopTracksRequest](src/SpotifyWebApi/Requests/Users/GetUsersTopTracksRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PagingTrackObject](src/SpotifyWebApi/Models/PagingTrackObject.cs)</code>

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[GetUsersTopTracksError](src/SpotifyWebApi/Errors/GetUsersTopTracksError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task UnfollowArtistsUsers(UnfollowArtistsUsersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove the current user as a follower of one or more artists or other Spotify users.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Users.UnfollowArtistsUsers(new UnfollowArtistsUsersRequest
    {
        Type = ItemType3.Artist,
        Ids = "2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6",
    });
}
catch (ApiException<UnfollowArtistsUsersError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UnfollowArtistsUsersRequest](src/SpotifyWebApi/Requests/Users/UnfollowArtistsUsersRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[UnfollowArtistsUsersError](src/SpotifyWebApi/Errors/UnfollowArtistsUsersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task UnfollowPlaylist(UnfollowPlaylistRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove the current user as a follower of a playlist.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Users.UnfollowPlaylist(new UnfollowPlaylistRequest { PlaylistId = "3cEYpjA9oz9GiPac4AsH4n" });
}
catch (ApiException<UnfollowPlaylistError> ex)
{
    if (ex.Error.TryGetUnauthorized1(out var error))
    {
        // TODO: Handle 'error' of type Unauthorized1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UnfollowPlaylistRequest](src/SpotifyWebApi/Requests/Users/UnfollowPlaylistRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/SpotifyWebApi/Core/Exceptions/ApiException.cs)&lt;[UnfollowPlaylistError](src/SpotifyWebApi/Errors/UnfollowPlaylistError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

