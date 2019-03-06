//Receive a number n and an array of elements, create a new array with n numbers, reverse it and print its elements on a single line, space-separated.
function solve(n,arr){
    let result=[];
    for(let i=n-1;i>=0;i--){
        let currentElement=arr[i];
        result.push(currentElement);
    }
    let output='';
    for(let i=0;i<result.length;i++){
        output+=result[i]+' ';
    }
    console.log(output);
}
solve(3, [10, 20, 30, 40, 50]);