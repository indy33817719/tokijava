var readline = require('readline');
var log = console.log;

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var input_int;
var total = 0;

async function checkInt() {
    const rl = readline.createInterface({input: process.stdin});
    const ait = rl[Symbol.asyncIterator]();
    log('整数：');
    input_int = parseInt((await ait.next()).value);
};

var addGroupInt = async function() {
    createGroup:
    for(var i = 1; i <= 10; i++){
        log('■第'+ i +'グループ');
        for(var j = 1; j <= 5; j++) {
            await checkInt();
            if (input_int == 99999) {
                break createGroup;
            } else if ( input_int == 88888) {
                continue createGroup;
            } else {
                total += input_int;
            }
        }
    }
    log('\n合計は' + total + 'です。');
    rl.close();
};

log('整数を加算します。');
addGroupInt();
