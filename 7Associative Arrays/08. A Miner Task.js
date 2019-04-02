function solve (input) {
    let result={};

    for (let i = 0; i < input.length; i+=2) {
        let type=input[i];
        let amount=Number(input[i+1]);
        if(!result.hasOwnProperty(type)){
            result[type]=0;
        }
        result[type]+=amount;
    }
    for (const resource in result) {
        console.log(`${resource} -> ${result[resource]}`);
        
    }
}
solve(['Gold',
'155',
'Silver',
'10',
'Copper',
'17'
]);