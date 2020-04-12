const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const ait = rl[Symbol.asyncIterator]();

let input_answer;
let correct_answer = 0;

async function randomCalculate() {
    const min = 100;
    const max = 999;
    let x = Math.floor(Math.random()* max + 1 - min) + min;
    let y = Math.floor(Math.random()* max + 1 - min) + min;
    let z = Math.floor(Math.random()* max + 1 - min) + min;

    console.log(x);
    console.log(y);
    console.log(z);

    let pattern = Math.floor(Math.random() * 4 ) + 1;

    console.log(pattern);

    switch (pattern) {
        case 1 :
            correct_answer = x + y + z;
            console.log(`${x}+${y}+${z} = `);
            await readAnswer();
            break;
        case 2 :
            correct_answer = x + y - z;
            console.log(`${x}+${y}-${z} = `);
            await readAnswer();
            break;
        case 3 :
            correct_answer = x - y + z;
            console.log(`${x}-${y}+${z} = `);
            await readAnswer();
            break;
        case 4 :
            correct_answer = x - y - z;
            console.log(`${x}-${y}-${z} = `);
            await readAnswer();
            break;
    }
}

async function readAnswer() {
    input_answer = parseInt((await ait.next()).value);

    if (input_answer == correct_answer) {
        console.log('正解です！')
        await tryAgain();
    } else {
        console.log('違いますよ！');
        await readAnswer();
    }
}


async function tryAgain() {
    let num = parseInt((await ait.next()).value);
    console.log("もう一度？<Yes...1/No...0>");
    if (num == 1) {
        randomCalculate();
    } else {
        rl.close();
    }
}

console.log('暗算力トレーニング');
randomCalculate();