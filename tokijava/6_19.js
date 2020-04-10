const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const ait = rl[Symbol.asyncIterator]();

let input_answer;

async function putAnswer() {
    input_answer = parseInt((await ait.next()).value);
}

async function putValueToArray() {
    console.log('6人の国語・数学の点数を入力せよ。');
    let a = new Array(6);
    for (let x = 0; x < 6; x++) {
        a[x] = new Array(2);
    }

    let sum_student = new Array(6);
    let sum_japanese = 0;
    let sum_math = 0;


    for (let x = 0; x < 6; x++) {
        for (let y = 0; y < 2; y++) {
            process.stdout.write(`${x + 1}番`);
            if (y === 0) {
                process.stdout.write('国語：');
                await putAnswer();
                a[x][y] = input_answer;
                sum_japanese += a[x][y]
            } else {
                process.stdout.write('数学：');
                await putAnswer();
                a[x][y] = input_answer;
                sum_math += a[x][y]
            }
        }
        sum_student[x] = a[x][0] + a[x][1];
    }
    console.log(a);

    console.log('No.  国語  数学  平均');
    for (let x = 0; x < 6; x++) {
        process.stdout.write((x + 1).toString() + '     ');
        process.stdout.write(a[x][0].toString() + '     ');
        process.stdout.write(a[x][1].toString() + '     ');
        process.stdout.write((sum_student[x] / 2).toString());
        console.log('');
    }
    console.log('平均' + '  ' +  sum_japanese/2 + '    '  +  sum_math/2 );
    rl.close();
}


putValueToArray();