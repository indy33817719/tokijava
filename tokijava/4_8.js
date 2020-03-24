var readline = require('readline');
var log = console.log;

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var  putAsteriskAlt= function () {
    rl.question('何個表示しますか：', function (answer) {
        var input_int = parseInt(answer);
        if ( input_int > 0 ) {
            var i = 0;
            while (i < input_int) {
                i++;
                if (i % 2 == 1){
                    process.stdout.write('*');
                } else {
                    process.stdout.write('+');
                }
            }
            log('');
            rl.close();
        } else {
            putAsteriskAlt();
        }

    });
};

putAsteriskAlt();