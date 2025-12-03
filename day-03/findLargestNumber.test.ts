import { test } from "node:test";
import assert from "node:assert";
import findLargestNumber from "./findLargestNumber";

test("findLargestNumber", async () => {
  const inputs: [string, number, number][] = [
    ["1423", 1, 4],
    ["142", 2, 42],
    ["442", 2, 44],
    ["77293", 3, 793],
    ["987654321111111", 12, 987654321111],
    ["811111111111119", 12, 811111111119],
    ["234234234234278", 12, 434234234278],
    ["818181911112111", 12, 888911112111],
  ];

  for (const [input, numberOfDigits, expected] of inputs) {
    await test(`findLargestNumber: ${input} - ${expected}`, () => {
      const result = findLargestNumber(input, numberOfDigits);
      assert.equal(result, expected);
    });
  }
});
