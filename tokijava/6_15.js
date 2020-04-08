const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const ait = rl[Symbol.asyncIterator]();

let input_answer;
let month_name = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


async function putAnswer() {
    input_answer = (await ait.next()).value;
}

async function putQuestion() {
    let max = 13;
    let min = 1;
    let random_month = Math.floor(Math.random() * (max - min) + min);
    process.stdout.write(`${random_month}月：`);
    await putAnswer();
    if (input_answer == month_name[(random_month) - 1]){
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

console.log('英語の月名を入力してください。');
console.log('なお、先頭は大文字で、2文字目以降は小文字とします。');
putQuestion();