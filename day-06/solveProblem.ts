export default (input: string): number => {
  const lines = input.split("\n")
    .filter((line) => line !== "");

  let total = 0;
  let totalPartial: number | null = null;
  let operation: string | null = null;

  for (let i = 0; i < lines[0].length; i += 1) {
    const numbersInColumn: number[] = [];

    for (let j = 0; j < lines.length; j += 1) {
      const char = lines[j][i];

      if (char === " ") continue;
      if (char === "*") operation = "*";
      if (char === "+") operation = "+";
      if (Number.isInteger(Number(char))) numbersInColumn.push(Number(char));
    }

    if (numbersInColumn.length === 0) {
      total += totalPartial ?? 0;
      totalPartial = null;
    } else {
      const parsedNumber = Number(numbersInColumn.join(""));

      if (totalPartial === null) totalPartial = parsedNumber;
      else if (operation === "*") totalPartial *= parsedNumber;
      else if (operation === "+") totalPartial += parsedNumber;
    }
  }

  total += totalPartial ?? 0;

  return total;
};
