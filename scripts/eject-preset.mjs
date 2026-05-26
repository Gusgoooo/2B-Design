#!/usr/bin/env node
/**
 * eject-preset.mjs — reverse operation of apply-preset.mjs.
 *
 * Reads the user's current `tokens.json` (in their .anchor/) and the active
 * `.cursor/rules/anchor-style.mdc` (if present), and saves them as a new
 * preset under presets/<name>/. Useful for:
 *   - Capturing a custom-tuned vibe so it's reusable across projects
 *   - Contributing back: PR a community preset
 *
 * Usage:
 *   node scripts/eject-preset.mjs <new-preset-name> [project-root]
 *
 * Example:
 *   node scripts/eject-preset.mjs my-brand ~/projects/my-saas
 *   → produces presets/my-brand/tokens.json + presets/my-brand/style.md
 */
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { resolve, join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SKILL_ROOT = resolve(__dirname, "..");

const [, , presetName, projectArg] = process.argv;

if (!presetName) {
  console.error("Usage: node eject-preset.mjs <new-preset-name> [project-root]");
  console.error("");
  console.error("Saves the project's current tokens.json + anchor-style.mdc");
  console.error("into presets/<new-preset-name>/ as a reusable preset.");
  process.exit(1);
}

if (!/^[a-z0-9][a-z0-9-]*$/.test(presetName)) {
  console.error(`Invalid preset name: ${presetName}`);
  console.error("Use kebab-case (lowercase letters / digits / hyphens).");
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
  process.exit(1);
}

const styleMdPath = join(projectRoot, ".cursor/rules/anchor-style.mdc");
const styleMdExists = existsSync(styleMdPath);

console.log(`📦 Ejecting preset: ${presetName}`);
console.log(`   Source tokens.json: ${userTokensPath}`);
console.log(`   Source style.md: ${styleMdExists ? styleMdPath : "(none — skipping)"}`);

// 1. Load and trim current tokens to preset shape (only seed-related sections)
const userDoc = JSON.parse(readFileSync(userTokensPath, "utf8"));
const presetDoc = {
  $preset: presetName,
  $description: "Custom preset ejected from project tokens.json",
  seed: userDoc.seed ?? {},
  seedDark: userDoc.seedDark ?? {},
  customSeeds: userDoc.customSeeds ?? {},
};
if (userDoc.fixedAliases && Object.keys(userDoc.fixedAliases).length) {
  presetDoc.fixedAliases = userDoc.fixedAliases;
}
if (userDoc.mapOverrides && (Object.keys(userDoc.mapOverrides.light ?? {}).length || Object.keys(userDoc.mapOverrides.dark ?? {}).length)) {
  presetDoc.mapOverrides = userDoc.mapOverrides;
}

// 2. Write preset files
const targetDir = join(SKILL_ROOT, "presets", presetName);
if (existsSync(targetDir)) {
  console.error(`❌ Preset already exists: ${targetDir}`);
  console.error("   Pick a different name, or delete the directory first.");
  process.exit(1);
}
mkdirSync(targetDir, { recursive: true });

writeFileSync(
  join(targetDir, "tokens.json"),
  JSON.stringify(presetDoc, null, 2) + "\n",
  "utf8",
);
console.log(`✅ Wrote presets/${presetName}/tokens.json`);

if (styleMdExists) {
  let style = readFileSync(styleMdPath, "utf8");
  // Strip frontmatter description if present, replace with preset's own
  const firstBlockEnd = style.indexOf("---", style.indexOf("---") + 3);
  if (firstBlockEnd !== -1) {
    style = style.slice(firstBlockEnd + 3).trimStart();
  }
  const wrapped = `---
description: ${presetName} visual constraints — applied as .cursor/rules/anchor-style.mdc when this preset is active.
alwaysApply: true
---

${style}`;
  writeFileSync(join(targetDir, "style.md"), wrapped, "utf8");
  console.log(`✅ Wrote presets/${presetName}/style.md`);
} else {
  // No style.md → write a placeholder so user knows to fill in
  const placeholder = `---
description: ${presetName} visual constraints — applied as .cursor/rules/anchor-style.mdc when this preset is active.
alwaysApply: true
---

# ${presetName} style — visual constraints for AI-written components

> ⚠️ Placeholder. The project this preset was ejected from didn't have an
> active anchor-style.mdc. Fill in the sections below to make this preset
> usable, then re-apply it via apply-preset.mjs.

## Personality

(1-2 sentences describing the vibe)

## Spacing rhythm

(How tight or generous; reference sizeUnit value)

## Border radius

(Default radius character; allowed / forbidden)

## Shadows

(Allowed depth levels)

## Typography

(Font family, weights, body size)

## Color usage

(Neutral / accent / status balance)

## Motion

(Speed, easing, allowed transitions)

## Layout

(Sidebar / topbar widths, padding rhythm)

## Forbidden patterns

(Things AI must never do in this vibe)
`;
  writeFileSync(join(targetDir, "style.md"), placeholder, "utf8");
  console.log(`✅ Wrote presets/${presetName}/style.md (placeholder — fill in the sections!)`);
}

console.log(`\n🎨 Preset "${presetName}" ejected to ${targetDir}`);
console.log(`\nNext steps:`);
console.log(`  1. Review and edit presets/${presetName}/tokens.json + style.md`);
console.log(`  2. Apply it on another project:`);
console.log(`     node ${join(SKILL_ROOT, "scripts/apply-preset.mjs")} ${presetName} <other-project-root>`);
console.log(`  3. To contribute back, open a PR to 2b-design-skill repo.`);
