//Write a JS function that finds the longest sequence of equal elements in an array of numbers. If several longest sequences exist, print the leftmost one.
function solve(arr){
   let currentArr=arr[0].split(' ');
   let biggestArr=[];
   for (let i = 0; i < currentArr.length; i++) {
       let temp=[];
       for (let j = i; j < currentArr.length; j++) {
        if(currentArr[i]===currentArr[j]){
            temp.push(currentArr[i]);
          }else{
              break;
          }
       }
       if(biggestArr.length< temp.length){
           biggestArr=temp;
       }
   }
   console.log(biggestArr.join(' '));
}
solve(['2 1 1 2 3 3 2 2 2 1']);