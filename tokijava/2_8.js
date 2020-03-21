const readline = require('readline');
// readlineの読み込み

async function main () {
    const rl = readline.createInterface({input: process.stdin});
    const ait = rl[Symbol.asyncIterator]();
    console.log('xの値：');
    const n1 = parseInt((await ait.next()).value, 10);
    console.log('yの値：');
    const n2 = parseInt((await ait.next()).value,10);
    rl.close();
    console.log(`合計は ${n1 + n2} です。`);
    console.log(`平均は ${(n1 + n2)/2} です。`);
}

main();

