#!/usr/bin/env node
/**
 * apply-preset.mjs — fallback applier when MCP isn't available.
 *
 * The Skill prefers calling MCP tools directly (update_token + run_sync_rules)
 * because that flows through the project's governance pipeline. But when the
 * user's environment doesn't have MCP wired (e.g. the AI tool isn't running
 * in the project, or .mcp.json hasn't been loaded), this script can apply a
 * preset by writing tokens.json + style.md directly and shelling out to
 * `npm run sync:anchor`.
 *
 * Usage:
 *   node scripts/apply-preset.mjs <preset-name> [project-root]
 *
 *   <preset-name>     One of the directories under presets/
 *   [project-root]    Defaults to cwd. Should contain .anchor/ or src/design-tokens/.
 *
 * Example:
 *   node scripts/apply-preset.mjs linear ~/projects/my-saas
 */
import { readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync } from "node:fs";
import { resolve, join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { execSync } from "node:child_process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SKILL_ROOT = resolve(__dirname, "..");

const [, , presetName, projectArg] = process.argv;
const availablePresets = readdirSync(join(SKILL_ROOT, "presets"), { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort();

if (!presetName) {
  console.error("Usage: node apply-preset.mjs <preset> [project-root]");
  console.error(`Available presets: ${availablePresets.join(", ")}`);
  process.exit(1);
}

const presetDir = join(SKILL_ROOT, "presets", presetName);
if (!existsSync(presetDir)) {
  console.error(`Preset not found: ${presetName}`);
  console.error(`Available presets: ${availablePresets.join(", ")}`);
  process.exit(1);
}

const presetTokensPath = join(presetDir, "tokens.json");
const presetStylePath = join(presetDir, "style.md");
if (!existsSync(presetTokensPath) || !existsSync(presetStylePath)) {
  console.error(`Preset incomplete: needs both tokens.json and style.md in ${presetDir}`);
  process.exit(1);
}

const projectRoot = resolve(projectArg ?? process.cwd());

// Find user's tokens.json — prefer .anchor/ then project root.
const tokenCandidates = [
  join(projectRoot, ".anchor/src/design-tokens/tokens.json"),
  join(projectRoot, "src/design-tokens/tokens.json"),
];
const userTokensPath = tokenCandidates.find((p) => existsSync(p));
if (!userTokensPath) {
  console.error(`No tokens.json found. Looked in:`);
  for (const p of tokenCandidates) console.error(`  - ${p}`);
  console.error(`\nRun \`npx --yes design-anchor@latest start\` first to scaffold .anchor/.`);
  process.exit(1);
}

const anchorRoot = userTokensPath.includes(".anchor/")
  ? userTokensPath.slice(0, userTokensPath.indexOf(".anchor/") + ".anchor".length)
  : projectRoot;

console.log(`📦 Applying preset: ${presetName}`);
console.log(`   Target tokens.json: ${userTokensPath}`);
console.log(`   Anchor root: ${anchorRoot}\n`);

// 1. Merge preset seeds into the user's tokens.json (preserves storyBindings,
//    customSeeds the user may have added beyond the preset, etc.)
const userDoc = JSON.parse(readFileSync(userTokensPath, "utf8"));
const presetDoc = JSON.parse(readFileSync(presetTokensPath, "utf8"));

const sectionsToMerge = ["seed", "seedDark", "customSeeds", "fixedAliases", "mapOverrides"];
let mergedFields = 0;
for (const section of sectionsToMerge) {
  if (!presetDoc[section]) continue;
  if (!userDoc[section]) userDoc[section] = {};
  for (const [k, v] of Object.entries(presetDoc[section])) {
    if (typeof v === "object" && v !== null && !Array.isArray(v)) {
      userDoc[section][k] = { ...(userDoc[section][k] ?? {}), ...v };
    } else {
      userDoc[section][k] = v;
    }
    mergedFields++;
  }
}

writeFileSync(userTokensPath, JSON.stringify(userDoc, null, 2) + "\n");
console.log(`✅ Merged ${mergedFields} preset values into tokens.json`);

// 2. Write style.md to .cursor/rules/anchor-style.mdc
const ruleDir = join(projectRoot, ".cursor/rules");
mkdirSync(ruleDir, { recursive: true });
const styleContent = readFileSync(presetStylePath, "utf8");
writeFileSync(join(ruleDir, "anchor-style.mdc"), styleContent);
console.log(`✅ Wrote .cursor/rules/anchor-style.mdc`);

// 3. Run sync:anchor so token CSS and AI-readable rules stay aligned.
try {
  execSync("npm run sync:anchor", { cwd: anchorRoot, stdio: "inherit" });
  console.log(`✅ Regenerated tokens and AI rules`);
} catch {
  console.warn(`⚠️  sync:anchor failed. Run manually:  cd ${anchorRoot} && npm run sync:anchor`);
}

// 4. Save the preset choice to setup.json so the Govern tab can show it
const setupPath = join(anchorRoot, ".anchor-portal/setup.json");
let setup = {};
if (existsSync(setupPath)) {
  try { setup = JSON.parse(readFileSync(setupPath, "utf8")); } catch { /* ignore */ }
}
setup = {
  ...setup,
  preset: presetName,
  presetAppliedAt: new Date().toISOString(),
  componentSource: setup.componentSource ?? "default",
  projectMode: setup.projectMode ?? "new",
};
mkdirSync(dirname(setupPath), { recursive: true });
writeFileSync(setupPath, JSON.stringify(setup, null, 2) + "\n");
console.log(`✅ Recorded preset in .anchor-portal/setup.json`);

console.log(`\n🎨 Preset "${presetName}" applied.`);
console.log(`   Open the Portal Theme tab to verify, or refresh your browser if it's open.`);
console.log(`   Next AI-written components will follow ${presetName} style rules from anchor-style.mdc.`);
