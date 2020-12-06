const fs = require('fs');

const seats = fs.readFileSync('../input.txt', 'utf-8').toString().split('\n');

let seatIds = [];

seats.forEach((seat) => {
    const seatId = parseInt(seat
        .replace(/F/g, '0')
        .replace(/B/g, '1')
        .replace(/L/g, '0')
        .replace(/R/g, '1')
        , 2);
    seatIds.push(+seatId);
});

const sortedIds = seatIds.sort((a, b) => a - b);

// sum of geometric sequence, +1 to length to account for missing element
const sumOfSequence = ((sortedIds.length + 1) / 2) * (2 * sortedIds[0] + sortedIds.length);

const actualSum = sortedIds.reduce((a, b) => a + b, 0);

console.log(sumOfSequence - actualSum);