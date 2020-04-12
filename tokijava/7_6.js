const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});

const printSeason = () => {
    rl.question('何月ですか？（1〜12）：', answer => {
        const month = parseInt(answer);

        if( month < 1 || month > 12) {
            console.log('');
        } else {
            switch (month) {
                case 3 : console.log('その月の季節は春です。'); break;
                case 4 : console.log('その月の季節は春です。'); break;
                case 5 : console.log('その月の季節は春です。'); break;
                case 6 : console.log('その月の季節は夏です。'); break;
                case 7 : console.log('その月の季節は夏です。'); break;
                case 8 : console.log('その月の季節は夏です。'); break;
                case 9 : console.log('その月の季節は秋です。'); break;
                case 10 : console.log('その月の季節は秋です。'); break;
                case 11 : console.log('その月の季節は秋です。'); break;
                case 12 : console.log('その月の季節は冬です。'); break;
                case 1 : console.log('その月の季節は冬です。'); break;
                case 2 : console.log('その月の季節は冬です。'); break;
            }
        }
        rl.close();
    })
}

printSeason();