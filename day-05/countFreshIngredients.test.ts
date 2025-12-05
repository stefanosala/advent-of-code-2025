import { test } from "node:test";
import assert from "node:assert";
import countFreshIngredients from "./countFreshIngredients";

test("countFreshIngredients", () => {
  const input = `3-5
10-14
16-20
12-18

1
5
8
11
17
32`;
  const result = countFreshIngredients(input);
  assert.equal(result, 14);
});

// test("countFreshIngredientsSimple", () => {
//   const input = `16-19
// 17-19

// 1
// 5
// 8
// 11
// 17
// 32`;
//   const result = countFreshIngredients(input);
//   assert.equal(result, 5);
// });
