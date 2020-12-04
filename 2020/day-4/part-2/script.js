const fs = require('fs');

const passports = fs.readFileSync('../input.txt', 'utf-8').toString().split('\n\n');

let numOfValidPassports = 0;

class Passport {
    constructor(p) {
        const records = p.split(/ |\n/);
        for (let i = 0; i < records.length; ++i) {
            const record = records[i].split(':');
            this[record[0]] = record[1];
        }
    }

    validByr() {
        return this.byr && +this.byr >= 1920 && +this.byr <= 2002;
    }

    validIyr() {
        return this.iyr && +this.iyr >= 2010 && +this.iyr <= 2020;
    }

    validEyr() {
        return this.eyr && +this.eyr >= 2020 && +this.eyr <= 2030;
    }

    validHgt() {
        if (this.hgt) {
            if (this.hgt.indexOf('in') > -1) {
                if (parseInt(this.hgt) >= 59 && parseInt(this.hgt) <= 76) {
                    return true;
                }
                else {
                    return false;
                }
            }
            else if (this.hgt.indexOf('cm') > -1) {
                if (parseInt(this.hgt) >= 150 && parseInt(this.hgt) <= 193) {
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }

    validHcl() {
        return this.hcl && !!this.hcl.match(/^#[0-9a-f]{6}$/);
    }

    validEcl() {
        const valid = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth']
        return this.ecl && valid.includes(this.ecl);
    }

    validPid() {
        return this.pid && !!this.pid.match(/^[0-9]{9}$/);
    }

    isValid() {
        return (
            this.validByr() &&
            this.validIyr() &&
            this.validEyr() &&
            this.validHgt() &&
            this.validHcl() &&
            this.validEcl() &&
            this.validPid()
        )
    }
}

passports.forEach((p) => {
    passport = new Passport(p);
    if (passport.isValid()) {
        numOfValidPassports++
    }
});

console.log(numOfValidPassports);
