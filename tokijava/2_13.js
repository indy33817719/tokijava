function getRandomInt1() {
    return Math.random();
}
function getRandomInt2(min, max) {
    min = 0;
    max = 10;
    return Math.random() * ((max + 1) - min) + min;
}
function getRandomInt3(min, max) {
    min = -1;
    max = 1;
    return Math.random() * ((max + 1) - min) + min;
}


console.log('3個の乱数を生成しました。');
console.log('0.0以上 1.0未満：' + getRandomInt1());
console.log('0.0以上　10.0未満：' + getRandomInt2());
console.log('-1.0以上　1.0未満：' + getRandomInt3());