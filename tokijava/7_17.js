const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const ait = rl[Symbol.asyncIterator]();

let input_answer;

async function putAnswer() {
    input_answer = parseInt((await ait.next()).value);
}

async function findNumber() {
    process.stdout.write('要素数：');
    await putAnswer();
    let ary = new Array(input_answer);

    for (let i = 0; i < ary.length; i++ ) {
        process.stdout.write(`x[${i}]：`);
        await putAnswer();
        ary[i] = input_answer;
    }

    process.stdout.write('探す値：');
    await putAnswer();
    let find_num = input_answer;

    const result = ary.filter(item => item == find_num);

    if(result.length > 1) {
        console.log('その値の要素は複数存在します。');
        console.log(`最も先頭のものはx[${ary.indexOf(find_num)}]にあります。`);
        console.log(`最も末尾のものはx[${ary.lastIndexOf(find_num)}]にあります。`);
    } else if(result.length == 1) {
        console.log(`その値はx[${ary.indexOf(find_num)}]にあります。`);
    } else {
        console.log('その値は見つかりませんでした。');
    }
    rl.close();
}

findNumber();