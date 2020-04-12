const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});

const calculateSum = () => {
    rl.question('xの値：', answer => {
        const x = parseInt(answer);
        let sum = 0;

        for(let i = 1; i <= x; i++) {
            sum += i;
        }

        console.log(`1から${x}までの和は${sum}です。`);
        rl.close();
    })
}

console.log('1からxまでの和を求めます。');
calculateSum();