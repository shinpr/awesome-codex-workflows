# Data Format

Repository metadata can be stored as JSON files under `data/repos/`.

This is optional for now, but the format is intended to become the main input for future curation and automation.
The README repository sections are generated from these files.

## File Naming

- Use one repository per file.
- Prefer `owner--repo.json`.

Examples:

- `openai--codex.json`
- `shinpr--codex-workflows.json`

## Fields

- `name`
  - Required
  - GitHub slug in `owner/repo` format
- `url`
  - Required
  - Canonical GitHub repository URL
- `summary`
  - Required
  - Short neutral description
- `codex_relation`
  - Required
  - One of `primary`, `adjacent`, `appendix`
- `category`
  - Required
  - One of the repository categories used by this list
- `tags`
  - Optional
  - Freeform short tags
- `signals`
  - Optional
  - Workflow signals such as `subagents`, `worktrees`, `mcp`, `quality-gates`
- `evidence`
  - Required
  - Short evidence notes that explain why the repository fits
- `status`
  - Optional
  - One of `active`, `experimental`, `archived`

## Notes

- Keep summaries neutral.
- Prefer observable evidence over opinions.
- If Codex is not a primary target, use `appendix` or exclude it.
- After updating `data/repos/`, run `node scripts/generate-readme.mjs`.
