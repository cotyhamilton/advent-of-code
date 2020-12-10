const fs = require('fs');

const input = fs.readFileSync('../input.txt', 'utf-8').toString().split('\n').map((i) => +i);

const adapters = [0, ...input.sort((a,b) => a - b), Math.max(...input) + 3];

let countOfOneJoltDiffs = countOfThreeJoltDiffs = 0;

for (let i = 1; i < adapters.length; ++i) {
    const diff = adapters[i] - adapters[i - 1];
    if (diff === 1) {
        countOfOneJoltDiffs += 1;
    }
    else if (diff === 3) {
        countOfThreeJoltDiffs += 1;
    }
}

console.log(countOfOneJoltDiffs * countOfThreeJoltDiffs)
