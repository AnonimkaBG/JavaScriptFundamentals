/*Write a JS function, which changes the value of odd and even numbers in an array of numbers. If the number is even add to its value its index position. 
If the number is odd subtract to its value its index position. On the first line print the newly modified array, on the second line print the sum of numbers 
from the original array, on the third line print the sum of numbers from the modified array.*/
function solve(input){
   let output=[];
   let oldSum=0;
   let newSum=0;
   for (let i = 0; i < input.length; i++) {
       oldSum+=input[i];
       if(input[i]%2===0){
          output[i]=input[i]+i;
          newSum+=output[i];
       }else{
         output[i]=input[i]-i;
         newSum+=output[i];
       }
   }
   console.log(output);
   console.log(oldSum);
   console.log(newSum);
}
solve([5, 15, 23, 56, 35]);