export default (input: string): number => {
  const lines = input.split("\n").filter((line) => line !== "");

  const beamCounter = new Array(lines[0].length).fill(0);
  beamCounter[lines[0].indexOf("S")] = 1;

  for (let i = 1; i < lines.length; i += 1) {
    for (let k = 0; k < lines[i].length; k += 1) {
      if (lines[i][k] === "^" && beamCounter[k] > 0) {
        beamCounter[k - 1] += beamCounter[k];
        beamCounter[k + 1] += beamCounter[k];
        beamCounter[k] = 0;
      }
    }
  }

  return beamCounter.reduce((total, c) => total + c, 0);
};
