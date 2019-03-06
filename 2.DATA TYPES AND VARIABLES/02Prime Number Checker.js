/*Write a JS function to check if a number is prime (only wholly divisible by itself and one).
The input comes as a single number argument.
The output should be the return value of your function. Return true for prime number and false otherwise.*/
function isPrime(num){
   let number=+num;
   let prime=true;
   for(var i = 2; i < number; i++) {
    if(number % i === 0) {
        prime=false;
        break;
    }
   }
console.log(prime);
}
isPrime(81);