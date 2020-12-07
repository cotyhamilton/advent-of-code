const fs = require('fs');

const input = fs.readFileSync('../input.txt', 'utf-8').toString().split('\n');

let bagRules = {};

for (let rules of input) {
    const bag = rules.match(/(\w+ \w+)/)[1];
    const rule = rules.split(',');
    bagRules[bag] = {};
    for (let r of rule) {
        if (!r.match(/no other/)) {
            bagRules[bag][r.match(/\d (\w+ \w+)/)[1]] = +r.match(/\d/)[0];
        }
    }
}

function numOfBags(bag, rules, total = 0, memo = {}) {
    if (memo[bag]) {
        return memo[bag];
    }
    if (Object.keys(rules[bag]).length === 0) {
        return 1;
    }
    let count = 0;
    for (let b in rules[bag]) {
        for (let i = 0; i < rules[bag][b]; ++i) {
            memo[b] = numOfBags(b, rules, total, memo);
            count += memo[b];
        }
    }
    return total + count + 1;
}

console.log(numOfBags('shiny gold', bagRules) - 1);