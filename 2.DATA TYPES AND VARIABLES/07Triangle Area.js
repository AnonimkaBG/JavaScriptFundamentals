/*Write a JS function that calculates a triangle’s area by its 3 sides.
The input comes as three number arguments, representing one side of a triangle.
The output should be printed to the console.*/
function solve(a,b,c){
    let s = (a+b+c)/2; 
    let area = Math.sqrt(s*(s-a)*(s-b)*(s-c))
    console.log(area);
}
solve(2,3.5,4); 