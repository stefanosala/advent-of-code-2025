import { readFileSync } from "node:fs";
import findNumberOfSplits from "./findNumberOfSplits";

const input = readFileSync("./day-07/input.txt", "utf-8");

console.log(findNumberOfSplits(input));
