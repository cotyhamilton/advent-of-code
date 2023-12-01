import { assertEquals } from "../deps.ts";
import { partOne, partTwo } from "./main.ts";

Deno.test(function one() {
    const lines = `1abc2
        pqr3stu8vwx
        a1b2c3d4e5f
        treb7uchet`.split("\n");

    assertEquals(partOne(lines), 142);
});

Deno.test(function two() {
    const lines = `two1nine
        eightwothree
        abcone2threexyz
        xtwone3four
        4nineeightseven2
        zoneight234
        7pqrstsixteen`.split("\n");

    assertEquals(partTwo(lines), 281);
});
