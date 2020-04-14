const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const ait = rl[Symbol.asyncIterator]();

let input_answer;

async function putAnswer() {
    input_answer = parseInt((await ait.next()).value);
}

async function removeNumber() {
    process.stdout.write('要素数：');
    await putAnswer();
    let ary = new Array(input_answer);
    let ary_length = ary.length;

    for (let i = 0; i < ary.length; i++ ) {
        process.stdout.write(`x[${i}]：`);
        await putAnswer();
        ary[i] = input_answer;
    }

    process.stdout.write('削除する要素のインデックス：');
    await putAnswer();
    let idx = input_answer;
    process.stdout.write('削除する要素の個数：');
    await putAnswer();
    let n = input_answer;

    if (n > 0 && idx >= 0 && idx + n < ary.length) {
        let idx2 = idx + n - 1;
        if(idx2 > ary.length - n - 1) {
            idx2 = ary.length - n - 1;
            for(let i = idx; i <= idx2; i++){
                ary[i] = ary[i + n];
            }
        }
    }

    for (let i = 0; i < ary.length; i++) {
        console.log(`a[${i}] = ${ary[i]}`);
    }
    rl.close();
}

removeNumber();