//You have to write a JS function, that returns the sum of all even and all odds digits from that number.
function sumOfEvenAndOddNumbers (num) {
    let number=num.toString().split('');
    let sumEvenNumbers=0;
    let sumOddNumbers=0;
    for (let i = 0; i < number.length; i++) {
        if(number[i]%2==0 && i!=0){
            sumEvenNumbers+=Number(number[i]);
        }else{
            sumOddNumbers+=Number(number[i]);
        }
    }
    console.log(`Odd sum = ${sumOddNumbers}, Even sum = ${sumEvenNumbers}`);
}
sumOfEvenAndOddNumbers(3495892137259234);