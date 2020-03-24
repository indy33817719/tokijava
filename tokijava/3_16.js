const readline = require('readline');

async function main () {
    const rl = readline.createInterface({input: process.stdin});
    const ait = rl[Symbol.asyncIterator]();
    console.log('整数a：');
    const n1 = parseInt((await ait.next()).value, 10);
    console.log('整数b');
    const n2 = parseInt((await ait.next()).value,10);
    console.log('整数c');
    const n3 = parseInt((await ait.next()).value,10);
    rl.close();

    var data = [n1, n2, n3];
    function compareFunc(a, b) {
        return a - b;
    }
    data.sort(compareFunc);
    console.log('中央値は' + data[1] + 'です。');
}

main();