function solve (array) {
    let rotations=array.pop();
    let result=array;
    let rotated=[];
    for (let i = 0; i < rotations; i++) {
        rotated=array.pop();
        result.unshift(rotated);
    }
    console.log(result.join(' '));
}
solve(['1', '2', '3', '4', '2']);