function solve (input) {
    let biggest=input.sort((a,b)=>b-a);
    let result=[];
    // for (let i = 0; i < biggest.length; i++) {
    //     if(result.length-1<biggest.length-1){
    //     result.push(biggest[i]);
    //     if(biggest.length%2==0){
    //     result.push(biggest[biggest.length-i-1]);
    //     }else{
    //         if(biggest.length-1!==result.length-1){
    //             result.push(biggest[biggest.length-i-1]);
    //         }
    //     }
    //     }
    // }
    while(biggest.length>0){
        result.push(biggest.shift());
        result.push(biggest.pop());
    }
     console.log(result.join(' ')); 
}
solve([1, 21, 3, 52, 69, 63, 31, 2, 18, 94,5]); 