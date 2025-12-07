import { readFileSync } from "node:fs";
import findNumberOfAlternateQuantum from "./findNumberOfAlternateQuantum";

const input = readFileSync("./day-07/input.txt", "utf-8");

console.log(findNumberOfAlternateQuantum(input));
