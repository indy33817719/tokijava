var readline = require('readline');
var log = console.log;

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var checkInt = function () {
    rl.question('2以上の整数値： ', function (answer) {
        input_int = parseInt(answer);

        if(input_int > 2) {
            for(var i = 2; i < input_int; i++) {
                if (input_int % i == 0) {
                    log('それは素数ではありません。');
                    break;
                } else {
                    log('それは素数です。');
                    break;
                }
            }
            rl.close();
        } else {
            checkInt();
        }



    });
};


checkInt();