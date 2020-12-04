const fs = require('fs');

const passports = fs.readFileSync('../input.txt', 'utf-8').toString().split('\n\n');

let numOfValidPassports = 0;

let requiredKeys = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid']

class Passport {
    constructor(p) {
        const records = p.split(/ |\n/);
        for (let i = 0; i < records.length; ++i) {
            const record = records[i].split(':');
            this[record[0]] = record[1];
        }
    }
}

passports.forEach((p) => {
    passport = new Passport(p);
    let valid = true;
    requiredKeys.forEach((key) => {
        if (!(key in passport)) {
            valid = false;
        }
    });
    if (valid) {
        numOfValidPassports++;
    }
});

console.log(numOfValidPassports);