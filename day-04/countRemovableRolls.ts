type Coordinate = {
  x: number;
  y: number;
};

const findAccessibleRolls = (rolls: string[][]): Coordinate[] => {
  const columns = rolls[0].length;

  const accessibleRolls: Coordinate[] = [];

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
        accessibleRolls.push({ x: k, y: i });
      }
    }
  }

  return accessibleRolls;
};

export default (input: string): number => {
  const lines = input.split("\n");
  const rolls = lines.map((line) => line.split(""));

  let removableRolls = 0;

  while (true) {
    const accessibleRolls = findAccessibleRolls(rolls);

    if (accessibleRolls.length === 0) {
      break;
    }

    for (const roll of accessibleRolls) {
      rolls[roll.y][roll.x] = ".";
    }

    removableRolls += accessibleRolls.length;
  }

  return removableRolls;
};
