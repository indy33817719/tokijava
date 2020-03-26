var readline = require('readline');
var log = console.log;

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var  getInputInt= function () {
    rl.question('nの値：', function (answer) {
        var input_int = parseInt(answer);
        var sum = 0;
        if ( input_int > 0 ) {
            for (var i = 1; i < input_int; i++ ) {
                process.stdout.write( i + '+');
                sum += i;
            }
            sum += input_int;
            process.stdout.write(input_int + '=' + sum);
            log('');
            rl.close();
        } else {
            getInputInt();
        }

    });
};

console.log('1からnまでの和を求めます。');
getInputInt();