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
            for (var i = 0; i <= input_int; i++ ) {
                sum += i;
            }
            console.log('1から' + input_int + 'までの和は' + sum + 'です。');
            rl.close();
        } else {
            getInputInt();
        }

    });
};

console.log('1からnまでの和を求めます。');
getInputInt();
