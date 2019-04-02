function solve (input) {
    let palindromeArr=[];

    input.forEach((element)=>{
        let textArr=element.split(' ').join('');
        let reversed=textArr.split('').reverse().join('');
        if(textArr===reversed){
            palindromeArr.push(textArr);
        }
    })
    if(palindromeArr.length>0){
        console.log(palindromeArr.join(', '));
    }else{
        console.log(`No palindromes found`);
    }
}
solve([' stella won no wallets',
'not a palindrome']);