function printAndSum(first,last){
    let sum=0;
    let result=" ";
    for(let i=first;i<=last;i++){
        result+=i + " ";
        sum+=i;
    }
    console.log(result);
    console.log(`Sum: ${sum}`);
}
printAndSum(5,10);