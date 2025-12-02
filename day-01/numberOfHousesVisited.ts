type StepResult = {
  position: number;
  numberOfHousesVisited: number;
};

const runStep = (
  previousStepResult: StepResult,
  direction: "L" | "R",
  steps: number
): StepResult => {
  const multiplier = direction === "L" ? -1 : 1;

  const newPosition = ((previousStepResult.position + steps * multiplier) % 100 + 100) % 100;

  let newVisits = 0;

  newVisits += Math.floor(steps / 100);

  if (previousStepResult.position !== 0) {
    if (newPosition === 0) newVisits += 1;
    else {
      if (direction === "R" && previousStepResult.position > newPosition) newVisits += 1;
      if (direction === "L" && previousStepResult.position < newPosition) newVisits += 1;
    }
  }

  return {
    position: newPosition,
    numberOfHousesVisited: previousStepResult.numberOfHousesVisited + newVisits,
  };
};

export default (input: string) =>
  input.split("\n").reduce(
    (step: StepResult, line) => {
      const direction = line[0];
      const steps = Number(line.slice(1));

      if (!direction || isNaN(steps)) {
        return step;
      }

      return runStep(step, direction as "L" | "R", steps);
    },
    { position: 50, numberOfHousesVisited: 0 }
  );
