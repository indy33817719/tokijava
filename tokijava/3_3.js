const readline = require('readline');

async function main () {
    const rl = readline.createInterface({input: process.stdin});
    const ait = rl[Symbol.asyncIterator]();
    console.log('変数A：');
    const n1 = parseInt((await ait.next()).value, 10);
    console.log('変数B');
    const n2 = parseInt((await ait.next()).value,10);
    rl.close();
    if (n1 % n2 === 0){
        console.log('BはAの約数です。')
    } else {
        console.log('BはAの約数ではありません。')
    }
}

main();