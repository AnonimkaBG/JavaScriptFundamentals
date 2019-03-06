//Write a JS function that receives an array and number of rotations you have to perform (first element goes at the end) Print the resulting array.
function solve(array,n){
    for (let i = 0; i < n; i++) {
        let element=array.shift();
        array.push(element);
    }
    console.log(array.join(' '));
}
solve([51, 47, 32, 61, 21],
    2);