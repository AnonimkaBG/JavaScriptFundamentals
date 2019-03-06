function factorialDevision (numOne,numTwo) {
    
    console.log((factorialize1(numOne)/factorialize2(numTwo)).toFixed(2));
    
    function factorialize1 (numOne) {
        if (numOne < 0) {
        return -1;
        }else if (numOne == 0){ 
        return 1;
        }else {
        return (numOne * factorialize1(numOne - 1));
        }
    }
    function factorialize2 (numTwo) {
        if (numTwo < 0) {
            return -1;
            }else if (numTwo == 0){ 
            return 1;
            }else {
            return (numTwo * factorialize2(numTwo - 1));
            }
    }
}
factorialDevision(5,2);