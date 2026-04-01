import fs from "node:fs";
import path from "node:path";

export const categories = [
  "Official Foundations",
  "Codex-Native Workflow Frameworks",
  "Codex Workflow Extensions",
  "Worktree / Session Infrastructure",
  "Safety / Governance",
  "Appendix: Cross-Agent Systems"
];

export const codexRelations = ["primary", "adjacent", "appendix"];
export const statuses = ["active", "experimental", "archived"];

export function getRepoDir(root = process.cwd()) {
  return path.join(root, "data", "repos");
}

export function loadRepoFiles(root = process.cwd()) {
  const repoDir = getRepoDir(root);

  if (!fs.existsSync(repoDir)) {
    throw new Error("Missing data/repos directory");
  }

  return fs
    .readdirSync(repoDir)
    .filter((file) => file.endsWith(".json"))
    .sort((a, b) => a.localeCompare(b));
}

export function loadRepos(root = process.cwd()) {
  const repoDir = getRepoDir(root);
  return loadRepoFiles(root).map((file) => {
    const fullPath = path.join(repoDir, file);
    let repo;

    try {
      repo = JSON.parse(fs.readFileSync(fullPath, "utf8"));
    } catch (error) {
      throw new Error(`${file}: invalid JSON (${error.message})`);
    }

    return {
      file,
      repo
    };
  });
}
