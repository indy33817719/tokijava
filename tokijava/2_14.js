const readline = require('readline');

async function hello() {
    const rl = readline.createInterface({input: process.stdin});
    const ais = rl[Symbol.asyncIterator]();
    console.log('姓：');
    const lastName = (await ais.next()).value;
    console.log('名：');
    const firstName = (await ais.next()).value;
    rl.close();
    console.log('こんにちは' + lastName + firstName + 'さん。');
}

hello();

