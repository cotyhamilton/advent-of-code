const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input: fs.createReadStream(`../input.txt`)
});

let map = [];

const right = [1,3,5,7,1];
const down = [1,1,1,1,2];

let trees = [];
let x,y;

const start = async () => {
    for await (const line of rl) {
        map.push((line));
    }

    for (let i = 0; i < 5; ++i) {
        x = y = 0;
        trees[i] = 0;

        for (let j = 0; j < map.length; j += down[i]) {
            while (x >= map[j].length) {
                map[j] += map[j]
            }
            if (map[j][x] === '#') {
                trees[i]++
            }
            x += right[i];
        }
        console.log(trees[i]);
    }
    console.log( trees.reduce( (a, b) => a * b ) );
}

start();