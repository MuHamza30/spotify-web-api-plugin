import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { Albums } from "./resources/albums.js";
import { Artists } from "./resources/artists.js";
import { Audiobooks } from "./resources/audiobooks.js";
import { CategoriesApi } from "./resources/categories-api.js";
import { Chapters } from "./resources/chapters.js";
import { Episodes } from "./resources/episodes.js";
import { Genres } from "./resources/genres.js";
import { Library } from "./resources/library.js";
import { MarketsApi } from "./resources/markets-api.js";
import { Player } from "./resources/player.js";
import { Playlists } from "./resources/playlists.js";
import { Search } from "./resources/search.js";
import { Shows } from "./resources/shows.js";
import { Tracks } from "./resources/tracks.js";
import { Users } from "./resources/users.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * You can use Spotify's Web API to discover music and podcasts, manage your Spotify library,
 * control audio playback, and much more. Browse our available Web API endpoints using the sidebar
 * at left, or via the navigation bar on top of this page on smaller screens.
 *
 * In order to make successful Web API requests your app will need a valid access token. One can be
 * obtained through <a
 * href="https://developer.spotify.com/documentation/general/guides/authorization-guide/">OAuth
 * 2.0</a>.
 *
 * The base URI for all Web API requests is `https://api.spotify.com/v1`.
 *
 * Need help? See our <a href="https://developer.spotify.com/documentation/web-api/">Web API</a> for
 * more information, or visit the <a
 * href="https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer">Spotify for
 * Developers community forum</a> to ask questions and connect with other developers.
 */
export class SpotifyWebApiClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #albums?: Albums;
  #tracks?: Tracks;
  #library?: Library;
  #artists?: Artists;
  #audiobooks?: Audiobooks;
  #chapters?: Chapters;
  #categoriesApi?: CategoriesApi;
  #episodes?: Episodes;
  #genres?: Genres;
  #marketsApi?: MarketsApi;
  #player?: Player;
  #playlists?: Playlists;
  #users?: Users;
  #search?: Search;
  #shows?: Shows;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "SPOTIFY_WEB_API_CLIENT_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "SpotifyWebApiClient/2024.3.3 TypeScript", schema: s.string() },
        { name: "X-APIMatic-Lang", value: "TypeScript", schema: s.string() },
        { name: "X-APIMatic-Package-Version", value: "2024.3.3", schema: s.string() },
        { name: "X-APIMatic-Gen-Version", value: "4.0.0", schema: s.string() },
        { name: "X-APIMatic-OS", value: host.operatingSystem(), schema: s.optional(s.string()) },
        { name: "X-APIMatic-Runtime", value: host.runtimeDescription(), schema: s.optional(s.string()) },
      ],
      defaultQuery: [],
      defaultPathParams: [],
    });

    this.#servers = buildServers(options);

    this.#auth = buildAuthSchemes(options, this.#servers, this.#rawClient);
  }

  get albums(): Albums {
    return (this.#albums ??= new Albums(this.#rawClient, this.#servers, this.#auth));
  }

  get tracks(): Tracks {
    return (this.#tracks ??= new Tracks(this.#rawClient, this.#servers, this.#auth));
  }

  get library(): Library {
    return (this.#library ??= new Library(this.#rawClient, this.#servers, this.#auth));
  }

  get artists(): Artists {
    return (this.#artists ??= new Artists(this.#rawClient, this.#servers, this.#auth));
  }

  get audiobooks(): Audiobooks {
    return (this.#audiobooks ??= new Audiobooks(this.#rawClient, this.#servers, this.#auth));
  }

  get chapters(): Chapters {
    return (this.#chapters ??= new Chapters(this.#rawClient, this.#servers, this.#auth));
  }

  get categoriesApi(): CategoriesApi {
    return (this.#categoriesApi ??= new CategoriesApi(this.#rawClient, this.#servers, this.#auth));
  }

  get episodes(): Episodes {
    return (this.#episodes ??= new Episodes(this.#rawClient, this.#servers, this.#auth));
  }

  get genres(): Genres {
    return (this.#genres ??= new Genres(this.#rawClient, this.#servers, this.#auth));
  }

  get marketsApi(): MarketsApi {
    return (this.#marketsApi ??= new MarketsApi(this.#rawClient, this.#servers, this.#auth));
  }

  get player(): Player {
    return (this.#player ??= new Player(this.#rawClient, this.#servers, this.#auth));
  }

  get playlists(): Playlists {
    return (this.#playlists ??= new Playlists(this.#rawClient, this.#servers, this.#auth));
  }

  get users(): Users {
    return (this.#users ??= new Users(this.#rawClient, this.#servers, this.#auth));
  }

  get search(): Search {
    return (this.#search ??= new Search(this.#rawClient, this.#servers, this.#auth));
  }

  get shows(): Shows {
    return (this.#shows ??= new Shows(this.#rawClient, this.#servers, this.#auth));
  }
}
