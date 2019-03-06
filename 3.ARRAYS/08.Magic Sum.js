//Write a JS function, which prints all unique pairs in an array of integers whose sum is equal to a given number. 
function solve(arr){
    let sum=Number(arr[1]);
    let myArr=arr[0].split(' ');
   for (let i = 0; i < myArr.length; i++) {
       let currentElement=Number(myArr[i]);
       for (let j = i+1; j < myArr.length; j++) {
           let secondElement=Number(myArr[j]);
           if(currentElement+secondElement===sum){
              console.log(currentElement,secondElement);
           }
       }
   }
}
solve(['1 7 6 2 19 23', '8']);