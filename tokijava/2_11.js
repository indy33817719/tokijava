function getRandom1digitInt(min, max) {
    min = Math.ceil(1);
    max = Math.floor(9);
    return Math.floor(Math.random() * (max- min)) + min;
}
function getRandomNegaInt(min, max) {
    min = Math.ceil(-9);
    max = Math.floor(-1);
    return Math.floor(Math.random() * (max- min)) + min;
}
function getRandom2digitInt(min, max) {
    min = Math.ceil(10);
    max = Math.floor(99);
    return Math.floor(Math.random() * (max- min)) + min;
}


console.log('3個の乱数を生成しました。');
console.log('1桁の正の整数：' + getRandom1digitInt());
console.log('1桁の負の整数：' + getRandomNegaInt());
console.log('2桁の正の整数：' + getRandom2digitInt());
