export default (input: string): number => {
  const lines = input.split("\n");
  const rolls = lines.map((line) => line.split(""));

  // We assume the shape is a square.
  const columns = rolls[0].length;

  let accessibleRolls = 0;

  for (let i = 0; i < columns; i += 1) {
    for (let k = 0; k < columns; k += 1) {
      if (rolls[i][k] === ".") {
        continue;
      }

      let adjacentRolls = 0;

      if (rolls[i][k] === "@") {
        if (rolls[i]?.[k - 1] === "@") {
          adjacentRolls += 1;
        }

        if (rolls[i]?.[k + 1] === "@") {
          adjacentRolls += 1;
        }

        if (rolls[i - 1]?.[k - 1] === "@") {
          adjacentRolls += 1;
        }

        if (rolls[i - 1]?.[k] === "@") {
          adjacentRolls += 1;
        }

        if (rolls[i - 1]?.[k + 1] === "@") {
          adjacentRolls += 1;
        }

        if (rolls[i + 1]?.[k - 1] === "@") {
          adjacentRolls += 1;
        }

        if (rolls[i + 1]?.[k] === "@") {
          adjacentRolls += 1;
        }

        if (rolls[i + 1]?.[k + 1] === "@") {
          adjacentRolls += 1;
        }
      }

      if (adjacentRolls < 4) {
        accessibleRolls += 1;
      }
    }
  }

  return accessibleRolls;
};
