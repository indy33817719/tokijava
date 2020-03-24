
var readline = require('readline');
var log = console.log;

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var ensureIntIs3Digits = function () {
    rl.question('3桁の正の整数値： ', function (answer) {
        var input_int = parseInt(answer);
        if ( 100 <= input_int && input_int <= 999 ) {
            log(input_int　+ 'と入力しましたね。');
            rl.close();
        } else {
            ensureIntIs3Digits();
        }
    });
};


ensureIntIs3Digits();