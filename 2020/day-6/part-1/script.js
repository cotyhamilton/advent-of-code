const fs = require('fs');

const input = fs.readFileSync('../input.txt', 'utf-8').toString().split('\n\n');

let sum = 0;

input.forEach((group) => {
    let answers = {};
    group.split('\n').forEach((person) => {
        [...person].forEach((q) => {
            if (q in answers) {
                answers[q]++
            }
            else {
                answers[q] = 1
            }
        })
    });
    sum += Object.keys(answers).length;
});

console.log(sum);
