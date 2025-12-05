export default (input: string): number => {
  const lines = input.split("\n");

  const freshIds: number[][] = [];
  const freshIngredients: number[] = [];

  for (const line of lines) {
    const [start, end] = line.split("-").map(Number);

    if (line === "") { // Switching to reading fresh ingredients
      freshIds.sort((a, b) => a[0] - b[0]);
    } else if (end) { // Reading fresh ids
      freshIds.push([start, end]);
    } else { // Reading fresh ingredients
      const ingredientId = start;

      const found = freshIds.some(([low, high]) => {
        return ingredientId >= low && ingredientId <= high;
      });

      if (found) {
        freshIngredients.push(start);
      }
    }
  }

  return freshIngredients.length;
};
