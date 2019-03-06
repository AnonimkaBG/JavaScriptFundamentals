/*Write a JS function that finds the biggest of 3 numbers.
The input comes as 3 parameters.
The output is the biggest from the input numbers.*/
function solve(first,second,third){
   let firstNum=+first;
   let secondNum=+second;
   let thirdNum=third;
   let biggestNum=Math.max(firstNum,secondNum,thirdNum);
   console.log(biggestNum);
   
}
solve(-2,7,3);