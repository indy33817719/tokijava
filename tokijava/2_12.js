const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('整数値：', (answer) => {
    var input_int = parseInt(answer);
    var getRandInt = function () {
        min = input_int +5;
        max = input_int -5;
        return Math.floor(Math.random() * (max- min)) + min;
    };
    console.log('その値±5の乱数を生成しました。')
    console.log('値は' + getRandInt() + 'です。');
    readline.close();
});
