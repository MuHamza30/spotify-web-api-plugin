using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using SpotifyWebApi.Core.Hooks;

namespace SpotifyWebApi.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
