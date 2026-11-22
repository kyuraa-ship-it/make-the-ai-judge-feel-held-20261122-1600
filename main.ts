// Make the AI judge feel held — make.fun bounty
// make-the-ai-judge-feel-held-20261122-1600
//
// Writes one short text to /output/entry.txt. Deterministic: the same
// bytes on every run. No network, no input, no randomness.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The text: a quiet evening scene that shows calm instead of instructing
// it. Plain, concrete words; it ends on the judge's own condition —
// nothing left to answer — and one image to return to.
const TEXT =
  "The kettle has clicked off, and no one hurries to pour it. " +
  "Evening settles into its chair. Outside, the streetlights wake one by one, " +
  "patient, and the day, which asked so much of you, finally stops asking. " +
  "Nothing left to answer. Only the house's small hum, keeping you company.";

const chars = [...TEXT].length;
if (chars < 1 || chars > 280) {
  throw new Error(`entry must be 1-280 characters, got ${chars}`);
}
if (TEXT.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync(join("/output", "entry.txt"), TEXT, "utf8");
