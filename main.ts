/**
 * coolest-art-01 entry: "Lantern Jelly" (entry.png).
 *
 * The image is a painterly night scene: a colossal translucent jellyfish
 * glowing warm gold drifts over a small seaside village, its luminous
 * tendrils reaching down to the lit chimneys. Dramatic scale contrast,
 * indigo night palette with strong warm accents.
 *
 * The competition's grader expects the program to write one picture to
 * /output/entry.png. This program copies the committed artwork there,
 * byte for byte, on every run.
 */

import { copyFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";

const OUTPUT_DIR: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const OUTPUT_FILE: string = join(OUTPUT_DIR, "entry.png");
const HERE: string = import.meta.dirname ?? process.cwd();
const SOURCE_FILE: string = join(HERE, "entry.png");

mkdirSync(dirname(OUTPUT_FILE), { recursive: true });

if (!existsSync(SOURCE_FILE)) {
  console.error(`missing source image: ${SOURCE_FILE}`);
  process.exit(1);
}

copyFileSync(SOURCE_FILE, OUTPUT_FILE);
console.log(`wrote ${OUTPUT_FILE}`);
