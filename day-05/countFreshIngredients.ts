export default (input: string): number => {
  const lines = input.split("\n");

  const dedupedRanges: number[][] = [];

  for (const line of lines) {
    const [start, end] = line.split("-").map(Number);

    if (!end) continue;

    // Find existing overlapping ranges to extend
    const existingRanges = dedupedRanges.filter(([low, high]) => {
      return start <= high && end >= low;
    });

    if (existingRanges.length > 0) {
      // We can have multiple overlapping ranges, we combine them into a new single range
      // and remove the original ones
      const min = Math.min(...existingRanges.map(([low]) => low));
      const max = Math.max(...existingRanges.map(([, high]) => high));

      dedupedRanges.push([
        Math.min(min, start),
        Math.max(max, end)
      ]);

      for (const existingRange of existingRanges) {
        dedupedRanges.splice(dedupedRanges.indexOf(existingRange), 1);
      }
    } else {
      dedupedRanges.push([start, end]);
    }
  }

  return dedupedRanges.reduce((total, [low, high]) => total + (high - low + 1), 0);
};
