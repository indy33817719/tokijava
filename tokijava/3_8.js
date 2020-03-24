const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('整数値：', (answer) => {
    var input_int = parseInt(answer);

    if (input_int > 0 ) {
        if (input_int % 5 === 0) {
            console.log('その値は5で割り切れます。');
        } else {
            console.log('その値は5で割り切れません。');
        }
    }
    else {
        console.log('正でない値が入力されました。')
    }
    readline.close();
});