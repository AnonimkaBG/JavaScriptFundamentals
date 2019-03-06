function solve (array,input) {
    let arr=array.slice(0,input[0]);
    arr.splice(0,input[1]);
    let n=0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]===input[2]){
            n++
        }
    }
    console.log(`Number ${input[2]} occurs ${n} time.`);
}
solve([5, 2, 3, 4, 1, 6],
    [5, 2, 3]); //First we take 5 elements from the array. Delete the first 2 elements.Then we search for the number 3.