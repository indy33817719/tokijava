const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const ait = rl[Symbol.asyncIterator]();

let input_answer;

async function putAnswer() {
    input_answer = parseInt((await ait.next()).value);
}

async function addValueToArray() {
    process.stdout.write('要素数：');
    await putAnswer();
    let ary = new Array(input_answer);
    let ary_length = ary.length;

    for (let i = 0; i < ary.length; i++ ) {
        process.stdout.write(`x[${i}]：`);
        await putAnswer();
        ary[i] = input_answer;
    }

    process.stdout.write('挿入する要素のインデックス：');
    await putAnswer();
    let idx = input_answer;
    process.stdout.write('挿入する要素の値：');
    await putAnswer();
    let n = input_answer;

    if (idx >= 0 && idx < ary_length - 1) {
        for (let i = ary.length - 1; i > idx; i--){
            ary[i] = ary[i - 1];
        }
        ary[idx] = n;
    }

    for (let i = 0; i < ary.length; i++) {
        console.log(`a[${i}] = ${ary[i]}`);
    }
    rl.close();
}

addValueToArray();