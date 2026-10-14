export { SpotifyWebApiClient } from "./client.js";
export type { ClientOptions } from "./client-options.js";

export {
  PkceMethod,
  type OAuth2AuthorizationCodeCredentials,
  type AuthorizationCodePrompt,
} from "./core/auth/credentials.js";
export type {
  OAuth2RefreshableTokenStrategy,
  OAuthToken,
  OAuth2CredentialPlacement,
  OAuthTokenRefreshable,
} from "./core/auth/oauth2-strategies.js";

export { Albums } from "./resources/albums.js";
export { Tracks } from "./resources/tracks.js";
export { Library } from "./resources/library.js";
export { Artists } from "./resources/artists.js";
export { Audiobooks } from "./resources/audiobooks.js";
export { Chapters } from "./resources/chapters.js";
export { CategoriesApi } from "./resources/categories-api.js";
export { Episodes } from "./resources/episodes.js";
export { Genres } from "./resources/genres.js";
export { MarketsApi } from "./resources/markets-api.js";
export { Player } from "./resources/player.js";
export { Playlists } from "./resources/playlists.js";
export { Users } from "./resources/users.js";
export { Search } from "./resources/search.js";
export { Shows } from "./resources/shows.js";

export { albumBaseSchema, type AlbumBase } from "./models/album-base.js";
export { AlbumGroup, albumGroupSchema } from "./models/album-group.js";
export { albumObjectSchema, type AlbumObject } from "./models/album-object.js";
export {
  albumRestrictionObjectSchema,
  type AlbumRestrictionObject,
} from "./models/album-restriction-object.js";
export { AlbumType, albumTypeSchema } from "./models/album-type.js";
export {
  artistDiscographyAlbumObjectSchema,
  type ArtistDiscographyAlbumObject,
} from "./models/artist-discography-album-object.js";
export { artistObjectSchema, type ArtistObject } from "./models/artist-object.js";
export { audioAnalysisObjectSchema, type AudioAnalysisObject } from "./models/audio-analysis-object.js";
export { audioFeaturesObjectSchema, type AudioFeaturesObject } from "./models/audio-features-object.js";
export { audiobookBaseSchema, type AudiobookBase } from "./models/audiobook-base.js";
export { audiobookObjectSchema, type AudiobookObject } from "./models/audiobook-object.js";
export { authorObjectSchema, type AuthorObject } from "./models/author-object.js";
export { badRequestSchema, type BadRequest } from "./models/bad-request.js";
export { badRequest1Schema, type BadRequest1 } from "./models/bad-request1.js";
export { categoriesSchema, type Categories } from "./models/categories.js";
export { categoryObjectSchema, type CategoryObject } from "./models/category-object.js";
export { chapterBaseSchema, type ChapterBase } from "./models/chapter-base.js";
export { chapterObjectSchema, type ChapterObject } from "./models/chapter-object.js";
export {
  chapterRestrictionObjectSchema,
  type ChapterRestrictionObject,
} from "./models/chapter-restriction-object.js";
export { contextObjectSchema, type ContextObject } from "./models/context-object.js";
export { copyrightObjectSchema, type CopyrightObject } from "./models/copyright-object.js";
export { currentlyPlayingSchema, type CurrentlyPlaying } from "./models/unions/currently-playing.js";
export {
  currentlyPlayingContextObjectSchema,
  type CurrentlyPlayingContextObject,
} from "./models/currently-playing-context-object.js";
export {
  currentlyPlayingObjectSchema,
  type CurrentlyPlayingObject,
} from "./models/currently-playing-object.js";
export { cursorObjectSchema, type CursorObject } from "./models/cursor-object.js";
export { cursorPagedArtistsSchema, type CursorPagedArtists } from "./models/cursor-paged-artists.js";
export { cursorPagingObjectSchema, type CursorPagingObject } from "./models/cursor-paging-object.js";
export {
  cursorPagingPlayHistoryObjectSchema,
  type CursorPagingPlayHistoryObject,
} from "./models/cursor-paging-play-history-object.js";
export {
  cursorPagingSimplifiedArtistObjectSchema,
  type CursorPagingSimplifiedArtistObject,
} from "./models/cursor-paging-simplified-artist-object.js";
export { deviceObjectSchema, type DeviceObject } from "./models/device-object.js";
export { disallowsObjectSchema, type DisallowsObject } from "./models/disallows-object.js";
export { episodeBaseSchema, type EpisodeBase } from "./models/episode-base.js";
export { episodeObjectSchema, type EpisodeObject } from "./models/episode-object.js";
export {
  episodeRestrictionObjectSchema,
  type EpisodeRestrictionObject,
} from "./models/episode-restriction-object.js";
export { errorObjectSchema, type ErrorObject } from "./models/error-object.js";
export {
  explicitContentSettingsObjectSchema,
  type ExplicitContentSettingsObject,
} from "./models/explicit-content-settings-object.js";
export { externalIdObjectSchema, type ExternalIdObject } from "./models/external-id-object.js";
export { externalUrlObjectSchema, type ExternalUrlObject } from "./models/external-url-object.js";
export {
  followArtistsOrUsersRequestSchema,
  type FollowArtistsOrUsersRequest,
} from "./models/follow-artists-or-users-request.js";
export { followersObjectSchema, type FollowersObject } from "./models/followers-object.js";
export { forbiddenSchema, type Forbidden } from "./models/forbidden.js";
export { forbidden1Schema, type Forbidden1 } from "./models/forbidden1.js";
export { imageObjectSchema, type ImageObject } from "./models/image-object.js";
export { IncludeExternal, includeExternalSchema } from "./models/include-external.js";
export { itemSchema, type Item } from "./models/unions/item.js";
export { ItemType1, itemType1Schema } from "./models/item-type1.js";
export { ItemType2, itemType2Schema } from "./models/item-type2.js";
export { ItemType3, itemType3Schema } from "./models/item-type3.js";
export { ItemType, itemTypeSchema } from "./models/item-type.js";
export { linkedTrackObjectSchema, type LinkedTrackObject } from "./models/linked-track-object.js";
export { manyAlbumsSchema, type ManyAlbums } from "./models/many-albums.js";
export { manyArtistsSchema, type ManyArtists } from "./models/many-artists.js";
export { manyAudioFeaturesSchema, type ManyAudioFeatures } from "./models/many-audio-features.js";
export { manyAudiobooksSchema, type ManyAudiobooks } from "./models/many-audiobooks.js";
export { manyChaptersSchema, type ManyChapters } from "./models/many-chapters.js";
export { manyDevicesSchema, type ManyDevices } from "./models/many-devices.js";
export { manyEpisodesSchema, type ManyEpisodes } from "./models/many-episodes.js";
export { manyGenresSchema, type ManyGenres } from "./models/many-genres.js";
export { manySimplifiedShowsSchema, type ManySimplifiedShows } from "./models/many-simplified-shows.js";
export { manyTracksSchema, type ManyTracks } from "./models/many-tracks.js";
export { marketsSchema, type Markets } from "./models/markets.js";
export { mePlayerRequestSchema, type MePlayerRequest } from "./models/me-player-request.js";
export { metaSchema, type Meta } from "./models/meta.js";
export { Mode, modeSchema } from "./models/mode.js";
export { narratorObjectSchema, type NarratorObject } from "./models/narrator-object.js";
export { notFoundSchema, type NotFound } from "./models/not-found.js";
export { notFound1Schema, type NotFound1 } from "./models/not-found1.js";
export { pagedAlbumsSchema, type PagedAlbums } from "./models/paged-albums.js";
export { pagedCategoriesSchema, type PagedCategories } from "./models/paged-categories.js";
export {
  pagingArtistDiscographyAlbumObjectSchema,
  type PagingArtistDiscographyAlbumObject,
} from "./models/paging-artist-discography-album-object.js";
export { pagingArtistObjectSchema, type PagingArtistObject } from "./models/paging-artist-object.js";
export {
  pagingFeaturedPlaylistObjectSchema,
  type PagingFeaturedPlaylistObject,
} from "./models/paging-featured-playlist-object.js";
export { pagingObjectSchema, type PagingObject } from "./models/paging-object.js";
export { pagingPlaylistObjectSchema, type PagingPlaylistObject } from "./models/paging-playlist-object.js";
export {
  pagingPlaylistTrackObjectSchema,
  type PagingPlaylistTrackObject,
} from "./models/paging-playlist-track-object.js";
export {
  pagingSavedAlbumObjectSchema,
  type PagingSavedAlbumObject,
} from "./models/paging-saved-album-object.js";
export {
  pagingSavedAudiobookObjectSchema,
  type PagingSavedAudiobookObject,
} from "./models/paging-saved-audiobook-object.js";
export {
  pagingSavedEpisodeObjectSchema,
  type PagingSavedEpisodeObject,
} from "./models/paging-saved-episode-object.js";
export {
  pagingSavedShowObjectSchema,
  type PagingSavedShowObject,
} from "./models/paging-saved-show-object.js";
export {
  pagingSavedTrackObjectSchema,
  type PagingSavedTrackObject,
} from "./models/paging-saved-track-object.js";
export {
  pagingSimplifiedAlbumObjectSchema,
  type PagingSimplifiedAlbumObject,
} from "./models/paging-simplified-album-object.js";
export {
  pagingSimplifiedAudiobookObjectSchema,
  type PagingSimplifiedAudiobookObject,
} from "./models/paging-simplified-audiobook-object.js";
export {
  pagingSimplifiedChapterObjectSchema,
  type PagingSimplifiedChapterObject,
} from "./models/paging-simplified-chapter-object.js";
export {
  pagingSimplifiedEpisodeObjectSchema,
  type PagingSimplifiedEpisodeObject,
} from "./models/paging-simplified-episode-object.js";
export {
  pagingSimplifiedShowObjectSchema,
  type PagingSimplifiedShowObject,
} from "./models/paging-simplified-show-object.js";
export {
  pagingSimplifiedTrackObjectSchema,
  type PagingSimplifiedTrackObject,
} from "./models/paging-simplified-track-object.js";
export { pagingTrackObjectSchema, type PagingTrackObject } from "./models/paging-track-object.js";
export { playHistoryObjectSchema, type PlayHistoryObject } from "./models/play-history-object.js";
export { playlistObjectSchema, type PlaylistObject } from "./models/playlist-object.js";
export { playlistOwnerObjectSchema, type PlaylistOwnerObject } from "./models/playlist-owner-object.js";
export { playlistSnapshotIdSchema, type PlaylistSnapshotId } from "./models/playlist-snapshot-id.js";
export { playlistTrackObjectSchema, type PlaylistTrackObject } from "./models/playlist-track-object.js";
export {
  playlistTracksRefObjectSchema,
  type PlaylistTracksRefObject,
} from "./models/playlist-tracks-ref-object.js";
export { playlistUserObjectSchema, type PlaylistUserObject } from "./models/playlist-user-object.js";
export {
  playlistsFollowersRequestSchema,
  type PlaylistsFollowersRequest,
} from "./models/playlists-followers-request.js";
export { playlistsRequestSchema, type PlaylistsRequest } from "./models/playlists-request.js";
export {
  playlistsTracksRequestSchema,
  type PlaylistsTracksRequest,
} from "./models/playlists-tracks-request.js";
export {
  playlistsTracksRequest1Schema,
  type PlaylistsTracksRequest1,
} from "./models/playlists-tracks-request1.js";
export {
  playlistsTracksRequest2Schema,
  type PlaylistsTracksRequest2,
} from "./models/playlists-tracks-request2.js";
export { privateUserObjectSchema, type PrivateUserObject } from "./models/private-user-object.js";
export { publicUserObjectSchema, type PublicUserObject } from "./models/public-user-object.js";
export { queueSchema, type Queue } from "./models/unions/queue.js";
export { queueObjectSchema, type QueueObject } from "./models/queue-object.js";
export { Reason, reasonSchema } from "./models/reason.js";
export {
  recommendationSeedObjectSchema,
  type RecommendationSeedObject,
} from "./models/recommendation-seed-object.js";
export { recommendationsObjectSchema, type RecommendationsObject } from "./models/recommendations-object.js";
export { ReleaseDatePrecision, releaseDatePrecisionSchema } from "./models/release-date-precision.js";
export { removeAlbumsRequestSchema, type RemoveAlbumsRequest } from "./models/remove-albums-request.js";
export { removeEpisodesRequestSchema, type RemoveEpisodesRequest } from "./models/remove-episodes-request.js";
export { removeShowsRequestSchema, type RemoveShowsRequest } from "./models/remove-shows-request.js";
export { removeTracksRequestSchema, type RemoveTracksRequest } from "./models/remove-tracks-request.js";
export { resumePointObjectSchema, type ResumePointObject } from "./models/resume-point-object.js";
export { saveAlbumsRequestSchema, type SaveAlbumsRequest } from "./models/save-albums-request.js";
export { saveEpisodesRequestSchema, type SaveEpisodesRequest } from "./models/save-episodes-request.js";
export { saveShowsRequestSchema, type SaveShowsRequest } from "./models/save-shows-request.js";
export { saveTracksRequestSchema, type SaveTracksRequest } from "./models/save-tracks-request.js";
export { savedAlbumObjectSchema, type SavedAlbumObject } from "./models/saved-album-object.js";
export { savedAudiobookObjectSchema, type SavedAudiobookObject } from "./models/saved-audiobook-object.js";
export { savedEpisodeObjectSchema, type SavedEpisodeObject } from "./models/saved-episode-object.js";
export { savedShowObjectSchema, type SavedShowObject } from "./models/saved-show-object.js";
export { savedTrackObjectSchema, type SavedTrackObject } from "./models/saved-track-object.js";
export { searchItemsSchema, type SearchItems } from "./models/search-items.js";
export { sectionObjectSchema, type SectionObject } from "./models/section-object.js";
export { segmentObjectSchema, type SegmentObject } from "./models/segment-object.js";
export { showBaseSchema, type ShowBase } from "./models/show-base.js";
export { showObjectSchema, type ShowObject } from "./models/show-object.js";
export { simplifiedAlbumObjectSchema, type SimplifiedAlbumObject } from "./models/simplified-album-object.js";
export {
  simplifiedArtistObjectSchema,
  type SimplifiedArtistObject,
} from "./models/simplified-artist-object.js";
export {
  simplifiedPlaylistObjectSchema,
  type SimplifiedPlaylistObject,
} from "./models/simplified-playlist-object.js";
export { simplifiedTrackObjectSchema, type SimplifiedTrackObject } from "./models/simplified-track-object.js";
export {
  startOrResumePlaybackRequestSchema,
  type StartOrResumePlaybackRequest,
} from "./models/start-or-resume-playback-request.js";
export { timeIntervalObjectSchema, type TimeIntervalObject } from "./models/time-interval-object.js";
export { tooManyRequestsSchema, type TooManyRequests } from "./models/too-many-requests.js";
export { tooManyRequests1Schema, type TooManyRequests1 } from "./models/too-many-requests1.js";
export { trackSchema, type Track } from "./models/track.js";
export { track1Schema, type Track1 } from "./models/track1.js";
export { track2Schema, type Track2 } from "./models/unions/track2.js";
export { trackObjectSchema, type TrackObject } from "./models/track-object.js";
export {
  trackRestrictionObjectSchema,
  type TrackRestrictionObject,
} from "./models/track-restriction-object.js";
export { Type, typeSchema } from "./models/type.js";
export { Type2, type2Schema } from "./models/type2.js";
export { Type3, type3Schema } from "./models/type3.js";
export { Type4, type4Schema } from "./models/type4.js";
export { Type5, type5Schema } from "./models/type5.js";
export { Type6, type6Schema } from "./models/type6.js";
export { Type8, type8Schema } from "./models/type8.js";
export { Type9, type9Schema } from "./models/type9.js";
export { unauthorizedSchema, type Unauthorized } from "./models/unauthorized.js";
export { unauthorized1Schema, type Unauthorized1 } from "./models/unauthorized1.js";
export {
  unfollowArtistsOrUsersRequestSchema,
  type UnfollowArtistsOrUsersRequest,
} from "./models/unfollow-artists-or-users-request.js";
export { usersPlaylistsRequestSchema, type UsersPlaylistsRequest } from "./models/users-playlists-request.js";

