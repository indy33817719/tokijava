const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('整数値：', (answer) => {
    var input_int = parseInt(answer);

    if (input_int % 3 === 0) {
        console.log('その値は3で割り切れます。');
    } else if (input_int % 3 === 1) {
        console.log('その値を3で割った余りは1です。');
    } else {
        console.log('その値を3で割った余りは2です。');
    }
    readline.close();
});