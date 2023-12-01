import { getLinesFromFile } from "../utils.ts";

export function partOne(lines: string[]): number {
    let count = 0;
    const regex = /\d/g;
    lines.forEach((line) => {
        const matches = line.match(regex);
        count += +matches![0] * 10 + +matches![matches!.length - 1];
    });
    return count;
}

export function partTwo(lines: string[]): number {
    let count = 0;
    const matchMap = new Map([
        ["one", 1],
        ["two", 2],
        ["three", 3],
        ["four", 4],
        ["five", 5],
        ["six", 6],
        ["seven", 7],
        ["eight", 8],
        ["nine", 9],
        ["0", 0],
        ["1", 1],
        ["2", 2],
        ["3", 3],
        ["4", 4],
        ["5", 5],
        ["6", 6],
        ["7", 7],
        ["8", 8],
        ["9", 9],
    ]);
    const regex = /(?=(zero|one|two|three|four|five|six|seven|eight|nine|\d))/g;
    lines.forEach((line) => {
        const matches = [...line.matchAll(regex)].map(match => match[1]);
        count += matchMap.get(matches![0])! * 10 + matchMap.get(matches![matches!.length - 1])!
    });
    return count;
}

if (import.meta.main) {
    console.log({
        ["part-one"]: partOne(await getLinesFromFile(Deno.args[0] || "./input.txt")),
        ["part-two"]: partTwo(await getLinesFromFile(Deno.args[0] || "./input.txt")),
    });
}
