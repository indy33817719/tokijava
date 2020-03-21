// パターン1
let int1 = 82;
let int2 = 17;
console.log(int1 + int2);
console.log(int1 - int2);

// パターン2
let addCalc = function (x,y) {
    return x + y;
}
let subCalc = function (x,y) {
    return x - y;
}

console.log(addCalc(82,17));
console.log(subCalc(82,17));