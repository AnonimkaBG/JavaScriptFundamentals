function sumOddNum(n){
    let sum=0;
    let count=0;
    for(let i=1;i<=100;i++){
        if(count<n){
          if(i%2!=0){
           console.log(i);
           count++;
           sum+=i;
       }
    }
    }
    console.log(`Sum: ${sum}`);
}
sumOddNum(3);