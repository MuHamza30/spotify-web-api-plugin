# Spotify Web API SDK Plugin

A plugin whose skills teach a coding agent to install and use the APIMatic-generated **Spotify Web API SDK**, in C#/.NET, Python and TypeScript. Every SDK fact the skills state is grounded in the SDK's own source and generated documentation, not in what a model remembers about this API.

This repo is a working copy for R&D on the plugin's delivery: subagent support and the fallback when a host has no subagents. The skills are the published `spotify` plugin 0.1.1 from [context-plugins/plugin-marketplace](https://github.com/context-plugins/plugin-marketplace/tree/main/plugins/spotify) at commit `d09ec8bd`, unchanged except `typescript-integrate-spotify-web-api`, which now hands planning to the agent below. The manifests and the agent are new.

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

**Cursor and VS Code**: clone the repo, then load the clone as a local plugin. Cursor reads `.cursor-plugin/`, and VS Code reads the root `plugin.json`.

```
git clone https://github.com/MuHamza30/spotify-web-api-plugin.git
```

- Cursor: copy the clone (not a symlink) to `~/.cursor/plugins/local/spotify-web-api`, then run *Developer: Reload Window*.
- VS Code: set `"chat.plugins.enabled": true` and `"chat.pluginLocations": { "<path to the clone>": true }`, then reload the window.

If you also have the official `spotify` plugin installed, remove it first: both carry skills with the same names.

### Updating

```
/plugin marketplace update spotify-web-api-plugin
```

## Planning agent (TypeScript)

`typescript-spotify-web-api-sdk` writes `spotify-web-api-plan.md`, the plan and contract sheet, before any project file changes. The TypeScript integrate skill spawns it first. It is a port of the .NET agent codegen-v2 generated before PR #250 (`SdkAgentRenderer`), cut down to planning and revising the plan. It sets no model, so each host runs it on its default subagent model.

| Host | File | How it loads |
| --- | --- | --- |
| Claude Code | `agents/typescript-spotify-web-api-sdk.md` | `.claude-plugin/plugin.json` `agents`; invoked as `spotify-web-api:typescript-spotify-web-api-sdk` |
| Cursor | `agents/typescript-spotify-web-api-sdk.md` | `.cursor-plugin/plugin.json` `agents` |
| VS Code | `agents-vscode/typescript-spotify-web-api-sdk.agent.md` | root `plugin.json` `agents` |
| Codex | `agents-codex/typescript-spotify-web-api-sdk.toml` | by hand: Codex plugins cannot bundle agents ([openai/codex#18988](https://github.com/openai/codex/issues/18988)). Copy the file to `~/.codex/agents/` and restart Codex |

The three agent files share one body. Edit them together.

## Usage

Ask the agent to integrate the Spotify Web API into your project and the language's integrate skill loads, or ask a usage question (for example, *"how do I authenticate this SDK?"*). You can also invoke a skill by name, such as `/spotify-web-api:dotnet-getting-started`.

## License

MIT. See [LICENSE](LICENSE).
