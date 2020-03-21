const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('整数値：', (answer) => {
    var input_int = parseInt(answer);
    console.log('10を加えた値は' + (input_int + 10) +'です。');
    console.log('10を減じた値は' + (input_int - 10) + 'です。');
    readline.close();
});
