/*Write a JS program that calculates the total amount of spice that can be extracted from a source. The source has a starting yield, which indicates how much spice can be
mined on the first day. After it has been mined for a day, the yield drops by 10, meaning on the second day it’ll produce 10 less spice than on the first, on the third
day 10 less than on the second, and so on (see examples). A source is considered profitable only while its yield is at least 100 – when less than 100 spice is expected 
in a day, abandon the source. 
The mining crew consumes 26 spice every day at the end of their shift and an additional 26 after the mine has been exhausted. Note that the workers cannot consume more 
spice than there is in storage. 
When the operation is complete, print on the console on two separate lines how many days the mine has operated and the total amount of spice extracted. */
function solve(yield){
   let dayCounter=0;
   let totalSpice=0;
   while(yield>=100){
      totalSpice+=yield;
      totalSpice-=26;
      yield-=10;
      dayCounter++;
   }
   if(totalSpice>=26){
   totalSpice-=26;
   }
   console.log(dayCounter);
   console.log(totalSpice);
}
solve(90);