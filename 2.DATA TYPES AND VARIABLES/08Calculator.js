//Write a JS function that receives 3 parameters: a number, an operator (string) and another number .
//Print the result of the calculation on the console formatted to the second decimal point 
function solve(firstNumber,operator,secondNumber){
    let first=+firstNumber;
    let second=+secondNumber;
    let symbol=operator;
    switch(symbol){
        case '+': console.log((firs+second).toFixed(2));
        break;
        case '-': console.log((first-second).toFixed(2));
        break;
        case '*': console.log((first*second).toFixed(2));
        break;
        case '/': console.log((first/second).toFixed(2));
        break;
    }
}
solve(5,'/',10);