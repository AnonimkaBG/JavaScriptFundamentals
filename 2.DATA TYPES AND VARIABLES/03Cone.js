/*Write a JS function to calculate a cone’s volume and total surface area by given height and radius at the base.
The input comes as two number arguments. The first element is the cone’s radius and the second is its height.
The output should be printed to the console on a new line for every result. The result should be formatted to the fourth decimal point*/
function solve(radius,height){
  let volume=Math.PI * radius * radius * height / 3;
  let s=Math.sqrt(radius * radius + height * height);
  let area=Math.PI * radius * (radius + s);
  console.log(`volume = ${volume.toFixed(4)}`);
  console.log(`area = ${area.toFixed(4)}`);
}
solve(3,5);