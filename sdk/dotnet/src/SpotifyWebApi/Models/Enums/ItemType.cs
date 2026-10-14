using System;
using System.Text.Json.Serialization;
using SpotifyWebApi.Core.Enum;

namespace SpotifyWebApi.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ItemType>))]
public sealed record ItemType : OpenStringEnum<ItemType>
{
    private ItemType(string value) : base(value)
    {
    }

    public static readonly ItemType Album = new("album");

    public static readonly ItemType Artist = new("artist");

    public static readonly ItemType Playlist = new("playlist");

    public static readonly ItemType Track = new("track");

    public static readonly ItemType Show = new("show");

    public static readonly ItemType Episode = new("episode");

    public static readonly ItemType Audiobook = new("audiobook");

    public TResult Match<TResult>(Func<TResult> onAlbum,
        Func<TResult> onArtist,
        Func<TResult> onPlaylist,
        Func<TResult> onTrack,
        Func<TResult> onShow,
        Func<TResult> onEpisode,
        Func<TResult> onAudiobook,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Album => onAlbum(),
            _ when this == Artist => onArtist(),
            _ when this == Playlist => onPlaylist(),
            _ when this == Track => onTrack(),
            _ when this == Show => onShow(),
            _ when this == Episode => onEpisode(),
            _ when this == Audiobook => onAudiobook(),
            _ => otherwise(Value)
        };

    public void Match(Action onAlbum,
        Action onArtist,
        Action onPlaylist,
        Action onTrack,
        Action onShow,
        Action onEpisode,
        Action onAudiobook,
        Action<string> otherwise)
    {
        if (this == Album) onAlbum();
        else if (this == Artist) onArtist();
        else if (this == Playlist) onPlaylist();
        else if (this == Track) onTrack();
        else if (this == Show) onShow();
        else if (this == Episode) onEpisode();
        else if (this == Audiobook) onAudiobook();
        else otherwise(Value);
    }
}
