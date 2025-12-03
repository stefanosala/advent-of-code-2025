const findLargestNumber = (
  numbers: number[],
  numberOfDigits: number
): number => {
  let toRemove = numbers.length - numberOfDigits;

  const stack: number[] = [];

  for (const digit of numbers) {
    while (stack.length > 0 && toRemove > 0 && stack[stack.length - 1] < digit) {
      stack.pop();
      toRemove -= 1;
    }

    stack.push(digit);
  }

  while (toRemove > 0) {
    stack.pop();
    toRemove -= 1;
  }

  return Number(stack.join(""));
};

export default (input: string, numberOfDigits: number) => {
  const numbers = input.split("").map(Number);
  return findLargestNumber(numbers, numberOfDigits);
};
