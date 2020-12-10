const fs = require('fs');

const input = fs.readFileSync('../input.txt', 'utf-8').toString().split('\n');

const preamble = 25;

let sums = {};

for (let i = preamble; i < input.length; ++i) {
    sums[input[i]] = new Set(...[input.slice(i - preamble, i).map(e => +e)]);
}

let index = preamble;
let flag;

do {
    for (let i = index; i < input.length; ++i) {
        flag = false;
        for (let j = 1; j <= preamble; ++j) {
            if (sums[input[i]].has(input[i] - input[i - j])) {
                flag = true;
            }
        }
        if (!flag) {
            break;
        }
        index += 1;
    }
}
while(flag);

console.log(input[index]);
