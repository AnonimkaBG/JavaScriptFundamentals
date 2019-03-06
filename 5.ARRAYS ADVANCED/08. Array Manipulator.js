function solve (arr,input) {
    let tokens=[];
    let command=[];
    let includes=false;
    let sum=[];
    for (let i = 0; i < input.length; i++) {
         tokens=input[i].split().filter(x=>x!=='');  
         command=tokens.join().split(' ').filter(x=>x!==''); 
            switch(command[0]){
                case 'add': arr.splice(command[1],0,Number(command[2]));
                break;
                case 'addMany': command[1] = Number(command[1]);
                for (let j = 2; j < command.length; j++) {
                    arr.splice(command[1],0,Number(command[j]));
                    command[1]=Number(command[1]+1);
                } 
                break;
                case 'contains': for (let k = 0; k < arr.length; k++) {
                    if(arr[k]===Number(command[1])){
                        includes=k;
                        break;
                    }
                }if(includes===false){
                    console.log('-1');
                    includes=false;
                }else{
                    console.log(includes);  
                    includes=false;
                }  
                break;
                case 'remove': arr.splice(command[1],1);
                break;
                case 'shift': for (let l = 0; l < Number(command[1]); l++) {
                    arr.push(arr.shift());
                }
                break;
                case 'sumPairs': for (let m = 0; m < arr.length; m+=2) {
                    if(m==arr.length-1){
                        sum.push(arr[m]); 
                    }else{
                        sum.push(arr[m]+arr[m+1]); 
                }
                } arr=sum; sum=[];
                break;
                case 'print': console.log(arr); 
                break;
            }
    }
}
solve([1,2,3,4,5],
    ["sumPairs", "print"]);