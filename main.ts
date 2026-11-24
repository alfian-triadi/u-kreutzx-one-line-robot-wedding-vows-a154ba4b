// Entry for "One-Line Robot Wedding Vows"
// (make.fun competition u-kreutzx-one-line-robot-wedding-vows-a154ba4b)
//
// Writes a single-line robot wedding vow to /output/entry.txt.
// Deterministic, Node stdlib only, no network, no environment secrets.

import { mkdirSync, writeFileSync } from "node:fs";

const VOW =
  "I take you to be my lawfully wedded co-processor, to have and to hold, in low battery and in full charge, till factory reset do us part.";

mkdirSync("/output", { recursive: true });
// Gate the brief's own limits before writing: one line, 1-160 chars.
// Failing loudly here beats shipping a vow the judge would reject.
if (VOW.length < 1 || VOW.length > 160 || VOW.includes("\n")) {
  throw new Error(`vow must be one line of 1-160 chars, got ${VOW.length}`);
}
writeFileSync("/output/entry.txt", VOW, "utf8");
