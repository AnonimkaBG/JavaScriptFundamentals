function specialNumbers(n){
   let sum=0;
   for(let i=1;i<=n;i++){
    let firstDigit=parseInt(i/10);
    let lastDigit=i%10;
    sum=firstDigit+lastDigit;
    if(sum==5 || sum==7 || sum==11){
        console.log(`${i} -> True`);
    }else{
        console.log(`${i} -> False`);
    }
   }
}
specialNumbers(15);