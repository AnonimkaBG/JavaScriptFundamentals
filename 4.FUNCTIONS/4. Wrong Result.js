function solve (a,b,c) {
    let isNegativeBit=convertSignToBit(a)^convertSignToBit(b) ^convertSignToBit(c);
    if(a==0 || b==0 || c==0){
        console.log('Positive');
    }else if(isNegativeBit){
        console.log('Negative');
    }else{
        console.log('Positive');
    }
    function convertSignToBit (num) {
        return num<0 ? 1:0;
    }
}
solve(-6,-12,14);