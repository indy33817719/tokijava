const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const ait = rl[Symbol.asyncIterator]();

let input_answer;

async function reverseInt(str) {
    return str.split("").reverse().join("");
}

async function readAnswer() {
    input_answer = parseInt((await ait.next()).value);
}

async function readPlusInt() {
    process.stdout.write('正の整数値：');
    await readAnswer();

        if (input_answer > 0) {
            let y = await reverseInt(input_answer.toString());
            console.log('逆から読むと' + y + 'です。');
        } else {
            await readPlusInt();
        }
        await tryAgain();
}

async function tryAgain() {
    console.log("もう一度？<Yes...1/No...0>");
    await readAnswer();
    if (input_answer == 1) {
        readPlusInt();
    } else {
        rl.close();
    }
}


readPlusInt();