/*Write a JS function that reads an 8-bit binary number and converts it to a decimal.
The input comes as one string element, representing a binary number.
The output should be printed to the console.*/
function solve(binary){
   let bin=binary;
   let decimal=parseInt(bin,2);
   console.log(decimal);
}
solve ('00001001');