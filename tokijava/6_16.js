const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const ait = rl[Symbol.asyncIterator]();

let input_answer;
let day_english = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
let day_japanese = ['日曜日','月曜日','火曜日','水曜日','木曜日','金曜日','土曜日'];


async function putAnswer() {
    input_answer = (await ait.next()).value;
}

async function putQuestion() {
    let max = 8;
    let min = 1;
    let random_dayint = Math.floor(Math.random() * (max - min) + min);
    process.stdout.write(`${day_japanese[(random_dayint) - 1]}：`);
    await putAnswer();
    if (input_answer == day_english[(random_dayint) - 1]){
        console.log('正解です。');
        checkIntAgain();
    } else {
        console.log('違います。');
        checkIntAgain();
    }
}

let checkIntAgain = () => {
    rl.question('もう一度？ Yes...1/No...0', function (answer) {
        let input_int = answer;
        if (input_int == 0) {
            rl.close();
        } else if (input_int == 1){
            putQuestion();
        } else {
            console.log('無効な値です。');
            rl.close();
        }
    });
}

console.log('英語の曜日名を小文字で入力してください。');
putQuestion();