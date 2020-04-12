const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});


const signOf = () => {
    rl.question('整数x：', answer => {
        let input_int = parseInt(answer);
        if (input_int > 0) {
            console.log('signOf(x)は1です。');
        } else if (input_int == 0) {
            console.log('signOf(x)は0です。')
        } else {
            console.log('signOf(x)は-1です。');
        }
        rl.close();
    })
}

signOf();