const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let input_int;

const checkInt = ()  => {
    rl.question('要素数： ',  (answer) => {
        input_int = parseInt(answer);
        ary = new Array(input_int);
    for (let ary_index = 0; ary_index < input_int; ary_index++) {
        ary[ary_index] = 1 + Math.floor(Math.random() * 10);
    }
        for (let i = 10; i >= 1; i--) {
        for (let j = 0; j < input_int; j++){
            if(ary[j] >= i) {
                process.stdout.write('* ');
            } else {
                process.stdout.write('  ');
            }
        }
        console.log();
    }
        for (let i = 0; i < 2 * input_int; i++){
        process.stdout.write('-');
    }
        console.log();

        for (let i = 0; i < input_int; i++) {
        process.stdout.write(i % 10 + ' ');
    }
        console.log();
        rl.close();
    });
};


checkInt();