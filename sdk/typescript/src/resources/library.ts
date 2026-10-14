import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { cursorPagedArtistsSchema, type CursorPagedArtists } from "../models/cursor-paged-artists.js";
import {
  followArtistsOrUsersRequestSchema,
  type FollowArtistsOrUsersRequest,
} from "../models/follow-artists-or-users-request.js";
import { forbidden1Schema, type Forbidden1 } from "../models/forbidden1.js";
import { itemType1Schema, type ItemType1 } from "../models/item-type1.js";
import { itemType2Schema, type ItemType2 } from "../models/item-type2.js";
import { itemType3Schema, type ItemType3 } from "../models/item-type3.js";
import { pagingArtistObjectSchema, type PagingArtistObject } from "../models/paging-artist-object.js";
import { pagingPlaylistObjectSchema, type PagingPlaylistObject } from "../models/paging-playlist-object.js";
import {
  pagingSavedAlbumObjectSchema,
  type PagingSavedAlbumObject,
} from "../models/paging-saved-album-object.js";
import {
  pagingSavedAudiobookObjectSchema,
  type PagingSavedAudiobookObject,
} from "../models/paging-saved-audiobook-object.js";
import {
  pagingSavedEpisodeObjectSchema,
  type PagingSavedEpisodeObject,
} from "../models/paging-saved-episode-object.js";
import {
  pagingSavedShowObjectSchema,
  type PagingSavedShowObject,
} from "../models/paging-saved-show-object.js";
import {
  pagingSavedTrackObjectSchema,
  type PagingSavedTrackObject,
} from "../models/paging-saved-track-object.js";
import { pagingTrackObjectSchema, type PagingTrackObject } from "../models/paging-track-object.js";
import { playlistObjectSchema, type PlaylistObject } from "../models/playlist-object.js";
import { playlistsRequestSchema, type PlaylistsRequest } from "../models/playlists-request.js";
import { removeAlbumsRequestSchema, type RemoveAlbumsRequest } from "../models/remove-albums-request.js";
import {
  removeEpisodesRequestSchema,
  type RemoveEpisodesRequest,
} from "../models/remove-episodes-request.js";
import { removeShowsRequestSchema, type RemoveShowsRequest } from "../models/remove-shows-request.js";
import { removeTracksRequestSchema, type RemoveTracksRequest } from "../models/remove-tracks-request.js";
import { saveAlbumsRequestSchema, type SaveAlbumsRequest } from "../models/save-albums-request.js";
import { saveEpisodesRequestSchema, type SaveEpisodesRequest } from "../models/save-episodes-request.js";
import { saveShowsRequestSchema, type SaveShowsRequest } from "../models/save-shows-request.js";
import { saveTracksRequestSchema, type SaveTracksRequest } from "../models/save-tracks-request.js";
import { tooManyRequests1Schema, type TooManyRequests1 } from "../models/too-many-requests1.js";
import { unauthorized1Schema, type Unauthorized1 } from "../models/unauthorized1.js";
import {
  unfollowArtistsOrUsersRequestSchema,
  type UnfollowArtistsOrUsersRequest,
} from "../models/unfollow-artists-or-users-request.js";
import {
  usersPlaylistsRequestSchema,
  type UsersPlaylistsRequest,
} from "../models/users-playlists-request.js";
import type { Servers } from "../servers.js";

