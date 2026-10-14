import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { forbidden1Schema, type Forbidden1 } from "../models/forbidden1.js";
import { imageObjectSchema, type ImageObject } from "../models/image-object.js";
import {
  pagingFeaturedPlaylistObjectSchema,
  type PagingFeaturedPlaylistObject,
} from "../models/paging-featured-playlist-object.js";
import { pagingPlaylistObjectSchema, type PagingPlaylistObject } from "../models/paging-playlist-object.js";
import {
  pagingPlaylistTrackObjectSchema,
  type PagingPlaylistTrackObject,
} from "../models/paging-playlist-track-object.js";
import { playlistObjectSchema, type PlaylistObject } from "../models/playlist-object.js";
import { playlistSnapshotIdSchema, type PlaylistSnapshotId } from "../models/playlist-snapshot-id.js";
import {
  playlistsFollowersRequestSchema,
  type PlaylistsFollowersRequest,
} from "../models/playlists-followers-request.js";
import { playlistsRequestSchema, type PlaylistsRequest } from "../models/playlists-request.js";
import {
  playlistsTracksRequestSchema,
  type PlaylistsTracksRequest,
} from "../models/playlists-tracks-request.js";
import {
  playlistsTracksRequest1Schema,
  type PlaylistsTracksRequest1,
} from "../models/playlists-tracks-request1.js";
import {
  playlistsTracksRequest2Schema,
  type PlaylistsTracksRequest2,
} from "../models/playlists-tracks-request2.js";
import { tooManyRequests1Schema, type TooManyRequests1 } from "../models/too-many-requests1.js";
import { unauthorized1Schema, type Unauthorized1 } from "../models/unauthorized1.js";
import {
  usersPlaylistsRequestSchema,
  type UsersPlaylistsRequest,
} from "../models/users-playlists-request.js";
import type { Servers } from "../servers.js";

export class Playlists {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Add Items to Playlist
   *
   * @remarks
   * Add one or more items to a user's playlist.
   *
   * @returns A snapshot ID for the playlist
   *
   * @throws {@link Playlists.AddTracksToPlaylistError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addTracksToPlaylist(
    request: Playlists.AddTracksToPlaylistRequest,
    options?: RequestOptions,
  ): ApiPromise<PlaylistSnapshotId, Playlists.AddTracksToPlaylistError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/playlists/{playlist_id}/tracks"),
        auth: this.#auth.oauth20,
        pathParams: [{ name: "playlist_id", value: request.playlistId, schema: s.string() }],
        query: [
          { name: "position", value: request.position, schema: s.optional(s.int()) },
          { name: "uris", value: request.uris, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => playlistsTracksRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: playlistSnapshotIdSchema },
        errorFactory: Playlists.AddTracksToPlaylistError,
      },
      options,
    );
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
   * @throws {@link Playlists.ChangePlaylistDetailsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  changePlaylistDetails(
    request: Playlists.ChangePlaylistDetailsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Playlists.ChangePlaylistDetailsError> {
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
        errorFactory: Playlists.ChangePlaylistDetailsError,
      },
      options,
    );
  }

