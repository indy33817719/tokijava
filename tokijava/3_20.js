function getRandomInt(min, max) {
    min = Math.floor(0);
    max = Math.floor(3);
    return Math.floor(Math.random() * (max- min)) + min;
}

var randomint = getRandomInt();

switch (randomint) {
    case 0 :
        console.log('グー');
        break;
    case 1 :
        console.log('チョキ');
        break;
    case 2 :
        console.log('パー');
        break;
}