const fs = require('fs');

const input = fs.readFileSync('../input.txt', 'utf-8').toString().split('\n');

const target = 10884537;

let weakness;

for (let i = 0; i < input.length; ++i) {
    for (let j = i + 1; j < input.length; j++) {
        const sum = input.slice(i,j).reduce((a, b) => +a + +b, 0);
        if (sum === target) {
            weakness = Math.min(...input.slice(i,j)) + Math.max(...input.slice(i,j))
            break;
        }
        if (sum > target) {
            break;
        }
    }
    if (weakness) {
        break;
    }
}

console.log(weakness);
