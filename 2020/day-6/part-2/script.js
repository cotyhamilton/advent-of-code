const fs = require('fs');

const input = fs.readFileSync('../input.txt', 'utf-8').toString().split('\n\n');

let sum = 0;

input.forEach((group) => {
    let answers = {};
    const people = group.split('\n');
    people.forEach((person) => {
        [...person].forEach((q) => {
            if (q in answers) {
                answers[q]++
            }
            else {
                answers[q] = 1
            }
        })
    });
    for (answer in answers) {
        if (answers[answer] === people.length) {
            sum += 1;
        }
    }
});

console.log(sum);
