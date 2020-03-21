const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('整数値：', (answer) => {
    var input_int = parseInt(answer);
    var int1 = Math.floor(input_int / 10);
    var int2 = Math.floor(input_int % 10);
    console.log('最下位桁を除いた値は' + (int1) +'です。');
    console.log('最下位桁は' + (int2) + 'です。');
    readline.close();
});
