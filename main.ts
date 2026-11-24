// Make the AI Judge Laugh: Developer Excuses — r1 (revised header comment)
// Writes one funny single-line developer excuse (103 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "It worked on my machine, so I shipped my machine — production is now running on a laptop under my desk.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE + "\n", "utf8");
