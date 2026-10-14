using System.Text.Json.Serialization;
using SpotifyWebApi.Core.Models;

namespace SpotifyWebApi.Models;

public record Meta
{
    /// <summary>
    /// The version of the Analyzer used to analyze this track.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("analyzer_version")]
    public string? AnalyzerVersion { get; init; }

    /// <summary>
    /// The platform used to read the track's audio data.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("platform")]
    public string? Platform { get; init; }

    /// <summary>
    /// A detailed status code for this track. If analysis data is missing, this code may explain why.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("detailed_status")]
    public string? DetailedStatus { get; init; }

    /// <summary>
    /// The return code of the analyzer process. 0 if successful, 1 if any errors occurred.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status_code")]
    public int? StatusCode { get; init; }

    /// <summary>
    /// The Unix timestamp (in seconds) at which this track was analyzed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("timestamp")]
    public long? Timestamp { get; init; }

    /// <summary>
    /// The amount of time taken to analyze this track.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("analysis_time")]
    public double? AnalysisTime { get; init; }

    /// <summary>
    /// The method used to read the track's audio data.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("input_process")]
    public string? InputProcess { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
