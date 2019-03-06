function solve (array,input) {
    let bomb=input[0];
    let power=input[1];
    let sum=0;
    let index=0;
    let result=[];
    for (let i = 0; i < array.length; i++) {
        if(array[i]===bomb){ 
            let left=Math.max(i-power,0);
            let right=Math.min(i+power,array.length-1);
            let lenght=right-left+1;
            array.splice(left,lenght);
            i=0;
        }
    }
    for(let element of array){
        sum+=element;
    }
    console.log(sum);
}
solve([1, 7, 7, 1, 2, 3],
    [1, 1]);