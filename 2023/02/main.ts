import { getLinesFromFile } from "../utils.ts";

export function partOne(lines: string[]): number {
    const bag: { [key: string]: number } = {
        red: 12,
        green: 13,
        blue: 14,
    }
    let total = 0;

    lines.forEach((line) => {
        const game = +line.split(":")[0].split(" ")[1];
        const sets = line.split(":")[1].trim().split("; ");
        let validGame = true;

        sets.forEach((set) => {
            let validSet = true;
            const colorCounts = set.split(", ");

            colorCounts.forEach((c) => {
                const count = +c.split(" ")[0];
                const color = c.split(" ")[1];
                if (count > bag[color]) {
                    validSet = false;
                }
            });

            if (!validSet) {
                validGame = false;
            }
        });

        if (validGame) {
            total += game;
        }
    });

    return total;
}

export function partTwo(lines: string[]): number {
    let total = 0;

    lines.forEach((line) => {
        const sets = line.split(":")[1].trim().split("; ");
        const totals: { [key: string]: number } = {
            red: 0,
            blue: 0,
            green: 0
        }
        sets.forEach((set) => {
            const colorCounts = set.split(", ");
            colorCounts.forEach((c) => {
                const count = +c.split(" ")[0];
                const color = c.split(" ")[1];
                totals[color] = count > totals[color] ? count : totals[color];
            });
        });
        total += (totals["red"] * totals["blue"] * totals["green"]);
    });

    return total;
}

if (import.meta.main) {
    console.log({
        ["part-one"]: partOne(await getLinesFromFile(Deno.args[0] || "./input.txt")),
        ["part-two"]: partTwo(await getLinesFromFile(Deno.args[0] || "./input.txt")),
    });
}
