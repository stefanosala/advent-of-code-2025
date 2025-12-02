import { test } from "node:test";
import assert from "node:assert";
import numberOfHousesVisited from "./numberOfHousesVisited.js";

const CASES: [string, number][] = [
  [
    `L68
L30
R48
L5
R60
L55
L1
L99
R14
L82
`,
    6,
  ],
  [`L49
L2
`, 1],
[`L49
L1
`, 1],
[`R49
R1
`, 1],
[`R49
R2
`, 1],
[`R50
R100
`, 2],
[`R150`, 2],
[`R1000`, 10],
[`R50
L617
`, 7]
];

CASES.forEach(([input, expected]) => {
  test(`numberOfHousesVisited: ${input} - ${expected}`, () => {
    const result = numberOfHousesVisited(input);

    assert.deepEqual(
      result.numberOfHousesVisited,
      expected
    );

    assert(result.position >= 0);
  });
});
