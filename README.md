# Spotify Web API SDK Plugin

A plugin whose skills teach a coding agent to install and use the APIMatic-generated **Spotify Web API SDK**, in C#/.NET, Python and TypeScript. Every SDK fact the skills state is grounded in the SDK's own source and generated documentation, not in what a model remembers about this API.

This repo is a working copy for R&D on the plugin's delivery: subagent support and the fallback when a host has no subagents. The skills are the published `spotify` plugin 0.1.1 from [context-plugins/plugin-marketplace](https://github.com/context-plugins/plugin-marketplace/tree/main/plugins/spotify) at commit `d09ec8bd`, unchanged. Only the manifests are new.

## What's inside

One skill set per language. The entry point is that language's integrate skill, which runs the plan-first workflow; the getting-started skill carries what is specific to this SDK, and the rest are API-agnostic and describe how to use any SDK the same generator produces.

| Language | Skill prefix | Skills |
| --- | --- | --- |
| C#/.NET | `dotnet-` | `dotnet-authentication`, `dotnet-calling-endpoints`, `dotnet-client-initialization`, `dotnet-configuration-resilience`, `dotnet-error-handling`, `dotnet-getting-started`, `dotnet-integrate-spotify-web-api`, `dotnet-models`, `dotnet-testing` |
| Python | `python-` | `python-authentication`, `python-calling-endpoints`, `python-client-initialization`, `python-configuration-resilience`, `python-error-handling`, `python-getting-started`, `python-integrate-spotify-web-api`, `python-models`, `python-testing` |
| TypeScript | `typescript-` | `typescript-authentication`, `typescript-calling-endpoints`, `typescript-client-initialization`, `typescript-configuration-resilience`, `typescript-error-handling`, `typescript-getting-started`, `typescript-integrate-spotify-web-api`, `typescript-models`, `typescript-testing` |

The SDK itself is not on NuGet, PyPI or npm. Each getting-started skill installs it from its source repository: [spotify-csharp-sdk](https://github.com/context-plugins/spotify-csharp-sdk), [spotify-python-sdk](https://github.com/context-plugins/spotify-python-sdk) and [spotify-web-api-typescript-sdk](https://github.com/context-plugins/spotify-web-api-typescript-sdk).

## Install

**Claude Code**

```
/plugin marketplace add MuHamza30/spotify-web-api-plugin
/plugin install spotify-web-api@spotify-web-api-plugin
```

**Codex**

```
codex plugin marketplace add https://github.com/MuHamza30/spotify-web-api-plugin
codex plugin add spotify-web-api@spotify-web-api-plugin
```

**Cursor and VS Code**: clone the repo and point the agent at the clone. Cursor reads `.cursor-plugin/`, and VS Code reads the root `plugin.json`.

```
git clone https://github.com/MuHamza30/spotify-web-api-plugin.git
```

If you also have the official `spotify` plugin installed, remove it first: both carry skills with the same names.

### Updating

```
/plugin marketplace update spotify-web-api-plugin
```

## Usage

Ask the agent to integrate the Spotify Web API into your project and the language's integrate skill loads, or ask a usage question (for example, *"how do I authenticate this SDK?"*). You can also invoke a skill by name, such as `/spotify-web-api:dotnet-getting-started`.

## License

MIT. See [LICENSE](LICENSE).
