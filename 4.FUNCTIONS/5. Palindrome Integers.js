function isPalindrome (array) {
    for (let i = 0; i < array.length; i++) {
        console.log(palindromize(array[i]));
    }
    function palindromize(number) {
        let n=number.toString();
        let p = n.split("").reverse().join("");
        if(p === n){
            return('true');
        } else {
            return('false');
        }
    }
}
isPalindrome([32,2,232,1010]);