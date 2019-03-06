function numberModification(input) {
 
    let digitsList = input.toString().split('').map(Number);
    let sumOfDigits = 0;
 
    for (let i = 0; i < digitsList.length; i++) {
        sumOfDigits += digitsList[i];
    }
 
    let averageValue = sumOfDigits / digitsList.length;
 
    for (let i = averageValue; i <= 4; i++) {
        digitsList.push(9);
    }
   
    let modifiedNumber = digitsList.join('');
   
    console.log(modifiedNumber);
}
 
numberModification(101);