import { test } from "node:test";
import assert from "node:assert";
import processInput from "./processInput";

test("processInput", async () => {
  const input = `987654321111111
811111111111119
234234234234278
818181911112111`;

  const result = processInput(input);
  assert.equal(result, 357);
});
