const readline = require('readline');

async function main () {
    var PI = 3.1416;
    const rl = readline.createInterface({input: process.stdin});
    const ait = rl[Symbol.asyncIterator]();
    console.log('半径：');
    const n1 = parseInt((await ait.next()).value, 10);
    rl.close();
    console.log(`表面積は ${4 * PI * n1 * n1} です。`);
    console.log(`体積は ${(4 / 3) * PI * n1 * n1 * n1} です。`);
}

console.log('球の表面積と体積を求めます。');
main();