type Step = {
  position: number;
  numberOfHousesVisited: number;
};

export default (input: string) =>
  input.split("\n").reduce(
    (step: Step, line) => {
      const direction = line[0];
      const steps = Number(line.slice(1));

      if (!direction || isNaN(steps)) {
        return step;
      }

      const multiplier = direction === "L" ? -1 : 1;

      const newPosition =
        (step.position + steps * multiplier + 100) % 100;

      return {
        position: newPosition,
        numberOfHousesVisited:
          step.numberOfHousesVisited + (newPosition === 0 ? 1 : 0),
      };
    },
    { position: 50, numberOfHousesVisited: 0 }
  );
