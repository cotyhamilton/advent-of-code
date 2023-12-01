import { getLinesFromFile } from "../utils.ts";
import { partOne, partTwo } from "./main.ts";

Deno.bench(async function one() {
  partOne(await getLinesFromFile("./input.txt"));
});

Deno.bench(async function two() {
  partTwo(await getLinesFromFile("./input.txt"));
});
