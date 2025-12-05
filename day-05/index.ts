import { readFileSync } from "node:fs";
import countFreshIngredients from "./countFreshIngredients";

const input = readFileSync("./day-05/input.txt", "utf-8");

console.log(countFreshIngredients(input));
