const fs = require('fs');

const input = fs.readFileSync('../input.txt', 'utf-8').toString().split('\n');

let instructions = [];

let executed = new Set();

let index = acc = 0;

let changedIndex = -1;

for (let i of input) {
    instructions.push({ op: i.split(' ')[0], int: parseInt(i.split(' ')[1]) })
}

function compute(op, int, index, acc) {
    switch (op) {
        case 'acc':
            return [++index, acc + int];
        case 'jmp':
            return [index + int, acc];
        case 'nop':
            return [++index, acc];
        default: 
            console.log('whoopsie');
    }
}

function flipInstruction(index) {
    instructions[index].op = instructions[index].op === 'jmp' ? 'nop' : 'jmp';
}

while (index < input.length) {
    index = acc = 0;
    executed.clear();
    if (changedIndex > -1) {
        flipInstruction(changedIndex);
    }
    changedIndex = instructions
                    .slice(changedIndex + 1)
                    .findIndex(({op}) => op === 'jmp' || op === 'nop') + changedIndex + 1;
    flipInstruction(changedIndex);
    do {
        executed.add(index);
        [index, acc] = compute(instructions[index].op, instructions[index].int, index, acc);
    }
    while(!executed.has(index) && index < input.length);
}

console.log(acc);
