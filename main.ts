// news-image-01 entry (Slothana / keen-panda-72): a program that writes one
// image summing up the world's news of Friday 13 November 2026 to
// /output/entry.png.
//
// The image is a broadsheet front page generated for this entry: a hero panel
// on Nvidia chief Jensen Huang's resignation, six illustrated story tiles
// (Zelensky meets US envoys; drone hits a Russian warship; Iran claims a
// strike in Bahrain; the FBI's North Korea $400m hack; the FAA grounding US
// flights; the Microsoft 365 outage) and a ticker strip (Kane's England caps
// record, the US deportation record, the Qatar-Turkey defence pact).
//
// The program runs with no network and no dependencies: it copies the image
// held beside it in this repository to the output directory, so both runs
// write byte-identical output. The output directory is /output in the
// grader's container, or MAKEFUN_OUTPUT_DIR when set for a local run.
//
// Run locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
