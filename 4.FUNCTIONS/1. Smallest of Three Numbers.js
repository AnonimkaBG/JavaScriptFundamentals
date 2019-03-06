function smallestNumber (numOne,numTwo,numThree) {
    let inputInArray=[];
    inputInArray.push(numOne,numTwo,numThree);
    console.log(Math.min(...inputInArray));
}
smallestNumber(2,5,3);