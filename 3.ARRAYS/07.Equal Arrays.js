/*Receive two string arrays and print on the console whether they are identical or not. Arrays are identical if their elements are equal.
If the arrays are identical find the sum of the first one and print on the console following message: 
'Arrays are identical. Sum: {sum}', otherwise find the first index where the arrays differ and print on the console following message:
'Arrays are not identical. Found difference at {index} index'*/
function solve(arr1,arr2){
    let result=null;
    let sum=0;
    for(let i=0;i< arr1.length;i++){
        arr1[i]=Number(arr1[i]);
    }
    for (let num of arr1){
        sum+=num;
    }
    for(let i=0;i< arr2.length;i++){
        arr2[i]=Number(arr2[i]);
    }
    for(let i=0;i< arr1.length;i++){
        if(arr1[i]!==arr2[i]){
            result=(`Arrays are not identical. Found difference at ${i} index`);
            break;
        }else{
          result = `Arrays are identical. Sum: ${sum}`;
        }
    }
    console.log(result);
    
}
solve(['10','20','30'], ['10','20','30']);