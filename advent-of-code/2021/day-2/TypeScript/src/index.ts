import { readFileSync } from "fs";
import path from "path";
import url from "url";

// start 10:35PM
// fix config 10:52 haha
// fix ts compilation garbage 11:00
// parse input 11:09

function readFromFile(): string {
  const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

  const basePath = path.join(__dirname, "../../../../../");
  const file = readFileSync(path.join(basePath, "2021/day-2/input.txt"), {
    encoding: "utf-8",
  });

  return file;
}

type Instruction = [direction: string, magnitude: number];

export function parseInput(text: string): Instruction[] {
  return text
    .split("\n")
    .map((line) => line.split(" "))
    .map(([direction, magnitude]) => [direction, Number(magnitude)]);
}

export function getPosition(
  instructions: Instruction[]
): [horizontal: number, depth: number] {
  return instructions.reduce(
    ([horizontal, depth], [direction, magnitude]) => {
      if (direction === "up") {
        return [horizontal, depth - magnitude];
      }
      if (direction === "down") {
        return [horizontal, depth + magnitude];
      }
      if (direction === "right") {
        return [horizontal + magnitude, depth];
      }
      if (direction === "left") {
        return [horizontal - magnitude, depth];
      }

      throw new Error(`Invalid direction: ${direction}`);
    },
    [0, 0]
  );
}
