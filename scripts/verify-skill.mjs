#!/usr/bin/env node
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const requiredFiles = [
  "SKILL.md",
  "AGENTS.md",
  "system-prompt.md",
  "README.md",
  "references/lifecycle.md",
  "references/stage-rules.md",
  "references/anchor-npm-protocol.md",
  "references/hard-rules.md",
  "references/surface-mode-policy.md",
  "templates/5-style/vibe-selection-guide.md",
  "scripts/apply-preset.mjs",
  "scripts/eject-preset.mjs",
  "agents/openai.yaml",
  ".claude-plugin/plugin.json",
];

function readText(path) {
  return readFileSync(path, "utf8");
}

function readFrontmatter(path) {
  const text = readText(path);
  const match = /^---\n([\s\S]*?)\n---/.exec(text);
  if (!match) return null;
  return match[1];
}

function readBlockScalar(frontmatter, key) {
  const lines = frontmatter.split("\n");
  const start = lines.findIndex((line) => line.startsWith(`${key}: |`));
  if (start < 0) return "";
  const out = [];
  for (let i = start + 1; i < lines.length; i += 1) {
    const line = lines[i];
    if (/^[a-zA-Z0-9_-]+:/.test(line)) break;
    out.push(line.replace(/^  /, ""));
  }
  return out.join("\n").trim();
}

const expectedPresets = [
  "google-style",
  "hud-dark-style",
  "linear",
  "minimal-dark",
  "saas-style-01",
  "stripe",
].sort();

let hasError = false;

for (const file of requiredFiles) {
  if (!existsSync(file)) {
    console.error(`Missing required file: ${file}`);
    hasError = true;
  }
}

const skillFrontmatter = readFrontmatter("SKILL.md");
if (!skillFrontmatter) {
  console.error("SKILL.md must start with YAML frontmatter.");
  hasError = true;
} else {
  if (!/^name: 2b-design$/m.test(skillFrontmatter)) {
    console.error("SKILL.md frontmatter name must be exactly: 2b-design");
    hasError = true;
  }

  const description = readBlockScalar(skillFrontmatter, "description");
  if (!description) {
    console.error("SKILL.md frontmatter must include a block scalar description.");
    hasError = true;
  } else if (description.length > 1024) {
    console.error(`SKILL.md description is too long: ${description.length} chars.`);
    hasError = true;
  }
}

const actualPresets = existsSync("presets")
  ? readdirSync("presets", { withFileTypes: true })
      .filter((entry) => entry.isDirectory())
      .map((entry) => entry.name)
      .sort()
  : [];

if (JSON.stringify(actualPresets) !== JSON.stringify(expectedPresets)) {
  console.error(`Preset mismatch.`);
  console.error(`Expected: ${expectedPresets.join(", ")}`);
  console.error(`Actual:   ${actualPresets.join(", ")}`);
  hasError = true;
}

for (const preset of expectedPresets) {
  for (const file of ["style.md", "tokens.json"]) {
    const path = join("presets", preset, file);
    if (!existsSync(path)) {
      console.error(`Preset incomplete: ${path}`);
      hasError = true;
    }
  }
}

const forbiddenPresetText = [
  "vercel-geist",
  "notion-soft",
  "brutalist",
  "glass",
  "luxury-style",
  "saas-dark-02",
  "web3-dark",
  "13 个 preset",
  "13 个",
];

const checkedTextFiles = [
  "SKILL.md",
  "AGENTS.md",
  "system-prompt.md",
  "README.md",
  "references/stage-rules.md",
  "references/surface-mode-policy.md",
  "templates/5-style/vibe-selection-guide.md",
  "package.json",
];

for (const file of checkedTextFiles) {
  if (!existsSync(file)) continue;
  const text = readText(file);
  for (const phrase of forbiddenPresetText) {
    if (text.includes(phrase)) {
      console.error(`Unexpected stale preset text in ${file}: ${phrase}`);
      hasError = true;
    }
  }
}

if (hasError) process.exit(1);

console.log("2B-Design skill verified.");
console.log(`Presets: ${actualPresets.join(", ")}`);
