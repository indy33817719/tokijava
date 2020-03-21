const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('整数値を入力してください。', (answer) => {
    console.log(`${answer}と入力しましたね。`);
    readline.close();
});
