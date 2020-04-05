const readline = require('readline');

async function main () {
    const rl = readline.createInterface({input: process.stdin});
    const ait = rl[Symbol.asyncIterator]();
    console.log('x：');
    var x = parseInt((await ait.next()).value, 10);
    console.log('y：');
    var y = parseInt((await ait.next()).value,10);
    rl.close();

    console.log('x = ' + parseFloat(x));
    console.log('y = ' + y);
}


console.log('変数xはfloat型、変数yはdouble型です。');
main();