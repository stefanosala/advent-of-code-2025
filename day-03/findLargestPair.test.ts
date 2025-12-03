import { test } from "node:test";
import assert from "node:assert";
import findLargestPair from "./findLargestPair";

test("findLargestPair", async () => {
  const inputs: [string, number][] = [
    ["987654321111111", 98],
    ["811111111111119", 89],
    ["234234234234278", 78],
    ["818181911112111", 92],
  ];

  for (const [input, expected] of inputs) {
    await test(`findLargestPair: ${input} - ${expected}`, () => {
      const result = findLargestPair(input);
      assert.equal(result, expected);
    });
  }
});
