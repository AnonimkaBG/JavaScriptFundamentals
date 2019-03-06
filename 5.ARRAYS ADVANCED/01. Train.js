function solve (input) {
    let arr=input.shift().split(' ').filter(x=>x!=='').map(Number);
    let maxCapacity=input.shift();
    for (let i = 0; i < input.length; i++) {
        let tokens=input[i].split(' ').filter(x=>x!=='');
        let command=tokens[0];
        if(command=='Add'){
             arr.push(tokens[1]);
        }else{
            for (let j = 0; j < arr.length; j++) {
                if(arr[j]+Number(command)<=Number(maxCapacity)){
                    arr[j]+=Number(command);
                    break;
                }
            }
        }
    }
    console.log(arr.join(' '));
}
solve(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']);