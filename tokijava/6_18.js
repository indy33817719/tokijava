const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const ait = rl[Symbol.asyncIterator]();

let input_answer;

async function putAnswer() {
    input_answer = parseInt((await ait.next()).value);
}

async function putValueToArray() {
    console.log('行列aの要素の値を入力せよ。')
    let a = new Array(4);
    for (let x = 0; x < 4; x++) {
        a[x] = new Array(3);
    }
    for (let x = 0; x < 4; x++) {
        for (let y = 0; y < 3; y++){
            process.stdout.write(`a[${x}][${y}] : `);
            await putAnswer();
            a[x][y] = input_answer;
        }
    }

    console.log('行列bの要素の値を入力せよ。');
    let b = new Array(3);
    for (let y = 0; y < 3; y++) {
        b[y] = new Array(4);
    }

    for (let x = 0; x < 3; x++) {
        for (let y = 0; y < 4; y++){
            process.stdout.write((`b[${x}[${y}] : `));
            await putAnswer();
            b[x][y] = input_answer;
        }
    }

    let c = new Array(4);
    for (let z = 0; z < 4; z++) {
        c[z] = new Array(4);
    }

    for (let x = 0; x < 4; x++) {
        for(let y = 0; y < 4; y++) {
            c[x][y] = 0;
            for(let z = 0; z < 3; z++){
                c[x][y] = a[x][z] * b[z][y];
            }
        }
    }

    console.log('行列aとbの積');
    for (let x = 0; x < 4; x++) {
        for (let y = 0; y < 4; y++) {
            await process.stdout.write((c[x][y]).toString()+ '  ');
        }
        console.log('');
        rl.close();
    }
}

putValueToArray();





