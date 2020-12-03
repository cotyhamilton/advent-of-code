const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input: fs.createReadStream(`../input.txt`)
});

const sum = 2020;

let list = [];

const start = async () =>{
    for await (const line of rl) {
        list.push(+line);
    }

    let addend;

    for (let i = 0; i < list.length; ++i) {
        addend = sum - list[i];
        if (list.slice(i).includes(addend)) {
            console.log(addend * list[i])
        }
    }
}

start();