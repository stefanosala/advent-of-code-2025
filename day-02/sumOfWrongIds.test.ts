import { test } from "node:test";
import assert from "node:assert";
import sumOfWrongIds from "./sumOfWrongIds";

test("sumOfWrongIds", () => {
  const input = `11-22,95-115,998-1012,1188511880-1188511890,222220-222224,1698522-1698528,446443-446449,38593856-38593862,565653-565659,824824821-824824827,2121212118-2121212124`;

  const result = sumOfWrongIds(input);

  assert.equal(result, 1227775554);
});
