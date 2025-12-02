const processRange = (start: number, end: number) => {
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

export default (input: string) => {
  return input.split(",").reduce((numberOfWrongIds, range) => {
    const [start, end] = range.split("-").map(Number);
    return numberOfWrongIds.concat(processRange(start, end));
  }, [] as number[]).reduce((tot, wrongId) => tot + Number(wrongId), 0);
};
