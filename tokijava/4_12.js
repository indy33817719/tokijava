var readline = require('readline');
var log = console.log;

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var  getInputInt= function () {
    rl.question('正の整数値：', function (answer) {
        var input_int = parseInt(answer);
        if ( input_int > 0 ) {
            for (var i = input_int; i >= 0; i-- ) {
                log(i);
            }
            rl.close();
        } else {
            getInputInt();
        }

    });
};

console.log('カウントダウンします。');
getInputInt();