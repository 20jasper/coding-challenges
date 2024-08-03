import _ from "lodash";

type Coord = [row: number, col: number];

const EMPTY = 0;
const SHIP = 1;
type Field = (typeof EMPTY | typeof SHIP)[][];

type Size = number;
type Amount = number;
type Ships = Map<Size, Amount>;
// There must be single battleship (size of 4 cells), 2 cruisers (size 3), 3 destroyers (size 2) and 4 submarines (size 1).
// Any additional ships are not allowed, as well as missing ships.
const SHIPS: Ships = new Map([
  [4, 1],
  [3, 2],
  [2, 3],
  [1, 4],
]);

function isShipValid(path: Set<CoordStr>): boolean {
  const parsed = [...path].map((coord) => coord.split("-"));

  return (
    parsed.every(([row, _]) => row === parsed[0][0]) ||
    parsed.every(([_, col]) => col === parsed[0][1])
  );
}
console.log("start shipValid Tests");
console.log(isShipValid(new Set([])), "empty is valid");
console.log(isShipValid(new Set(["0-0"])), "one tile is valid");
console.log(!isShipValid(new Set(["0-0", "1-1"])), "diagonals not allowed");
console.log(isShipValid(new Set(["0-0", "0-1", "0-2"])), "valid col");
console.log(
  !isShipValid(new Set(["0-0", "0-1", "1-1"])),
  "both horizontal and vert not allowed",
);

console.log("end shipValid Tests");

const DIRECTIONS = [
  [1, 0],
  [1, 1],
  [1, -1],
  [0, 1],
  [0, -1],
  [-1, 0],
  [-1, 1],
  [-1, -1],
] as const;

type CoordStr = `${number}-${number}`;
/**
 * get 8 directionally connected grid paths
 */
function getShip(field: Field, coord: Coord): Set<CoordStr> {
  const path = new Set<CoordStr>();
  const stack = [coord];

  while (stack.length !== 0) {
    const [row, col] = stack.pop()!;
    const tile = field?.[row]?.[col];
    const coordStr: CoordStr = `${row}-${col}`;
    if (tile === SHIP && !path.has(coordStr)) {
      path.add(coordStr);
      DIRECTIONS.map<Coord>(([rowDelta, colDelta]) => [
        row + rowDelta,
        col + colDelta,
      ]).forEach((coord) => stack.push(coord));
    }
  }

  return path;
}

console.log("start getShip Tests");
console.log(
  getShip(
    [
      [1, 0],
      [0, 1],
    ],
    [0, 0],
  ),
  [
    [0, 0],
    [1, 1],
  ],
  "should get diagonals",
);
console.log(
  getShip(
    [
      [1, 1, 0],
      [0, 0, 1],
      [0, 0, 1],
      [1, 0, 0],
    ],
    [0, 0],
  ),
  [
    [0, 0],
    [0, 1],
    [1, 2],
    [2, 2],
  ],
  "should get horizontal and vert",
);
console.log("end getShip Tests");

function validateBattlefield(field: Field, ships: Ships = SHIPS): boolean {
  if (field.length === 0 || field[0].length === 0) {
    throw new Error("field should not be empty");
  }

  const shipsFound: Ships = new Map();
  let visited = new Set<CoordStr>();

  for (let row = 0; row < field.length; row += 1) {
    for (let col = 0; col < field[row].length; col += 1) {
      if (visited.has(`${row}-${col}`)) {
        continue;
      }

      const ship = getShip(field, [row, col]);
      visited = new Set([...visited, ...ship]);
      if (!isShipValid(ship)) {
        return false;
      }
      if (ship.size > 0) {
        const amount = shipsFound.get(ship.size) ?? 0;
        shipsFound.set(ship.size, amount + 1);
      }
    }
  }

  return _.isEqual(ships, shipsFound);
}

console.log("test start");
console.log(
  validateBattlefield(
    [
      [0, 1],
      [0, 0],
    ],
    new Map([[1, 1]]),
  ),
  "should find 1x1 ship",
);
console.log(
  !validateBattlefield(
    [
      [0, 1],
      [0, 1],
    ],
    new Map([[1, 1]]),
  ),
  "should not have 2x1 ship",
);
console.log(
  validateBattlefield(
    [
      [1, 1],
      [0, 0],
    ],

    new Map([[2, 1]]),
  ),
  "should have 2x1 ship",
);

console.log(
  validateBattlefield(
    [
      [1, 1, 1],
      [0, 0, 0],
      [1, 1, 0, 1],
      [0, 0, 0, 0, 0, 1],
    ],

    new Map([
      [1, 2],
      [2, 1],
      [3, 1],
    ]),
  ),
  "should have all tha ships",
);

console.log("test end");
