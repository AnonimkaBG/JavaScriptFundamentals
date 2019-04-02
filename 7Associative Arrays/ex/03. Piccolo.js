function solve (input) {
    let garage=new Map();
    for (const line of input) {
        let tokens=line.split(', ');
        let command=tokens[0];
        let carNum=tokens[1];
        if(command==='IN'){
            garage.set(carNum,1);
        }else if(command==='OUT'){
            garage.delete(carNum);
        }
    }
    let sortedGarage=[...garage].sort((a,b)=>a[0].localeCompare(b[0]));
    if(sortedGarage.length>0){
        sortedGarage.forEach(x=>console.log(x[0]));
    }
}
solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']);