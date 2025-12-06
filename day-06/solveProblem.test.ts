import { test } from "node:test";
import assert from "node:assert";
import solveProblem from "./solveProblem";

test("solveProblem", () => {
  const input = `123 328  51 64 \n 45 64  387 23 \n  6 98  215 314\n*   +   *   +  `;
  const result = solveProblem(input);
  assert.equal(result, 3263827);
});
