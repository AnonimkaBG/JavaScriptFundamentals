//Write a function that receives an array of strings and prints the sum of first and last element in that array
function solve(input){
    let last=Number(input.pop());
    let first=Number(input.shift());
   console.log(last+first);
}
solve(['20', '30', '40','60'])