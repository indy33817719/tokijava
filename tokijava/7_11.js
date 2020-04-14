const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const ait = rl[Symbol.asyncIterator]();

let input_answer;

async function putAnswer() {
    input_answer = parseInt((await ait.next()).value);
}

async function shiftOperator() {
    console.log('整数xをnビットシフトします。');
    process.stdout.write('x:');
    await putAnswer();
    let x = input_answer;
    process.stdout.write('n:');
    await putAnswer();
    let n = input_answer;

    let x1 = x * (Math.pow(2, 3));
    console.log(`[a] x × (2の3乗）= ${x1}`);

    let x2 = Math.floor(x / (Math.pow(2,3)));
    console.log(`[b] x ÷ (2の3乗）= ${x2}`);

    let x3 = x << 3;
    console.log(`[c] x << 3 = ${x3}`);

    let x4 = x >> 3;
    console.log(`[d] x >> 3 = ${x4}`);

    console.log('[a]と[c]の値は一致します。');
    console.log('[b]と[d]の値は一致します。');

    rl.close();
}

shiftOperator();