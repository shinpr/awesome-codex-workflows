import fs from "node:fs";
import { generateReadmeContent } from "./lib/readme-generator.mjs";

const before = fs.readFileSync("README.md", "utf8");
const after = generateReadmeContent(before);

if (before !== after) {
  console.error("README.md is out of date. Run: node scripts/generate-readme.mjs");
  process.exit(1);
}

console.log("README.md is up to date.");
