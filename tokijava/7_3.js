const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const ait = rl[Symbol.asyncIterator]();

let input_answer;

async function putAnswer() {
    input_answer = parseInt((await ait.next()).value);
}

const compareFunc = (a, b) =>  {
    return a - b;
}

async function centerInt() {
    let ary = new Array(3);
    process.stdout.write('整数a:');
    await putAnswer();
    ary[0] = input_answer;
    process.stdout.write('整数b:');
    await putAnswer();
    ary[1] = input_answer;
    process.stdout.write('整数c:');
    await putAnswer();
    ary[2] = input_answer;

    const mid = ary.sort(compareFunc);

    console.log('中央値は' + mid[1] + 'です。');
    rl.close();
}

centerInt();