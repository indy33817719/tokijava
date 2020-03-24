const readline = require('readline');

async function main () {
    const rl = readline.createInterface({input: process.stdin});
    const ait = rl[Symbol.asyncIterator]();
    console.log('整数A：');
    const n1 = parseInt((await ait.next()).value, 10);
    console.log('整数B');
    const n2 = parseInt((await ait.next()).value,10);
    rl.close();
    var diff = (n1 >= n2) ? n1 - n2 : n2 - n1;
    if ( diff >= 10 ) {
        console.log('それらの差は10以上です。');
    } else {
        console.log('それらの差は10以下です。');
    }
}

main();