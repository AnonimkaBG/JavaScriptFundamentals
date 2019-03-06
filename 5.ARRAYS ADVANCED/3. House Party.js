function solve (input) {
    let result=[];
    for (let i = 0; i < input.length; i++) {
        let tokens=input[i].split(); //[ 'Allie is going!' ]
        let command=tokens.join().split(' '); //[ 'Allie', 'is', 'going!' ]
        if(command[2]==='going!'){
            if(result.includes(command[0])){
               console.log(`${command[0]} is already in the list!`);
            }else{
                result.push(command[0]);
            }
        }else{
            if(result.includes(command[0])){
                for(let element of result){
                    if(element===command[0]){
                        result.pop(element);
                    }
                }
            }else{
                console.log(`${command[0]} is not in the list!`);
            }
        }
    }
    for(let element of result){
        console.log(element);
    }
}
solve(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!']
);