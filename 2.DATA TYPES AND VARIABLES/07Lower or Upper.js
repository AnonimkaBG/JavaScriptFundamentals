//Write a JS function that prints whether a given character is upper-case or lower-case.
function solve(letter){
    let n=letter.charCodeAt(0);
   if(n>=65 && n<=90){
       console.log('upper-case');
   }else{
       console.log('lower-case');
       
   }
}
solve('L');