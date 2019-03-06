function solve (array) {
    //console.log(array.filter((e, i) => e >= Math.max(...array.slice(0, i + 1))).join(' '));
    let sequence = [array.shift()];
 
    for (let number of array) {
        if (number >= sequence[sequence.length - 1]) {
            sequence.push(number);
        }
    }
    console.log(sequence.join(' '));
}
solve([ 1, 3, 8, 4, 10, 12, 3, 2, 24]);