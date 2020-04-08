const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function checkInt() {
    rl.question('要素数：', async function (answer) {
        let elements_count = parseInt(answer);
        let ary = new Array(elements_count);

        for(let i = 0; i < elements_count; i++) {
            ary[i] = Math.floor(Math.random() * (10 - 1)) + 1;
            console.log(`a[${i}] = ${ary[i]}`);
        }
        rl.close();
    });
};

checkInt();