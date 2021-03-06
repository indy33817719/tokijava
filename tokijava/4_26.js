const readline = require('readline');
const log = console.log;
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let num_int;
let input_int;
let sum = 0;

async function readInt() {
    const rl = readline.createInterface({input: process.stdin});
    const ait = rl[Symbol.asyncIterator]();
    log('整数：');
    input_int = parseInt((await ait.next()).value);
};

function checkInt() {
    rl.question('何個加算しますか： ', async function (answer) {
        num_int = parseInt(answer);
        for(let i = 0; i < num_int; i++) {
            await readInt();
            sum += input_int;
        }
        rl.close();
        log(`合計は${sum}です。`);
        log(`平均は${sum / num_int}です。`);
    });
};

log('整数を加算します。');
checkInt();
