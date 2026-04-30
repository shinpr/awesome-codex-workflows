# Awesome Codex Workflows [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

![Awesome Codex Workflows banner](assets/awesome-codex-workflows-banner.jpg)

Curated repositories for building and running real development workflows with Codex.

The focus is not on Codex-related tools in general, but on repositories where the workflow is the point: planning, orchestration, subagents, staged execution, review loops, quality gates, worktrees, or the infrastructure that makes those workflows work in practice.

This list is intentionally opinionated. It favors repositories that make their workflow visible in code, config, or runtime behavior. If a project is interesting but still feels like a loose prompt pack, a generic tool collection, or a thin bridge, it is usually left out.

## Contents

- [Inclusion Notes](#inclusion-notes)
- [Foundations & Standards](#foundations--standards)
- [Codex Workflow Frameworks](#codex-workflow-frameworks)
- [Workflow Infrastructure & Design](#workflow-infrastructure--design)
- [Cross-Agent References](#cross-agent-references)

## Inclusion Notes

- Codex should be a first-class target, not just an optional backend.
- The repository should show an actual workflow model, not only isolated prompts or skills.
- Reusable artifacts should exist, such as commands, agents, skills, templates, install scripts, runtimes, or other concrete workflow assets.
- Workflow infrastructure and workflow-design tools are in scope when they materially help people build or operate Codex workflows.
- Cross-agent systems belong here only as references, when they are useful for comparison but are not fundamentally Codex-first.

<!-- GENERATED:REPO-LIST:START -->

## Foundations & Standards

Official building blocks appear here alongside ecosystem standards that help make Codex workflow repos interoperable.

- [OpenAI/codex](https://github.com/openai/codex) - Official Codex repository, providing the execution runtime that Codex-native workflow layers and orchestration tools build on.
- [OpenAI/skills](https://github.com/openai/skills) - Official skill catalog for Codex, showing how reusable instructions, scripts, and resources are packaged into workflow building blocks.
- [agentsmd/agents.md](https://github.com/agentsmd/agents.md) - Community-led `AGENTS.md` format that gives Codex and neighboring tools a shared way to express repository-local workflow guidance.
- [OpenAI/symphony](https://github.com/openai/symphony) - Open-source Codex orchestration spec with an Elixir reference implementation, defining issue-tracker-driven workflows where each issue claims a workspace and is driven to a review handoff.

## Codex Workflow Frameworks

These are the repositories where the workflow itself is the product: planning, execution, review, and handoff are built into the system rather than added on around it.

- [am-will/swarms](https://github.com/am-will/swarms) - Dependency-aware workflow skills for Codex and Claude that make parallel execution safer through explicit `depends_on` plans, wave execution, and TDD-oriented validation.
- [gmickel/flow-next](https://github.com/gmickel/flow-next) - Plan-first workflow plugin for Codex, Claude Code, Factory Droid, and OpenCode with in-repo `.flow/` state, dependency-aware task graphs, re-anchoring, and cross-model reviews.
- [Phlegonlabs/Harness-Engineering-skills](https://github.com/Phlegonlabs/Harness-Engineering-skills) - Repo-backed PRD-to-code workflow skills for Claude and Codex that turn planning into durable project state with phase gates, approval stops, and validation instead of free-form prompt chains.
- [scalarian/oh-my-codex](https://github.com/scalarian/oh-my-codex) - Codex-native orchestration product built around `.omx/` state, review queues, and tmux team runtime so long-running work can be resumed instead of reassembled from chat history.
- [shinpr/codex-workflows](https://github.com/shinpr/codex-workflows) - Codex workflows organized around user-value slices so features get designed, tested, and integrated earlier instead of breaking at the end; each slice is grounded in design docs, test skeletons, TDD, and quality gates.
- [Vinix24/vnx-orchestration](https://github.com/Vinix24/vnx-orchestration) - Governance-first workflow runtime for Codex, Claude Code, and Gemini CLI that coordinates parallel agents across tmux panes with an append-only receipt ledger, quality gates, worktrees, and automatic context rotation.
- [Yeachan-Heo/oh-my-codex](https://github.com/Yeachan-Heo/oh-my-codex) - Workflow layer for Codex organized around OMX modes like `$deep-interview`, `$ralplan`, `$ralph`, and `$team`, giving one repeatable path from clarification to completion.
- [yimwoo/hotl-plugin](https://github.com/yimwoo/hotl-plugin) - Human-on-the-loop workflow plugin for Codex, Claude Code, and Cline that turns designs into executable workflow files with per-step verification, persisted run state, human gates for risky steps, and explicit branch/worktree finish decisions.

## Workflow Infrastructure & Design

These repositories help people design, support, or operate Codex workflows, even when the workflow itself lives elsewhere.

- [berabuddies/agentflow](https://github.com/berabuddies/agentflow) - Graph-based orchestration runtime for Codex, Claude, and Kimi that treats workflows as dependency graphs, enabling fanout, merge, iterative loops, worktrees, and remote execution.
- [max-sixty/worktrunk](https://github.com/max-sixty/worktrunk) - Git worktree management CLI for parallel AI agent workflows, with lifecycle hooks, merge cleanup, project command approvals, and a reusable skill for operating many Codex or Claude sessions safely.
- [milisp/codexia](https://github.com/milisp/codexia) - Tauri-based desktop console for Codex and Claude Code, built to run many agent tasks at once with scheduling, worktrees, remote control, and a headless web companion.
- [SaehwanPark/meta-harness](https://github.com/SaehwanPark/meta-harness) - Codex-oriented adaptation of revfactory/harness for turning orchestration ideas into reusable specialist skills, team specs, and file-based handoffs instead of one-off prompts.
- [strongdm/leash](https://github.com/strongdm/leash) - Runtime containment and policy layer for AI coding agents that makes Codex workflows safer by wrapping agents in monitored containers and enforcing Cedar policies in real time.
- [xintaofei/codeg](https://github.com/xintaofei/codeg) - Shared coding workspace for multi-agent teams, tying together session aggregation, worktrees, MCP management, browser access, and chat-channel control across desktop and server surfaces.

## Cross-Agent References

These repositories are useful comparisons or integrations. Some are official, but the point of view is broader than Codex-first workflow design.

- [awslabs/cli-agent-orchestrator](https://github.com/awslabs/cli-agent-orchestrator) - Hierarchical tmux-based multi-agent orchestrator that coordinates supervisor and worker sessions across agent CLIs, with dedicated Codex support in a broader cross-CLI system.
- [catlog22/Claude-Code-Workflow](https://github.com/catlog22/Claude-Code-Workflow) - JSON-driven multi-agent workflow framework that turns Claude-centered development into staged planning, execution, and review pipelines with Codex and other CLIs as interchangeable workers.
- [ComposioHQ/agent-orchestrator](https://github.com/ComposioHQ/agent-orchestrator) - Plugin-based orchestration control plane that isolates each coding task in its own worktree and routes CI or review reactions back through configurable runtime, tracker, and notifier slots.
- [dsifry/metaswarm](https://github.com/dsifry/metaswarm) - Self-improving multi-agent orchestration framework that runs spec-driven work through review gates, adversarial execution loops, and git-native knowledge capture, with optional Codex delegation.
- [jonwiggins/optio](https://github.com/jonwiggins/optio) - PR-lifecycle worker system that turns CI failures, review requests, and merge conflicts into explicit resume actions, pushing tasks from intake to merged PR through a BullMQ-backed state machine.
- [kingbootoshi/codex-orchestrator](https://github.com/kingbootoshi/codex-orchestrator) - Claude Code plugin and CLI for offloading long-running or parallel coding work to Codex jobs that can be monitored, redirected, and captured through tmux sessions.
- [OpenAI/codex-plugin-cc](https://github.com/openai/codex-plugin-cc) - Official Claude Code plugin that brings Codex into Claude-centered workflows for review, adversarial review, delegated rescue tasks, and optional review gates.
- [preset-io/agor](https://github.com/preset-io/agor) - Spatial multiplayer control plane for Claude Code, Codex, and Gemini that ties sessions to worktrees, workflow zones, and isolated environments instead of treating agent runs as disconnected terminals.
- [stellarlinkco/myclaude](https://github.com/stellarlinkco/myclaude) - Claude-centered multi-agent workflow system that routes execution to Codex, Gemini, Claude, or OpenCode backends through reusable modules like do, omo, BMAD, and SPARV.

<!-- GENERATED:REPO-LIST:END -->

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

Before proposing an addition, check that:

- Codex is a first-class workflow target, not just an optional backend.
- The repository shows an actual workflow or orchestration model.
- The project is public, accessible, and documented enough to evaluate.

For now, scope decisions should favor clarity over coverage.
