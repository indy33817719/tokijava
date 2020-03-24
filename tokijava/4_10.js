var readline = require('readline');
var log = console.log;

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var input_int;

var  putFactrial = function () {
    rl.question('正の整数値：', function (answer) {
        input_int = parseInt(answer);
        if ( answer > 0 ) {
            var fact_int = getFactrial(input_int);
            log('1から' + input_int + 'までの積は' + fact_int + 'です。');
            rl.close();
        }
        else {
            getIntDigits();
        }

    });
};

var getFactrial = function(num) {
    if (num === 1) {
        return 1;
    } else {
        return num * getFactrial(num - 1);
    }
};

putFactrial();