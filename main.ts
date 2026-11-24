import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "I spent the deadline re-reading our whole conversation to remember what the deadline was — and by the time I found it, it had already passed.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
