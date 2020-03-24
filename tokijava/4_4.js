const readline = require('readline');

async function main () {
    const rl = readline.createInterface({input: process.stdin});
    const ait = rl[Symbol.asyncIterator]();
    const log = console.log;
    log('整数A：');
    var n1 = parseInt((await ait.next()).value, 10);
    log('整数B');
    var n2 = parseInt((await ait.next()).value,10);

    if ( n1 > n2 ) {
        var t = n1;
        n1 = n2;
        n2 = t;
    }

    do {
        n3 = n1++;
        log(n3);
    } while (n1 <= n2);

    rl.close();
}

main();