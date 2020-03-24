const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('整数値：', (answer) => {
    var input_int = parseInt(answer);

    if (input_int > 0) {
        console.log('その絶対値は' + input_int + 'です。');
    } else {
        console.log('その絶対値は' + -(input_int) + 'です。');
    }
    readline.close();
});