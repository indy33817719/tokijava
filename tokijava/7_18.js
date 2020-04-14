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
    let delete_key = input_answer;

    const result = ary.splice(delete_key, 1);

    for (let i = 0; i < ary.length; i++){
        if( i == ary.length -1) {
            ary[i + 1] = ary[i];
            console.log(`a[${i}] = ${ary[i]}`);
            console.log(`a[${i + 1}] = ${ary[i]}`);
            break;
        } else {
            console.log(`a[${i}] = ${ary[i]}`);
        }
    }

    rl.close();
}

removeNumber();