export class Library {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Change Playlist Details
   *
   * @remarks
   * Change a playlist's name and public/private state. (The user must, of course, own the
   * playlist.)
   *
   * @returns Playlist updated
   *
   * @throws {@link Library.ChangePlaylistDetailsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  changePlaylistDetails(
    request: Library.ChangePlaylistDetailsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Library.ChangePlaylistDetailsError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/playlists/{playlist_id}"),
        auth: this.#auth.oauth20,
        pathParams: [{ name: "playlist_id", value: request.playlistId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => playlistsRequestSchema)) },
      },
      {
        success: { kind: "empty" },
        errorFactory: Library.ChangePlaylistDetailsError,
      },
      options,
    );
  }

  /**
   * Check If User Follows Artists or Users
   *
   * @remarks
   * Check to see if the current user is following one or more artists or other Spotify users.
   *
   * @returns Array of booleans
   *
   * @throws {@link Library.CheckCurrentUserFollowsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  checkCurrentUserFollows(
    request: Library.CheckCurrentUserFollowsRequest,
    options?: RequestOptions,
  ): ApiPromise<boolean[], Library.CheckCurrentUserFollowsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/me/following/contains"),
        auth: this.#auth.oauth20,
        pathParams: [],
        query: [
          { name: "type", value: request.type, schema: itemType3Schema },
          { name: "ids", value: request.ids, schema: s.string() },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.boolean()) },
        errorFactory: Library.CheckCurrentUserFollowsError,
      },
      options,
    );
  }

  /**
   * Check User's Saved Albums
   *
   * @remarks
   * Check if one or more albums is already saved in the current Spotify user's 'Your Music'
   * library.
   *
   * @returns Array of booleans
   *
   * @throws {@link Library.CheckUsersSavedAlbumsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  checkUsersSavedAlbums(
    request: Library.CheckUsersSavedAlbumsRequest,
    options?: RequestOptions,
  ): ApiPromise<boolean[], Library.CheckUsersSavedAlbumsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/me/albums/contains"),
        auth: this.#auth.oauth20,
        pathParams: [],
        query: [{ name: "ids", value: request.ids, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.boolean()) },
        errorFactory: Library.CheckUsersSavedAlbumsError,
      },
      options,
    );
  }

  /**
   * Check User's Saved Audiobooks
   *
   * @remarks
   * Check if one or more audiobooks are already saved in the current Spotify user's library.
   *
   * @returns Array of booleans
   *
   * @throws {@link Library.CheckUsersSavedAudiobooksError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  checkUsersSavedAudiobooks(
    request: Library.CheckUsersSavedAudiobooksRequest,
    options?: RequestOptions,
  ): ApiPromise<boolean[], Library.CheckUsersSavedAudiobooksError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/me/audiobooks/contains"),
        auth: this.#auth.oauth20,
        pathParams: [],
        query: [{ name: "ids", value: request.ids, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.boolean()) },
        errorFactory: Library.CheckUsersSavedAudiobooksError,
      },
      options,
    );
  }

  /**
   * Check User's Saved Episodes
   *
   * @remarks
   * Check if one or more episodes is already saved in the current Spotify user's 'Your Episodes'
   * library.<br/> This API endpoint is in __beta__ and could change without warning. Please share
   * any feedback that you have, or issues that you discover, in our [developer community
   * forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)..
   *
   * @returns Array of booleans
   *
   * @throws {@link Library.CheckUsersSavedEpisodesError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  checkUsersSavedEpisodes(
    request: Library.CheckUsersSavedEpisodesRequest,
    options?: RequestOptions,
  ): ApiPromise<boolean[], Library.CheckUsersSavedEpisodesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/me/episodes/contains"),
        auth: this.#auth.oauth20,
        pathParams: [],
        query: [{ name: "ids", value: request.ids, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.boolean()) },
        errorFactory: Library.CheckUsersSavedEpisodesError,
      },
      options,
    );
  }

  /**
   * Check User's Saved Shows
   *
   * @remarks
   * Check if one or more shows is already saved in the current Spotify user's library.
   *
   * @returns Array of booleans
   *
   * @throws {@link Library.CheckUsersSavedShowsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  checkUsersSavedShows(
    request: Library.CheckUsersSavedShowsRequest,
    options?: RequestOptions,
  ): ApiPromise<boolean[], Library.CheckUsersSavedShowsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/me/shows/contains"),
        auth: this.#auth.oauth20,
        pathParams: [],
        query: [{ name: "ids", value: request.ids, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.boolean()) },
        errorFactory: Library.CheckUsersSavedShowsError,
      },
      options,
    );
  }

  /**
   * Check User's Saved Tracks
   *
   * @remarks
   * Check if one or more tracks is already saved in the current Spotify user's 'Your Music'
   * library.
   *
   * @returns Array of booleans
   *
   * @throws {@link Library.CheckUsersSavedTracksError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  checkUsersSavedTracks(
    request: Library.CheckUsersSavedTracksRequest,
    options?: RequestOptions,
  ): ApiPromise<boolean[], Library.CheckUsersSavedTracksError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/me/tracks/contains"),
        auth: this.#auth.oauth20,
        pathParams: [],
        query: [{ name: "ids", value: request.ids, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.boolean()) },
        errorFactory: Library.CheckUsersSavedTracksError,
      },
      options,
    );
  }

  /**
   * Create Playlist
   *
   * @remarks
   * Create a playlist for a Spotify user. (The playlist will be empty until you [add
   * tracks](https://developer.spotify.com/documentation/web-api/reference/add-tracks-to-playlist).)
   * Each user is generally limited to a maximum of 11000 playlists.
   *
   * @returns A playlist
   *
   * @throws {@link Library.CreatePlaylistError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createPlaylist(
    request: Library.CreatePlaylistRequest,
    options?: RequestOptions,
  ): ApiPromise<PlaylistObject, Library.CreatePlaylistError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/users/{user_id}/playlists"),
        auth: this.#auth.oauth20,
        pathParams: [{ name: "user_id", value: request.userId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => usersPlaylistsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: playlistObjectSchema },
        errorFactory: Library.CreatePlaylistError,
      },
      options,
    );
  }

  /**
   * Follow Artists or Users
   *
   * @remarks
   * Add the current user as a follower of one or more artists or other Spotify users.
   *
   * @returns Artist or user followed
   *
   * @throws {@link Library.FollowArtistsUsersError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  followArtistsUsers(
    request: Library.FollowArtistsUsersRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Library.FollowArtistsUsersError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/me/following"),
        auth: this.#auth.oauth20,
        pathParams: [],
        query: [
          { name: "type", value: request.type, schema: itemType2Schema },
          { name: "ids", value: request.ids, schema: s.string() },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => followArtistsOrUsersRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: Library.FollowArtistsUsersError,
      },
      options,
    );
  }

  /**
   * Get Current User's Playlists
   *
   * @remarks
   * Get a list of the playlists owned or followed by the current Spotify user.
   *
   * @returns A paged set of playlists
   *
   * @throws {@link Library.GetAListOfCurrentUsersPlaylistsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAListOfCurrentUsersPlaylists(
    request: Library.GetAListOfCurrentUsersPlaylistsRequest,
    options?: RequestOptions,
  ): ApiPromise<PagingPlaylistObject, Library.GetAListOfCurrentUsersPlaylistsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/me/playlists"),
        auth: this.#auth.oauth20,
        pathParams: [],
        query: [
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 20) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.int(), 0) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pagingPlaylistObjectSchema },
        errorFactory: Library.GetAListOfCurrentUsersPlaylistsError,
      },
      options,
    );
  }

  /**
   * Get Followed Artists
   *
   * @remarks
   * Get the current user's followed artists.
   *
   * @returns A paged set of artists
   *
   * @throws {@link Library.GetFollowedError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getFollowed(
    request: Library.GetFollowedRequest,
    options?: RequestOptions,
  ): ApiPromise<CursorPagedArtists, Library.GetFollowedError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/me/following"),
        auth: this.#auth.oauth20,
        pathParams: [],
        query: [
          { name: "type", value: request.type, schema: itemType1Schema },
          { name: "after", value: request.after, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 20) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: cursorPagedArtistsSchema },
        errorFactory: Library.GetFollowedError,
      },
      options,
    );
  }

  /**
   * Get User's Saved Albums
   *
   * @remarks
   * Get a list of the albums saved in the current Spotify user's 'Your Music' library.
   *
   * @returns Pages of albums
   *
   * @throws {@link Library.GetUsersSavedAlbumsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getUsersSavedAlbums(
    request: Library.GetUsersSavedAlbumsRequest,
    options?: RequestOptions,
  ): ApiPromise<PagingSavedAlbumObject, Library.GetUsersSavedAlbumsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/me/albums"),
        auth: this.#auth.oauth20,
        pathParams: [],
        query: [
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 20) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.int(), 0) },
          { name: "market", value: request.market, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pagingSavedAlbumObjectSchema },
        errorFactory: Library.GetUsersSavedAlbumsError,
      },
      options,
    );
  }

  /**
   * Get User's Saved Audiobooks
   *
   * @remarks
   * Get a list of the audiobooks saved in the current Spotify user's 'Your Music' library.
   *
   * @returns Pages of saved audiobooks
   *
   * @throws {@link Library.GetUsersSavedAudiobooksError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getUsersSavedAudiobooks(
    request: Library.GetUsersSavedAudiobooksRequest,
    options?: RequestOptions,
  ): ApiPromise<PagingSavedAudiobookObject, Library.GetUsersSavedAudiobooksError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/me/audiobooks"),
        auth: this.#auth.oauth20,
        pathParams: [],
        query: [
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 20) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.int(), 0) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pagingSavedAudiobookObjectSchema },
        errorFactory: Library.GetUsersSavedAudiobooksError,
      },
      options,
    );
  }

  /**
   * Get User's Saved Episodes
   *
   * @remarks
   * Get a list of the episodes saved in the current Spotify user's library.<br/> This API endpoint
   * is in __beta__ and could change without warning. Please share any feedback that you have, or
   * issues that you discover, in our [developer community
   * forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer).
   *
   * @returns Pages of episodes
   *
   * @throws {@link Library.GetUsersSavedEpisodesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getUsersSavedEpisodes(
    request: Library.GetUsersSavedEpisodesRequest,
    options?: RequestOptions,
  ): ApiPromise<PagingSavedEpisodeObject, Library.GetUsersSavedEpisodesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/me/episodes"),
        auth: this.#auth.oauth20,
        pathParams: [],
        query: [
          { name: "market", value: request.market, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 20) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.int(), 0) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pagingSavedEpisodeObjectSchema },
        errorFactory: Library.GetUsersSavedEpisodesError,
      },
      options,
    );
  }

  /**
   * Get User's Saved Shows
   *
   * @remarks
   * Get a list of shows saved in the current Spotify user's library. Optional parameters can be
   * used to limit the number of shows returned.
   *
   * @returns Pages of shows
   *
   * @throws {@link Library.GetUsersSavedShowsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getUsersSavedShows(
    request: Library.GetUsersSavedShowsRequest,
    options?: RequestOptions,
  ): ApiPromise<PagingSavedShowObject, Library.GetUsersSavedShowsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/me/shows"),
        auth: this.#auth.oauth20,
        pathParams: [],
        query: [
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 20) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.int(), 0) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pagingSavedShowObjectSchema },
        errorFactory: Library.GetUsersSavedShowsError,
      },
      options,
    );
  }

  /**
   * Get User's Saved Tracks
   *
   * @remarks
   * Get a list of the songs saved in the current Spotify user's 'Your Music' library.
   *
   * @returns Pages of tracks
   *
   * @throws {@link Library.GetUsersSavedTracksError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getUsersSavedTracks(
    request: Library.GetUsersSavedTracksRequest,
    options?: RequestOptions,
  ): ApiPromise<PagingSavedTrackObject, Library.GetUsersSavedTracksError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/me/tracks"),
        auth: this.#auth.oauth20,
        pathParams: [],
        query: [
          { name: "market", value: request.market, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 20) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.int(), 0) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pagingSavedTrackObjectSchema },
        errorFactory: Library.GetUsersSavedTracksError,
      },
      options,
    );
  }

  /**
   * Get User's Top Artists
   *
   * @remarks
   * Get the current user's top artists based on calculated affinity.
   *
   * @returns Pages of artists
   *
   * @throws {@link Library.GetUsersTopArtistsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getUsersTopArtists(
    request: Library.GetUsersTopArtistsRequest,
    options?: RequestOptions,
  ): ApiPromise<PagingArtistObject, Library.GetUsersTopArtistsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/me/top/artists"),
        auth: this.#auth.oauth20,
        pathParams: [],
        query: [
          { name: "time_range", value: request.timeRange, schema: s.defaulted(s.string(), "medium_term") },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 20) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.int(), 0) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pagingArtistObjectSchema },
        errorFactory: Library.GetUsersTopArtistsError,
      },
      options,
    );
  }

  /**
   * Get User's Top Tracks
   *
   * @remarks
   * Get the current user's top tracks based on calculated affinity.
   *
   * @returns Pages of tracks
   *
   * @throws {@link Library.GetUsersTopTracksError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getUsersTopTracks(
    request: Library.GetUsersTopTracksRequest,
    options?: RequestOptions,
  ): ApiPromise<PagingTrackObject, Library.GetUsersTopTracksError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/me/top/tracks"),
        auth: this.#auth.oauth20,
        pathParams: [],
        query: [
          { name: "time_range", value: request.timeRange, schema: s.defaulted(s.string(), "medium_term") },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 20) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.int(), 0) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pagingTrackObjectSchema },
        errorFactory: Library.GetUsersTopTracksError,
      },
      options,
    );
  }

  /**
   * Remove Users' Saved Albums
   *
   * @remarks
   * Remove one or more albums from the current user's 'Your Music' library.
   *
   * @returns Album(s) have been removed from the library
   *
   * @throws {@link Library.RemoveAlbumsUserError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  removeAlbumsUser(
    request: Library.RemoveAlbumsUserRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Library.RemoveAlbumsUserError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/me/albums"),
        auth: this.#auth.oauth20,
        pathParams: [],
        query: [{ name: "ids", value: request.ids, schema: s.string() }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => removeAlbumsRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: Library.RemoveAlbumsUserError,
      },
      options,
    );
  }

  /**
   * Remove User's Saved Audiobooks
   *
   * @remarks
   * Remove one or more audiobooks from the Spotify user's library.
   *
   * @returns Audiobook(s) have been removed from the library
   *
   * @throws {@link Library.RemoveAudiobooksUserError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  removeAudiobooksUser(
    request: Library.RemoveAudiobooksUserRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Library.RemoveAudiobooksUserError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/me/audiobooks"),
        auth: this.#auth.oauth20,
        pathParams: [],
        query: [{ name: "ids", value: request.ids, schema: s.string() }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Library.RemoveAudiobooksUserError,
      },
      options,
    );
  }

  /**
   * Remove User's Saved Episodes
   *
   * @remarks
   * Remove one or more episodes from the current user's library.<br/> This API endpoint is in
   * __beta__ and could change without warning. Please share any feedback that you have, or issues
   * that you discover, in our [developer community
   * forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer).
   *
   * @returns Episode removed
   *
   * @throws {@link Library.RemoveEpisodesUserError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  removeEpisodesUser(
    request: Library.RemoveEpisodesUserRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Library.RemoveEpisodesUserError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/me/episodes"),
        auth: this.#auth.oauth20,
        pathParams: [],
        query: [{ name: "ids", value: request.ids, schema: s.string() }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => removeEpisodesRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: Library.RemoveEpisodesUserError,
      },
      options,
    );
  }

  /**
   * Remove User's Saved Shows
   *
   * @remarks
   * Delete one or more shows from current Spotify user's library.
   *
   * @returns Show removed
   *
   * @throws {@link Library.RemoveShowsUserError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  removeShowsUser(
    request: Library.RemoveShowsUserRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Library.RemoveShowsUserError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/me/shows"),
        auth: this.#auth.oauth20,
        pathParams: [],
        query: [
          { name: "ids", value: request.ids, schema: s.string() },
          { name: "market", value: request.market, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => removeShowsRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: Library.RemoveShowsUserError,
      },
      options,
    );
  }

  /**
   * Remove User's Saved Tracks
   *
   * @remarks
   * Remove one or more tracks from the current user's 'Your Music' library.
   *
   * @returns Track removed
   *
   * @throws {@link Library.RemoveTracksUserError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  removeTracksUser(
    request: Library.RemoveTracksUserRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Library.RemoveTracksUserError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/me/tracks"),
        auth: this.#auth.oauth20,
        pathParams: [],
        query: [{ name: "ids", value: request.ids, schema: s.string() }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => removeTracksRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: Library.RemoveTracksUserError,
      },
      options,
    );
  }

  /**
   * Save Albums for Current User
   *
   * @remarks
   * Save one or more albums to the current user's 'Your Music' library.
   *
   * @returns The album is saved
   *
   * @throws {@link Library.SaveAlbumsUserError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  saveAlbumsUser(
    request: Library.SaveAlbumsUserRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Library.SaveAlbumsUserError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/me/albums"),
        auth: this.#auth.oauth20,
        pathParams: [],
        query: [{ name: "ids", value: request.ids, schema: s.string() }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => saveAlbumsRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: Library.SaveAlbumsUserError,
      },
      options,
    );
  }

  /**
   * Save Audiobooks for Current User
   *
   * @remarks
   * Save one or more audiobooks to the current Spotify user's library.
   *
   * @returns Audiobook(s) are saved to the library
   *
   * @throws {@link Library.SaveAudiobooksUserError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  saveAudiobooksUser(
    request: Library.SaveAudiobooksUserRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Library.SaveAudiobooksUserError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/me/audiobooks"),
        auth: this.#auth.oauth20,
        pathParams: [],
        query: [{ name: "ids", value: request.ids, schema: s.string() }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Library.SaveAudiobooksUserError,
      },
      options,
    );
  }

  /**
   * Save Episodes for Current User
   *
   * @remarks
   * Save one or more episodes to the current user's library.<br/> This API endpoint is in __beta__
   * and could change without warning. Please share any feedback that you have, or issues that you
   * discover, in our [developer community
   * forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer).
   *
   * @returns Episode saved
   *
   * @throws {@link Library.SaveEpisodesUserError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  saveEpisodesUser(
    request: Library.SaveEpisodesUserRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Library.SaveEpisodesUserError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/me/episodes"),
        auth: this.#auth.oauth20,
        pathParams: [],
        query: [{ name: "ids", value: request.ids, schema: s.string() }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => saveEpisodesRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: Library.SaveEpisodesUserError,
      },
      options,
    );
  }

  /**
   * Save Shows for Current User
   *
   * @remarks
   * Save one or more shows to current Spotify user's library.
   *
   * @returns Show saved
   *
   * @throws {@link Library.SaveShowsUserError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  saveShowsUser(
    request: Library.SaveShowsUserRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Library.SaveShowsUserError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/me/shows"),
        auth: this.#auth.oauth20,
        pathParams: [],
        query: [{ name: "ids", value: request.ids, schema: s.string() }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => saveShowsRequestSchema)) },
      },
      {
        success: { kind: "empty" },
        errorFactory: Library.SaveShowsUserError,
      },
      options,
    );
  }

  /**
   * Save Tracks for Current User
   *
   * @remarks
   * Save one or more tracks to the current user's 'Your Music' library.
   *
   * @returns Track saved
   *
   * @throws {@link Library.SaveTracksUserError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  saveTracksUser(
    request: Library.SaveTracksUserRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Library.SaveTracksUserError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/me/tracks"),
        auth: this.#auth.oauth20,
        pathParams: [],
        query: [{ name: "ids", value: request.ids, schema: s.string() }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => saveTracksRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: Library.SaveTracksUserError,
      },
      options,
    );
  }

  /**
   * Unfollow Artists or Users
   *
   * @remarks
   * Remove the current user as a follower of one or more artists or other Spotify users.
   *
   * @returns Artist or user unfollowed
   *
   * @throws {@link Library.UnfollowArtistsUsersError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  unfollowArtistsUsers(
    request: Library.UnfollowArtistsUsersRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Library.UnfollowArtistsUsersError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/me/following"),
        auth: this.#auth.oauth20,
        pathParams: [],
        query: [
          { name: "type", value: request.type, schema: itemType3Schema },
          { name: "ids", value: request.ids, schema: s.string() },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => unfollowArtistsOrUsersRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: Library.UnfollowArtistsUsersError,
      },
      options,
    );
  }
}

export namespace Library {
  export type ChangePlaylistDetailsRequest = {
    playlistId: string;
    body?: PlaylistsRequest;
  };

  export class ChangePlaylistDetailsError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<ChangePlaylistDetailsError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type CheckCurrentUserFollowsRequest = {
    type: ItemType3;
    ids: string;
  };

  export class CheckCurrentUserFollowsError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<CheckCurrentUserFollowsError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type CheckUsersSavedAlbumsRequest = {
    ids: string;
  };

  export class CheckUsersSavedAlbumsError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<CheckUsersSavedAlbumsError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type CheckUsersSavedAudiobooksRequest = {
    ids: string;
  };

  export class CheckUsersSavedAudiobooksError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<CheckUsersSavedAudiobooksError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type CheckUsersSavedEpisodesRequest = {
    ids: string;
  };

  export class CheckUsersSavedEpisodesError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<CheckUsersSavedEpisodesError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type CheckUsersSavedShowsRequest = {
    ids: string;
  };

  export class CheckUsersSavedShowsError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<CheckUsersSavedShowsError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type CheckUsersSavedTracksRequest = {
    ids: string;
  };

  export class CheckUsersSavedTracksError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<CheckUsersSavedTracksError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type CreatePlaylistRequest = {
    userId: string;
    body?: UsersPlaylistsRequest;
  };

  export class CreatePlaylistError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreatePlaylistError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type FollowArtistsUsersRequest = {
    type: ItemType2;
    ids: string;
    body?: FollowArtistsOrUsersRequest;
  };

  export class FollowArtistsUsersError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<FollowArtistsUsersError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type GetAListOfCurrentUsersPlaylistsRequest = {
    /** @default 20 */
    limit?: number;
    /** @default 0 */
    offset?: number;
  };

  export class GetAListOfCurrentUsersPlaylistsError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAListOfCurrentUsersPlaylistsError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type GetFollowedRequest = {
    type: ItemType1;
    after?: string;
    /** @default 20 */
    limit?: number;
  };

  export class GetFollowedError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetFollowedError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type GetUsersSavedAlbumsRequest = {
    /** @default 20 */
    limit?: number;
    /** @default 0 */
    offset?: number;
    market?: string;
  };

  export class GetUsersSavedAlbumsError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetUsersSavedAlbumsError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type GetUsersSavedAudiobooksRequest = {
    /** @default 20 */
    limit?: number;
    /** @default 0 */
    offset?: number;
  };

  export class GetUsersSavedAudiobooksError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetUsersSavedAudiobooksError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type GetUsersSavedEpisodesRequest = {
    market?: string;
    /** @default 20 */
    limit?: number;
    /** @default 0 */
    offset?: number;
  };

  export class GetUsersSavedEpisodesError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetUsersSavedEpisodesError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type GetUsersSavedShowsRequest = {
    /** @default 20 */
    limit?: number;
    /** @default 0 */
    offset?: number;
  };

  export class GetUsersSavedShowsError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetUsersSavedShowsError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type GetUsersSavedTracksRequest = {
    market?: string;
    /** @default 20 */
    limit?: number;
    /** @default 0 */
    offset?: number;
  };

  export class GetUsersSavedTracksError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetUsersSavedTracksError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type GetUsersTopArtistsRequest = {
    /** @default "medium_term" */
    timeRange?: string;
    /** @default 20 */
    limit?: number;
    /** @default 0 */
    offset?: number;
  };

  export class GetUsersTopArtistsError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetUsersTopArtistsError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type GetUsersTopTracksRequest = {
    /** @default "medium_term" */
    timeRange?: string;
    /** @default 20 */
    limit?: number;
    /** @default 0 */
    offset?: number;
  };

  export class GetUsersTopTracksError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetUsersTopTracksError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type RemoveAlbumsUserRequest = {
    ids: string;
    body?: RemoveAlbumsRequest;
  };

  export class RemoveAlbumsUserError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<RemoveAlbumsUserError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type RemoveAudiobooksUserRequest = {
    ids: string;
  };

  export class RemoveAudiobooksUserError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<RemoveAudiobooksUserError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type RemoveEpisodesUserRequest = {
    ids: string;
    body?: RemoveEpisodesRequest;
  };

  export class RemoveEpisodesUserError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<RemoveEpisodesUserError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type RemoveShowsUserRequest = {
    ids: string;
    market?: string;
    body?: RemoveShowsRequest;
  };

  export class RemoveShowsUserError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<RemoveShowsUserError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type RemoveTracksUserRequest = {
    ids: string;
    body?: RemoveTracksRequest;
  };

  export class RemoveTracksUserError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<RemoveTracksUserError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type SaveAlbumsUserRequest = {
    ids: string;
    body?: SaveAlbumsRequest;
  };

  export class SaveAlbumsUserError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<SaveAlbumsUserError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type SaveAudiobooksUserRequest = {
    ids: string;
  };

  export class SaveAudiobooksUserError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<SaveAudiobooksUserError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type SaveEpisodesUserRequest = {
    ids: string;
    body?: SaveEpisodesRequest;
  };

  export class SaveEpisodesUserError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<SaveEpisodesUserError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type SaveShowsUserRequest = {
    ids: string;
    body?: SaveShowsRequest;
  };

  export class SaveShowsUserError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<SaveShowsUserError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type SaveTracksUserRequest = {
    ids: string;
    body?: SaveTracksRequest;
  };

  export class SaveTracksUserError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<SaveTracksUserError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type UnfollowArtistsUsersRequest = {
    type: ItemType3;
    ids: string;
    body?: UnfollowArtistsOrUsersRequest;
  };

  export class UnfollowArtistsUsersError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<UnfollowArtistsUsersError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }
}
