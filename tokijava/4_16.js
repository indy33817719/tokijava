const readline = require('readline');

async function main () {
    const rl = readline.createInterface({input: process.stdin});
    const ait = rl[Symbol.asyncIterator]();
    const log = console.log;
    log('何cmから：');
    var n1 = parseInt((await ait.next()).value, 10);
    log('何cmまで');
    var n2 = parseInt((await ait.next()).value,10);
    log('何cmごと');
    var n3 = parseInt((await ait.next()).value,10);

    log('身長 標準体重');
    log('------------');

    for(var i = n1; i <= n2; i+=n3) {
        console.log(i + " " + ((i -100) * 0.9));
    }

    rl.close();
}

main();