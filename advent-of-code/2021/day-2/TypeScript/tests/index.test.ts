import { getPosition, parseInput } from "../src/index.js";

describe("hi", () => {
  it("should split into instructions", () => {
    expect(parseInput("up 7\ndown 8\nforward 111")).toStrictEqual([
      ["up", 7],
      ["down", 8],
      ["forward", 111],
    ]);
  });

  it("should be negative aim when going up", () => {
    expect(getPosition([["up", 10]])).toStrictEqual([0, 0, -10]);
  });

  it("should be positive aim when going down", () => {
    expect(getPosition([["down", 10]])).toStrictEqual([0, 0, 10]);
  });

  it("should be positive horizontal when going forward", () => {
    expect(getPosition([["forward", 10]])).toStrictEqual([10, 0, 0]);
  });

  it("should increase depth by aim * magnitude", () => {
    expect(
      getPosition([
        ["down", 5],
        ["forward", 8],
      ])
    ).toStrictEqual([8, 40, 5]);
  });

  it("should work with multiple instructions", () => {
    expect(
      getPosition([
        ["forward", 5],
        ["down", 5],
        ["forward", 8],
        ["up", 3],
        ["down", 8],
        ["forward", 2],
      ])
    ).toStrictEqual([15, 60, 10]);
  });
});
