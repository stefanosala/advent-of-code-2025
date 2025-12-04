import { test } from "node:test";
import assert from "node:assert";
import countAccessibleRolls from "./countAccessibleRolls";

test("countAccessibleRolls", () => {
  const input = `..@@.@@@@.
@@@.@.@.@@
@@@@@.@.@@
@.@@@@..@.
@@.@@@@.@@
.@@@@@@@.@
.@.@.@.@@@
@.@@@.@@@@
.@@@@@@@@.
@.@.@@@.@.`;

  const result = countAccessibleRolls(input);
  assert.equal(result, 13);
});
