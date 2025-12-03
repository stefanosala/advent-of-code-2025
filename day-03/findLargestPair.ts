export default (input: string) => {
  const numbers = input.split("").map(Number);

  let largestPair = 0;

  for (let i = 0; i < numbers.length - 1; i += 1) {
    for (let k = i + 1; k < numbers.length; k += 1) {
      const pair = numbers[i] * 10 + numbers[k];

      if (pair > largestPair) {
        largestPair = pair;
      }
    }
  }

  return largestPair;
};
