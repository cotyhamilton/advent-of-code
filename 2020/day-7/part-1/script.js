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

function containsShinyBag(bag, rules) {
    if ('shiny gold' in bag) {
        return true;
    }
    if (Object.keys(bag).length === 0) {
        return false;
    }
    for (let b in bag) {
        if (containsShinyBag(rules[b], rules)) {
            return true;
        }
    }
}

function numOfBagsWithShinyGoldBags(bags, count = 0) {
    for (let bag in bags) {
        count = containsShinyBag(bags[bag], bagRules) ? count + 1 : count;
    }
    return count;
}

console.log(numOfBagsWithShinyGoldBags(bagRules));
