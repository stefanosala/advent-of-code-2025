import findLargestPair from "./findLargestPair";

export default (input: string) => {
  return input
    .split("\n")
    .reduce((acc, line) => acc + findLargestPair(line), 0);
};
