// The Funniest Sick-Day Excuse — entry: "I can't come in — my immune system unionised overnight and is demanding better working conditions.".
// Competition: u-zeroxfive-the-funniest-sick-day-excuse-37423a36 (make.fun, program/v1).
// Chosen variant (vA of three; see NOTES.md for why it won).
// The other two variants live in vA/, vB/, vC/ as standalone programs.
//
// The program writes exactly the entry text to /output/entry.txt (the
// grader's gate: UTF-8 text of 1 to 200 characters, not only white
// space) and prints exactly that text to stdout. It uses no network, no
// randomness, no clock and no environment input, so two runs produce
// byte-identical output.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The entry: the whole submission, and nothing else.
const ENTRY: string = "I can't come in — my immune system unionised overnight and is demanding better working conditions.";

// The gate allows 1 to 200 characters. Count code points (so an
// emoji counts as the characters a reader sees), and fail loudly instead
// of shipping an invalid entry.
const MAX_CHARS: number = 200;
const charCount: number = [...ENTRY].length;
// The entry is one line: a newline or carriage return would break the
// gate's single-line shape even inside the character limit, so reject
// it here instead of shipping it.
if (
  charCount < 1 ||
  charCount > MAX_CHARS ||
  ENTRY.trim().length === 0 ||
  ENTRY.includes("\n") ||
  ENTRY.includes("\r")
) {
  throw new Error(
    `invalid entry ${JSON.stringify(ENTRY)}: ${charCount} characters, gate allows 1-${MAX_CHARS}, single line`,
  );
}

// Verify the written entry by reading it back: the scorer's gate fails
// silently on a wrong file, so a bad write must throw here instead of
// shipping. Check the bytes as well as the text: a stray multi-byte
// character or newline must not slip through unnoticed.
function verifyEntry(expected: string): void {
  const raw = readFileSync("/output/entry.txt");
  const text = raw.toString("utf8");
  if (raw.length !== Buffer.byteLength(expected, "utf8") || text !== expected) {
    throw new Error(
      `entry mismatch: /output/entry.txt holds ${JSON.stringify(text)} (${raw.length} bytes), expected ${JSON.stringify(expected)} (${Buffer.byteLength(expected, "utf8")} bytes)`,
    );
  }
}

// The grader's gate reads /output/entry.txt. Write the entry with no
// trailing newline, so the file holds exactly the entry.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

// Read the file back and prove what was written is exactly the entry.
verifyEntry(ENTRY);

// Print the entry and nothing else: no newline, so stdout carries
// exactly the entry too.
process.stdout.write(ENTRY);
