let int1 = 63;
let int2 = 18;

let viewInt = function(x, y) {
    console.log('xの値は' + x + 'です。');
    console.log('yの値は' + y + 'です。');
}
viewInt(int1,int2);

let calcInt = function(x, y) {
    console.log('合計値は'+ (x + y) + 'です');
    console.log('平均値は'+ (x + y)/2 + 'です');
}

calcInt(int1,int2);