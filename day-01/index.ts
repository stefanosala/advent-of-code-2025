import { readFileSync } from "node:fs";
import numberOfHousesVisited from "./numberOfHousesVisited";

const input = await readFileSync("./day-01/input.txt", "utf-8");

console.log(numberOfHousesVisited(input));
