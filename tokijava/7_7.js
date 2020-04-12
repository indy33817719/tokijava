const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});

const createTriangle = () => {
    rl.question('段数は：', answer => {
        const x = parseInt(answer);

        for(let i = 1; i <= x; i++) {
            for (let j = 1; j <= i; j++){
                process.stdout.write('*');
            }
            console.log('');
        }
        rl.close();
    })
}

console.log('左下直角の二等辺三角形を表示します。');
createTriangle();