const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const ait = rl[Symbol.asyncIterator]();

let input_answer;

async function putAnswer() {
    input_answer = parseInt((await ait.next()).value);
}

async function minInt() {
    let a = new Array(3);
    process.stdout.write('整数a:');
    await putAnswer();
    a[0] = input_answer;
    process.stdout.write('整数b:');
    await putAnswer();
    a[1] = input_answer;
    process.stdout.write('整数c:');
    await putAnswer();
    a[2] = input_answer;

    const min = Math.min.apply(null, a);

    console.log('最小値は' + min + 'です。');
    rl.close();
}

minInt();

