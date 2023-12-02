import { getLinesFromFile, getModuleDirectory } from "../utils.ts";
import { partOne, partTwo } from "./main.ts";

const lines = await getLinesFromFile(getModuleDirectory(import.meta) + "/input.txt");

Deno.bench(function one() {
  partOne(lines);
});

Deno.bench(function two() {
  partTwo(lines);
});
