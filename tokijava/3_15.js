const readline = require('readline');

async function main () {
    const rl = readline.createInterface({input: process.stdin});
    const ait = rl[Symbol.asyncIterator]();
    console.log('整数a：');
    const n1 = parseInt((await ait.next()).value, 10);
    console.log('整数b');
    const n2 = parseInt((await ait.next()).value,10);
    console.log('整数c');
    const n3 = parseInt((await ait.next()).value,10);
    rl.close();
    var min = n1;
    if ( min > n2 ) {
        min = n2
    }
    if ( min > n3 ) {
        min = n3
    }
    console.log('最小値は'+ min + 'です。');
}

main();