// One-Sentence Absurd Invention Pitch
// Writes a single sentence (<= 220 chars) pitching a ridiculous invention
// that fixes a tiny everyday annoyance, to /output/entry.txt.
// Deterministic: no network, no randomness, no environment input.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = process.env.OUTPUT_DIR ?? "/output";

// Final polish: "after midnight" instead of "after 2 a.m." so the text
// contains exactly one full stop — unambiguously one sentence.
const ENTRY =
  "The Midnight Fridge stays locked after midnight until you slide a signed apology note under its door for coming back to stare at the leftovers again.";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), ENTRY, "utf8");
