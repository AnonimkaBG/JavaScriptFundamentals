function solve (input) {
    let partyList=[];
    for (const line of input) {
        if(line=='PARTY'){
            break;
        }else{
            partyList.push(line);
        }
    }
    input.splice(0,partyList.length+1);
    for (const guest of input) {
        if(partyList.includes(guest)){
            partyList.splice(partyList.indexOf(guest),1);
        }
    }
    partyList=partyList.filter(x => Number.isInteger(+x[0]))
    .concat(partyList.filter(x => !Number.isInteger(+x[0])));
    console.log(`${partyList.length}`);
    for (const guest of partyList) {
        console.log(guest);
    }
}
solve(['7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'
]);