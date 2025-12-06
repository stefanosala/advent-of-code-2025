import { readFileSync } from "node:fs";
import solveProblem from "./solveProblem";

const input = readFileSync("./day-06/input.txt", "utf-8");

console.log(solveProblem(input));
