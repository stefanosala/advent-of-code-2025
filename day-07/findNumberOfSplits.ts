export default (input: string): number => {
  const lines = input.split("\n")
    .filter((line) => line !== "");

  let beams = new Set<number>();
  beams.add(lines[0].indexOf("S"));

  let splits = 0;

  for (let i = 1; i < lines.length; i += 1) {
    const newBeams: number[] = [];

    for (let k = 0; k < lines[i].length; k += 1) {
      if (lines[i][k] === "^" && beams.has(k)) {
        newBeams.push(k - 1);
        newBeams.push(k + 1);

        beams.delete(k);

        splits += 1;
      }
    }

    beams = new Set([...beams, ...newBeams]);
  }

  return splits;
};
