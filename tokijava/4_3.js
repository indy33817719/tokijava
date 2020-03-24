var readline = require('readline');
var log = console.log;

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var min = 10;
var max = 99;
var random_int = Math.floor(Math.random()*(max + 1 -min) + min);

var  hitRandomInt= function () {
    rl.question('いくつかな：', function (answer) {
        var input_int = parseInt(answer);
        if ( input_int == random_int ) {
            log('正解です。');
            rl.close();
        } else if (input_int < random_int) {
            log('もっと大きい数だよ。')
            hitRandomInt();
        } else {
            log('もっと小さい数だよ。')
            hitRandomInt();
        }
    });
};

console.log('数当てゲーム開始！\n10〜99の数を当ててください。')

hitRandomInt();