var readline = require('readline');
var log = console.log;

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var  getInputInt= function () {
    rl.question('整数値：', function (answer) {
        var input_int = parseInt(answer);
        var count = 0;
        if ( input_int > 0 ) {
            for (var i = 0; i <= input_int; i++ ) {
                if (input_int % i == 0){
                    process.stdout.write(i + ' ');
                    count++;
                }
            }
            log('\n約数は' + count +'個です。');
            rl.close();
        } else {
            getInputInt();
        }

    });
};

getInputInt();