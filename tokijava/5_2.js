var readline = require('readline');
var log = console.log;

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var checkInt = function() {
    rl.question('整数：', function(answer) {
        input_int = parseInt(answer);
        input_int8 = input_int.toString(8);
        input_int16 = input_int.toString(16);
        log('8進数で' + input_int8 + 'です。');
        log('16進数で' + input_int16 + 'です。');
        rl.close();
    })
};

checkInt();

