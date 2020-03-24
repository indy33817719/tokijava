const readline = require('readline');

async function main () {
    const rl = readline.createInterface({input: process.stdin});
    const ait = rl[Symbol.asyncIterator]();
    console.log('整数a：');
    const n1 = parseInt((await ait.next()).value, 10);
    console.log('整数b');
    const n2 = parseInt((await ait.next()).value,10);
    rl.close();
    if ( n1 > n2) {
        console.log('それらの差は' + (n1 - n2) + 'です。');
    } else {
        console.log('それらの差は' + (n2 - n1) + 'です。');
    }
}

main();