const readline = require('readline');

async function main () {
    const rl = readline.createInterface({input: process.stdin});
    const ait = rl[Symbol.asyncIterator]();
    console.log('変数a：');
    const n1 = parseInt((await ait.next()).value, 10);
    console.log('変数b');
    const n2 = parseInt((await ait.next()).value,10);
    rl.close();
    if ( n1 > n2) {
        console.log('aの方が大きいです。')
    } else {
        console.log('bの方が大きいです。')
    }
}

main();