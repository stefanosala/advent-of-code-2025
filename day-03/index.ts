import { readFileSync } from "node:fs";
import processInput from "./processInput";

const input = await readFileSync("./day-03/input.txt", "utf-8");

console.log(processInput(input));
