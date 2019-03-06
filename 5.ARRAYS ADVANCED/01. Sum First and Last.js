function solve(array) {
    let lastElement=array.pop();
    let firstElement=array.shift();
    return Number(firstElement)+Number(lastElement);
}
console.log(solve(['20', '30', '40']));
