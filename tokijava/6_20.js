const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const ait = rl[Symbol.asyncIterator]();

let input_answer;
let height;
let width;
let a;

async function putAnswer() {
    input_answer = parseInt((await ait.next()).value);
}

async function makeArray() {
    console.log('凹凸な二次元配列を作ります。');
    process.stdout.write('行数：');
    await putAnswer();
    height = input_answer;
    a = new Array(height);

    for (let i = 0; i < height; i++) {
        process.stdout.write(i + '行目の列数：');
        await putAnswer();
        width = input_answer;
        a[i] = new Array(width);
    }
    console.log(a);


    console.log('各要素の値を入力せよ。');
    for(let i = 0; i < a.length; i++) {
        for(let j = 0; j < a[i].length; j++) {
            process.stdout.write('c[' + i + ']' + '[' + j + ']' + ':');
            await putAnswer();
            a[i][j] = input_answer;
        }
        console.log(a);
    }

    console.log('配列cの各要素の値は次のようになっております。');
    for(let i = 0; i < a.length; i++) {
        for(let j = 0; j < a[i].length; j++) {
            process.stdout.write(a[i][j] + '  ');
        }
        console.log('');
    }
    rl.close();
}

makeArray();
