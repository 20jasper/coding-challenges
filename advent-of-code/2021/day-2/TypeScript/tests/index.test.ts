import { parseInput } from "../src/index";

describe("hi", () => {
  it("should split into instructions", () => {
    expect(parseInput("up 7\ndown 8\nright 111")).toStrictEqual([
      ["up", 7],
      ["down", 8],
      ["right", 111],
    ]);
  });
});
