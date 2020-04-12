const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const ait = rl[Symbol.asyncIterator]();

let input_answer;
let students_counts;
let sum_total = 0;
let ave_total = 0;

async function putAnswer() {
    input_answer = parseInt((await ait.next()).value);
}

async function putValueToArray() {

    process.stdout.write('クラス数：');
    await putAnswer();
    let class_counts = input_answer;
    let a = new Array(class_counts);

    console.log(a);

    for(let i = 0; i < a.length; i++) {
        process.stdout.write((i + 1) + '組の人数：');
        await putAnswer();
        students_counts = input_answer;
        a[i] = new Array(students_counts);
        for (let j = 0; j < a[i].length; j++) {
            process.stdout.write((i + 1) + '組' + (j + 1) + '番' + 'の点数：');
            await putAnswer();
            a[i][j] = input_answer;
        }
    }

    console.log('組 | 合計  平均');
    console.log('---+-----------');

    for(let i = 0; i < a.length; i++) {
        let sum = 0;
        for(let j = 0; j < a[i].length; j++) {
            sum += a[i][j];
        }
        process.stdout.write((i + 1).toString() + '  ' + '|'+ ' ');
        process.stdout.write(sum.toString() + '    ');
        process.stdout.write((sum / a[i].length).toString() + '    ');
        sum_total += sum;
        ave_total = (sum_total / (students_counts * class_counts));
        console.log('');
    }
    console.log('---+-----------');
    console.log(`計 | ${sum_total}   ${ave_total}`);
    rl.close();
}

putValueToArray();