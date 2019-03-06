/*Write a JS function that determines if there exists an element in the array such that the sum of the elements on its left is equal to the sum of the elements 
on its right. If there are no elements to the left / right, their sum is considered to be 0. Print the index that satisfies the required condition 
or "no" if there is no such index.*/
function solve(arr){
    let result='no';
   for (let i = 0; i < arr.length; i++) {
    let rightSum=0;
    let leftSum=0;
       for (let j = i-1; j >= 0; j--) {
        leftSum+=arr[j];
       }
       for (let k = i+1; k < arr.length; k++) {
        rightSum+=arr[k];
       }
        if(leftSum===rightSum){
            result=i;
            break;
        }
    }
    console.log(result);
}
solve([1,2,3,3]);