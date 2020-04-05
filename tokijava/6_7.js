const readline = require('readline');
const log = console.log;
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let input_int;
let sum = 0;

async function readInt() {
    const rl = readline.createInterface({input: process.stdin});
    const ait = rl[Symbol.asyncIterator]();
    input_int = parseInt((await ait.next()).value);
};

function checkInt() {
    rl.question('人数：', async function (answer) {
        log('点数を入力せよ。')
        let num = parseInt(answer);
        let ary = new Array(num);

        for(let i = 0; i < num; i++) {
            process.stdout.write(`${i + 1}番の点数：`)
            await readInt();
            ary[i] = input_int;
            sum += input_int;
        }
        log(`合計点は${sum}点です。`);
        log(`平均点は${sum / num}点です。`);

        let max = Math.max.apply(null, ary);
        let min = Math.min.apply(null, ary);

        log(`最高点は${max}点です。`);
        log(`最低点は${min}点です。`);

        rl.close();
    });
};

checkInt();