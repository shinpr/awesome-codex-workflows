# Contributing

This repository is a curated list for Codex-first workflow and orchestration projects.

The goal is not broad coverage. The goal is a clear list with a stable scope.

## Scope

An addition is a good fit when all of the following are true:

- Codex or Codex CLI is an explicit primary target.
- The repository exposes an actual workflow or orchestration model.
- The repository includes reusable artifacts such as commands, agents, skills, templates, install scripts, or CLI tooling.
- The project is public and documented enough to evaluate.

## Usually Out of Scope

- General AI coding tools with no Codex-first angle
- Prompt collections with no workflow model
- Skill catalogs with no orchestration or workflow semantics
- Claude Code centered workflow repositories where Codex is only an optional backend
- Private, inaccessible, or very lightly documented repositories

## How To Propose An Addition

Use the repository recommendation issue form.

Please include:

- The repository URL
- A short summary
- Why it is relevant to Codex specifically
- Evidence of the workflow or orchestration model
- The most appropriate category

Low-context recommendations may be closed without follow-up.

## Pull Requests

Pull requests are most useful for:

- Fixing descriptions
- Removing dead links
- Correcting categorization
- Updating repository metadata
- Adding a repository data file under `data/repos/` with enough evidence in the PR body

If a repository is not already discussed, opening an issue first is preferred.

## Structured Repository Data

If you open a pull request for a new repository, prefer adding a JSON file under `data/repos/`.

- Template: [`data/repo-template.json`](data/repo-template.json)
- Format notes: [`docs/data-format.md`](docs/data-format.md)

This keeps future automation and README generation easier to maintain.

After updating `data/repos/`, run `node scripts/generate-readme.mjs`.

## Sorting

- Within most sections, entries should be sorted alphabetically.
- `Official Foundations` may use dependency or context order instead of strict alphabetical order.

## Editorial Notes

- Scope decisions are intentionally conservative.
- Borderline candidates should usually be excluded and revisited later.
- Being excluded does not imply low quality.
- Cross-agent systems may be kept in an appendix instead of the main list.
