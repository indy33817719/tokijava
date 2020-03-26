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

            for(var i = 1; i < input_int; i++) {
             if ( i % 5 == 0) {
                    log('*');
                } else {
                    process.stdout.write('*');
                }
            }
            process.stdout.write('*');
            log('');
            rl.close();
        } else {
            putAsterisk();
        }

    });
};

putAsterisk();