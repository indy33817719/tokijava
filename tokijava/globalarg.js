var fs = require('fs');

// キーの入力待ち状態にする。
process.stdin.resume();
process.stdin.setEncoding('utf8');

// 標準入力終了時のイベント処理
process.stdin.on('end', function() {
    console.log('END!!');
});

// 入力された１行を読み込んだ時のイベント処理（数値入力）
console.log('整数値:');
process.stdin.on('data', function(inputData) {
    // 末尾の改行を取り除く。
    var input = inputData.slice(0, -1);
    var input_int = parseInt(input);
    if (input_int > 0) {
        console.log('その値は正です。');
        console.log('もう一度？　1...Yes/0...No')
        if (input_int === 0) {
            process.exit(0);
        }
        // end が入力された場合、プロセスを終了する。
    } else {
        console.log('その値は負です。');
        console.log('もう一度？ 1...Yes/0...No');
        while (input_int === 1) {
            process.exit(0);
        }
    }
});


// Ctrl + C が入力された場合のイベント処理
process.on('SIGINT', function() {
    console.log('Ctrl+C!!');
    // プロセスを終了する。
    process.exit(0);
});

// プロセス終了時のイベント処理
process.on('exit', function() {
    console.log('EXIT!!');
});
