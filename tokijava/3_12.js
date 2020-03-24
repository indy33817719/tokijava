const readline = require('readline');

async function main () {
    const rl = readline.createInterface({input: process.stdin});
    const ait = rl[Symbol.asyncIterator]();
    console.log('実数a：');
    const n1 = parseInt((await ait.next()).value, 10);
    console.log('実数b');
    const n2 = parseInt((await ait.next()).value,10);
    rl.close();
    if ( n1 > n2) {
        console.log('大きい方の値は' + n1 + 'です。');
    } else {
        console.log('大きい方の値は' + n2 + 'です。');
    }
}

main();