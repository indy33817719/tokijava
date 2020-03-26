var readline = require('readline');
var log = console.log;

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var  getInputInt= function () {
    rl.question('整数値：', function (answer) {
        var input_int = parseInt(answer);
        if ( input_int > 0 ) {
            for (var i = 1; i <= input_int; i++ ) {
                if (input_int > 0){
                    var square = i * i;
                    log(i + 'の2乗は' + square +'です。');
                }
            }
            rl.close();
        } else {
            getInputInt();
        }

    });
};

getInputInt();