export {
  CoreError as SpotifyWebApiError,
  ResponseError,
  DecodeError,
  EncodeError,
  ConnectionError,
  TimeoutError,
  AuthError,
  ConfigurationError,
} from "./core/errors.js";
export { ApiError } from "./core/api-error.js";
export { SchemaError } from "./core/validation/schema-error.js";
export {
  defaultLoggingOptions,
  type LoggingOptions,
  type RequestLoggingOptions,
  type Logger,
  type LogDetails,
  type HttpRequestDetails,
  type RequestHeadersDetails,
  type RequestBodyDetails,
  type HttpResponseDetails,
  type ResponseHeadersDetails,
  type HttpRetryingDetails,
  type HttpFailedDetails,
  type LogLevel,
} from "./core/logging.js";
export type { ApiPromise, ApiResult } from "./core/api-promise.js";
export type { HttpMethod, RequestOptions } from "./core/api-request.js";
export type { RetryOptions, RequestRetryOptions, RetryAttempt, RetryReason } from "./core/retry.js";
export type { BinaryContent, BinaryData, BinaryErrorContent, FileData, FileInput } from "./core/binary.js";
export type { ErrorKind } from "./core/errors.js";
export type { Declared, Undeclared } from "./core/api-error.js";
export type { Schema, EnumSchema, Encoded } from "./core/validation/schema.js";
