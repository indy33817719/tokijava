var readline = require('readline');
var log = console.log;

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var  getIntDigits = function () {
    rl.question('正の整数値：', function (answer) {
        if ( answer > 0 ) {
            var intlength = answer.length;
            log('その数は'+ intlength + '桁です。');
            rl.close();
            }
         else {
            getIntDigits();
        }

    });
};

log('正の整数値の桁数を求めます。')
getIntDigits();