const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('整数値：', (answer) => {
    var input_int = parseInt(answer);

    if (input_int > 0 ) {
        if (input_int % 10 === 0) {
            console.log('その値は10の倍数です。');
        } else {
            console.log('その値は10の倍数ではありません。');
        }
    }
    else {
        console.log('正でない値が入力されました。')
    }
    readline.close();
});