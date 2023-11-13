import { readFileSync } from "fs";
import path from "path";
import url from "url";

// start 10:35PM
// fix config 10:52 haha
// fix ts compilation garbage 11:00
// parse input 11:09
// finish 11:49

// total time 1:14

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
    .filter((line) => line.length > 0)
    .map((line) => line.split(" "))
    .map(([direction, magnitude]) => [direction, Number(magnitude)]);
}

type Position = [horizontal: number, depth: number, aim: number];

export function getPosition(instructions: Instruction[]): Position {
  return instructions.reduce(
    ([horizontal, depth, aim], [direction, magnitude]) => {
      if (direction === "up") {
        return [horizontal, depth, aim - magnitude];
      }
      if (direction === "down") {
        return [horizontal, depth, aim + magnitude];
      }
      if (direction === "forward") {
        return [horizontal + magnitude, depth + aim * magnitude, aim];
      }

      throw new Error(`Invalid direction: ${direction}`);
    },
    [0, 0, 0]
  );
}

function multiply([horizontal, depth]: Position): number {
  return horizontal * depth;
}

// console.log(multiply(getPosition(parseInput(readFromFile()))));
