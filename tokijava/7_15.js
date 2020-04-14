const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const ait = rl[Symbol.asyncIterator]();

let input_answer;
let sum = 0;

async function putAnswer() {
    input_answer = parseInt((await ait.next()).value);
}

async function sumOf() {
    process.stdout.write('要素数：');
    await putAnswer();
    let ary = new Array(input_answer);

    for(let i = 0; i < ary.length; i++ ) {
        process.stdout.write(`x[${i}]：`);
        await putAnswer();
        ary[i] = input_answer;
        sum += input_answer;
    }
    rl.close();
    console.log(`全要素の合計は${sum}です。`);
}

sumOf();