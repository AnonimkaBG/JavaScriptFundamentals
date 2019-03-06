function solve (array) {
    let lastElement=array.pop();
    let result=[];
    for (let i = 0; i < array.length; i++) {
        if(i%lastElement===0){
            result.push(array[i]);
        }
    }
    console.log(result.join(' '));
    
}
solve(['1', '2', '3', '4', '5', '6']);