const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const ait = rl[Symbol.asyncIterator]();

let input_answer;

async function putAnswer() {
    input_answer = parseInt((await ait.next()).value);
}

async function minOf() {
    process.stdout.write('人数は：');
    await putAnswer();
    let students_num = input_answer;
    let height = new Array(input_answer);
    let weight = new Array(input_answer);

    for(let i = 0; i < students_num; i++ ) {
            process.stdout.write(`${i+1}番目の身長：`);
            await putAnswer();
            height[i] = input_answer;
            process.stdout.write(`${i+1}番目の体重：`);
            await putAnswer();
            weight[i] = input_answer;
    }

    rl.close();
    let height_min = Math.min.apply(null, height);
    let weight_min = Math.min.apply(null, weight);

    console.log(`最も背が低い人の身長：${height_min}`);
    console.log(`最も痩せている人の体重：${weight_min}`);
}

minOf();