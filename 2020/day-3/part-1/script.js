const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input: fs.createReadStream(`../input.txt`)
});

let map = [];

const right = 3;
const down = 1;

let trees = 0;

const start = async () => {
    for await (const line of rl) {
        map.push((line));
    }

    let x = y = 0;

    for (let i = 0; i < map.length; i += down) {
        while (x >= map[i].length) {
            map[i] += map[i]
        }
        if (map[i][x] === '#') {
            trees++
        }
        x += right;
    }
    
    console.log(trees);
}

start();