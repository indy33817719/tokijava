const readline = require('readline');

async function main () {
    const rl = readline.createInterface({input: process.stdin});
    const ait = rl[Symbol.asyncIterator]();
    console.log('xの値：');
    var x = parseInt((await ait.next()).value, 10);
    console.log('yの値：');
    var y = parseInt((await ait.next()).value,10);
    console.log('zの値：');
    var z = parseInt((await ait.next()).value,10);
    rl.close();

    var ave = (x + y + z) / 3;
    var ave_fixed = ave.toFixed(3);
    console.log('xとyとzの平均値は' + ave_fixed + 'です。');
}


console.log('整数値xとyとzの平均値を求めます。');
main();
