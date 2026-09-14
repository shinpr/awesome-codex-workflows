# Awesome Codex Workflows [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

![Awesome Codex Workflows banner](assets/awesome-codex-workflows-banner.jpg)

Curated repositories for building and running development workflows with OpenAI Codex.

This is a selective list rather than a general directory of Codex tools. It focuses on systems where planning, execution, review, or handoff is visible in code, configuration, or runtime behavior. The list also includes infrastructure built to support those workflows. Prompt packs, generic tool collections, and simple wrappers are generally left out.

Start with **Codex Workflow Frameworks** for workflows that cover planning through handoff. If you already have a workflow, see **Workflow Infrastructure & Design** for tools to run, secure, or inspect it.

## Contents

- [Foundations & Standards](#foundations--standards)
- [Codex Workflow Frameworks](#codex-workflow-frameworks)
- [Workflow Infrastructure & Design](#workflow-infrastructure--design)
- [Cross-Agent References](#cross-agent-references)

<!-- GENERATED:REPO-LIST:START -->

## Foundations & Standards

Core Codex projects and shared standards that other workflow repositories build on.

- [OpenAI/codex](https://github.com/openai/codex) - Official Codex repository, providing the execution runtime that Codex-native workflow layers and orchestration tools build on.
- [OpenAI/skills](https://github.com/openai/skills) - Official skill catalog for Codex, showing how reusable instructions, scripts, and resources are packaged into workflow building blocks.
- [agentsmd/agents.md](https://github.com/agentsmd/agents.md) - Community-led `AGENTS.md` format that gives Codex and neighboring tools a shared way to express repository-local workflow guidance.
- [OpenAI/symphony](https://github.com/openai/symphony) - Open-source Codex orchestration spec with an Elixir reference implementation, defining issue-tracker-driven workflows where each issue claims a workspace and is driven to a review handoff.

## Codex Workflow Frameworks

Reusable Codex-first systems that define how development work moves from planning through completion.

- [am-will/swarms](https://github.com/am-will/swarms) - Dependency-aware workflow skills for Codex and Claude that make parallel execution safer through explicit `depends_on` plans, wave execution, and TDD-oriented validation.
- [code-yeongyu/lazycodex](https://github.com/code-yeongyu/lazycodex) - OMO's Codex Light workflow harness built around `ulw-loop`, combining durable goal state, ledger-backed progress tracking, evidence-based completion checks, goal reconciliation, and final quality-gate validation.
- [dsifry/metaswarm](https://github.com/dsifry/metaswarm) - Codex plugin and cross-CLI orchestration framework that runs work through design and plan review gates, BEADS-backed task state, coverage enforcement, and a 4-phase implementation loop.
- [EveryInc/compound-engineering-plugin](https://github.com/EveryInc/compound-engineering-plugin) - Compound-engineering plugin for Codex and other coding agents that traces stable requirement IDs through implementation units, requires per-unit verification evidence, applies eligible review fixes in `/lfg`, and writes solved problems to `docs/solutions/` as grounding for later planning.
- [gmickel/flow-next](https://github.com/gmickel/flow-next) - Plan-first workflow plugin for Codex, Claude Code, Factory Droid, and OpenCode with in-repo `.flow/` state, dependency-aware task graphs, re-anchoring, and cross-model reviews.
- [govctl-org/govctl](https://github.com/govctl-org/govctl) - Repository-native governance workflow for Codex that links RFC requirements and ADR decisions to acceptance-criteria work items, enforcing lifecycle rules and executable verification guards before completion.
- [grp06/slop-janitor](https://github.com/grp06/slop-janitor) - Codex app-server workflow runner organized around janitor, builder, and goal execution roles, with durable goal ledgers, clean-workspace gates, retry-safe snapshots, and checkpoint commits.
- [josstei/maestro-orchestrate](https://github.com/josstei/maestro-orchestrate) - Multi-runtime orchestration framework for Codex, Claude Code, Gemini CLI, and Qwen Code with Codex-native `$maestro` skills, staged Design/Plan/Execute workflows, persistent session state, specialist delegation, approval gates, and review-driven completion rules.
- [just-every/code](https://github.com/just-every/code) - Codex fork whose Auto Drive orchestration routes milestone work through coordinator-managed helper agents, enforces evidence-backed completion, and pairs autonomous execution with automated review.
- [KbWen/agentic-os](https://github.com/KbWen/agentic-os) - Governance-first workflow framework for Codex and other coding agents, using Work Log-backed phase gates, burden-of-proof reviews, spec-drift checks, and evidence requirements to keep completion claims backed by verifiable implementation evidence.
- [liza-mas/liza](https://github.com/liza-mas/liza) - Multi-agent coding system with Go supervisors, a behavioral contract, doer/reviewer roles, YAML blackboard state, worktree-managed tasks, and a code-enforced workflow state machine.
- [Q00/ouroboros](https://github.com/Q00/ouroboros) - Specification-first workflow runtime for Codex and other coding agents that turns ambiguity-scored Socratic interviews into immutable Seeds, then decomposes their acceptance criteria and evaluates execution with mechanical checks, semantic review, and optional multi-model consensus over event-sourced, resumable state.
- [robzilla1738/Codex-Workflows](https://github.com/robzilla1738/Codex-Workflows) - Workflow-as-code runtime for Codex review fanout, with sandboxed workflow definitions, durable run state, structured finding handoff between phases, validation gates, and pause/resume workflow controls.
- [shinpr/codex-workflows](https://github.com/shinpr/codex-workflows) - Keeps product changes within the approved outcome by recording user-visible contracts and exclusions before design and carrying them through handoffs, so technical findings do not automatically expand the product scope.
- [tdwhere123/do-it](https://github.com/tdwhere123/do-it) - Installable Codex and Claude Code workflow guardrail package that routes work by risk, constrains sub-agent delegation with explicit contracts, and uses Codex hooks plus review, fix, worktree, and verification skills to keep completion claims tied to fresh evidence.
- [Vinix24/vnx-orchestration](https://github.com/Vinix24/vnx-orchestration) - Governance-first workflow runtime for Codex, Claude Code, and Gemini CLI that coordinates parallel agents across tmux panes with an append-only receipt ledger, quality gates, worktrees, and automatic context rotation.
- [Yeachan-Heo/oh-my-codex](https://github.com/Yeachan-Heo/oh-my-codex) - Workflow layer for Codex organized around OMX modes like `$deep-interview`, `$ralplan`, `$ralph`, and `$team`, giving one repeatable path from clarification to completion.
- [yimwoo/hotl-plugin](https://github.com/yimwoo/hotl-plugin) - Human-on-the-loop workflow plugin for Codex, Claude Code, and Cline that turns designs into executable workflow files with per-step verification, persisted run state, human gates for risky steps, and explicit branch/worktree finish decisions.

## Workflow Infrastructure & Design

Tools for designing, running, securing, and inspecting Codex workflows, even when the workflow itself lives elsewhere.

- [basilisk-labs/agentplane](https://github.com/basilisk-labs/agentplane) - Git-native harness engineering layer for Codex and other coding agents, organizing work around task contracts, approved plans, verification records, and Agent Change Records tracked directly in Git.
- [berabuddies/agentflow](https://github.com/berabuddies/agentflow) - Graph-based orchestration runtime for Codex, Claude, and Kimi that treats workflows as dependency graphs, enabling fanout, merge, iterative loops, worktrees, and remote execution.
- [boshu2/agentops](https://github.com/boshu2/agentops) - DevOps-style operations layer for Codex CLI, Claude Code, Cursor, and OpenCode that persists handoffs, retros, and learnings in `.agents/`, then uses ratchet gates, multi-model councils, pre-mortems, and vibe checks so coding workflows carry evidence and compound knowledge across sessions.
- [luoyuctl/agenttrace](https://github.com/luoyuctl/agenttrace) - Local-first session audit tool for Codex and other coding agents, turning run logs into operational evidence for post-run review, baseline comparison, and CI gates across spend, token use, timing, health, and tool failures.
- [majiayu000/harness](https://github.com/majiayu000/harness) - Rust process-control plane for Codex app-server workflows, combining SpecRail route gates, PR readiness gates, human authorization checks, and review gates backed by a required local Codex provider.
- [mattpocock/sandcastle](https://github.com/mattpocock/sandcastle) - Sandbox runtime for Codex and other coding agents across Docker, Podman, and Vercel, supporting isolated execution, reusable environments, worktree branch strategies, and sequential-reviewer or parallel-planner workflow templates.
- [max-sixty/worktrunk](https://github.com/max-sixty/worktrunk) - Git worktree management CLI for parallel AI agent workflows, with lifecycle hooks, merge cleanup, project command approvals, and a reusable skill for operating many Codex or Claude sessions safely.
- [milisp/codexia](https://github.com/milisp/codexia) - Tauri-based desktop console for Codex and Claude Code, built to run many agent tasks at once with scheduling, worktrees, remote control, and a headless web companion.
- [Necmttn/ax](https://github.com/Necmttn/ax) - Local agent-experience graph for Codex, Claude Code, OpenCode, Cursor, and Pi sessions, turning tool calls, skills, costs, routing, hooks, and telemetry into CLI, dashboard, and MCP query surfaces.
- [OthmanAdi/planning-with-files](https://github.com/OthmanAdi/planning-with-files) - File-backed planning infrastructure for Codex and other agent CLIs, combining lifecycle hooks, isolated planning sessions, plan attestation, run ledgers, and optional completion gates tied to plan state.
- [strongdm/leash](https://github.com/strongdm/leash) - Runtime containment and policy layer for AI coding agents that makes Codex workflows safer by wrapping agents in monitored containers and enforcing Cedar policies in real time.
- [xintaofei/codeg](https://github.com/xintaofei/codeg) - Shared coding workspace for multi-agent teams, tying together session aggregation, worktrees, MCP management, browser access, and chat-channel control across desktop and server surfaces.
- [yylo-dev/yylo](https://github.com/yylo-dev/yylo) - Git-native control plane for Codex and other coding agents that separates agent execution from integration authority, using dedicated worktrees, task leases, receipts, and guarded ref updates to keep parallel work from overwriting changed state.

## Cross-Agent References

Cross-agent systems that are not Codex-first but let Codex participate directly in their workflows.

- [AgentWrapper/agent-orchestrator](https://github.com/AgentWrapper/agent-orchestrator) - Plugin-based orchestration control plane that isolates each coding task in its own worktree and routes CI or review reactions back through configurable runtime, tracker, and notifier slots.
- [awslabs/cli-agent-orchestrator](https://github.com/awslabs/cli-agent-orchestrator) - Hierarchical tmux-based multi-agent orchestrator that coordinates supervisor and worker sessions across agent CLIs, with dedicated Codex support in a broader cross-CLI system.
- [catlog22/maestro-flow](https://github.com/catlog22/maestro-flow) - Cross-agent workflow orchestrator whose Ralph engine drives sessions through a `status.json` state machine, CLI-enforced step gates, required-reading checks, and state-backed workflow progression.
- [ggwhite/4x](https://github.com/ggwhite/4x) - Cross-agent Design/Code/Review/Test runtime with first-class Codex support, using per-criterion verification types, executable evidence, and Go-enforced gates.
- [jonwiggins/optio](https://github.com/jonwiggins/optio) - PR-lifecycle worker system that turns CI failures, review requests, and merge conflicts into explicit resume actions, pushing tasks from intake to merged PR through a BullMQ-backed state machine.
- [OpenAI/codex-plugin-cc](https://github.com/openai/codex-plugin-cc) - Official Claude Code plugin that brings Codex into Claude-centered workflows for review, adversarial review, delegated rescue tasks, and optional review gates.
- [Orkas-AI/Orkas](https://github.com/Orkas-AI/Orkas) - Local-first desktop AI workforce where a Commander routes work from one chat to specialists and persistent Codex or peer CLI sessions, either handing a task over directly or bringing the result back to coordinate what happens next.
- [plasma-ai/fractal](https://github.com/plasma-ai/fractal) - Hierarchical runtime for Codex and four peer coding-agent CLIs, with recursive delegation, per-node Git worktrees, configurable limits, and a live TUI for monitoring and steering.
- [preset-io/agor](https://github.com/preset-io/agor) - Spatial multiplayer control plane for Claude Code, Codex, and Gemini that ties sessions to worktrees, workflow zones, and isolated environments instead of treating agent runs as disconnected terminals.
- [sendbird/cc-plugin-codex](https://github.com/sendbird/cc-plugin-codex) - Claude Code bridge for Codex that runs tracked review jobs, rescue tasks, and blocking review gates, with structured ALLOW/BLOCK decisions and worktree-aware review isolation.
- [sipyourdrink-ltd/bernstein](https://github.com/sipyourdrink-ltd/bernstein) - Deterministic Python orchestrator for many CLI coding agents that isolates runs in Git worktrees, enforces janitor verification and quality gates before merge, and includes a Codex CLI adapter.
- [the-open-engine/zeroshot](https://github.com/the-open-engine/zeroshot) - Cross-agent executor-verifier engine with Codex provider support that sizes workflows by task complexity, hands implementations to fresh validators without the executor's context, feeds reproducible failures into another iteration, and persists resumable runs in a crash-safe SQLite ledger.
- [vostride/agent-qa](https://github.com/vostride/agent-qa) - Application-QA workflow that connects natural-language test authoring, run evidence, failure triage, and scoped debug/fix through Agent Skills, a CLI, and MCP.

<!-- GENERATED:REPO-LIST:END -->

## Contributing

To suggest a project or update an existing entry, see [CONTRIBUTING.md](CONTRIBUTING.md).
