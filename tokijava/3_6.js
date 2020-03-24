const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('整数値：', (answer) => {
    var input_int = parseInt(answer);

    if (input_int > 0) {
        console.log('その値は正です。');
    } else if (input_int < 0) {
        console.log('その値は負です。')
    } else {
        console.log('その値は0です。');
    }
    readline.close();
});