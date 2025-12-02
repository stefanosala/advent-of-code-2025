// eslint-disable-next-line @typescript-eslint/no-unused-vars
const processRangePartOne = (start: number, end: number) => {
  let current = start;

  const wrongIds: number[] = [];

  do {
    const currentString = current.toString();
    const halfway = Math.floor(currentString.length / 2);

    const firstHalf = currentString.slice(0, halfway);
    const secondHalf = currentString.slice(halfway);

    if (firstHalf === secondHalf) wrongIds.push(Number(firstHalf + secondHalf));

    current += 1;
  } while (current <= end);

  return wrongIds;
};

const processRangePartTwo = (start: number, end: number) => {
  let current = start;

  const wrongIds = new Set<number>();

  do {
    const currentString = current.toString();

    for (let i = 0; i < Math.floor(currentString.length / 2); i += 1) {
      const string = currentString.slice(0, i + 1);
      const finalString = new Array(Math.floor(currentString.length / (i + 1))).fill(string).join("");

      if (currentString === finalString) {
        wrongIds.add(Number(finalString));
      }
    }

    current += 1;
  } while (current <= end);

  return wrongIds;
};

export default (input: string) => {
  const wrongIds = input.split(",").reduce((wrongIds, range) => {
    const [start, end] = range.split("-").map(Number);
    return new Set([...wrongIds, ...processRangePartTwo(start, end)]);
  }, new Set<number>())
  return Array.from(wrongIds).reduce((tot, wrongId) => tot + Number(wrongId), 0);
};
