const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let j;
let i;

function putRandomInt() {
    rl.question('要素数：', async function (answer) {
        let elements_count = parseInt(answer);
        ary = new Array(elements_count);

        for(let i = 0; i < elements_count; i++) {
            do {
                j = 0;
                ary[i] = Math.floor(Math.random() * (10 - 1)) + 1;
                for (; j < i; j++ )
                    if (ary[j] === ary[i]) break;
            } while (j < i);
            console.log(`a[${i}] = ${ary[i]}`);
        }
        rl.close();
    });
};

putRandomInt();