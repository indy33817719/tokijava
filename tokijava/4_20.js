var readline = require('readline');
var log = console.log;

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var checkInt = function () {
    rl.question('何月ですか？ ', function (answer) {
        input_int = parseInt(answer);
        if (input_int >= 3 && input_int <= 5) {
            log('それは春です。');
            checkIntAgain();
        } else if (input_int >= 6 && input_int <= 8) {
            log('それは夏です。');
            checkIntAgain();
        } else if (input_int >= 9 && input_int <= 11) {
            log('それは秋です。');
            checkIntAgain();
        } else if (input_int == 12 || input_int == 1 || input_int == 2) {
            log('それは冬です。')
            checkIntAgain();
        } else {
            checkInt();
        }
    });
};

var checkIntAgain = function () {
    rl.question('もう一度？ Yes...1/No...0\n', function (answer) {
        var input_int2 = answer;
        if (input_int2 == 0)
        {return rl.close();}
        else if (input_int2 == 1){
            checkInt();
        } else {
            log('無効な値です。');
            rl.close();
        }
    });
}

log('季節を求めます。');
checkInt();