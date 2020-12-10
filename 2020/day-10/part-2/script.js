const fs = require('fs');

const input = fs.readFileSync('../input.txt', 'utf-8').toString().split('\n').map((i) => +i);

const max = Math.max(...input) + 3;

const adapters = new Set([0, ...input, max]);

function combinations(value, set, memo = {}) {
    if (memo[value]) {
        return memo[value];
    }
    if (value === 0) {
        memo[value] = 1;
        return 1;
    }
    if (value < 0) {
        memo[value] = 0;
        return 0;
    }
    if (!set.has(value)) {
        memo[value] = 0;
        return 0;
    }
    memo[value] = (
        combinations(value - 1, set, memo) +
        combinations(value - 2, set, memo) +
        combinations(value - 3, set, memo)
    )
    return memo[value];
}

console.log(combinations(max, adapters));
