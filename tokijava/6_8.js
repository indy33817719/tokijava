const readline = require('readline');
const log = console.log;
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let element_value;

async function readInt() {
    const rl = readline.createInterface({input: process.stdin});
    const ait = rl[Symbol.asyncIterator]();
    element_value = parseInt((await ait.next()).value);
};

function checkInt() {
    rl.question('要素数：', async function (answer) {
        let element_count = parseInt(answer);
        let ary = new Array(element_count);

        for(let i = 0; i < num; i++) {
            process.stdout.write(`a[${i}] = `)
            await readInt();
            ary[i] = element_value;
        }
        rl.close();
    });
};

function findNumber() {
    rl.question('探す数値：', (answer) => {
        let find_num = parseInt(answer);


    })
}

checkInt();