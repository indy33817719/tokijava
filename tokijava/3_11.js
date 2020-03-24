const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('点数：', (answer) => {
    var input_int = parseInt(answer);

    if (input_int >= 80 && input_int <= 100) {
        console.log('優');
    } else if (input_int >= 70 && input_int <= 79) {
        console.log('良');
    } else if (input_int >= 60 && input_int <= 69) {
        console.log('可');
    } else if (input_int >= 0 && input_int <= 59) {
        console.log('不可');
    } else {
        console.log('不正な点数です。')
    }
    readline.close();
});