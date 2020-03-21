const readline = require('readline');

async function main () {
    const rl = readline.createInterface({input: process.stdin});
    const ait = rl[Symbol.asyncIterator]();
    console.log('底辺：');
    const n1 = parseInt((await ait.next()).value, 10);
    console.log('高さ：');
    const n2 = parseInt((await ait.next()).value,10);
    rl.close();
    console.log(`面積は ${(n1 * n2)/2} です。`);
}

console.log('三角形の面積を求めます。');
main();