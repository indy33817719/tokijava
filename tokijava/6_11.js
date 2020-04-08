const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function putRandomInt() {
    rl.question('要素数：', async function (answer) {
        let elements_count = parseInt(answer);
        let ary = new Array(elements_count);

        for(let i = 0; i < elements_count; i++) {
            do {
                ary[i] = Math.floor(Math.random() * (10 - 1)) + 1;
                console.log(`a[${i}] = ${ary[i]}`);
            } while (ary[i] == ary[i - 1]);
        }
        rl.close();
    });
};

putRandomInt();