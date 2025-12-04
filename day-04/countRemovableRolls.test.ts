import { test } from "node:test";
import assert from "node:assert";
import countRemovableRolls from "./countRemovableRolls";

test("countRemovableRolls", () => {
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

  const result = countRemovableRolls(input);
  assert.equal(result, 43);
});
