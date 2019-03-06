/*Write a program to receive an array of numbers and condense them by summing adjacent couples of elements until a single number is obtained. 
For example, if we have 3 elements {2, 10, 3}, we sum the first two and the second two elements and obtain {2+10, 10+3} = {12, 13}, 
then we sum again all adjacent elements and obtain {12+13} = {25}.*/
function solve(nums){
    let condensed=[];
    while(nums.length > 1){
      for (let i = 0; i < nums.length-1; i++) {
        condensed.push(nums[i]+nums[i+1]);
    }
    nums=condensed.slice();
    condensed=[];
  }
  console.log(nums[0]);
}
solve([5,0,4,1,2]);