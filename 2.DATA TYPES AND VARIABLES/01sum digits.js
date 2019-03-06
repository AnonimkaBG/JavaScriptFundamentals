// You will be given a single number. Your task is to find the sum of its digits.
function solve(num){
  let sum=num%10;
  while(parseInt(num/10)!==0){
    num=parseInt(num/10);
    sum+=num%10;
  }
  console.log(sum);
}
solve(97561);