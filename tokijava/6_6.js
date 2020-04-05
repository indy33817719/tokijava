const readline = require('readline');
const log = console.log;
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let input_int;

async function readInt() {
    const rl = readline.createInterface({input: process.stdin});
    const ait = rl[Symbol.asyncIterator]();
    input_int = parseInt((await ait.next()).value);
};

function checkInt() {
    rl.question('要素数： ', async function (answer) {
        let num = parseInt(answer);
        let ary = new Array(num);

        for(let i = 0; i < num; i++) {
            process.stdout.write(`a[${i}] = `)
            await readInt();
            ary[i] = input_int;
        }
        log(`a = {${ary}} `);
        rl.close();
    });
};

log('整数を加算します。');
checkInt();
