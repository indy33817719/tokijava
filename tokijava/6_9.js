const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let element_value;

const reducer = (x,y) => {
    return x + y;
}

async function readInt() {
    const rl = readline.createInterface({input: process.stdin});
    const ait = rl[Symbol.asyncIterator]();
    element_value = parseFloat((await ait.next()).value);
};

function checkInt() {
    rl.question('要素数：', async function (answer) {
        let elements_count = parseInt(answer);
        let ary = new Array(elements_count);
        let i;

        for(i = 0; i < elements_count; i++) {
            process.stdout.write(`a[${i}] = `);
            await readInt();
            ary[i] = element_value;
        }

        let sum = ary.reduce(reducer).toFixed(1);
        let ave = sum / i;

        console.log(`全要素の合計は${sum}です。`);
        console.log(`全要素の平均は${ave}です。`)
        rl.close();
    });
};

checkInt();