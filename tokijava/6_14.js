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
        let tmp_ary = new Array(num);
        let new_ary = new Array(num);

        for(let i = 0; i < num; i++) {
            process.stdout.write(`a[${i}] = `)
            await readInt();
            tmp_ary[i] = input_int;
        }
        log('aの全要素を逆順にbにコピーしました。')
        for(let i = 0; i < num; i++) {
            new_ary[i] = tmp_ary[num - i - 1];
            log(`b[${i}] = ${new_ary[i]} `);

        }
        rl.close();
    });
};

checkInt();