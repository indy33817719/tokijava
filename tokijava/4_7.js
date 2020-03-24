var readline = require('readline');
var log = console.log;

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var  putAsterisk= function () {
    rl.question('何個*を表示しますか：', function (answer) {
        var input_int = parseInt(answer);
        if ( input_int > 0 ) {
            var i = 0;
            while (i < input_int) {
                process.stdout.write('*');
                i++;
            }
            log('');
            rl.close();
        } else {
            putAsterisk();
        }

    });
};

putAsterisk();