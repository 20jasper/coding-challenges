import { getPosition, parseInput } from "../src/index";

describe("hi", () => {
  it("should split into instructions", () => {
    expect(parseInput("up 7\ndown 8\nright 111")).toStrictEqual([
      ["up", 7],
      ["down", 8],
      ["right", 111],
    ]);
  });

  it("should be negative depth when going up", () => {
    expect(getPosition([["up", 10]])).toStrictEqual([0, -10]);
  });

  it("should be positive depth when going down", () => {
    expect(getPosition([["down", 10]])).toStrictEqual([0, 10]);
  });

  it("should be positive horizontal when going right", () => {
    expect(getPosition([["right", 10]])).toStrictEqual([10, 0]);
  });

  it("should be positive horizontal when going left", () => {
    expect(getPosition([["left", 10]])).toStrictEqual([-10, 0]);
  });

  it("should work with multiple directions", () => {
    expect(
      getPosition([
        ["left", 10],
        ["right", 5],
        ["up", 10],
        ["down", 5],
      ])
    ).toStrictEqual([-5, -5]);
  });
});
