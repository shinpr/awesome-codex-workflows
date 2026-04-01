import { categories, codexRelations, loadRepos, statuses } from "./lib/repo-data.mjs";

const categorySet = new Set(categories);
const codexRelationSet = new Set(codexRelations);
const statusSet = new Set(statuses);

const errors = [];

const seenNames = new Map();
const seenUrls = new Map();
let entries = [];

try {
  entries = loadRepos();
} catch (error) {
  console.error(error.message);
  process.exit(1);
}

for (const { file, repo } of entries) {
  validateRepo(file, repo);
}

if (errors.length > 0) {
  console.error("Repository data validation failed:");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log(`Validated ${entries.length} repo data file(s).`);

function validateRepo(file, repo) {
  validateString(file, repo, "name");
  validateString(file, repo, "url");
  validateString(file, repo, "summary");
  validateString(file, repo, "codex_relation");
  validateString(file, repo, "category");

  if (!Array.isArray(repo.evidence) || repo.evidence.length === 0) {
    errors.push(`${file}: evidence must be a non-empty array`);
  } else {
    for (const item of repo.evidence) {
      if (typeof item !== "string" || item.trim() === "") {
        errors.push(`${file}: evidence entries must be non-empty strings`);
        break;
      }
    }
  }

  validateStringArray(file, repo, "tags");
  validateStringArray(file, repo, "signals");

  if (repo.name && !/^[^/\s]+\/[^/\s]+$/.test(repo.name)) {
    errors.push(`${file}: name must be in owner/repo format`);
  }

  if (repo.url && !/^https:\/\/github\.com\/[^/\s]+\/[^/\s]+\/?$/.test(repo.url)) {
    errors.push(`${file}: url must be a canonical GitHub repository URL`);
  }

  if (repo.codex_relation && !codexRelationSet.has(repo.codex_relation)) {
    errors.push(
      `${file}: codex_relation must be one of ${Array.from(codexRelationSet).join(", ")}`
    );
  }

  if (repo.category && !categorySet.has(repo.category)) {
    errors.push(`${file}: category must be a known category`);
  }

  if (repo.status !== undefined && !statusSet.has(repo.status)) {
    errors.push(`${file}: status must be one of ${Array.from(statusSet).join(", ")}`);
  }

  if (repo.name) {
    const existing = seenNames.get(repo.name);
    if (existing) {
      errors.push(`${file}: duplicate name ${repo.name} already used in ${existing}`);
    } else {
      seenNames.set(repo.name, file);
    }
  }

  if (repo.url) {
    const normalizedUrl = repo.url.replace(/\/$/, "");
    const existing = seenUrls.get(normalizedUrl);
    if (existing) {
      errors.push(`${file}: duplicate url ${normalizedUrl} already used in ${existing}`);
    } else {
      seenUrls.set(normalizedUrl, file);
    }
  }
}

function validateString(file, repo, key) {
  if (typeof repo[key] !== "string" || repo[key].trim() === "") {
    errors.push(`${file}: ${key} must be a non-empty string`);
  }
}

function validateStringArray(file, repo, key) {
  if (repo[key] === undefined) {
    return;
  }

  if (!Array.isArray(repo[key])) {
    errors.push(`${file}: ${key} must be an array of strings`);
    return;
  }

  for (const item of repo[key]) {
    if (typeof item !== "string" || item.trim() === "") {
      errors.push(`${file}: ${key} entries must be non-empty strings`);
      return;
    }
  }
}
