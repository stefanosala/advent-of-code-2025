import findLargestNumber from "./findLargestNumber";

export default (input: string) => {
  return input
    .split("\n")
    .reduce((acc, line) => acc + findLargestNumber(line, 12), 0);
};
