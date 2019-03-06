//Write a program which receives a number and prints the corresponding name of the day of week. If the number is not a valid day, print 'Invalid day!'
function solve(day){
  let days=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
  let result=null;
  if(day>=1 && day<=7){
      result=days[day-1];
      console.log(result);
      
  }else{
      console.log('Invalid day!');
  }
}
solve(3);
