import { readFileSync } from "fs";
import path from "path";
import url from "url";

// start 10:35PM
// fix config 10:52 haha
// fix ts compilation garbage 11:00

function readFromFile(): string {
  const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

  const basePath = path.join(__dirname, "../../../../../");
  const file = readFileSync(path.join(basePath, "2021/day-2/input.txt"), {
    encoding: "utf-8",
  });

  return file;
}

type Instruction = [direction: string, magnitude: number];

export function parseInput(text: string): Instruction[] {}
