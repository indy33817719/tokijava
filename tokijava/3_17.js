const readline = require('readline');

async function main () {
    const rl = readline.createInterface({input: process.stdin});
    const ait = rl[Symbol.asyncIterator]();
    console.log('整数a：');
    const n1 = parseInt((await ait.next()).value, 10);
    console.log('整数b');
    const n2 = parseInt((await ait.next()).value,10);
    rl.close();
    if (n1 === n2) {
        console.log('二つの値は同じです。');
    } else if ( n1 > n2) {
        console.log('小さいほうの値は' + n2 +'です。');
        console.log('大きいほうの値は' + n1 +'です。');
    } else {
        console.log('小さいほうの値は' + n1 +'です。');
        console.log('大きいほうの値は' + n2 +'です。');
    }
}

main();