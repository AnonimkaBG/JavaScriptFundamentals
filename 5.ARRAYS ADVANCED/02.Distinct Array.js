function solve (arr) {
    let result=arr.filter((a,b)=>arr.indexOf(a)===b);
    console.log(result.join(' '));
}
solve([7, 8, 9, 7, 2, 3, 4, 1, 2]);