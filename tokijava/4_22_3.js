var readline = require('readline');
var log = console.log;

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var checkInt = function () {
    rl.question('段数は： ', function (answer) {
        input_int = parseInt(answer);

        for(var i = 1; i <= input_int; i++) {
            for (var j = 1; j <= input_int - i; j++) {
                process.stdout.write(' ');
            }
                for (var j = 1; j <= i; j++) {
                    process.stdout.write('*');
                }
        log('');
        }
        log('');
        rl.close();
    });
};


log('右下直角の二等辺三角形を表示します。');
checkInt();