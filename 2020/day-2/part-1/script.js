const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input: fs.createReadStream(`../input.txt`)
});

let list = [];

let numberOfValidPasswords = 0;

class Password {
    constructor(record) {
        this.record = record;
        this.min = record.split('-')[0];
        this.max = record.split(/-| /)[1];
        this.letter = record.split(/-| |:/)[2];
        this.password = record.split(' ')[2];
    }
}

const start = async () => {
    for await (const line of rl) {
        list.push(new Password(line));
    }

    list.forEach((pw) => {
        const reg = new RegExp(pw.letter, 'g');

        const occurences = pw.password.match(reg);

        if (occurences && occurences.length >= pw.min && occurences.length <= pw.max) {
            numberOfValidPasswords++
        }
    });

    console.log(numberOfValidPasswords);
}

start();