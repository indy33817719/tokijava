const readline = require('readline');

async function main () {
    const rl = readline.createInterface({input: process.stdin});
    const ait = rl[Symbol.asyncIterator]();
    console.log('変数a：');
    var n1 = parseInt((await ait.next()).value, 10);
    console.log('変数b');
    var n2 = parseInt((await ait.next()).value,10);
    rl.close();
    console.log('a>=bとなるようにソートしました。');
    if ( n1 < n2) {
        var n3 = n1;
        n1 = n2;
        n2 = n3;
    }
    console.log('変数aは' + n1 + 'です。');
    console.log('変数bは' + n2 + 'です。');
}

main();