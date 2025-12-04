import { readFileSync } from "node:fs";
import countRemovableRolls from "./countRemovableRolls";

const input = readFileSync("./day-04/input.txt", "utf-8");

console.log(countRemovableRolls(input));
