const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const ait = rl[Symbol.asyncIterator]();

let input_answer;
let min = 0;
let max = 0;

async function putAnswer() {
    input_answer = parseInt((await ait.next()).value);
}

async function returnRandomInt() {
    process.stdout.write('下限値：');
    await putAnswer();
    min = input_answer;
    process.stdout.write('上限値：');
    await putAnswer();
    max = input_answer;

    if (min > max){
        console.log(min);
    } else {
        let randomint = Math.floor(Math.random()*(max + 1 - min )) + min;
        console.log(`生成した乱数は${randomint}です。`);
    }
    rl.close();
}

returnRandomInt();