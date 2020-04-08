const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let element_value;
let ary = [];

async function readInt() {
    const rl = readline.createInterface({input: process.stdin});
    const ait = rl[Symbol.asyncIterator]();
    element_value = parseInt((await ait.next()).value);
};

function checkInt() {
    rl.question('要素数：', async function (answer) {
        let element_count = parseInt(answer);
        ary = new Array(element_count);

        for(let i = 0; i < element_count; i++) {
            process.stdout.write(`a[${i}] = `)
            await readInt();
            ary[i] = element_value;
        }
        await findNumber();
    });
};

const findNumber = function () {
    rl.question('探す数値： ', function (answer) {
        let find_num = parseInt(answer);
        let result = ary.indexOf(find_num);
        console.log(`それはa[${result}]にあります。`);
        rl.close();
    });
};


checkInt();
