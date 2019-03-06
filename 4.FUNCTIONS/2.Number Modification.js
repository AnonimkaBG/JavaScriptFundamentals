function modification (number) {
    let n=number.toString().split('');  // [ '1', '0', '1' ]
    let sum=0;
    for (let i = 0; i < n.length; i++) {
        sum+=Number(n[i]);
    }
    let average=sum/n.length;
    if(average>5){
        console.log(number);
    }else{
      while(average<5){
        n.push(9);
        sum+=9;
        average=sum/n.length;
      }
      console.log(n.join(''));
    }
}
modification(101);