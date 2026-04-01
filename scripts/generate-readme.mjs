import fs from "node:fs";
import path from "node:path";
import { generateReadmeContent } from "./lib/readme-generator.mjs";

const root = process.cwd();
const readmePath = path.join(root, "README.md");
const readme = fs.readFileSync(readmePath, "utf8");
const next = generateReadmeContent(readme, root);

fs.writeFileSync(readmePath, next);
console.log("Updated README generated repository section.");
