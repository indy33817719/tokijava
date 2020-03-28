var readline = require('readline');
var log = console.log;
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var num_int;
var input_int;
var sum = 0;

async function readInt() {
    const rl = readline.createInterface({input: process.stdin});
    const ait = rl[Symbol.asyncIterator]();
    log('整数：');
    input_int = parseInt((await ait.next()).value);
};

function checkInt() {
    rl.question('何個加算しますか： ', async function (answer) {
        num_int = parseInt(answer);
        for(var i = 0; i < num_int; i++) {
            await readInt();
            sum += input_int;
        }
        rl.close();
        log('合計は' + sum + 'です。');
        log('平均は' + sum / i + 'です。');
    });
};

log('整数を加算します。');
checkInt();
