var readline = require('readline');
var log = console.log;

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var checkInt = function () {
    rl.question('整数値： ', function (answer) {
        if (answer > 0) {
            log('その値は正です。');
            checkIntAgain();
        } else if (answer == 0) {
            log('その値は0です。');
            checkIntAgain();
        } else {
            log('その値は負です。');
            checkIntAgain();
        }
    });
};

var checkIntAgain = function () {
    rl.question('もう一度？ Yes...1/No...0', function (answer) {
        var input_int = answer;
        if (input_int == 0)
        {return rl.close();}
        else if (input_int == 1){
            checkInt();
        } else {
            console.log('無効な値です。');
            rl.close();
        }
    });
}

checkInt();