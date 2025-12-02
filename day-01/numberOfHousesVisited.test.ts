import { test } from "node:test";
import assert from "node:assert";
import numberOfHousesVisited from "./numberOfHousesVisited.js";

const input = `L68
L30
R48
L5
R60
L55
L1
L99
R14
L82
`;

test("numberOfHousesVisited", () => {
  assert.deepEqual(numberOfHousesVisited(input).numberOfHousesVisited, 3);
});
