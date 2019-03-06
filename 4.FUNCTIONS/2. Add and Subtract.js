//You will receive 3 integers. Write a JS function sum to get the sum of the first two integers and subtract function that subtracts the third integer 
//from the result from the Sum function.
function sumOfTwoNumbers (numOne,numTwo,numThree) {
    let sum=numOne+numTwo;
    function subtract(){
      return (sum-numThree)
    }
    console.log(subtract());
}
sumOfTwoNumbers(23,
    6,
    10);