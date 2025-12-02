import { readFileSync } from "node:fs";
import sumOfWrongIds from "./sumOfWrongIds";

const input = await readFileSync("./day-02/input.txt", "utf-8");

console.log(sumOfWrongIds(input));
