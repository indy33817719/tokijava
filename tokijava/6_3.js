let array = new Array(4);

for(let i = 0, len = array.length; i <= len; i++) {
    console.log('a['+ i + '] = ' + (array[i] = (i + 1)* 1.1));

}