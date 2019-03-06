function equalNeighbors (input) {
    let arr2 = input.slice();
    let countInFirstElement = input.shift().length;
    let result = '';
    let neighbors = 0;
 
    for (let i = 0; i < arr2.length; i++) {
        result += arr2[i] + ',';
    }
    let k = result.split(",");
    for (let j = 0; j < k.length; j++) {
 
        if ((k[j] === k[j + countInFirstElement])){
            neighbors++;
        } else if((k[j] === k[j + 1])){
            neighbors++;
        }else if((k[j] === k[j + countInFirstElement]) && (k[j] === k[j + 1])){
            neighbors++;
        }
    }
    console.log(neighbors);
}
equalNeighbors([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]);
/*
┌─────────┬─────┬─────┬─────┬─────┬─────┐
│ (index) │  0  │  1  │  2  │  3  │  4  │
├─────────┼─────┼─────┼─────┼─────┼─────┤
│    0    │ '2' │ '3' │ '4' │ '7' │ '0' │
│    1    │ '4' │ '0' │ '5' │ '3' │ '4' │
│    2    │ '2' │ '3' │ '5' │ '4' │ '2' │
│    3    │ '9' │ '8' │ '7' │ '5' │ '4' │
└─────────┴─────┴─────┴─────┴─────┴─────┘
*/
