var readline = require('readline');
var log = console.log;

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var min = 0;
var max = 99;
var random_int = Math.floor(Math.random()*(max + 1 -min) + min);
var input_int;


async function hitRandomInt() {
    const rl = readline.createInterface({input: process.stdin});
    const ait = rl[Symbol.asyncIterator]();
    log('いくつかな：');
    input_int = parseInt((await ait.next()).value);
};

var kazuateGame = async function() {
    outer:
        for(var i = 6; i >= 0; i--) {
            if ( i == 0) {
                log('残念。正解は' + random_int + 'でした。');
                rl.close();
            } else {
                log('残り' + i + '回。');
                await hitRandomInt();
            }
                if ( input_int == random_int ) {
                    log(6 - i + 1 + '回で当たりましたね。');
                    rl.close();
                    break outer;
                } else if (input_int < random_int) {
                    log('もっと大きい数だよ。')
                    continue;
                } else {
                    log('もっと小さい数だよ。')
                    continue;
            }
        }
};

console.log('数当てゲーム開始！\n0〜99の数を当ててください。');
kazuateGame();