  /**
   * Check if Users Follow Playlist
   *
   * @remarks
   * Check to see if one or more Spotify users are following a specified playlist.
   *
   * @returns Array of booleans
   *
   * @throws {@link Playlists.CheckIfUserFollowsPlaylistError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  checkIfUserFollowsPlaylist(
    request: Playlists.CheckIfUserFollowsPlaylistRequest,
    options?: RequestOptions,
  ): ApiPromise<boolean[], Playlists.CheckIfUserFollowsPlaylistError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/playlists/{playlist_id}/followers/contains"),
        auth: this.#auth.oauth20,
        pathParams: [{ name: "playlist_id", value: request.playlistId, schema: s.string() }],
        query: [{ name: "ids", value: request.ids, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.boolean()) },
        errorFactory: Playlists.CheckIfUserFollowsPlaylistError,
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
   * @throws {@link Playlists.CreatePlaylistError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createPlaylist(
    request: Playlists.CreatePlaylistRequest,
    options?: RequestOptions,
  ): ApiPromise<PlaylistObject, Playlists.CreatePlaylistError> {
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
        errorFactory: Playlists.CreatePlaylistError,
      },
      options,
    );
  }

  /**
   * Follow Playlist
   *
   * @remarks
   * Add the current user as a follower of a playlist.
   *
   * @returns Playlist followed
   *
   * @throws {@link Playlists.FollowPlaylistError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  followPlaylist(
    request: Playlists.FollowPlaylistRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Playlists.FollowPlaylistError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/playlists/{playlist_id}/followers"),
        auth: this.#auth.oauth20,
        pathParams: [{ name: "playlist_id", value: request.playlistId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => playlistsFollowersRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: Playlists.FollowPlaylistError,
      },
      options,
    );
  }

  /**
   * Get Category's Playlists
   *
   * @remarks
   * Get a list of Spotify playlists tagged with a particular category.
   *
   * @returns A paged set of playlists
   *
   * @throws {@link Playlists.GetACategoriesPlaylistsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getACategoriesPlaylists(
    request: Playlists.GetACategoriesPlaylistsRequest,
    options?: RequestOptions,
  ): ApiPromise<PagingFeaturedPlaylistObject, Playlists.GetACategoriesPlaylistsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/browse/categories/{category_id}/playlists"),
        auth: this.#auth.oauth20,
        pathParams: [{ name: "category_id", value: request.categoryId, schema: s.string() }],
        query: [
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 20) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.int(), 0) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pagingFeaturedPlaylistObjectSchema },
        errorFactory: Playlists.GetACategoriesPlaylistsError,
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
   * @throws {@link Playlists.GetAListOfCurrentUsersPlaylistsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAListOfCurrentUsersPlaylists(
    request: Playlists.GetAListOfCurrentUsersPlaylistsRequest,
    options?: RequestOptions,
  ): ApiPromise<PagingPlaylistObject, Playlists.GetAListOfCurrentUsersPlaylistsError> {
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
        errorFactory: Playlists.GetAListOfCurrentUsersPlaylistsError,
      },
      options,
    );
  }

  /**
   * Get Featured Playlists
   *
   * @remarks
   * Get a list of Spotify featured playlists (shown, for example, on a Spotify player's 'Browse'
   * tab).
   *
   * @returns A paged set of playlists
   *
   * @throws {@link Playlists.GetFeaturedPlaylistsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getFeaturedPlaylists(
    request: Playlists.GetFeaturedPlaylistsRequest,
    options?: RequestOptions,
  ): ApiPromise<PagingFeaturedPlaylistObject, Playlists.GetFeaturedPlaylistsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/browse/featured-playlists"),
        auth: this.#auth.oauth20,
        pathParams: [],
        query: [
          { name: "locale", value: request.locale, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 20) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.int(), 0) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pagingFeaturedPlaylistObjectSchema },
        errorFactory: Playlists.GetFeaturedPlaylistsError,
      },
      options,
    );
  }

  /**
   * Get User's Playlists
   *
   * @remarks
   * Get a list of the playlists owned or followed by a Spotify user.
   *
   * @returns A paged set of playlists
   *
   * @throws {@link Playlists.GetListUsersPlaylistsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getListUsersPlaylists(
    request: Playlists.GetListUsersPlaylistsRequest,
    options?: RequestOptions,
  ): ApiPromise<PagingPlaylistObject, Playlists.GetListUsersPlaylistsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/users/{user_id}/playlists"),
        auth: this.#auth.oauth20,
        pathParams: [{ name: "user_id", value: request.userId, schema: s.string() }],
        query: [
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 20) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.int(), 0) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pagingPlaylistObjectSchema },
        errorFactory: Playlists.GetListUsersPlaylistsError,
      },
      options,
    );
  }

  /**
   * Get Playlist
   *
   * @remarks
   * Get a playlist owned by a Spotify user.
   *
   * @returns A playlist
   *
   * @throws {@link Playlists.GetPlaylistError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPlaylist(
    request: Playlists.GetPlaylistRequest,
    options?: RequestOptions,
  ): ApiPromise<PlaylistObject, Playlists.GetPlaylistError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/playlists/{playlist_id}"),
        auth: this.#auth.oauth20,
        pathParams: [{ name: "playlist_id", value: request.playlistId, schema: s.string() }],
        query: [
          { name: "market", value: request.market, schema: s.optional(s.string()) },
          { name: "fields", value: request.fields, schema: s.optional(s.string()) },
          { name: "additional_types", value: request.additionalTypes, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: playlistObjectSchema },
        errorFactory: Playlists.GetPlaylistError,
      },
      options,
    );
  }

  /**
   * Get Playlist Cover Image
   *
   * @remarks
   * Get the current image associated with a specific playlist.
   *
   * @returns A set of images
   *
   * @throws {@link Playlists.GetPlaylistCoverError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPlaylistCover(
    request: Playlists.GetPlaylistCoverRequest,
    options?: RequestOptions,
  ): ApiPromise<ImageObject[], Playlists.GetPlaylistCoverError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/playlists/{playlist_id}/images"),
        auth: this.#auth.oauth20,
        pathParams: [{ name: "playlist_id", value: request.playlistId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => imageObjectSchema)) },
        errorFactory: Playlists.GetPlaylistCoverError,
      },
      options,
    );
  }

  /**
   * Get Playlist Items
   *
   * @remarks
   * Get full details of the items of a playlist owned by a Spotify user.
   *
   * @returns Pages of tracks
   *
   * @throws {@link Playlists.GetPlaylistsTracksError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPlaylistsTracks(
    request: Playlists.GetPlaylistsTracksRequest,
    options?: RequestOptions,
  ): ApiPromise<PagingPlaylistTrackObject, Playlists.GetPlaylistsTracksError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/playlists/{playlist_id}/tracks"),
        auth: this.#auth.oauth20,
        pathParams: [{ name: "playlist_id", value: request.playlistId, schema: s.string() }],
        query: [
          { name: "market", value: request.market, schema: s.optional(s.string()) },
          { name: "fields", value: request.fields, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 20) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.int(), 0) },
          { name: "additional_types", value: request.additionalTypes, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pagingPlaylistTrackObjectSchema },
        errorFactory: Playlists.GetPlaylistsTracksError,
      },
      options,
    );
  }

  /**
   * Remove Playlist Items
   *
   * @remarks
   * Remove one or more items from a user's playlist.
   *
   * @returns A snapshot ID for the playlist
   *
   * @throws {@link Playlists.RemoveTracksPlaylistError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  removeTracksPlaylist(
    request: Playlists.RemoveTracksPlaylistRequest,
    options?: RequestOptions,
  ): ApiPromise<PlaylistSnapshotId, Playlists.RemoveTracksPlaylistError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/playlists/{playlist_id}/tracks"),
        auth: this.#auth.oauth20,
        pathParams: [{ name: "playlist_id", value: request.playlistId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => playlistsTracksRequest2Schema)),
        },
      },
      {
        success: { kind: "json", schema: playlistSnapshotIdSchema },
        errorFactory: Playlists.RemoveTracksPlaylistError,
      },
      options,
    );
  }

  /**
   * Update Playlist Items
   *
   * @remarks
   * Either reorder or replace items in a playlist depending on the request's parameters. To reorder
   * items, include `range_start`, `insert_before`, `range_length` and `snapshot_id` in the
   * request's body. To replace items, include `uris` as either a query parameter or in the
   * request's body. Replacing items in a playlist will overwrite its existing items. This operation
   * can be used for replacing or clearing items in a playlist. <br/> **Note**: Replace and reorder
   * are mutually exclusive operations which share the same endpoint, but have different parameters.
   * These operations can't be applied together in a single request.
   *
   * @returns A snapshot ID for the playlist
   *
   * @throws {@link Playlists.ReorderOrReplacePlaylistsTracksError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  reorderOrReplacePlaylistsTracks(
    request: Playlists.ReorderOrReplacePlaylistsTracksRequest,
    options?: RequestOptions,
  ): ApiPromise<PlaylistSnapshotId, Playlists.ReorderOrReplacePlaylistsTracksError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/playlists/{playlist_id}/tracks"),
        auth: this.#auth.oauth20,
        pathParams: [{ name: "playlist_id", value: request.playlistId, schema: s.string() }],
        query: [{ name: "uris", value: request.uris, schema: s.optional(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => playlistsTracksRequest1Schema)),
        },
      },
      {
        success: { kind: "json", schema: playlistSnapshotIdSchema },
        errorFactory: Playlists.ReorderOrReplacePlaylistsTracksError,
      },
      options,
    );
  }

  /**
   * Unfollow Playlist
   *
   * @remarks
   * Remove the current user as a follower of a playlist.
   *
   * @returns Playlist unfollowed
   *
   * @throws {@link Playlists.UnfollowPlaylistError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  unfollowPlaylist(
    request: Playlists.UnfollowPlaylistRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Playlists.UnfollowPlaylistError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/playlists/{playlist_id}/followers"),
        auth: this.#auth.oauth20,
        pathParams: [{ name: "playlist_id", value: request.playlistId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Playlists.UnfollowPlaylistError,
      },
      options,
    );
  }

  /**
   * Add Custom Playlist Cover Image
   *
   * @remarks
   * Replace the image used to represent a specific playlist.
   *
   * @returns Image uploaded
   *
   * @throws {@link Playlists.UploadCustomPlaylistCoverError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SpotifyWebApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  uploadCustomPlaylistCover(
    request: Playlists.UploadCustomPlaylistCoverRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Playlists.UploadCustomPlaylistCoverError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/playlists/{playlist_id}/images"),
        auth: this.#auth.oauth20,
        pathParams: [{ name: "playlist_id", value: request.playlistId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.record(s.string(), s.unknown()) },
      },
      {
        success: { kind: "empty" },
        errorFactory: Playlists.UploadCustomPlaylistCoverError,
      },
      options,
    );
  }
}

export namespace Playlists {
  export type AddTracksToPlaylistRequest = {
    playlistId: string;
    position?: number;
    uris?: string;
    body?: PlaylistsTracksRequest;
  };

  export class AddTracksToPlaylistError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<AddTracksToPlaylistError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

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

  export type CheckIfUserFollowsPlaylistRequest = {
    playlistId: string;
    ids: string;
  };

  export class CheckIfUserFollowsPlaylistError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<CheckIfUserFollowsPlaylistError> = [
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

  export type FollowPlaylistRequest = {
    playlistId: string;
    body?: PlaylistsFollowersRequest;
  };

  export class FollowPlaylistError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<FollowPlaylistError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type GetACategoriesPlaylistsRequest = {
    categoryId: string;
    /** @default 20 */
    limit?: number;
    /** @default 0 */
    offset?: number;
  };

  export class GetACategoriesPlaylistsError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetACategoriesPlaylistsError> = [
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

  export type GetFeaturedPlaylistsRequest = {
    locale?: string;
    /** @default 20 */
    limit?: number;
    /** @default 0 */
    offset?: number;
  };

  export class GetFeaturedPlaylistsError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetFeaturedPlaylistsError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type GetListUsersPlaylistsRequest = {
    userId: string;
    /** @default 20 */
    limit?: number;
    /** @default 0 */
    offset?: number;
  };

  export class GetListUsersPlaylistsError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetListUsersPlaylistsError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type GetPlaylistRequest = {
    playlistId: string;
    market?: string;
    fields?: string;
    additionalTypes?: string;
  };

  export class GetPlaylistError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetPlaylistError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type GetPlaylistCoverRequest = {
    playlistId: string;
  };

  export class GetPlaylistCoverError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetPlaylistCoverError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type GetPlaylistsTracksRequest = {
    playlistId: string;
    market?: string;
    fields?: string;
    /** @default 20 */
    limit?: number;
    /** @default 0 */
    offset?: number;
    additionalTypes?: string;
  };

  export class GetPlaylistsTracksError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetPlaylistsTracksError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type RemoveTracksPlaylistRequest = {
    playlistId: string;
    body?: PlaylistsTracksRequest2;
  };

  export class RemoveTracksPlaylistError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<RemoveTracksPlaylistError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type ReorderOrReplacePlaylistsTracksRequest = {
    playlistId: string;
    uris?: string;
    body?: PlaylistsTracksRequest1;
  };

  export class ReorderOrReplacePlaylistsTracksError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<ReorderOrReplacePlaylistsTracksError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type UnfollowPlaylistRequest = {
    playlistId: string;
  };

  export class UnfollowPlaylistError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<UnfollowPlaylistError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }

  export type UploadCustomPlaylistCoverRequest = {
    playlistId: string;
    body: Record<string, unknown>;
  };

  export class UploadCustomPlaylistCoverError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Undeclared;

    static readonly errors: ErrorDecoders<UploadCustomPlaylistCoverError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
    ];
  }
}
