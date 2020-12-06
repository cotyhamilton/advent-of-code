const fs = require('fs');

const seats = fs.readFileSync('../input.txt', 'utf-8').toString().split('\n');

let highestSeatId = 0;

seats.forEach((seat) => {
    const seatId = parseInt(seat
        .replace(/F/g, '0')
        .replace(/B/g, '1')
        .replace(/L/g, '0')
        .replace(/R/g, '1')
        , 2);
    highestSeatId = seatId > highestSeatId ? seatId : highestSeatId;
});

console.log(highestSeatId);