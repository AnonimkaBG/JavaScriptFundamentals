function solve (array) {
    let result=[];
    let numbers=['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20'];
    for (let i = 0; i < array.length; i++) {
        let command=array[i];
        if(command==="add"){
           result.push(numbers[i]);
        }else if(command==="remove"){
            result.pop();
        }
    }
    if(result.length===0){
        console.log('Empty');
    }else{
    console.log(result.join(' '));
    }
}
solve(['remove', 'add', 'remove', 'add']);